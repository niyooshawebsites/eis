const studentsDetailsModel = require("../models/studentsDetailsModel");
const userDetailsModel = require("../models/userDetailsModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc    login controller
const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(401).json({
      success: false,
      message: "Please fill out the Email",
    });
  } else if (!password) {
    return res.status(401).json({
      success: false,
      message: "Please fill out the password",
    });
  } else {
    const fetchDetails = await userDetailsModel.findOne({ email });
    if (!fetchDetails) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    } else if (fetchDetails) {
      const passMatch = await bcrypt.compare(password, fetchDetails.password);
      if (!passMatch) {
        return res.status(404).json({
          success: false,
          message: "Invalid email or password",
        });
      } else {
        const token = await jwt.sign({ email }, process.env.JWT_SERCKET_KEY, {
          expiresIn: "7d",
        });
        return res.status(200).json({
          success: true,
          message: "Login successful",
          token,
        });
      }
    }
  }
};

// @desc    signup controller
const signupController = async (req, res) => {
  try {
    const { name, email, username, password, role } = req.body;
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const signupDetails = await userDetailsModel.create({
      name,
      email,
      username,
      password: hashedPassword,
      role,
    });

    if (!signupDetails) {
      return res.status(500).json({
        success: false,
        message: "Regitration failed. Something went wrong!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Registration Successful",
        data: signupDetails,
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

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
      demoTeacher,
      demoCounseller,
    } = req.body;

    const demoReg = await studentsDetailsModel.create({
      studentName,
      studentContact,
      studentAddress,
      studentQualification,
      studentSource,
      studentCourse,
      demoTeacher,
      demoCounseller,
    });

    return res.status(201).json({
      success: true,
      data: demoReg,
      message: "Demo Registration Successful",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Demo Registration Failed",
    });
  }
};

// @desc    fee details controller
const feeDetailsController = async (req, res) => {
  try {
    const feeDetailsResult = await studentsDetailsModel.findOne({
      studentContact: req.params.studentContact,
    });
    if (!feeDetailsResult) {
      return res.status(404).json({
        success: false,
        message: "No records found",
      });
    } else {
      return res.status(200).json({
        success: true,
        count: feeDetailsResult.length,
        Data: feeDetailsResult,
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    student details controller
const getStudentDetailsController = async (req, res) => {
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
      return res.status(200).json({
        success: true,
        data: studentDetailsResult,
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

// @desc update student details controller
const updateStudentDetailsController = async (req, res) => {
  try {
    const studentDetialsResult = await studentsDetailsModel.findById({
      _id: req.params._id,
    });

    if (!studentDetialsResult) {
      return res.status(404).json({
        success: false,
        message: "No records founc",
      });
    } else {
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

      const updateStudentDetails = await studentsDetailsModel.updateOne(
        { _id: req.params._id },
        {
          $set: {
            studentName,
            studentContact,
            studentAddress,
            studentQualification,
            studentSource,
            studentCourse,
            status,
            demoCounseller,
          },
        }
      );

      if (!updateStudentDetails) {
        return res.send(500).json({
          success: false,
          message: "Record could not be updated",
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Record updated",
        });
      }
    }
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
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

// @desc    get follow up controller
const getfollowupController = async (req, res) => {
  try {
    const followupResult = await studentsDetailsModel.findOne({
      studentContact: req.params.studentContact,
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

// @desc    update follow up controller
const updateFollowupController = async (req, res) => {
  try {
    const findFollowupDetials = await studentsDetailsModel.findOne({
      studentContact: req.params.studentContact,
    });

    if (!findFollowupDetials) {
      return res.status(404).json({
        success: false,
        message: "No records found",
      });
    } else {
      const { followup } = req.body;

      const resultFollowup = await studentsDetailsModel.updateOne(
        {
          studentContact: req.params.studentContact,
        },
        {
          $set: {
            followup,
          },
        }
      );

      if (!resultFollowup) {
        return res.status(500).json({
          success: false,
          message: "Record could not be updated",
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Record updated successfully",
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
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
  getStudentDetailsController,
  updateStudentDetailsController,
  StudentsDetailsController,
  followupsController,
  getfollowupController,
  updateFollowupController,
  markAttendanceController,
  attendanceDetailsController,
};
