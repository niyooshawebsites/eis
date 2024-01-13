const express = require("express");
const router = express.Router();

const {
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
} = require("../controllers/controllers");

// @desc    login route
// #method  POST
const loginRoute = router.post("/", loginController);

// @desc    signup route
// #method  POST
const signupRoute = router.post("/signup", signupController);

// @desc    dashboard route
// #method  GET
const dashboardRoute = router.get("/dashboard", dashboardController);

// @desc    demo reg route
// #method  POST
const demoRegRoute = router.post("/demo_registration", demoRegController);

// @desc    fee details route
// #method  GET
const feeDetailsRoute = router.get(
  "/fee_details/:studentContact",
  feeDetailsController
);

// @desc    student Details route
// #method  GET
const getStudentDetailsRoute = router.get(
  "/student_details/:_id",
  getStudentDetailsController
);

// @desc    student Details route
// #method  PUT
const updateStudentDetailsRoute = router.put(
  "/student_details/:_id",
  updateStudentDetailsController
);

// @desc    All students details route
// #method  GET
const StudentsDetailsRoute = router.get(
  "/students_details",
  StudentsDetailsController
);

// @desc    Follow ups route
// #method  GET
const followupsRoute = router.get("/follow_ups", followupsController);

// @desc    Follow up route
// #method  GET
const getFollowupRoute = router.get(
  "/follow_up/:studentContact",
  getfollowupController
);

//  @desc   Follow up route
// method   POST
const updateFollowupRoute = router.post(
  "/follow_up/:studentContact",
  updateFollowupController
);

// @desc    mark attendance route
// #method  POST
const markAttendanceRoute = router.post(
  "/mark_attendance",
  markAttendanceController
);

// @desc    attendance details route
// #method  GET
const attendanceDetailsRoute = router.get(
  "/attendance_details",
  attendanceDetailsController
);

module.exports = {
  loginRoute,
  signupRoute,
  dashboardRoute,
  demoRegRoute,
  feeDetailsRoute,
  getStudentDetailsRoute,
  updateStudentDetailsRoute,
  StudentsDetailsRoute,
  followupsRoute,
  getFollowupRoute,
  updateFollowupRoute,
  markAttendanceRoute,
  attendanceDetailsRoute,
};
