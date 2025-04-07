from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status
from app.db.session import get_db
from app.schemas.user import User
from app.db.models.user import User as UserModel

def get_current_user(db: Session = Depends(get_db), user_id: int):
    user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    return user

def get_db_session():
    db = get_db()
    try:
        yield db
    finally:
        db.close()