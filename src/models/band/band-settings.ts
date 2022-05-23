import { Band } from "@/models";
import type { IBandSettingsProps } from "@/global/global-types";

class BandSettings {
  public band: Band;

  constructor({ name = "" }: IBandSettingsProps) {
    this.band = new Band({ name });
  }
}

export default BandSettings;
