import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reportId: {
    type: String,
    required: [true, "reporId is required"],
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  value: {
    type: Number,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Node",
    default: null,
  },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
