// import React from 'react';

// eslint-disable-next-line react/prop-types
const EmployeeCard = ({ employee, onUploadClick, onDeleteClick }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col items-center">
      <img 
        src={employee.profilePicture} 
        alt={`${employee.name}'s profile`} 
        className="w-24 h-24 rounded-full mb-4" // Profile picture styling
      />
      <h2 className="text-lg font-semibold">{employee.name}</h2>
      <p className="text-gray-600">Employee ID: {employee.employeeId}</p>
      <p className="text-gray-600">Email: {employee.email}</p>
      <p className="text-gray-600">Phone: {employee.phone}</p>
      <div className="mt-4">
        <button 
          onClick={onUploadClick} 
          className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
        >
          Upload Slip
        </button>
        <button 
          onClick={onDeleteClick} 
          className="bg-red-500 text-white py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
