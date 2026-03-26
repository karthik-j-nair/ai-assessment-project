/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { ChatContext } from "../chat.context";
import { sendChat, getChats } from "../services/api.service";

export function useChat() {
    const context = useContext(ChatContext);
    const { chats, setChats } = context;

    async function handleSendChat({ message }) {
        const data = await sendChat({ message });
        await handleGetMessages();
    }

    async function handleGetMessages() {
        const data = await getChats();
        setChats(data.chats);
        console.log(data.chats);
    }

    useEffect(() => {
        handleGetMessages();
    }, [])

    return (
        {
            handleGetMessages, handleSendChat, chats
        }
    )
}