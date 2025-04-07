from pydantic import BaseModel
from typing import List, Optional

class ThreatBase(BaseModel):
    name: str
    description: str
    severity: str
    tags: List[str]

class ThreatCreate(ThreatBase):
    pass

class ThreatUpdate(ThreatBase):
    id: int

class Threat(ThreatBase):
    id: int

    class Config:
        orm_mode = True

class ThreatListResponse(BaseModel):
    threats: List[Threat]
    total: int