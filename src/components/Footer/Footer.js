import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Footer = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-100">
      <footer className="relative bg-gray-200 pt-4 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-gray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-600">
                Find us on any of these platforms, we will respond almost 1
                business hour.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a
                  href="https://www.facebook.com/showvro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="bg-white text-lightBlue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:shadow-lg transition-all"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="mx-auto"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                </a>
                <a
                  href="https://github.com/showvro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="bg-white text-lightBlue-600 shadow-md hover:shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition-all"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="mx-auto"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </a>
                <a
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="bg-white text-pink-400 shadow-md hover:shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition-all"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="mx-auto"
                    >
                      <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6 justify-center">
                <div className="w-full lg:w-4/12 md:w-6/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-900 hover:text-gray-500"
                      >
                        <button>Home</button>
                      </Link>
                    </li>
                    {user.displayName && (
                      <div>
                        <li>
                          <Link
                            to="/managebooking"
                            className="text-gray-900 hover:text-gray-500"
                          >
                            <button>Manage Booking</button>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/addnewlocation"
                            className="text-gray-900 hover:text-gray-500"
                          >
                            <button>Add New Location</button>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/mybooking"
                            className="text-gray-900 hover:text-gray-500"
                          >
                            <button>My Booking</button>
                          </Link>
                        </li>
                      </div>
                    )}
                    <li>
                      <Link
                        to="/about"
                        className="text-gray-900 hover:text-gray-500"
                      >
                        <button>About</button>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 md:w-6/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mt-5 lg:mt-0">
                    Other
                  </span>
                  <ul className="list-unstyled">
                    <li>Terms &amp; Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3 w-9/12 mx-auto border-gray-600 opacity-50" />
          <div className="flex flex-wrap items-center md:justify-between justify-center font-bold">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500 py-1">
                Copyright © <span id="get-current-year">2021</span> Travel Care
                by
                <a
                  href="https://www.facebook.com/showvro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-green-500 hover:text-gray-800 font-bold ml-1">
                    Showvro
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
