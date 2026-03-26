# AI Pair Programming Rules

1. **Keep it Simple:** Write straightforward, readable code. Choose simple `if/else` logic over complex, "clever" tricks.
2. **Never Trust Input:** Always validate data from the frontend or user before sending it to the API, the database, or the LLM. 
3. **Handle Errors Smoothly:** Assume external APIs will eventually fail. Use `try/catch` blocks, log errors for debugging, and return friendly fallback messages so the app never crashes.
4. **Protect the Database:** Do not modify the existing database schema unless I explicitly ask you to.
5. **Don't Break Core Features:** When adding new code, keep it isolated so it doesn't accidentally break the main chat functionality.