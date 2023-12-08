import React from "react";

const Follow_up = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row mb-5">
          <h1 className="display-6 mb-4 text-light text-center">
            Follow up Details
          </h1>
        </div>

        <div className="row">
          <div className="col-md-8 mx-auto">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>Student</th>
                  <td>Arvind Kumar</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>8285762514</td>
                </tr>
                <tr>
                  <th>12/01/2023</th>
                  <td>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia, laboriosam.
                  </td>
                </tr>
                <tr>
                  <th>15/01/2023</th>
                  <td>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis ipsa eius harum minima magni praesentium obcaecati
                    repellendus, sint placeat aspernatur?
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 className="text-white">Update Remarks</h4>
            <form action="" className="form">
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  className="form-control mb-3"
                  required
                ></textarea>
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Follow_up;
