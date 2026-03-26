from config.database import conn, cursor


def save_chat(message, response):
    cursor.execute(
        "INSERT INTO chats (message, response) VALUES (?, ?)", (message, response)
    )
    conn.commit()
