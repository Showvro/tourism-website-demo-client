import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";

const AddNewLocation = () => {
  const { handleSubmit, register, reset } = useForm();
  const [service, setService] = useState([]);

  // use history
  const history = useHistory();
  const location = useLocation();

  const redirect_url = location?.state?.from?.pathname || "/home/";

  useEffect(() => {
    axios
      .get("https://stark-taiga-87201.herokuapp.com/services")
      .then((res) => setService(res.data));
  }, []);
  const id = service.length + 1;
  // console.log(id);
  const onSubmit = (data) => {
    const newService = { ...data, id: id };
    axios
      .post("https://stark-taiga-87201.herokuapp.com/services", newService)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          alert("Success! Inserted");
          reset();
          history.push(redirect_url);
        }
      });
  };

  return (
    <div className="container mx-auto my-14">
      <h1 className="uppercase text-2xl text-green-500 text-center font-bold mt-5 border-b-2 w-80 mx-auto">
        Add New Location
      </h1>
      <div className="flex justify-around items-center mt-10 md:flex-col lg:flex-row custom-banner">
        <div>
          <img
            className="object-cover object-center"
            src="https://i.ibb.co/4g9nr9V/undraw-Duplicate-re-d39g.png"
            alt=""
          />
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl text-blue-500 text-center font-bold mb-2">
              Location Details
            </h1>
            <span className="text-black">Location Name:</span>
            <div>
              <input
                className="w-full border border-black p-1 outline-none"
                required
                type="name"
                {...register("name")}
              />
            </div>
            <span className="text-black">Price:</span>
            <div>
              <input
                className="w-full border border-black p-1 outline-none"
                required
                type="number"
                {...register("price")}
              />
            </div>
            <span className="text-black">Duration:</span>
            <div>
              <input
                className="w-full border border-black p-1 outline-none"
                required
                {...register("duration")}
              />
            </div>
            <span className="text-black">Location:</span>
            <div>
              <input
                className="w-full border border-black p-1 outline-none"
                {...register("location")}
              />
            </div>
            <span className="text-black">Image URL:</span>
            <div>
              <input
                className="w-full border border-black p-1 outline-none"
                {...register("img")}
              />
            </div>
            <span className="text-black">Visiting Area:</span>
            <div>
              <input
                className="w-full border border-black p-1 outline-none"
                {...register("visit")}
              />
            </div>
            <span className="text-black">Description:</span>
            <div>
              <textarea
                className="w-full border border-black outline-none"
                {...register("description")}
              />
            </div>
            <div className="w-96 text-center mt-5 mx-auto">
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

export default AddNewLocation;
