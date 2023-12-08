const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connection = require("./config/db");
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
connection();
const app = express();
app.use(express.json());

const {
  loginRoute,
  signupRoute,
  dashboardRoute,
  demoRegRoute,
  feeDetailsRoute,
  studentDetailsRoute,
  StudentsDetailsRoute,
  followupsRoute,
  followupRoute,
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

// student details
app.use(API_VERSION, studentDetailsRoute);

// students details
app.use(API_VERSION, StudentsDetailsRoute);

// follow ups
app.use(API_VERSION, followupsRoute);

// follow up
app.use(API_VERSION, followupRoute);

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
