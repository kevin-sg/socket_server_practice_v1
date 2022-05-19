import "dotenv/config";
import * as mongoose from "mongoose";

import { environmentVariables } from "@/global";

if (!environmentVariables.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

export async function connectToDatabase(): Promise<mongoose.Mongoose | void> {
  try {
    await mongoose.connect(environmentVariables.MONGODB_URI, option);
    mongoose.connection.once("connection", () => {
      // eslint-disable-next-line no-console
      console.log("Connented to MongoDB");
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
}
