const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const connection = require("./config/db");
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
connection();
const app = express();
app.use(cors());
app.use(express.json());

const {
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
} = require("./routers/routers");

const API_VERSION = "/api/v1/";

// home
app.get("/", (req, res) => res.send("Home"));

// login
app.use(API_VERSION, loginRoute);

// signup
app.use(API_VERSION, signupRoute);

// dashboard
app.use(API_VERSION, dashboardRoute);

// demo registration
app.use(API_VERSION, demoRegRoute);

// fee details
app.use(API_VERSION, feeDetailsRoute);

// get student details
app.use(API_VERSION, getStudentDetailsRoute);

// update student details
app.use(API_VERSION, updateStudentDetailsRoute);

// students details
app.use(API_VERSION, StudentsDetailsRoute);

// follow ups
app.use(API_VERSION, followupsRoute);

// get follow up
app.use(API_VERSION, getFollowupRoute);

// update follow up
app.use(API_VERSION, updateFollowupRoute);

// mark attendance
app.use(API_VERSION, markAttendanceRoute);

// mark attendance
app.use(API_VERSION, attendanceDetailsRoute);

app.listen(PORT, () =>
  console.log(
    `The server is running in ${process.env.NODE_ENV} mode on port ${PORT}: http://localhost:${PORT}`
      .brightBlue
  )
);
