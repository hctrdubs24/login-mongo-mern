import express from "express";
import path from "path";
import morgan from "morgan";
import { PORT } from "./config/index.js";
import indexRoutes from "./routes/index.routes.js";
import "./database/db.js";
import cors from "cors";

const app = express();

//* Settings
app.set("port", process.env.PORT || 1024);

//* Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

//* Routes
app.use(indexRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
