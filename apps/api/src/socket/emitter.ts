import { io } from "./socket.js";

export const emitAssignmentEvent = (
  assignmentId: string,
  event: string,
  data: any
) => {

  if (!io) {
    return;
  }

  io.to(
    `assignment:${assignmentId}`
  ).emit(
    event,
    data
  );
};