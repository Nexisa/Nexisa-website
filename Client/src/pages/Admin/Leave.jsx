import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { RxCross2 } from "react-icons/rx";

const LeaveApplications = () => {
  const [leaves, setLeaves] = useState([]);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all leave applications
  const fetchLeaves = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/admin/leave-applications',{
            headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
            },
        });
        console.log(response.data.leaveApplications)
        setLeaves(response.data.leaveApplications); // Assuming response.data is an array of leave applications
      } catch (error) {
        console.error('Error fetching leave applications:', error);
      }
    };
  useEffect(() => {

    fetchLeaves();
  }, []);

  // Open Modal and Fetch Leave Details by ID - yet to be done
  const handleDetailsClick = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`/admin/leave-applications/${id}`, {
            headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
            },
        });
      console.log(response.data.leaveApplication)
      setSelectedLeave(response.data.leaveApplication);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching leave details:', error);
    }
  };

  // Handle Accept or Reject Leave Application - yet to be done
  const handleStatusChange = async (status, id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('/admin/manage-leave', {
        leaveId: id,
        status: status,
      }, {
          headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request header
        },
      });
      console.log(response.data);
      fetchLeaves();
      setIsModalOpen(false); // Close modal after success
      setSelectedLeave(null); // Clear selected leave
    } catch (error) {
      console.error(`Error changing status to ${status}:`, error);
    }
  };

  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">Leave Applications</h2>
      <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
      
      {/* Leave Applications Table */}
      {
        leaves.length != 0 ? (
          <div className="space-y-4 w-11/12 mx-auto">
            {leaves.map((leave) => (
              <div key={leave.id} className="flex justify-between items-center p-4 bg-[#CADFFF] rounded-lg shadow">
                <span className='text-xl'>{leave.user.name}</span>
                <button
                  onClick={() => handleDetailsClick(leave._id)}
                  className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4]"
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center text-3xl h-full'>
            No Active Leave Application 
          </div>
        )
      }

      {/* Modal for Leave Details - not done yet */}
      {isModalOpen && selectedLeave && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
            <div className='relative'>
              <h3 className="text-xl text-center font-bold mb-4">Leave Details</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-0 right-1 px-4 py-2 bg-[#CADFFF] rounded text-xl"
              >
                <RxCross2 />
              </button>
            </div>
            <br />
            <div className='space-y-5'>
              <p className='bg-[#CADFFF] py-2 px-2 mx-8 rounded-lg text-center'><strong>Reason:</strong> {selectedLeave.reason}</p>
              <div className='flex gap-6 px-8'>
                <p className='bg-[#CADFFF] w-1/2 py-2 px-2 rounded-lg text-center'><strong>Start Date:</strong> {new Date(selectedLeave.startDate).toLocaleDateString()}</p>
                <p className='bg-[#CADFFF] w-1/2 py-2 px-2 rounded-lg text-center'><strong>End Date:</strong> {new Date(selectedLeave.endDate).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="flex justify-between w-7/12 mx-auto space-x-4 mt-6">
              <button
                onClick={() => handleStatusChange('approved', selectedLeave._id)}
                className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4]"
              >
                Accept
              </button>
              <button
                onClick={() => handleStatusChange('rejected', selectedLeave._id)}
                className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4]"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveApplications;
