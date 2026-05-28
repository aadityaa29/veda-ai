import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";

import { Server } from "socket.io";

import assignmentRoutes
from "./routes/assignment.routes.js";

import { connectDB }
from "./config/db.js";

import { setSocketInstance }
from "./socket/socket.js";

dotenv.config();

const app = express();

const server =
  http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// =====================================
// REGISTER GLOBAL SOCKET INSTANCE
// =====================================
setSocketInstance(io);

// =====================================
// SOCKET EVENTS
// =====================================
io.on(
  "connection",
  (socket) => {

    console.log(
      "Client connected:",
      socket.id
    );

    // Join Assignment Room
    socket.on(
      "join-assignment",
      (
        assignmentId: string
      ) => {

        const room =
          `assignment:${assignmentId}`;

        socket.join(room);

        console.log(
          `Joined room ${room}`
        );
      }
    );

    // Leave Assignment Room
    socket.on(
      "leave-assignment",
      (
        assignmentId: string
      ) => {

        const room =
          `assignment:${assignmentId}`;

        socket.leave(room);

        console.log(
          `Left room ${room}`
        );
      }
    );

    socket.on(
      "disconnect",
      () => {

        console.log(
          "Client disconnected:",
          socket.id
        );
      }
    );
  }
);

// =====================================
// MIDDLEWARES
// =====================================
app.use(cors());

app.use(express.json());

// =====================================
// ROUTES
// =====================================
app.use(
  "/assignments",
  assignmentRoutes
);

// =====================================
// HEALTH ROUTE
// =====================================
app.get(
  "/",
  (_req, res) => {

    res.json({
      success: true,
      message:
        "Veda AI API running",
    });
  }
);

// =====================================
// GLOBAL ERROR HANDLER
// =====================================
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {

    console.error(err);

    res.status(500).json({
      success: false,
      message:
        "Internal Server Error",
    });
  }
);

// =====================================
// DATABASE
// =====================================
connectDB();

// =====================================
// SERVER
// =====================================
const PORT =
  process.env.PORT || 8000;

server.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});