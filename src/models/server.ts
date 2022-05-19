import * as SocketIo from "socket.io";
import express from "express";
import * as http from "http";
import morgan from "morgan";
import cors from "cors";

// import { UserRoute } from "@/routes";
import { TPathsRoute, Sockets } from "@/models";
import { options, environmentVariables, corsOptions } from "@/utilities";
// import { connectToDatabase } from "@/utilities";

class Server {
  public app: express.Application;
  private port: number;
  private paths: TPathsRoute;
  private io_http: SocketIo.Server;
  private httpServer: http.Server;

  constructor() {
    this.app = express();
    this.port = environmentVariables.HOST_PORT;
    this.httpServer = http.createServer(this.app);
    this.io_http = new SocketIo.Server(this.httpServer, options);

    this.paths = {
      user: "/api/user",
    };

    // Conntect to DB
    // this.connectToDB()

    // Middleware
    this.middlaware();

    this.configureSockets();

    // Routes
    // this.routes();
  }

  private static async connectToDB() {
    // await connectToDatabase();
  }

  private configureSockets() {
    new Sockets(this.io_http);
  }

  private middlaware() {
    this.app.use(cors(corsOptions));
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  // private routes() {
  //   this.app.use(this.paths.user, UserRoute);
  // }

  public listen() {
    this.httpServer.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server listening on port: http://localhost:${this.port}`);
    });
  }
}

export default Server;
