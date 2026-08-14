import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns/promises";

import { ConnectMongoDb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";

dotenv.config();

dns.setServers(["8.8.8.8"]);

const app = express();

app.use(cors());
app.use(express.json());

ConnectMongoDb();

app.use("/", URLRoute);

app.listen(5050, () => {
  console.log("I am working on port 5050");
});