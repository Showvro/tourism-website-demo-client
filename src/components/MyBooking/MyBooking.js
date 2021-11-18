import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyBooking = () => {
  //Use Hook
  const [myBookings, setMyBookings] = useState([]);
  const { user } = useAuth();

  // Get all bookings of the current user
  const url = `https://stark-taiga-87201.herokuapp.com/bookings?email=${user.email}`;
  const handleDelete = (id) => {
    const answer = window.confirm(`Are you want to delete ${id}?`);

    //If user confirm delete, delete the booking
    if (answer) {
      const url2 = `https://stark-taiga-87201.herokuapp.com/bookings/${id}`;
      // console.log(id);
      axios.delete(url2, { id }).then((res) => {
        // console.log(res.data);
        if (res.data.deletedCount) {
          alert("Successfully deleted");
          const remainingService = myBookings.filter(
            (booking) => booking._id !== id
          );
          setMyBookings(remainingService);
        }
      });
    }
  };
  useEffect(() => {
    axios.get(url).then((res) => {
      setMyBookings(res.data);
    });
  }, [url]);
  // console.log(myBookings);
  return (
    <div>
      {myBookings.length ? (
        <div>
          <img
            src="https://i.ibb.co/nDgP2QM/undraw-Booking-re-gw4j.png"
            alt="booking"
            className="my-3 object-center object-cover w-100 mx-auto"
          ></img>
          <h1 className="text-center font-bold text-2xl mt-7 mb-12">
            Bookings of{" "}
            <span className="text-red-500"> {user.displayName} </span>
          </h1>
          <div className="mb-10">
            <div className="flex flex-col">
              <div className="overflow-x-auto lg:mx-auto">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table>
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Booking ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody as="div">
                        {myBookings.map((booking) => {
                          return (
                            <tr key={booking._id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {booking._id}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                {booking.eventName}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                {booking.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {booking.status}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                  className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-2"
                                  onClick={() => handleDelete(booking._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:py-5 lg:py-32">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around">
            <img
              src="https://i.ibb.co/cghBN4X/undraw-not-found-60pq.png"
              className="object-cover object-center"
              alt="not found"
            ></img>
            <div className="p-20">
              <h1 className="text-blue-500 text-left px-5 font-bold text-2xl mt-5">
                SORRY! YOU HAVE NO BOOKING (^_^)
              </h1>
              <p className="text-xl font-bold text-justify p-5">
                Please check your email and make sure you have booked a service.
                If you have not booked a service, please contact us.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBooking;

/* 

*/
