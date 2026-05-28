import { Server, Socket } from "socket.io";

export const registerSocketHandlers = (
  io: Server
) => {

  io.on(
    "connection",
    (socket: Socket) => {

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
            `Joined room: ${room}`
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
            `Left room: ${room}`
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
};