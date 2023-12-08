const studentsDetailsModel = require("../models/studentsDetailsModel");

// @desc    login controller
const loginController = async (req, res) => res.send("Login");

// @desc    signup controller
const signupController = async (req, res) => res.send("Sign up");

// @desc    dashboard controller
const dashboardController = async (req, res) => res.send("Dashboard");

// @desc    domo registration controller
const demoRegController = async (req, res) => {
  try {
    const {
      studentName,
      studentContact,
      studentAddress,
      studentQualification,
      studentSource,
      studentCourse,
      status,
      demoCounseller,
    } = req.body;

    const demoReg = await studentsDetailsModel.create(req.body);
    return res.status(201).json({
      success: true,
      data: demoReg,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc    fee details controller
const feeDetailsController = async (req, res) => {
  try {
    const feeDetailsResult = await studentsDetailsModel.find();
    return res.status(200).json({
      success: true,
      count: feeDetailsResult.length,
      Data: feeDetailsResult,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    student details controller
const studentDetailsController = async (req, res) => {
  try {
    const studentDetailsResult = await studentsDetailsModel.findById({
      _id: req.params._id,
    });

    if (!studentDetailsResult) {
      return res.status(404).json({
        success: false,
        error: "No records found",
      });
    } else {
      await studentDetailsResult.updateOne(req.body);
      return res.status(200).json({
        success: true,
        message: "Record updated",
      });
    }
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: "Record not found",
      error_message: err.message,
    });
  }
};

// @desc    students details controller
const StudentsDetailsController = async (req, res) => {
  try {
    const studentsDetailsResult = await studentsDetailsModel.find();
    return res.status(200).json({
      success: true,
      count: studentsDetailsResult.length,
      Data: studentsDetailsResult,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    follow ups controller
const followupsController = async (req, res) => {
  try {
    const fetchFollowupsDetialsResult = await studentsDetailsModel.find();
    if (!fetchFollowupsDetialsResult) {
      return res.status(404).json({
        success: false,
        error: "No records found",
      });
    } else {
      return res.status(200).json({
        success: true,
        count: fetchFollowupsDetialsResult.length,
        Data: fetchFollowupsDetialsResult,
      });
    }
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc    follow up controller
const followupController = async (req, res) => {
  try {
    const followupResult = await studentsDetailsModel.findById({
      _id: req.params._id,
    });
    if (!followupResult) {
      return res.status(404).json({
        success: false,
        error: "No records found",
      });
    } else {
      return res.status(200).json({
        success: true,
        count: followupResult.length,
        Data: followupResult,
      });
    }
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc    mark attendance controller
const markAttendanceController = async (req, res) =>
  res.send("mark attendance");

// @desc    attendance details controller
const attendanceDetailsController = async (req, res) =>
  res.send("attendance details");

module.exports = {
  loginController,
  signupController,
  dashboardController,
  demoRegController,
  feeDetailsController,
  studentDetailsController,
  StudentsDetailsController,
  followupsController,
  followupController,
  markAttendanceController,
  attendanceDetailsController,
};
