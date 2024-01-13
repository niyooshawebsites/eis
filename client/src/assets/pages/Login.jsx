import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [cred, setCred] = useState(() => {
    return {
      email: "",
      password: "",
    };
  });

  const handleInputChange = (e) => {
    setCred((prevCred) => {
      return {
        ...prevCred,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    let notify;
    await axios
      .post("http://localhost:5000/api/v1/", cred)
      .then((res) => {
        console.log(res.data.message);
        notify = () => toast(res.data.message);
        notify();
        sessionStorage.setItem("authToken", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        notify = () => toast(err.response.data.message);
        notify();
      });
    setCred(() => {
      return {
        email: "",
        password: "",
      };
    });
  };

  return (
    <>
      <ToastContainer />;
      <div className="row mt-5">
        <div className="col-md-4 mx-auto">
          <h1 className="text-center display-5 mb-4 text-light">Login</h1>
          <form className="bg-light p-5 rounded" onSubmit={submitLoginForm}>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="Email"
                value={cred.email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={cred.password}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="mb-3">
              <Link to="#" className="text-danger">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <div className="mt-3">
            <span className="text-light">No account? - </span>
            <Link to="/signup" className="text-primary">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
