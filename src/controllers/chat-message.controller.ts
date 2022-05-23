import * as SocketIo from "socket.io";

import { MessageSettings } from "@/models";
import { socketKeyEvents } from "@/utilities";

interface ChatMessageControllerProps {
  ioServer: SocketIo.Server;
  socketClient: SocketIo.Socket;
}

class ChatMessageController {
  private io: SocketIo.Server;
  private socket: SocketIo.Socket;

  constructor({ ioServer, socketClient }: ChatMessageControllerProps) {
    this.io = ioServer;
    this.socket = socketClient;

    this.sendMessage();
  }

  private sendMessage() {
    this.socket.on(socketKeyEvents.MESSAGE_TO_SERVER, ({ from, message }) => {
      const messageSettings = new MessageSettings({ from, message });
      this.io.emit(socketKeyEvents.MESSAGE_FROM_SERVER, messageSettings.message);
    });
  }
}

export default ChatMessageController;
