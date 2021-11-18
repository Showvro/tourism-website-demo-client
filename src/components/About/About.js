import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="text-gray-600 body-font border-black rounded-lg my-10">
        <div className="container mx-auto flex items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://i.ibb.co/wCc3Kbn/undraw-map-1r69.png"
          />
          <div className="text-center w-full border-b-2 pb-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Travel Care (TC)
            </h1>
            <p className="text-justify w-11/12 mx-auto">
              Travel means comfortable and strassless journey. And also painless
              and hegitationless decision. But If you don't know about the place
              then it will be worthy for you. Like you don't know anything.
              That's why we giving you the guide of this journey. So that your
              journey can be more relevent then ever. We can define tourism as
              traveling to various popular tourist and heritage locations in the
              state, country or anywhere in the world. It helps us to learn the
              history and cultural heritage of the place that is passed on to
              the people from generation to generation. It helps us to learn the
              heritage and culture of our own land too. We enjoy tourism because
              each place provides us with a unique experience and various
              different facilities. All the facilities like the hotel,
              conveyance, restaurants, and public transport, etc. need to be
              booked in advance. For making your trip more relaxing, all you
              have to do is book all these facilities well in advance. It costs
              a lot but is worth every penny you spend on it as it relaxes the
              mind, body, and soul. Have Fun...
            </p>
          </div>
          <div className="mt-16 mb-10 w-6/12 mx-auto">
            <img
              src="https://showvro.netlify.app/assets/img/Showvro.jpg"
              alt=""
              className="w-96 object-center object-cover rounded-full mx-auto"
            />
            <h1 className="text-2xl text-black my-6 font-bold">Showvro Roy</h1>
            <p className="font-bold mb-6">Founder | Developer | Organizer</p>
            <p className="text-justify">
              It's a travel related website. Many years ago I just thinking how
              can we engage our tourist? Suddenly I got a plan. And the plan is
              the website. Travel is like a advenure. And we are always want to
              go an adventure. Thats's why we are making this website specially
              for the tourist who want to go an adventure with safty. Tata.
            </p>
            <div className="flex justify-center flex-col my-6">
              <h1 className="text-blue-600">Wanna go home safely?</h1>
              <Link
                to="/home"
                className="my-5 lg:w-2/6 mx-auto bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4  rounded-full font-bold"
              >
                Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
