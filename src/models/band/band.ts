import { v4 as uuidv4 } from "uuid";

import { IBandProps } from "@/global/global-types";

class Band {
  public id: string;
  public name: string;
  public votes: number;

  constructor({ name }: IBandProps) {
    this.id = uuidv4();
    this.name = name.trim();
    this.votes = 0;
  }
}

export default Band;
