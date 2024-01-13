import { Link } from "react-router-dom";
import VerticalNavbar from "../partials/VerticalNavbar";

const Dashboard = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 py-4 vertical-navbar">
            <VerticalNavbar />
          </div>
          <div className="col-md-10 px-4">
            <div className="row">
              <div className="col-md-6">
                <div id="myBar"></div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  {
  }
};

export default Dashboard;
