import React, { useState } from "react";
import VerticalNavbar from "../partials/VerticalNavbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Demo_registration = () => {
  const [demoDetails, setDemoDetails] = useState(() => {
    return {
      studentName: "",
      studentContact: "",
      studentAddress: "",
      studentQualification: "",
      studentSource: "",
      studentCourse: "",
      demoTeacher: "",
      demoCounseller: "",
    };
  });

  const handleInputChange = (e) => {
    setDemoDetails((prevDemoDetails) => {
      return {
        ...prevDemoDetails,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitDemoForm = async (e) => {
    e.preventDefault();
    let notify;
    await axios
      .post("http://localhost:5000/api/v1/demo_registration", demoDetails)
      .then((res) => {
        console.log(res.data.message);
        notify = () => toast(res.data.message);
        notify();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        notify = () => toast(err.response.data.message);
        notify();
      });
    setDemoDetails(() => {
      return {
        studentName: "",
        studentContact: "",
        studentAddress: "",
        studentQualification: "",
        studentSource: "",
        studentCourse: "",
        demoTeacher: "",
        demoCounseller: "",
      };
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 py-4 vertical-navbar">
            <VerticalNavbar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12 mx-auto">
                <form
                  className="bg-light p-5 rounded "
                  onSubmit={submitDemoForm}
                >
                  <h1 className="text-center display-5 mb-4">
                    Demo Registration
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput1"
                          placeholder="Student name"
                          name="studentName"
                          value={demoDetails.studentName}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="floatingInput1" id="studentName">
                          Student Name
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput2"
                          placeholder="Student Contact Number"
                          name="studentContact"
                          value={demoDetails.studentContact}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="floatingInput2" id="studentContact">
                          Student Contact Number
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          min={10}
                          max={10}
                          className="form-control"
                          id="floatingInput3"
                          placeholder="Student Address"
                          name="studentAddress"
                          value={demoDetails.studentAddress}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="floatingInput3" id="studentAddress">
                          Student Address
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput4"
                          placeholder="Student Qualification"
                          name="studentQualification"
                          value={demoDetails.studentQualification}
                          onChange={handleInputChange}
                          required
                        />
                        <label
                          htmlFor="floatingInput4"
                          id="studentQualification"
                        >
                          Student Qualification
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <select
                          className="form-select"
                          aria-label="Source"
                          name="studentSource"
                          value={demoDetails.studentSource}
                          onChange={handleInputChange}
                          required
                        >
                          <option>Select Source</option>
                          <option value="Just Dial">Just Dial</option>
                          <option value="Just Dial">Walk In</option>
                          <option value="Referral">Referral</option>
                        </select>
                      </div>

                      <div className="form-group mb-3">
                        <select
                          className="form-select"
                          aria-label="Course"
                          name="studentCourse"
                          value={demoDetails.studentCourse}
                          onChange={handleInputChange}
                          required
                        >
                          <option>Select Course</option>
                          <option value="Spoken">Spoken</option>
                          <option value="IELTS">IELTS</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Adavnce">Adavnce</option>
                          <option value="Business English">
                            Business English
                          </option>
                        </select>
                      </div>

                      <div className="form-group mb-3">
                        <select
                          className="form-select"
                          aria-label="Course"
                          name="demoTeacher"
                          value={demoDetails.demoTeacher}
                          onChange={handleInputChange}
                          required
                        >
                          <option>Select Demo Teacher</option>
                          <option value="Babai Bose">Babai Bose</option>
                          <option value="Meenakshi">Meenakshi</option>
                        </select>
                      </div>

                      <div className="form-group mb-3">
                        <select
                          className="form-select"
                          aria-label="Course"
                          name="demoCounseller"
                          value={demoDetails.demoCounseller}
                          onChange={handleInputChange}
                          required
                        >
                          <option>Select Counseller</option>
                          <option value="Nashra">Nashra</option>
                          <option value="Monika">Monika</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Register Demo
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

export default Demo_registration;
