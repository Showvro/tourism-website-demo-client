import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Navbar.css";
import classes from "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="bg-gray-100 shadow-lg">
      <header>
        <div className="container mx-auto flex p-5 flex-col sm:flex-row custom-banner justify-around items-center">
          <Link to="/">
            <span className="font-bold text-3xl text-black transition-all">
              TC
            </span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l-4 md:border-gray-300 rounded	flex flex-wrap items-center text-base justify-center">
            <NavLink
              activeClassName={classes.active}
              to="/home"
              className="text-gray-900 hover:text-gray-500 mr-2 transition-all font-bold underline"
            >
              Home
            </NavLink>
            {user.displayName && (
              <div>
                <NavLink
                  activeClassName={classes.active}
                  to="/managebooking"
                  className="text-gray-900 hover:text-gray-500 mr-2 transition-all font-bold underline"
                >
                  All Booking
                </NavLink>
                <NavLink
                  activeClassName={classes.active}
                  to="/addnewlocation"
                  className="text-gray-900 hover:text-gray-500 mr-2 transition-all font-bold underline"
                >
                  Add New Location
                </NavLink>

                <NavLink
                  activeClassName={classes.active}
                  to="/mybooking"
                  className="text-gray-900 hover:text-gray-500 mr-2 transition-all font-bold underline"
                >
                  Booking List
                </NavLink>
              </div>
            )}
            <NavLink
              activeClassName={classes.active}
              to="/about"
              className="text-gray-900 hover:text-gray-500 mr-2 transition-all font-bold underline"
            >
              About
            </NavLink>
          </nav>
          <div className="flex justify-between items-center sm:flex-col usm lg:flex-row">
            <p className="text-black md:mr-2">
              {user.displayName && <span>Hello! {user.displayName}</span>}
            </p>
            {user.displayName ? (
              <button
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base md:mt-0 transition-all "
                onClick={logOut}
              >
                Log Out
                <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <Link
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base transition-all"
                to="/login"
              >
                Login
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
