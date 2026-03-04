import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar></Navbar>
      </div>
      <main className="">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
