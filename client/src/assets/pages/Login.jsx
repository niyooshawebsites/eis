import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-4 mx-auto">
          <h1 className="text-center display-5 mb-4 text-light">Login</h1>
          <form className="bg-light p-5 rounded">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="mb-3">
              <Link to="#" className="text-danger">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </form>
          <div className="mt-3">
            <span className="text-light">No account? - </span>
            <Link to="#" className="text-light">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
