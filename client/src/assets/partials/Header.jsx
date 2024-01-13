import { Link, useNavigate } from "react-router-dom";
import { TbLogin, TbLogout } from "react-icons/tb";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";

const Header = () => {
  const authToken = sessionStorage.getItem("authToken");
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark border-bottom">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h3>British Academy</h3>
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
                <Link className="nav-link" to=""></Link>
              </li>
              {authToken ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <FaGear /> Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={logout}>
                      <TbLogout /> logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      <RiAccountBoxFill /> Sign up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      <TbLogin /> Login
                    </Link>
                  </li>
                </>
              )}
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
