import React from 'react';
import "./../index.css";
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
      <div className="mx-36">
        <div className="navbar bg-transparent ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>All Jobs</a>
                </li>
                <li>
                  <a>My Jobs</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <img
                  src={"https://i.ibb.co/KpTVCw0y/F-logo.webp"}
                  className="w-14 h-14 rounded-br-xl rounded-tl-xl"
                  alt=""
                />
              </div>
              <div>
                <a className="btn btn-ghost text-2xl gugi text-white">
                  Free-Mark
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-4">
              <li>
                <NavLink to="/" className="text-xl text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-xl text-white">
                  Browse Tasks
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-xl text-white">
                  My Tasks
                </NavLink>
              </li>
              <li>
                <NavLink to="/addTask" className="text-xl text-white">
                  Add Task
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-4">
            <a className="btn">Login</a>
            <a className="btn">Register</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;