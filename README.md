# AI Chatbot Assessment Project

A lightweight, full-stack AI chatbot built to demonstrate clean architecture, clear system boundaries, and safe AI integration. 

## 🏗️ Key Technical Decisions

When designing this application, my primary focus was on simplicity, readability, and separating concerns. Here is a breakdown of the core architectural decisions:

### 1. Database Design (SQLite3)
* **Decision:** I chose SQLite3 for the relational database.
* **Why:** It provides zero-configuration, file-based data storage which is perfect for a lightweight assessment. 
* **Schema:** The structure is kept intentionally simple to prevent invalid states. I used a single `chats` table with three columns: 
  * `id` (Primary Key)
  * `user_message` (Text)
  * `ai_response` (Text)

### 2. Backend API (Python)
* **Decision:** Built a RESTful API to handle data flow between the frontend, database, and the LLM. 
* **Why:** To create a strict boundary protecting the database and API keys. 
* **Structure:** The backend exposes two clean endpoints tested thoroughly via Postman:
  * `POST /api/chat`: Validates input, securely calls the AI model, and saves the transaction to the database.
  * `GET /api/chats`: Fetches the conversation history for the UI.

### 3. AI Integration (LangChain + Google Gemini)
* **Decision:** Leveraged LangChain to orchestrate calls to the Google Gemini model.
* **Why:** Instead of hardcoding direct API calls, LangChain abstracts the LLM interaction. This makes the system resilient to change; if we ever want to swap Gemini for another model or add specific parsing tools, the core application logic does not need to be rewritten.

### 4. Frontend Architecture (React)
* **Decision:** Implemented a strict **4-Layer Feature-Based Architecture**.
* **Why:** To keep the codebase predictable and prevent UI components from becoming bloated with business logic.
  * **API Layer:** Handles raw HTTP requests (using Axios).
  * **State Layer:** Manages global data using React's native **Context API** (chosen over Redux for simplicity).
  * **Hook Layer:** Custom hooks (e.g., `useChat`) bridge the state and the UI.
  * **UI Layer:** "Dumb" components styled with Tailwind CSS, focused entirely on rendering the user interface.

---

## 🚀 Setup & Installation

*(Note to reviewer: Provide clear, step-by-step instructions here on how to run your project locally)*

**1. Clone the repository:**
\`\`\`bash
git clone <your-repo-link>
\`\`\`

**2. Setup Backend:**
\`\`\`bash
cd backend
pip install -r requirements.txt
\`\`\`
* Create a .env file here and add your GOOGLE_API_KEY
\`\`\`
uvicorn main:app --reload 
\`\`\`
* Note: replace 'main' with the actual name of your python file (e.g., app:app)

**3. Setup Frontend:**
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

---

## 🔮 Future Improvements

While this MVP focuses on core functionality and stability, the architecture was designed to easily support future extensions:

* **Authentication:** Implement secure user login and session management.
* **Multiple Chat Threads:** Update the database schema with a `session_id` foreign key to allow users to save and switch between different chat histories.
* **Real-time Communication:** Replace standard REST endpoints with WebSockets (Socket.io) to support real-time message streaming (typing effects).
* **Internet Functionality (RAG/Agents):** Utilize LangChain's agent toolkit to give the AI access to web searches, allowing it to retrieve and ground its answers in up-to-date, real-world data.