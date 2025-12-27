import WebSocket, { WebSocketServer } from "ws";

const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });

// Listning the Servers Handlers
wss.on("connection", (ws, request) => {
  const clientIp = request.socket.remoteAddress;

  console.log(`New client is connected: ${clientIp}`);
  console.log(`Total Client's connected: ${wss.clients.size}`);

  ws.send("🎉 Welcome to Echo Server! Jo bhi bejoge, wahi wapas milega!");

  // When message comes to server - to handel messsage come event
  ws.on("message", (data) => {
    ws.send(data);

    // Close the connection if cient said bye
    if (data.toString().toLowerCase() === "bye") {
      ws.send("Bye!, Connection is closing...");
      ws.close();
    }
  });

  // To Handle Client Close Event
  ws.on("close", (code, reason) => {
    console.log(`Connection Closed!`);
    console.log(`Close Code: ${code}`);
    console.log(`Reason: ${reason}` || `No specific Reason`);
    console.log(`Remaining clinets: ${wss.clients.size}`);
  });

  //   To handle Error Event
  ws.on("error", (error) => {
    console.error(`Error occured: ${error.message}`);
  });

  // Ping - Pong Architecture: To check connection is Alive or not
  // Send Ping after every 30 seconds

  const pingInterval = setInterval(function () {
    if (ws.readyState === WebSocket.OPEN) {
      ws.ping();
    } else {
      clearInterval(pingInterval);
    }
  }, 30000);

  //  When Client response pong
  ws.on("pong", () => {
    console.log("Connection is Alive.");
  });

  ws.on("ping", () => {
    console.log("Ping from client.");
  });
});

// Server level Error Handling
wss.on("error", (error) => {
  console.log(`Error Occured: ${error}`);
});

// before server closing
wss.on("close", () => {
  console.log("Websocket Server is Closed!");
});

// Graceful shutdown = Ctrl
process.on("SIGINT", () => {
  console.log("Server is closing...");

  // Send message to all clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send("Server is closing for maintenance!");
      client.close(1001, "Server is shutting down!");
    }
  });

  //   Server Close Handler
  wss.on("close", () => {
    console.log("All clients are Disconnected!");
    process.exit(1);
  });
});

console.log(`WebSocket Server is running on ws://localhost:${PORT}`);
