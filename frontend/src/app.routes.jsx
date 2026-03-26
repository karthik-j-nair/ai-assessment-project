import { createBrowserRouter } from "react-router";
import LandingPage from "./features/Landing/pages/LandingPage";
import Chat from "./features/chat/pages/Chat";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: "/chat",
        element: <Chat />
    }
]) 