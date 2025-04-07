from fastapi import APIRouter, Depends
from app.schemas.threat import ThreatStats
from app.services.threat_analysis import get_threat_statistics

router = APIRouter()

@router.get("/dashboard/stats", response_model=ThreatStats)
async def get_dashboard_stats():
    stats = await get_threat_statistics()
    return stats