from pydantic import BaseSettings

class Settings(BaseSettings):
    # Application settings
    app_name: str = "WRAVEN Threat Actor Dashboard"
    app_version: str = "1.0.0"
    debug: bool = True

    # Database settings
    database_url: str = "sqlite:///./test.db"

    # Security settings
    secret_key: str = "your_secret_key"
    algorithm: str = "HS256"
    access_token_expires_minutes: int = 30

    class Config:
        env_file = ".env"

settings = Settings()