import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.send("Welcome to Websockets.");

  ws.on("message", (data) => {
    ws.send(`You: ${data}`);
  });
});
