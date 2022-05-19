import * as SocketIo from "socket.io";

interface UserStatusProps {
  ioServer: SocketIo.Server;
  socketClient: SocketIo.Socket;
}

class UserStatus {
  private io: SocketIo.Server;
  private socket: SocketIo.Socket;

  constructor({ ioServer, socketClient }: UserStatusProps) {
    this.io = ioServer;
    this.socket = socketClient;
  }
}

export default UserStatus;
