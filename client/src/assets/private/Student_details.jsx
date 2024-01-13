import React from "react";
import { Link } from "react-router-dom";
import VerticalNavbar from "../partials/VerticalNavbar";

const Student_details = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2 py-4 vertical-navbar">
            <VerticalNavbar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12">
                <form className="bg-light p-5 rounded">
                  <h1 className="text-center display-5 mb-4">
                    Update Student Details
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Student name"
                          name="student_name"
                          required
                        />
                        <label for="floatingInput" id="student_name">
                          Student Name
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Student Contact Number"
                          name="student_contact_number"
                          required
                        />
                        <label for="floatingInput" id="student_contact_number">
                          Student Contact Number
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <select
                          className="form-select"
                          aria-label="Course"
                          name="course"
                          required
                        >
                          <option>Select Course</option>
                          <option value="IELTS">IELTS</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Adavnced">Adavnced</option>
                          <option value="Business English">
                            Business English
                          </option>
                        </select>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Course Fee"
                          name="course_fee"
                          required
                        />
                        <label for="floatingInput" id="course_fee">
                          Course fee
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Amount received"
                          name="amt_recieved"
                          required
                        />
                        <label for="floatingInput" id="amt_recieved">
                          Amount Received
                        </label>
                      </div>

                      <div className="form-group mb-3">
                        <select
                          className="form-select"
                          aria-label="teacher"
                          name="teacher"
                          required
                        >
                          <option selected>Select Teacher</option>
                          <option value="Babai Bose">Babai Bose</option>
                          <option value="Meenakshi">Meenakshi</option>
                        </select>
                      </div>

                      <div className="form-group mb-3">
                        <select
                          className="form-select"
                          aria-label="status"
                          name="status"
                          required
                        >
                          <option selected>Select Status</option>
                          <option value="Demo Done">Demo Done</option>
                          <option value="Enrolled">Enrolled</option>
                          <option value="Follow up">Follow up</option>
                        </select>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Counseller"
                          name="counseller"
                          value="Nashra Ma'am"
                          readOnly
                        />
                        <label for="floatingInput" id="counseller">
                          Counseller
                        </label>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student_details;
