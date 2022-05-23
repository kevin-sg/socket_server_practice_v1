import * as SocketIO from "socket.io";

import { BandController } from "@/controllers";
import type { ISocketControllerProps } from "@/global/global-types";

class SocketController {
  private io: SocketIO.Server;
  private socket: SocketIO.Socket;

  constructor({ ioServer, socketClient }: ISocketControllerProps) {
    this.io = ioServer;
    this.socket = socketClient;

    this.socketEvents();
  }

  private socketEvents() {
    new BandController({ ioServer: this.io, socketClient: this.socket });
  }
}

export default SocketController;
