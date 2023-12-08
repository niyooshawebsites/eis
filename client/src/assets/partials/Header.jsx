import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark border-bottom">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h3>EIS</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/demo_registration">
                  Demo Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fee_details">
                  Fee Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student_details">
                  Student Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/students_details">
                  Students Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/follow_ups">
                  Follow ups
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/follow_up">
                  Follow up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mark_attendance">
                  Mark Attendance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/attendance_details">
                  Attendance Details
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
