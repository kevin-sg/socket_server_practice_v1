import { SocketKeyEvents } from "@/global";

export const socketKeyEvents: SocketKeyEvents = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  MESSAGE_TO_SERVER: "message_to_server",
  MESSAGE_FROM_SERVER: "message_from_server",
};
