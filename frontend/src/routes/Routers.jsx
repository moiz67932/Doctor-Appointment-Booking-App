import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/doctor" element={<Doctors />} />
      <Route path="/doctor/" element={<DoctorDetails />} />
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Signup />} />
      <Route path="/" element={<Contact />} />
      <Route path="/" element={<Services />} />
    </Routes>
  );
};

export default Routers;
