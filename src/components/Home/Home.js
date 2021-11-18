import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import Highlight from "../Highlight/Highlight";
import Newsletter from "../Newsletter/Newsletter";

import Services from "../Services/Services";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://stark-taiga-87201.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <Banner />
      <Hero />
      <div className="mt-16 mb-20">
        <h1 className="text-2xl text-center font-bold border-b-2 border-blue-300 text-blue-500 pb-1 my-10 sm:w-4/12 lg:w-2/12 mx-auto">
          Our Locations
        </h1>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
          {services.map((service) => (
            <Services service={service} key={service.id}></Services>
          ))}
        </div>
      </div>
      <Highlight />
      <Newsletter />
    </div>
  );
};

export default Home;
