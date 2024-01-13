import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VerticalNavbar from "../partials/VerticalNavbar";
import axios from "axios";
import dayjs from "dayjs";

const Students_details = () => {
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/students_details")
      .then((res) => setStudentDetails(res.data.Data))
      .catch((err) => console.log(err));
  }, []);

  console.log(studentDetails);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 py-4 vertical-navbar">
            <VerticalNavbar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-6 mb-4 text-light">Students Details</h1>
              </div>
              <div className="col-md-6">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Enter Student name..."
                    aria-label="Search"
                    required
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="row table-font-size">
              <div className="col">
                <table className="table text-light table-striped">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Course</th>
                      <th>Fee</th>
                      <th>Received</th>
                      <th>Balance</th>
                      <th>Demo</th>
                      <th>Enrollment</th>
                      <th>Completion</th>
                      <th>Demo Teacher</th>
                      <th>Class Teacher</th>
                      <th>Counseller</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentDetails.map((value, index) => {
                      return (
                        <tr>
                          <td>{1}</td>
                          <td>{value.studentName}</td>
                          <td>{value.studentContact}</td>
                          <td>{value.studentCourse}</td>
                          <td>{value.studentCourseFee}</td>
                          <td>{value.studentEnrolmentAmt}</td>
                          <td>
                            {value.studentCourseFee - value.studentEnrolmentAmt}
                          </td>
                          <td>{dayjs().format(value.createdAt)}</td>
                          <td>N/A</td>
                          <td>N/A</td>
                          <td>{value.demoTeacher}</td>
                          <td>{value.classTeacher}</td>
                          <td>{value.demoCounseller}</td>
                          <td>{value.status}</td>
                          <td>
                            <Link
                              to="/student_details/:_id"
                              className="btn btn-sm btn-primary"
                            >
                              Update
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students_details;
