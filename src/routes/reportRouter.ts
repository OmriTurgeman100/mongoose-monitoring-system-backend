import express from "express";
import * as reportController from "../controllers/reportController";

const router = express.Router();

router
  .route("/")
  .post(reportController.post_report)
  .get(reportController.get_reports);


router
  .route("/distinct")
  .get(reportController.get_empty_reports);
  
export default router;
