import * as SocketIO from "socket.io";
import * as http from "http";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import { SocketController } from "@/socket";
import { environmentVariables } from "@/global";
import { options, corsOptions, socketKeyEvents } from "@/utilities";

class Server {
  public app: express.Application;

  private port: number;
  private ioServer: SocketIO.Server;
  private httpServer: http.Server;

  private static _intance: Server;

  private constructor() {
    this.app = express();
    this.port = environmentVariables.HOST_PORT;
    this.httpServer = http.createServer(this.app);
    this.ioServer = new SocketIO.Server(this.httpServer, options);

    // Middleware
    this.middlewares();

    this.configureSockets();
  }

  public static get instance() {
    return this._intance || (this._intance = new this());
  }

  private middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private configureSockets() {
    this.ioServer.on(socketKeyEvents.CONNECT, (socket) => {
      new SocketController({ ioServer: this.ioServer, socketClient: socket });
    });
  }

  public listen() {
    this.httpServer.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server listening on port: http://localhost:${this.port}`);
    });
  }
}

export default Server;
