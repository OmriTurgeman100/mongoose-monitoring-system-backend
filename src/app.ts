import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodeRouter from "./routes/nodeRouter";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/nodes", nodeRouter);

export default app;
