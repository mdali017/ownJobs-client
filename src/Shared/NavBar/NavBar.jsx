import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRight, FaBeer } from "react-icons/fa";

const NavBar = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);
  const navOptions = (
    <>
      <li>
        {/* <Link to="/" className="text-xl">
          Home
        </Link> */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-700 text-xl" : " text-xl"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="">
        {/* <Link to="/">About</Link> */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-700 text-xl" : "text-xl"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-green-700 text-xl" : "text-xl"
          }
        >
          Contact
        </NavLink>
        {/* <Link to="/">Contact</Link> */}
      </li>
    </>
  );
  return (
    <>
      <div
        className={`${
          bg ? "bg-neutral-700 h-20" : "h-24"
        } navbar fixed top-0 z-10 transition-all rounded-b-lg bg-white duration-300 max-w-screen-xl mx-auto`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <h1 className="text-4xl font-bold">
            own<span className="text-green-700">Jobs</span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-warning mr-10">
            Sign Up <FaArrowRight></FaArrowRight>{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
