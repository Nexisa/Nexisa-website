// import React from 'react';
import { GrUpload } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const EmployeeCard = ({ employee, onUploadClick, onDeleteClick }) => {
  return (
    <div className="border rounded-2xl p-4 shadow-lg flex justify-between gap-4 items-center bg-[#CADFFF]">
      <div>
        <img
          src={employee.profilePicture}
          alt={`${employee.name}'s profile`}
          className="md:h-40 h-32 rounded-2xl mb-4" // Profile picture styling
        />
        <div className="mt-4 flex flex-col gap-5">
          <button
            onClick={onUploadClick}
            className="md:px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4] flex gap-1 justify-center items-center"
          >
            <GrUpload />
            Upload Slip
          </button>
          <button
            onClick={onDeleteClick}
            className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4] flex justify-center gap-1 items-center"
          >
            <MdDelete />
            Delete
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600 bg-[#E4E9F1] px-2 rounded-lg py-2">
          Name: {employee.name}
        </p>
        <p className="text-gray-600 bg-[#E4E9F1] px-2 rounded-lg py-2">
          Employee ID: {employee.employeeId}
        </p>
        <p className="text-gray-600 bg-[#E4E9F1] px-2 rounded-lg py-2">
          Email: {employee.email}
        </p>
        <p className="text-gray-600 bg-[#E4E9F1] px-2 rounded-lg py-2">
          Phone: {employee.phone}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
