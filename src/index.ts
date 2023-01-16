import * as path from "path";
import * as dotenv from "dotenv";
import WebSocket, { createWebSocketStream, WebSocketServer } from "ws";

process.on("unhandledRejection", (err) => console.log(err));
process.on("uncaughtException", (err) => console.log(err));

const PATH_ENV = path.resolve(process.cwd(), ".env");
dotenv.config({ path: PATH_ENV });
const PORT = +process.env.PORT ?? 8080;

const wss = new WebSocketServer(
  {
    port: PORT,
  },
  () => {
    console.log(`WebSocket Server started on port ${wss.options.port}`);
  }
);



wss.on("close", () => {
  console.log("WebSocket Server shutdown.");
});

process.on("SIGINT", () => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.close();
    }
  });

  wss.close();
});
