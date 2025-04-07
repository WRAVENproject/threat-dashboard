from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class ThreatActor(Base):
    __tablename__ = 'threat_actors'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    activity_level = Column(Integer, nullable=False)
    last_seen = Column(String(50), nullable=True)

    def __repr__(self):
        return f"<ThreatActor(name={self.name}, activity_level={self.activity_level})>"