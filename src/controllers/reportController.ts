import { RequestHandler } from "express";
import Report from "../models/ReportModel";

export const post_report: RequestHandler = async (req, res, next) => {
  try {
    const created_report = await Report.create(req.body);

    res.status(201).json({
      data: created_report,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
