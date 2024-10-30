import express from "express";
import * as nodeController from "../controllers/nodeController"

const router = express.Router();

router
  .route("/")
  .post(nodeController.post_nodes)
  .get(nodeController.get_nodes);

router
  .route("/:id")
  .get(nodeController.get_specific_node);

export default router;