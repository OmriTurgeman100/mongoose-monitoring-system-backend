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

export const get_reports: RequestHandler = async (req, res, next) => {
  try {
    const reports = await Report.find();

    res.status(200).json({
      data: reports,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const get_empty_reports: RequestHandler = async (req, res, next) => {
  try {
    const empty_reports = await Report.find({ parent: null }).distinct( 'reportId' );
    res.status(200).json({
      data: empty_reports,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
