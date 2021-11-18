import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  // console.log(id);

  //fetches the service from the database
  const url = `https://stark-taiga-87201.herokuapp.com/service/${id}`;
  // console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [url]);
  const { _id } = service;
  // console.log(service, id, _id);

  const onSubmit = (data) => {
    // confirmAlert(options);
    const userInfo = {
      ...data,
      name: user.displayName,
      email: user.email,
      id: id,
      _id2: _id,
      loginName: user.displayName,
      eventName: name,
      img: img,
      status: "Pending",
    };
    // console.log(userInfo);
    axios
      .post("https://stark-taiga-87201.herokuapp.com/bookings", userInfo)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          alert("Success! We Get Your Order. Wait for Approve");
          reset();
        }
      });
  };

  const { name, img, description, location } = service;
  // console.log(service);
  return (
    <div className="mt-20 mb-20">
      <h1 className="uppercase text-2xl text-green-500 text-center font-bold mb-20 border-b-2 w-80 mx-auto">
        Place your booking at <span className="text-red-500">{name}</span>
      </h1>

      <div className="flex sm:flex-col lg:flex-row justify-evenly items-center">
        <div className="max-w-sm rounded-lg border">
          <div>
            <img className="w-96 h-52 border-none" src={img} alt="" />
          </div>
          <div className="px-5 text-left font-bold mt-3">
            <h1 className="text-center text-black text-xl mb-2">{name}</h1>
            <p className="text-justify text-gray-700 font-semibold my-3">
              Location:{" "}
              <span className="shadow-md text-blue-600 p-1">{location}</span>
            </p>
            <p className="text-justify text-gray-700 font-semibold">
              Agency:
              <span className="shadow-md text-blue-600 p-1">
                Travel Care Agency
              </span>
            </p>
            <p className="text-gray-700 font-normal my-3">
              Description:{" "}
              <span className="text-justify text-black font-semibold">
                {description}
              </span>
            </p>
          </div>
        </div>
        <div className="sm:mt-10 lg:mt-0">
          <h1 className="uppercase text-2xl text-blue-600 text-center font-bold mb-5 border-b-2 w-56 mx-auto">
            Billing address
          </h1>
          <p className="font-bold my-4">
            Name: <span className="text-red-500">{user.displayName}</span>
            <br></br> Email: <span className="text-red-500">{user.email}</span>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span className="text-black">Age:</span>
            <div className="input-group">
              <input
                className="w-full border border-black p-1 outline-none"
                required
                type="number"
                {...register("age")}
              />
            </div>
            <span className="text-black">Phone:</span>
            <div className="input-group">
              <input
                className="w-full border border-black p-1 outline-none"
                required
                {...register("phone")}
              />
            </div>
            <span className="text-black">Address:</span>
            <div className="input-group">
              <input
                className="w-full border border-black p-2 outline-none"
                required
                {...register("address")}
              />
            </div>
            <span className="text-black">Notes:</span>
            <div className="input-group">
              <textarea
                className="w-full border border-black outline-none"
                {...register("notes")}
              />
            </div>

            <div className="w-96 text-center mt-5 mx-auto">
              {" "}
              <input
                type="submit"
                className="px-4 py-2 border-black border bg-white rounded-full hover:bg-black hover:text-white font-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
