import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const authToken = sessionStorage.getItem("authToken");
  return authToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
