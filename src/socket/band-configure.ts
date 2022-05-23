import { Band } from "@/models";
import type { IListBand } from "@/global/global-types";

const bands: string[] = ["Bon Jovi", "Nirvana", "Guns N' Roses", "Enanitos Verdes"];

class BandConfigure {
  public bands: IListBand[];

  private static _intance: BandConfigure;

  constructor() {
    this.bands = [];

    // initial data
    this.initialData();
  }

  public static get instance() {
    return this._intance || (this._intance = new this());
  }

  private initialData(): void {
    this.bands = bands.map((name) => {
      return name.length ? new Band({ name }) : new Band({ name: "not-name" });
    });
  }

  public getBands(): IListBand[] {
    return this.bands;
  }

  public createBand(name: string): IListBand[] {
    return (this.bands = [...this.bands, new Band({ name })]);
  }

  public updateCountBandById(id: string): void {
    this.bands = this.bands.map((band) => {
      return band.id === id ? { ...band, votes: band.votes + 1 } : band;
    });
  }

  public updateNameBandById(id: string, name: string): void {
    this.bands = this.bands.map((band) => {
      return band.id === id ? { ...band, name } : band;
    });
  }

  public removeBand(id: string): void {
    this.bands = this.bands.filter((band) => band.id !== id);
  }
}

export default BandConfigure;
