from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    # Database
    DATABASE_URL: str

    # JWT
    jwt_secret: str
    jwt_algorithm: str
    access_token_expire_minutes: int

    # AI
    AI_PROVIDER: str = "ollama"
    OLLAMA_BASE_URL: str
    OLLAMA_MODEL: str

    class Config:
        env_file = ".env"


settings = Settings()