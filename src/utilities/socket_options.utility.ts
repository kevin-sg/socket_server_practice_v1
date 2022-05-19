import * as SocketIo from "socket.io";

const HOST_CLIENT = process.env.HOST_CLIENTE as string;

export const options: Partial<SocketIo.ServerOptions> = {
  cors: {
    origin: [HOST_CLIENT],
  },
};
