import * as SocketIo from "socket.io";

class Sockets {
  private io: SocketIo.Server;

  constructor(public io_http: SocketIo.Server) {
    this.io = io_http;

    this.socketEvents();
  }

  private socketEvents() {
    this.io.on("connection", (socket: SocketIo.Socket) => {
      // eslint-disable-next-line no-console
      console.log("Client connected!", socket.id);

      // socket.emit("welcome-message", {
      //   msg: "Welcome to sever!",
      //   date: new Date(),
      // });

      socket.on("message-to-server", (data) => {
        // eslint-disable-next-line no-console
        console.log("message-to-server", data);

        this.io.emit("message-from-server", data);
      });
    });
  }
}

export default Sockets;
