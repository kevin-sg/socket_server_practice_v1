import * as SocketIO from "socket.io";

// *******************************************************
// *             This is type EnviromentVariables
// *******************************************************

export interface IEnvironmentVariables {
  HOST_PORT: number;
  HOST_LOCAL: string;
  HOST_CLIENT: string;
}

// *******************************************************
// *         This is type Class constructor props
// *******************************************************

export interface ISocketControllerProps {
  ioServer: SocketIO.Server;
  socketClient: SocketIO.Socket;
}
export interface IBandSettingsProps {
  name: string;
}

// *******************************************************
// *            This is type Class methods props
// *******************************************************

export interface IBandProps {
  name: string;
}

export interface IListBand {
  id: string;
  name?: string;
  votes: number;
}
