import * as path from "path";
import * as dotenv from "dotenv";
import WebSocket, { createWebSocketStream, WebSocketServer } from "ws";
import { commandsMouse } from "./Constants/constants";

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

wss.on("connection", (wsconnection, req) => {
  console.log(
    "Detect new connection from adress: ",
    req.socket.remoteAddress,
    "port: ",
    req.socket.remotePort
  );

  const duplexStream = createWebSocketStream(wsconnection, {
    encoding: "utf8",
    decodeStrings: false,
  });

  duplexStream.on("data", async (message) => {
    console.log("received command:", message);

    const [command, ...rest] = message.split(" ");
    const args = rest.map(Number);

    if (command in commandsMouse) {
      try {
        const result = await commandsMouse[command](args);
        console.log("success command:", result);

        duplexStream.write(result + "\0");
      } catch (err) {
        console.error("failed: ", command, ", with error: ", err);
      }
    }
  });

  wsconnection.on("close", () => {
    console.log("Connection was closed.");
  });
});

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
