// import React from "react";
// import PropTypes from "prop-types";
// import userLogo from "../../assets/images/user.png";

const Header = () => {
  return (
    <div className="w-[90%] md:5/6 lg:w-4/5 mx-auto">
      <div className="navbar bg-base-100 gap-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-c-header text-base">Home</a>
              </li>
              <li>
                <a className="text-c-header text-base">Recipes</a>
              </li>
              <li>
                <a className="text-c-header text-base">About</a>
              </li>
              <li>
                <a className="text-c-header text-base">Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-3xl font-bold pl-0">
            Tasty Bites
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:gap-4">
            <li>
              <a className="text-c-header text-base">Home</a>
            </li>
            <li>
              <a className="text-c-header text-base">Recipes</a>
            </li>
            <li>
              <a className="text-c-header text-base">About</a>
            </li>
            <li>
              <a className="text-c-header text-base">Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2 lg:gap-3">
          <div className="flex bg-[#150b2b0d] px-4 lg:px-6 py-3 rounded-3xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-c-header"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              className="outline-none bg-transparent text-c-header pl-2"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
          <a className="md:w-12 md:h-12  bg-green-400 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
