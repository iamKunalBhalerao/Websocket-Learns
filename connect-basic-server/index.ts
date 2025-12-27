import WebSocket, { WebSocketServer } from "ws";
const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });

const clients = new Map();

function broadcast(message: object, excludeClient: WebSocket | null = null) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== excludeClient) {
      client.send(JSON.stringify(message));
    }
  });
}

wss.on("connection", (ws) => {
  console.log("New Client Connected!");

  ws.send(
    JSON.stringify({
      type: "system",
      message: "Welcome to Chat! Please send your username to join.",
    })
  );

  ws.on("message", (data) => {
    try {
      const message = JSON.parse(data as unknown as string);

      // Join the chat room
      if (message.type === "join") {
        clients.set(ws, message.username);

        broadcast(
          {
            type: "system",
            message: `${message.username} Joined the chat`,
          },
          ws
        );

        ws.send(
          JSON.stringify({
            type: "system",
            message: `${message.username} Joined the chat`,
          })
        );
      } else if (message.type === "chat") {
        const username = clients.get(ws);

        if (username) {
          broadcast({
            type: "chat",
            username: username,
            text: message.text,
            timeStamp: new Date().toISOString(),
          });
        } else {
          ws.send(
            JSON.stringify({
              type: "error",
              message: "Please join with the username first",
            })
          );
        }
      }
    } catch (error: any) {
      console.log(`Error processing message: ${error}`);

      ws.send(
        JSON.stringify({
          type: "error",
          message: "Invalid Message format",
        })
      );
    }
  });

  ws.on("close", () => {
    const username = clients.get(ws);

    if (username) {
      broadcast({
        type: "system",
        message: `${username} left the chat.`,
      });
    }
    clients.delete(ws);
  });

  ws.on("error", (error) => {
    console.log(`Websocket Error: ${error}`);
  });
});

console.log(`WebSocket Server is running on ws://localhost:${PORT}`)