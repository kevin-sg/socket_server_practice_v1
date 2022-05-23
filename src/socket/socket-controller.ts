import * as SocketIO from "socket.io";

import { ChatMessageController } from "@/controllers";

interface SocketControllerProps {
  ioServer: SocketIO.Server;
  socketClient: SocketIO.Socket;
}

class SocketController {
  private io: SocketIO.Server;
  private socket: SocketIO.Socket;

  constructor({ ioServer, socketClient }: SocketControllerProps) {
    this.io = ioServer;
    this.socket = socketClient;

    this.socketEvents();
  }

  private socketEvents() {
    new ChatMessageController({ ioServer: this.io, socketClient: this.socket });
  }
}

export default SocketController;
