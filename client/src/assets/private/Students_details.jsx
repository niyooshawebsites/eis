import React from "react";
import { Link } from "react-router-dom";

const Students_details = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-6 mb-4 text-light">Students Details</h1>
          </div>
          <div className="col-md-6">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter Mobile number..."
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
                  <th>Fee</th>
                  <th>Received</th>
                  <th>Balance</th>
                  <th>Enrollment</th>
                  <th>Completion</th>
                  <th>Teacher</th>
                  <th>Counseller</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Arvind Kumar</td>
                  <td>8285762514</td>
                  <td>Intermediate</td>
                  <td>4500</td>
                  <td>1500</td>
                  <td>3000</td>
                  <td>15/02/2023</td>
                  <td>15/05/2023</td>
                  <td>Babai Bose</td>
                  <td>Nashra</td>
                  <td>Enrolled</td>
                  <th>
                    <Link to="#" className="btn btn-sm btn-primary">
                      Update
                    </Link>
                  </th>
                </tr>

                <tr>
                  <td>02</td>
                  <td>Shweta Pathak</td>
                  <td>7845112552</td>
                  <td>Advanced</td>
                  <td>5500</td>
                  <td>2500</td>
                  <td>3000</td>
                  <td>15/02/2023</td>
                  <td>15/05/2023</td>
                  <td>Meenakshi</td>
                  <td>Manisha</td>
                  <td>Enrolled</td>
                  <th>
                    <Link to="#" className="btn btn-sm btn-primary">
                      Update
                    </Link>
                  </th>
                </tr>

                <tr>
                  <td>03</td>
                  <td>Tarun Miglani</td>
                  <td>745755542</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>Demo Done</td>
                  <th>
                    <Link to="#" className="btn btn-sm btn-primary">
                      Update
                    </Link>
                  </th>
                </tr>

                <tr>
                  <td>04</td>
                  <td>Rohit</td>
                  <td>8784265122</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>Follow up</td>
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
    </>
  );
};

export default Students_details;
