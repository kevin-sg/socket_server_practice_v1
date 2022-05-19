import * as cors from "cors";

import { environmentVariables } from "@/global";

const whitList = [environmentVariables.HOST_CLIENT];

export const corsOptions: cors.CorsOptions = {
  origin: whitList,
};
