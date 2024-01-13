import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState(() => {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      role: "",
    };
  });

  const handleInputChange = (e) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
        [e.target.email]: e.target.value,
        [e.target.username]: e.target.value,
        [e.target.password]: e.target.value,
        [e.target.confirm_password]: e.target.value,
        [e.target.user_role]: e.target.value,
      };
    });
  };

  const submitSignupForm = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:5000/api/v1/signup", user)
      .then((res) => console.log(res.message))
      .catch((err) => console.log(err.response.data));

    setUser(() => {
      return {
        name: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
        role: "",
      };
    });
  };

  return (
    <>
      <div className="container my-5">
        <div className="col-md-10 mx-auto">
          <h1 className="text-center display-5 mb-4 text-light">Sign up</h1>
          <form className="bg-light p-5 rounded" onSubmit={submitSignupForm}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputName"
                    placeholder="name@example.com"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="floatingInputName" id="name">
                    Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="floatingInputEmail" id="email">
                    Email address
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputUsername"
                    placeholder="name@example.com"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="floatingInputUsername" id="username">
                    Username
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="floatingPassword" id="password">
                    Password
                  </label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    value={user.confirm_password}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    htmlFor="floatingConfirmPassword"
                    id="confirm_password"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="form-group mb-4" htmlFor="role">
                  <select
                    name="role"
                    id="role"
                    className="form-control"
                    value={user.role}
                    onChange={handleInputChange}
                    required
                  >
                    <option>Select Role</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
          </form>
          <div className="row mt-4">
            <div className="col">
              <p className="text-center text-white">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
