from fastapi import FastAPI

app = FastAPI()

from .api import api_router

app.include_router(api_router)