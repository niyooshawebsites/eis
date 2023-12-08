import React from "react";

const Signup = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-md-4 mx-auto">
          <h1 className="text-center display-5 mb-4 text-light">Sign up</h1>
          <form className="bg-light p-5 rounded">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="name"
                required
              />
              <label for="floatingInput" id="name">
                Name
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                required
              />
              <label for="floatingInput" id="email">
                Email address
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="username"
                required
              />
              <label for="floatingInput" id="username">
                Username
              </label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="pass"
                required
              />
              <label for="floatingPassword" id="pass">
                Password
              </label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Confirm Password"
                name="confirm_pass"
                required
              />
              <label for="floatingPassword" id="confirm_pass">
                Confirm Password
              </label>
            </div>
            <div className="form-group mb-4">
              <select name="" id="" className="form-control" required>
                <option>Select Role</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary btn-lg">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
