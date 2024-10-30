import express from "express";
import * as nodeController from "../controllers/nodeController"

const router = express.Router();

router
  .route("/")
  .post(nodeController.post_nodes);

export default router;