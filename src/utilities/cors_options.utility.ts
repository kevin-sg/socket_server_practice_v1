import * as cors from "cors";

import { environmentVariables } from "./environment.utility";

const whitList = [environmentVariables.HOST_CLIENT];

export const corsOptions: cors.CorsOptions = {
  origin: whitList,
};
