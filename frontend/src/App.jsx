import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import { ChatProvider } from "./features/chat/chat.context";

const App = () => {
  return (
    <ChatProvider>
      <RouterProvider router={router} />
    </ChatProvider>
  );
};

export default App;
