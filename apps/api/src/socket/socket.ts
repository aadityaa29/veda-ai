import { Server } from "socket.io";

let io: Server;

export const setSocketInstance = (
  socketServer: Server
) => {

  io = socketServer;
};

export {
  io,
};