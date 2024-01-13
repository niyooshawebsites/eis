import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdEmojiFoodBeverage } from "react-icons/md";
import { FaRupeeSign, FaPen, FaUsers } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import {
  IoCheckmarkCircleSharp,
  IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";

const VerticalNavbar = () => {
  return (
    <>
      <h4 className="text-white mb-4">British Academy</h4>
      <nav className="nav flex-column">
        <Link
          className="nav-link active text-white"
          aria-current="page"
          to="/dashboard"
        >
          <MdDashboard /> Dashboard
        </Link>
        <Link className="nav-link text-white" to="/demo_registration">
          <MdEmojiFoodBeverage /> Demo Registration
        </Link>
        <Link className="nav-link text-white" to="/fee_details">
          <FaRupeeSign /> Fee Details
        </Link>
        <Link className="nav-link text-white" to="/student_details">
          <FaPen /> Enroll Student
        </Link>
        <Link className="nav-link text-white" to="/students_details">
          <FaUsers /> All Students Details
        </Link>
        <Link className="nav-link text-white" to="/follow_up">
          <FaPen /> Update Follow up
        </Link>
        <Link className="nav-link text-white" to="/follow_ups">
          <BiSolidNotepad /> All Follow ups
        </Link>
        <Link className="nav-link text-white" to="/mark_attendance">
          <IoCheckmarkCircleSharp /> Mark Attendance
        </Link>
        <Link className="nav-link text-white" to="/attendance_details">
          <IoCheckmarkDoneCircleSharp /> Attendance Details
        </Link>
      </nav>
    </>
  );
};

export default VerticalNavbar;
