import React, { use } from 'react';
import "./../index.css";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaCircleUser } from 'react-icons/fa6';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);
  const handleLogOut = ()=>{
    console.log("User trying to logout");
    logOut()
      .then(() => {
        // alert("Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });

  }
    return (
      <div className="md:mx-36">
        {/* <h1 className="text-white">{user && user.email}</h1> */}
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
                  className="h-6 w-6 text-white"
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
                  <a>Browse Tasks</a>
                </li>
                <li>
                  <a>My Tasks</a>
                </li>
                <li>
                  {user ? (
                    <div className="flex justify-between">
                      <div>
                        {user?.photoURL ? (
                          <img className="" src={user.photoURL}></img>
                        ) : (
                          <FaCircleUser size={30} />
                        )}
                      </div>
                      <div>
                        <button onClick={handleLogOut} className="btn">
                          LogOut
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-4">
                      <Link to="/auth/login">
                        <a className="btn">Login</a>
                      </Link>
                      <Link to="/auth/register">
                        <a className="btn">Register</a>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-14 h-14">
                <img
                  src={"https://i.ibb.co/KpTVCw0y/F-logo.webp"}
                  className="w-14 h-14 rounded-br-xl rounded-tl-xl"
                  alt=""
                />
              </div>
              <div>
                <a className="btn btn-ghost text-2xl gugi text-white whitespace-nowrap">
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
                <NavLink
                  to="/browse-tasks-layout/browse-tasks"
                  className="text-xl text-white"
                >
                  Browse Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/browse-tasks-layout/my-tasks"
                  className="text-xl text-white"
                >
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
          <div className="navbar-end gap-4 hidden md:flex">
            {/* <Link to="/auth/login">
              <a className="btn">Login</a>
            </Link>
            <Link to="/auth/register">
              <a className="btn">Register</a>
            </Link> */}
            {user ? (
              <div className="flex justify-between items-center gap-4">
                <div>
                  {user?.photoURL ? (
                    <img className="w-12 h-12 rounded-full" src={user.photoURL}></img>
                  ) : (
                    <FaCircleUser size={30} />
                  )}
                </div>
                <div>
                  <button onClick={handleLogOut} className="btn">
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link to="/auth/login">
                  <a className="btn">Login</a>
                </Link>
                <Link to="/auth/register">
                  <a className="btn">Register</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;