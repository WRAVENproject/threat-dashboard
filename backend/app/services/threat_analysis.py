from sqlalchemy.orm import Session
from app.db.models.threat_actor import ThreatActor
from app.schemas.threat import ThreatCreate, ThreatUpdate

class ThreatAnalysisService:
    def __init__(self, db: Session):
        self.db = db

    def create_threat(self, threat: ThreatCreate):
        db_threat = ThreatActor(**threat.dict())
        self.db.add(db_threat)
        self.db.commit()
        self.db.refresh(db_threat)
        return db_threat

    def update_threat(self, threat_id: int, threat: ThreatUpdate):
        db_threat = self.db.query(ThreatActor).filter(ThreatActor.id == threat_id).first()
        if db_threat:
            for key, value in threat.dict(exclude_unset=True).items():
                setattr(db_threat, key, value)
            self.db.commit()
            self.db.refresh(db_threat)
        return db_threat

    def delete_threat(self, threat_id: int):
        db_threat = self.db.query(ThreatActor).filter(ThreatActor.id == threat_id).first()
        if db_threat:
            self.db.delete(db_threat)
            self.db.commit()
        return db_threat

    def get_threat(self, threat_id: int):
        return self.db.query(ThreatActor).filter(ThreatActor.id == threat_id).first()

    def get_all_threats(self):
        return self.db.query(ThreatActor).all()