import React from 'react';

const FormDonation = () => {
  return (
    <div className="w-full max-w-[95%] mt-10 mx-auto p-4 py-6 bluebg rounded-lg shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Full Name Input */}
        <div className="flex flex-col">
          <label className="text-white text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded-md bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label className="text-white text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          />
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col">
          <label className="text-white text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-2 rounded-md bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          />
        </div>

        {/* Select Cause Dropdown */}
        <div className="flex flex-col">
          <label className="text-white text-sm mb-1">Select Cause</label>
          <select className="p-2 rounded-md bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full">
            <option>Education</option>
            <option>Health</option>
            <option>Environment</option>
          </select>
        </div>
      </div>

      {/* Amount and Button Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="flex flex-col lg:col-span-1">
          <label className="text-white text-sm mb-1">Amount</label>
          <input
            type="number"
            placeholder="Amount"
            className="p-2 rounded-md bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          />
        </div>
        <div className="flex items-end">
          <button className="w-full p-2 bg-yellow-400 text-blue-900 font-bold rounded-md hover:bg-yellow-500 transition">
            Send Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormDonation;