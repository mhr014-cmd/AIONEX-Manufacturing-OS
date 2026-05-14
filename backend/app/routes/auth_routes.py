from fastapi import APIRouter, HTTPException
from sqlalchemy import select

from app.database import AsyncSessionLocal
from app.models.user import User

from app.schemas.auth import (
    RegisterSchema,
    LoginSchema
)

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
async def register(
    payload: RegisterSchema
):

    async with AsyncSessionLocal() as db:

        existing = await db.execute(
            select(User).where(
                User.email == payload.email
            )
        )

        existing_user = existing.scalar()

        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="User already exists"
            )

        user = User(
            email=payload.email,
            password=hash_password(
                payload.password
            )
        )

        db.add(user)

        await db.commit()

        return {
            "message": "User created"
        }


@router.post("/login")
async def login(
    payload: LoginSchema
):

    async with AsyncSessionLocal() as db:

        result = await db.execute(
            select(User).where(
                User.email == payload.email
            )
        )

        user = result.scalar()

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid credentials"
            )

        valid = verify_password(
            payload.password,
            user.password
        )

        if not valid:
            raise HTTPException(
                status_code=401,
                detail="Invalid credentials"
            )

        token = create_access_token({
            "sub": user.email,
            "role": user.role
        })

        return {
            "access_token": token,
            "token_type": "bearer",
            "user": {
                "email": user.email,
                "role": user.role
            }
        }