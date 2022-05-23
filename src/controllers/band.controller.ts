import * as SocketIo from "socket.io";

import { BandConfigure } from "@/socket";
import { socketKeyEvents } from "@/utilities";
import type { ISocketControllerProps } from "@/global/global-types";

class BandController {
  private io: SocketIo.Server;
  private socket: SocketIo.Socket;
  private bandInstance: BandConfigure;

  constructor({ ioServer, socketClient }: ISocketControllerProps) {
    this.io = ioServer;
    this.socket = socketClient;
    this.bandInstance = BandConfigure.instance;

    this.sendBands();
    this.createBand();
    this.counterBand();
    this.changeBand();
    this.removeBand();
  }

  private sendBands(): void {
    this.socket.emit(socketKeyEvents.SEND_BANDS_FORM_SERVER, this.bandInstance.getBands());
  }

  private createBand(): void {
    this.socket.on(socketKeyEvents.CREATE_BAND_TO_SERVER, (data) => {
      this.bandInstance.createBand(data.name);
      this.io.emit(socketKeyEvents.SEND_BANDS_FORM_SERVER, this.bandInstance.getBands());
    });
  }

  private counterBand(): void {
    this.socket.on(socketKeyEvents.COUNT_BAND_TO_SERVER, (data) => {
      this.bandInstance.updateCountBandById(data.id);
      this.io.emit(socketKeyEvents.SEND_BANDS_FORM_SERVER, this.bandInstance.getBands());
    });
  }

  private changeBand(): void {
    this.socket.on(socketKeyEvents.CHANGE_BAND_TO_SERVER, (data) => {
      this.bandInstance.updateNameBandById(data.id, data.name);
      this.io.emit(socketKeyEvents.SEND_BANDS_FORM_SERVER, this.bandInstance.getBands());
    });
  }

  private removeBand(): void {
    this.socket.on(socketKeyEvents.REMOVE_BAND_TO_SERVER, (data) => {
      this.bandInstance.removeBand(data.id);
      this.io.emit(socketKeyEvents.SEND_BANDS_FORM_SERVER, this.bandInstance.getBands());
    });
  }
}

export default BandController;
