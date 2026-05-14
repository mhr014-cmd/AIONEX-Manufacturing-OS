from langchain_ollama import ChatOllama

from app.config import settings


llm = ChatOllama(
    model=settings.OLLAMA_MODEL,
    base_url=settings.OLLAMA_BASE_URL
)


async def ask_ollama(prompt: str):

    response = llm.invoke(prompt)

    return response.content