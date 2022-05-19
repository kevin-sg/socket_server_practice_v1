import "dotenv/config";
import { Server } from "@/models";

const app = Server.instance;

// Start app
app.listen();
