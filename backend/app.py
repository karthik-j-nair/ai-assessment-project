from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.chat_route import router as chat_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # only for practice
    # allow_credentials=True, #adding later if required
    allow_methods=["GET", "POST"],
    # allow_headers=["*"],
)


app.include_router(chat_router, prefix="/api")