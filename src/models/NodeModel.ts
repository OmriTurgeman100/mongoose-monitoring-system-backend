import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  status: {
    type: String,
    enum: ["up", "down", "critical", "expired"],
    default: "expired",
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Node",
  },
});

const Node = mongoose.model("Node", nodeSchema);

export default Node;
