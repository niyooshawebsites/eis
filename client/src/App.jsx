import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./assets/partials/Header";
import Footer from "./assets/partials/Footer";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./assets/private/Dashboard";
import Demo_registration from "./assets/private/Demo_registration";
import Fee_details from "./assets/private/Fee_details";
import Student_details from "./assets/private/Student_details";
import Students_details from "./assets/private/Students_details";
import Follow_ups from "./assets/private/Follow_ups";
import Follow_up from "./assets/private/Follow_up";
import Mark_attendance from "./assets/private/Mark_attendance";
import Attendance_details from "./assets/private/Attendance_details";
import PrivateRoutes from "./assets/private/PrivateRoutes";
import Profile from "./assets/private/Profile";
import PageNoFound from "./assets/private/PageNoFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/demo_registration" element={<Demo_registration />} />
            <Route path="/fee_details" element={<Fee_details />} />
            <Route path="/student_details" element={<Student_details />} />
            <Route path="/students_details" element={<Students_details />} />
            <Route path="/follow_ups" element={<Follow_ups />} />
            <Route path="/follow_up" element={<Follow_up />} />
            <Route path="/mark_attendance" element={<Mark_attendance />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/attendance_details"
              element={<Attendance_details />}
            />
          </Route>
          <Route path="*" element={<PageNoFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
