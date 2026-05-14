from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import select

from app.database import AsyncSessionLocal
from app.models.ai_chat import AIConversation, AIMessage
from app.models.production import ProductionOrder
from app.models.shipment import Shipment

import requests

router = APIRouter(
    prefix="/ai",
    tags=["AI Chat"]
)


OLLAMA_URL = "http://localhost:11434/api/generate"


class ConversationCreate(BaseModel):
    title: str


class ChatRequest(BaseModel):
    conversation_id: int
    prompt: str


# CREATE CHAT
@router.post("/conversation/create")
async def create_conversation(data: ConversationCreate):

    async with AsyncSessionLocal() as db:

        conversation = AIConversation(
            title=data.title
        )

        db.add(conversation)

        await db.commit()
        await db.refresh(conversation)

        return conversation


# GET CONVERSATIONS
@router.get("/conversations")
async def get_conversations():

    async with AsyncSessionLocal() as db:

        result = await db.execute(
            select(AIConversation)
            .order_by(AIConversation.created_at.desc())
        )

        conversations = result.scalars().all()

        return conversations


# GET MESSAGES
@router.get("/messages/{conversation_id}")
async def get_messages(conversation_id: int):

    async with AsyncSessionLocal() as db:

        result = await db.execute(
            select(AIMessage)
            .where(AIMessage.conversation_id == conversation_id)
        )

        messages = result.scalars().all()

        return messages


# CHAT WITH AI
@router.post("/chat")
async def chat_with_ai(data: ChatRequest):

    async with AsyncSessionLocal() as db:

        # LOAD ERP DATA

        production_result = await db.execute(
            select(ProductionOrder)
        )

        productions = production_result.scalars().all()

        shipment_result = await db.execute(
            select(Shipment)
        )

        shipments = shipment_result.scalars().all()

        production_summary = "\n".join([
            f"Order {p.order_no} Buyer {p.buyer} Style {p.style} Qty {p.quantity} Status {p.status}"
            for p in productions
        ])

        shipment_summary = "\n".join([
            f"Shipment {s.shipment_no} Buyer {s.buyer} Destination {s.destination} Status {s.status}"
            for s in shipments
        ])

        system_prompt = f"""
You are AIONEX Manufacturing AI Copilot.

You MUST answer ONLY based on ERP manufacturing data.

PRODUCTION DATA:
{production_summary}

SHIPMENT DATA:
{shipment_summary}

If user asks:
- total production
- total shipment
- pending shipment
- running order
- buyer information
- production quantity

You MUST answer from ERP data above.
"""

        full_prompt = f"""
{system_prompt}

USER QUESTION:
{data.prompt}
"""

        # SAVE USER MESSAGE

        user_message = AIMessage(
            conversation_id=data.conversation_id,
            role="user",
            message=data.prompt
        )

        db.add(user_message)

        # OLLAMA CALL

        response = requests.post(
            OLLAMA_URL,
            json={
                "model": "llama3.1:8b",
                "prompt": full_prompt,
                "stream": False
            }
        )

        ai_response = response.json()["response"]

        ai_message = AIMessage(
            conversation_id=data.conversation_id,
            role="assistant",
            message=ai_response
        )

        db.add(ai_message)

        await db.commit()

        return {
            "response": ai_response
        }


# DELETE CHAT
@router.delete("/conversation/{conversation_id}")
async def delete_conversation(conversation_id: int):

    async with AsyncSessionLocal() as db:

        result = await db.execute(
            select(AIConversation)
            .where(AIConversation.id == conversation_id)
        )

        conversation = result.scalar_one_or_none()

        if conversation:

            await db.delete(conversation)
            await db.commit()

        return {
            "message": "Conversation deleted"
        }