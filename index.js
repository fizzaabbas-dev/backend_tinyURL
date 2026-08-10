import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongoDb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";
import dns from "dns/promises"

dns.setServers(["1.1.1.1","8.8.8.8"])

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

ConnectMongoDb();

app.use("/", URLRoute);

app.listen(5050, () => {
  console.log("I am working on PORT 5050");
});