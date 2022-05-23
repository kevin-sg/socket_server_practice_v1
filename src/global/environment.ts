import type { IEnvironmentVariables } from "@/global/global-types";

export const environmentVariables: IEnvironmentVariables = {
  HOST_PORT: parseInt(process.env.PORT as string),
  HOST_CLIENT: process.env.HOST_CLIENT as string,
};
