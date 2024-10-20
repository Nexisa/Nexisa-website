// import React from 'react';

// eslint-disable-next-line react/prop-types
const LeaveDetailsModal = ({ leave, closeModal }) => {
  if (!leave) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center text-[#2C4964]">Leave Details</h2>
        <div className="flex justify-between mb-2">
            <p><span className="text-lg text-[#2C4964] font-bold">Start Date:</span> {new Date(leave.startDate).toLocaleDateString('en-GB')}</p>
            <p><span className="text-lg text-[#2C4964] font-bold">End Date:</span> {new Date(leave.endDate).toLocaleDateString('en-GB')}</p>
        </div>
        <p className="mb-2"><span className="text-lg text-[#2C4964] font-bold">Reason:</span> <br />{leave.reason}</p>
        <p className="mb-2"><span className="text-lg text-[#2C4964] font-bold">Status:</span> {leave.status === 'pending' ? ("Pending") : (leave.status === 'approved' ? ("Approved") : ("Rejected"))}</p>
        <div className="flex justify-center items-center">
            <button
                className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4]"
                onClick={closeModal}
                >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveDetailsModal;
