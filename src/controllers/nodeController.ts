import { RequestHandler } from "express";
import Node from "../models/NodeModel";

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
