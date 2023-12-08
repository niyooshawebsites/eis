import {} from "react-router-dom";

const Mark_attendance = () => {
  return (
    <>
      <div className="row my-5">
        <h1 className="display-6 mb-4 text-light text-center">
          Mark Attendance
        </h1>
        <div className="col-md-6 mx-auto">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Attendance</th>
                <th>Total Classes</th>
                <th>Class attended</th>
                <th>Attendance %</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arvind</td>
                <td>A</td>
                <td>90</td>
                <td>18</td>
                <td>20</td>
                <td>
                  <button className="btn btn-sm btn-success me-2">
                    Present
                  </button>
                  <button className="btn btn-sm btn-warning">Leave</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Mark_attendance;
