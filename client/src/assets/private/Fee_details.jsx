import React from "react";
import { Link } from "react-router-dom";
import VerticalNavbar from "../partials/VerticalNavbar";

const Fee = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 py-4 vertical-navbar">
            <VerticalNavbar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12 mx-auto">
                <div className="row">
                  <h1 className="display-6 mb-4 text-light text-center">
                    Fee Details
                  </h1>
                  <div className="col-md-4">
                    <h4 className=" mb-4 text-light">Search Student</h4>
                  </div>
                  <div className="col-md-8">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Enter contact no..."
                        aria-label="Search"
                        required
                      />
                      <button className="btn btn-outline-light" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Contact Number</th>
                      <th>Fee</th>
                      <th>Received</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Arvind</td>
                      <td>8285762514</td>
                      <td>4500</td>
                      <td>1500</td>
                      <td>3000</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Particulars</th>
                      <th>Amount</th>
                      <th>Counseller</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>25/02/2023</td>
                      <td>Part payment</td>
                      <td>500</td>
                      <td>Nashra</td>
                      <td>
                        <Link to="#" className="btn btn-sm btn-primary">
                          Print Receipt
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>15/03/2023</td>
                      <td>Part payment</td>
                      <td>500</td>
                      <td>Manisha</td>
                      <td>
                        <Link to="#" className="btn btn-sm btn-primary">
                          Print Receipt
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>27/03/2023</td>
                      <td>Part payment</td>
                      <td>500</td>
                      <td>Nashra</td>
                      <td>
                        <Link to="#" className="btn btn-sm btn-primary">
                          Print Receipt
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Enter the amount..."
                    aria-label="Search"
                    value={"Part payment"}
                    readonly
                  />
                  <input
                    className="form-control me-2"
                    type="number"
                    placeholder="Enter the amount..."
                    aria-label="Search"
                    required
                  />
                  <button className="btn btn-success" type="submit">
                    Accept
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fee;
