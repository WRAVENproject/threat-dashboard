# File: /wraven-threat-dashboard/wraven-threat-dashboard/backend/app/api/__init__.py

from fastapi import APIRouter

router = APIRouter()

from .endpoints import auth, threats, dashboard

router.include_router(auth.router, prefix="/auth", tags=["auth"])
router.include_router(threats.router, prefix="/threats", tags=["threats"])
router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])