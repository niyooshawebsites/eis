import React from "react";

const Demo_registration = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-md-4 mx-auto">
          <h1 className="text-center display-5 mb-4 text-light">
            Demo Registration
          </h1>
          <form className="bg-light p-5 rounded ">
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
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Student Address"
                name="student_address"
                required
              />
              <label for="floatingInput" id="student_address">
                Student Address
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Student Qualification"
                name="student_qualification"
                required
              />
              <label for="floatingInput" id="student_qualification">
                Student Qualification
              </label>
            </div>
            <div className="form-group mb-3">
              <select
                class="form-select"
                aria-label="Source"
                name="source"
                required
              >
                <option selected>Source</option>
                <option value="Just Dial">Just Dial</option>
                <option value="Just Dial">Walk In</option>
                <option value="Referral">Referral</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <select
                class="form-select"
                aria-label="Course"
                name="course"
                required
              >
                <option>Select Course</option>
                <option value="Spoken">Spoken</option>
                <option value="IELTS">IELTS</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Adavnced">Adavnced</option>
                <option value="Business English">Business English</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                name="demo"
                id="demo"
                value="Demo Done"
                className="form-control"
                readOnly
              />
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
            <button type="submit" class="btn btn-primary btn-lg">
              Register Demo
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Demo_registration;
