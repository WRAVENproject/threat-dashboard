from fastapi import APIRouter, HTTPException
from typing import List
from ..schemas.threat import Threat
from ..services.threat_analysis import ThreatAnalysisService

router = APIRouter()
threat_service = ThreatAnalysisService()

@router.get("/threats", response_model=List[Threat])
async def get_threats():
    threats = threat_service.get_all_threats()
    return threats

@router.get("/threats/{threat_id}", response_model=Threat)
async def get_threat(threat_id: int):
    threat = threat_service.get_threat_by_id(threat_id)
    if not threat:
        raise HTTPException(status_code=404, detail="Threat not found")
    return threat

@router.post("/threats", response_model=Threat)
async def create_threat(threat: Threat):
    new_threat = threat_service.create_threat(threat)
    return new_threat

@router.put("/threats/{threat_id}", response_model=Threat)
async def update_threat(threat_id: int, threat: Threat):
    updated_threat = threat_service.update_threat(threat_id, threat)
    if not updated_threat:
        raise HTTPException(status_code=404, detail="Threat not found")
    return updated_threat

@router.delete("/threats/{threat_id}", response_model=dict)
async def delete_threat(threat_id: int):
    success = threat_service.delete_threat(threat_id)
    if not success:
        raise HTTPException(status_code=404, detail="Threat not found")
    return {"message": "Threat deleted successfully"}