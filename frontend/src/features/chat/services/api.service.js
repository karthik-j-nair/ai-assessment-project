import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api"
});

export async function sendChat({message}) {
    const response = await api.post("/chat", {
        message
    });
    return response.data;
}

export async function getChats() {
    const response = await api.get("/chats");
    return response.data;
}