import { RequestHandler } from "express";
import Node from "../models/NodeModel";
import Report from "../models/ReportModel";

export const post_nodes: RequestHandler = async (req, res, next) => {
  try {
    const created_node = await Node.create(req.body);

    res.status(201).json({
      data: created_node,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const get_nodes: RequestHandler = async (req, res, next) => {
  try {
    const nodes = await Node.find({ parent: null });

    res.status(200).json({
      data: nodes,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export const get_specific_node: RequestHandler = async (req, res, next) => {
  try {
    const nodes = await Node.find({ parent: req.params.id });

    const reports = await Report.find({ parent: req.params.id });

    res.status(200).json({
      nodes: nodes,
      reports: reports,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
