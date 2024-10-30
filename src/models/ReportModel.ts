import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
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
  },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
