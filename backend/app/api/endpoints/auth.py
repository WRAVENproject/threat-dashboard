from fastapi import APIRouter, Depends
from app.schemas.user import UserCreate, UserOut
from app.core.security import create_access_token
from app.db.session import get_db
from app.db.models.user import User
from sqlalchemy.orm import Session

router = APIRouter()

@router.post("/login", response_model=UserOut)
def login(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == user.username).first()
    if not db_user or not db_user.verify_password(user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    access_token = create_access_token(data={"sub": db_user.username})
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/register", response_model=UserOut)
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(username=user.username)
    db_user.set_password(user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user