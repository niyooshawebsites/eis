const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      trim: true,
      required: [true, "Please add student name"],
    },
    studentContact: {
      type: Number,
      trim: true,
      required: [true, "Please add student number"],
    },
    studentAddress: {
      type: String,
      trim: true,
      required: [true, "Please add student address"],
    },
    studentQualification: {
      type: String,
      trim: true,
      required: [true, "Please add student qualification"],
    },
    studentSource: {
      type: String,
      trim: true,
      required: [true, "Please select student source"],
    },
    studentCourse: {
      type: String,
      trim: true,
      required: [true, "Please select student course"],
    },
    status: {
      type: String,
      default: "Demo done",
      trim: true,
      required: true,
    },
    demoCounseller: {
      type: String,
      trim: true,
      required: true,
    },
    studentCourseFee: {
      type: Number,
      trim: true,
      default: 0,
      required: [true, "Please select student course"],
    },
    studentEnrolmentAmt: {
      type: Number,
      trim: true,
      default: 0,
      required: [true, "Please select student course"],
    },
    teacher: {
      type: String,
      trim: true,
      default: "N/A",
      required: [true, "Please select the teacher"],
    },
    followup: {
      type: String,
      trim: true,
      default: "N/A",
      required: [true, "Please add follow up remarks"],
    },
    partPayment: {
      type: Number,
      trim: true,
      default: 0,
      required: [true, "Please add part payment"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StudentsModel", studentDetailsSchema);
