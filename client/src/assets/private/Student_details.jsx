import React from "react";
import { Link } from "react-router-dom";

const Student_details = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-4 mx-auto">
          <h1 className="text-center display-5 mb-4 text-light">
            Update Student Details
          </h1>
          <form className="bg-light p-5 rounded">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Student name"
                name="student_name"
                required
              />
              <label for="floatingInput" id="student_name">
                Student Name
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
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
                class="form-select"
                aria-label="Course"
                name="course"
                required
              >
                <option>Select Course</option>
                <option value="IELTS">IELTS</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Adavnced">Adavnced</option>
                <option value="Business English">Business English</option>
              </select>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Course Fee"
                name="course_fee"
                required
              />
              <label for="floatingInput" id="course_fee">
                Course fee
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
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
                class="form-select"
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
                class="form-select"
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

            <div class="form-floating mb-4">
              <input
                type="text"
                class="form-control"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Student_details;
