import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Services = (props) => {
  //fetches the data from the api
  const { img, name, description, id } = props.service;

  return (
    <div className="flex flex-col justify-between mx-auto max-w-sm rounded-lg border hover:shadow-lg transition-shadow">
      <div>
        <img className="w-96 h-52 rounded-t" src={img} alt="" />
      </div>
      <div className="px-5 text-left font-bold mt-3">
        <h1 className="text-center text-black text-xl mb-2">{name}</h1>
        <p className="text-justify text-gray-700 font-semibold">
          {description}
        </p>
      </div>
      <div className="my-6 flex justify-center">
        <Link to={`/service/${id}`}>
          <button className="w-40 bg-transparent border hover:shadow-lg border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded-full font-bold transition">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
