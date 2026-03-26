from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.ai_service import generate_response
from models.chat_model import save_chat
from config.database import cursor


router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
async def chat(data: ChatRequest):
    message = data.message

    if not message or len(message.strip()) == 0:
        raise HTTPException(status_code=400, detail="Invalid input.")

    if len(message) > 500:
        raise HTTPException(status_code=400, detail="Message too long.")

    
    response = await generate_response(message)

    
    save_chat(message, response)

    return {"response": response}


@router.get("/chats")
async def get_chats():
    try:
        cursor.execute("SELECT * FROM chats")
        data = cursor.fetchall()
        return {"chats": data}
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to fetch chats")