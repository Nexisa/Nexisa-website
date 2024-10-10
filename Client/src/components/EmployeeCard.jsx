// import React from 'react';
import { GrUpload } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const EmployeeCard = ({ employee, onUploadClick, onDeleteClick }) => {
  const totalLeave = 18;
  const remainingLeave = () => {
    return totalLeave - employee?.leaveDaysTaken;
  };

  return (
    <div className="border rounded-2xl p-4 shadow-lg flex flex-col md:flex-row justify-between gap-6 md:gap-10 items-center bg-[#CADFFF]">
      {/* Left Section - Profile Picture and Buttons */}
      <div className="flex flex-col items-center md:w-[30%]">
        <img
          src={employee.profilePicture}
          alt={`${employee.name}'s profile`}
          className="w-32 h-32 md:w-40 md:h-40 rounded-2xl mb-4 object-cover" // Responsive profile picture
        />
        <div className="mt-4 flex flex-col gap-3">
          <button
            onClick={onUploadClick}
            className="px-4 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4] flex items-center justify-center gap-2"
          >
            <GrUpload />
            Upload Slip
          </button>
          <button
            onClick={onDeleteClick}
            className="px-4 py-2 bg-[#ff4d4d] text-white rounded-full hover:bg-[#e63939] flex items-center justify-center gap-2"
          >
            <MdDelete />
            Delete
          </button>
        </div>
      </div>

      {/* Right Section - Employee Details */}
      <div className="w-full md:w-[70%] space-y-4">
        <p className="text-xl md:text-2xl font-bold text-center md:text-left">
          {employee.name}
        </p>
        <p className="text-gray-600 text-center md:text-left">
          {employee.designation}
        </p>

        {/* Responsive fields */}
        <div className="bg-[#E4E9F1] px-3 py-2 rounded-lg">
          <p className="text-gray-700 font-medium">Employee ID: {employee.employeeId}</p>
        </div>
        <div className="bg-[#E4E9F1] px-3 py-2 rounded-lg">
          <p className="text-gray-700 font-medium">Email: {employee.email}</p>
        </div>
        <div className="bg-[#E4E9F1] px-3 py-2 rounded-lg">
          <p className="text-gray-700 font-medium">Phone: {employee.phone}</p>
        </div>
        <div className="bg-[#E4E9F1] px-3 py-2 rounded-lg">
          <p className="text-gray-700 font-medium">Remaining Leave: {remainingLeave()}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
