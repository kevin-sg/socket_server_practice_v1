import * as SocketIO from "socket.io";
import * as http from "http";
import express from "express";
import morgan from "morgan";
import cors from "cors";

// import { UserRoute } from "@/routes";
import { SocketController } from "@/socket";
import { environmentVariables, TPathsRoute } from "@/global";
// import { connectToDatabase } from "@/utilities";
import { options, corsOptions, socketKeyEvents } from "@/utilities";

class Server {
  public app: express.Application;

  private port: number;
  private paths: TPathsRoute;
  private ioServer: SocketIO.Server;
  private httpServer: http.Server;

  private static _intance: Server;

  private constructor() {
    this.app = express();
    this.port = environmentVariables.HOST_PORT;
    this.httpServer = http.createServer(this.app);
    this.ioServer = new SocketIO.Server(this.httpServer, options);

    this.paths = {
      other: "/api/other",
    };

    // Conntect to DB
    // this.connectToDB()

    // Middleware
    this.middlaware();

    this.configureSockets();

    // Routes
    // this.routes();
  }

  public static get instance() {
    return this._intance || (this._intance = new this());
  }

  private async connectToDB() {
    // await connectToDatabase();
  }

  private middlaware() {
    this.app.use(cors(corsOptions));
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  // private routes() {
  //   this.app.use(this.paths.other, UserRoute);
  // }

  private configureSockets() {
    this.ioServer.on(socketKeyEvents.CONNECTION, (socket) => {
      new SocketController({ socketClient: socket, ioServer: this.ioServer });
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
