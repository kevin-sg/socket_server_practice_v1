import * as SocketIo from "socket.io";

import { environmentVariables } from "@/global";

export const options: Partial<SocketIo.ServerOptions> = {
  cors: {
    origin: [environmentVariables.HOST_CLIENT],
  },
};
