import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageBooking = () => {
  const [orders, setOrders] = useState([]);
  const url = "https://stark-taiga-87201.herokuapp.com/bookings";
  useEffect(() => {
    axios.get(url).then((res) => {
      setOrders(res.data);
    });
  }, []);
  // console.log(orders);

  const handleDelete = (id) => {
    const answer = window.confirm(`Are you want to delete ${id}?`);
    if (answer) {
      const url2 = `https://stark-taiga-87201.herokuapp.com/bookings/${id}`;
      // console.log(id);
      axios.delete(url2, { id }).then((res) => {
        // console.log(res.data);
        if (res.data.deletedCount) {
          alert("Successfully deleted.");
          const remainingService = orders.filter((order) => order._id !== id);
          setOrders(remainingService);
        }
      });
    }
  };
  const handleConfirm = (id) => {
    const url3 = `https://stark-taiga-87201.herokuapp.com/bookings/${id}`;
    axios.post(url3, id).then((res) => {
      if (res.data.modifiedCount) {
        axios.get(url).then((res) => setOrders(res.data));
      }
    });
  };

  return (
    <div className="mt-10 mb-96">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <h1 className="text-center font-bold text-2xl mb-10 text-red-500">
                Manage All Booking
              </h1>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody as="div">
                  {orders.map((order) => {
                    return (
                      <tr key={order._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order._id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.eventName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.status !== "Approved" && (
                            <button
                              className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              onClick={() => handleConfirm(order._id)}
                            >
                              Confirm
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(order._id)}
                            className="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
  );
};

export default ManageBooking;
