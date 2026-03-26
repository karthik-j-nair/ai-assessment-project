import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage, SystemMessage

load_dotenv()

geminiModel = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash", 
    google_api_key=os.getenv("GOOGLE_API_KEY"),
    # temperature=0.7,
)

async def generate_response(message: str) -> str:
    
    if not message or len(message.strip()) == 0:
        return "Invalid input."

    if len(message) > 500:
        return "Message too long."

    try:
        response = await geminiModel.ainvoke(
            [
                SystemMessage(
                    content="You are a helpful AI assistant. Give clear, structured answers."
                ),
                HumanMessage(content=message),
            ]
        )

        return response.content

    except Exception as e:
        print("ERROR:", str(e))
        return f"Error: {str(e)}"