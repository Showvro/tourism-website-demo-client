import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignin } = useAuth();

  //useLocation
  const location = useLocation();
  const redirect_uri = location?.state?.from?.pathname || "/home";

  //useHistory
  const history = useHistory();

  //handleGoogleSignin
  const handleGoogleSignin = () => {
    googleSignin().then(() => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="py-5">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-around">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center rounded-t">
            <img
              className="object-cover object-center rounded"
              alt="img"
              src="https://i.ibb.co/x2djYR7/undraw-authentication-fsn5.png"
            />
          </div>
          <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6">
            <h1 className="lg:text-4xl text-2xl font-bold text-purple-600">
              Login to this website to get more useful features
            </h1>
            <div className="flex flex-row justify-around my-10 py-2 px-4 rounded-full border-2 text-center border-purple-800 hover:bg-purple-600 text-purple-800 hover:text-white transition-all w-52 ">
              <img
                src="https://i.ibb.co/BcR54cp/google-removebg-preview.png"
                className="h-10"
                alt=""
              />
              <button className="font-bold" onClick={handleGoogleSignin}>
                Google Signin
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
