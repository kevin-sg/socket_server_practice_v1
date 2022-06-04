import type { IEnvironmentVariables } from "@/global/global-types";

export const environmentVariables: IEnvironmentVariables = {
  HOST_PORT: 8080,
  HOST_LOCAL: "http://localhost:3000",
  HOST_CLIENT: "https://socket-io-band.netlify.app",
  // HOST_PORT: parseInt(process.env.PORT as string),
  // HOST_CLIENT: process.env.HOST_CLIENT as string,
};
