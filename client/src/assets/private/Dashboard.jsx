import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row mb-4">
          <h1 className="text-center display-5 mb-5 text-light">
            British Academy - EIS Dashboard
          </h1>
          <div className="col-md-6 ">
            <div className="card bg-success text-white">
              <div className="card-body">
                <h5 className="card-title">Demo Registration</h5>
                <p className="card-text">Click below to register demo.</p>
                <Link to="#" className="btn btn-outline-warning">
                  Regsiter Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">Fee Acceptance</h5>
                <p className="card-text">Click below to accept fees.</p>
                <Link to="#" className="btn btn-outline-light">
                  Accept Fee
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card bg-warning">
              <div className="card-body">
                <h5 className="card-title">Students Details</h5>
                <p className="card-text">
                  Click below to check student details.
                </p>
                <Link to="#" className="btn btn-outline-dark">
                  Check Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-danger text-light">
              <div className="card-body">
                <h5 className="card-title">Follow ups</h5>
                <p className="card-text">Click below to follow ups.</p>
                <Link to="#" className="btn btn-outline-light">
                  Check Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card bg-info">
              <div className="card-body">
                <h5 className="card-title">Mark Attendace</h5>
                <p className="card-text">Click below to mark attendance.</p>
                <Link to="#" className="btn btn-outline-dark">
                  Mark Attendance
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <h5 className="card-title">Attendance Details</h5>
                <p className="card-text">
                  Click below to check attendance details
                </p>
                <Link to="#" className="btn btn-outline-light">
                  Check Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
