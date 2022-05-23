interface EnvironmentVariables {
  HOST_PORT: number;
  HOST_CLIENT: string;
}

export const environmentVariables: EnvironmentVariables = {
  HOST_PORT: parseInt(process.env.PORT as string),
  HOST_CLIENT: process.env.HOST_CLIENT as string,
};
