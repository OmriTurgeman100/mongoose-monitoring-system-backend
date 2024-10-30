import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodeRouter from "./routes/nodeRouter";
import reportRouter from "./routes/reportRouter";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/nodes", nodeRouter);
app.use("/reports", reportRouter);

export default app;
