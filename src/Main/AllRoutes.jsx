import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Signup from "./Signup";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
