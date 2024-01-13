import React from "react";
import { Link } from "react-router-dom";

const PageNoFound = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row pt-5">
          <div className="col-md-4 mx-auto text-center pt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="display-1">404</h1>
                <br />
                <h3>Page Not Found!!!</h3>
                <br></br>
                <Link className="btn btn-outline-primary" to="/dashboard">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNoFound;
