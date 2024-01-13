import React from "react";
import { Link } from "react-router-dom";
import VerticalNavbar from "../partials/VerticalNavbar";

const Follow_ups = () => {
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
                <h1 className="display-6 mb-4 text-light">Follow ups</h1>
              </div>
              <div className="col-md-6">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Student..."
                    aria-label="Search"
                    required
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <table className="table text-light table-striped">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Student Name</th>
                      <th>Contact</th>
                      <th>Course</th>
                      <th>Teacher</th>
                      <th>Counseller</th>
                      <th>Status</th>
                      <th>Last Follow up</th>
                      <th>Last remarks</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Tarun Miglani</td>
                      <td>745755542</td>
                      <td>Intermediate</td>
                      <td>Babai Bose</td>
                      <td>Nashra</td>
                      <td>Demo Done</td>
                      <td>15/12/2023</td>
                      <td>Out of town</td>
                      <th>
                        <Link to="#" className="btn btn-sm btn-primary">
                          Update
                        </Link>
                      </th>
                    </tr>

                    <tr>
                      <td>02</td>
                      <td>Rohit</td>
                      <td>8784265122</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>Demo Pending</td>
                      <td>15/12/2023</td>
                      <td>Out of town</td>
                      <th>
                        <Link to="#" className="btn btn-sm btn-primary">
                          Update
                        </Link>
                      </th>
                    </tr>
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

export default Follow_ups;
