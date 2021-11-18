import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container w-11/12 mx-auto">
        <div className="flex justify-evenly sm:flex-col lg:flex-row mx-auto my-10 border-2 p-5 rounded custom-banner">
          <img
            className="sm:w-full lg:w-6/12  w-6/12 p-8 img"
            src="https://i.ibb.co/XZwDkYr/undraw-Travelers-re-y25a.png"
            alt=""
          />
          <div className="sm:w-full mt-8 lg:w-4/12 flex flex-col justify-center">
            <div>
              <h1 className="md:text-2xl lg:text-3xl text-left text-black font-bold">
                Tour Guide for your safe and enjoyable travel.
              </h1>
              <p className="text-left text-gray-600 my-5">
                Hey! Welcome to our website. We are here to help you about your
                travel in deep. We Will guide you from top notch. Are you ready
                to jump?
                <br />
                <span className="mt-5 font-bold text-xl">Lets Go...</span>
              </p>
            </div>
            <div className="mt-3 mb-5">
              <Link
                to="/home"
                className="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-3 px-4 font-bold transition-all"
              >
                Add New Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
