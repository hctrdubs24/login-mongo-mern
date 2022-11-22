import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 1024;

export const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/topicosWeb";
