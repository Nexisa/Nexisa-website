import { useState, useEffect } from 'react';
import axios from '../../api/axios';

const LeaveApplications = () => {
  const [leaves, setLeaves] = useState([]);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all leave applications
  useEffect(() => {
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

    fetchLeaves();
  }, []);

  // Open Modal and Fetch Leave Details by ID - yet to be done
  const handleDetailsClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/leaveById?id=${id}`);
      setSelectedLeave(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching leave details:', error);
    }
  };

  // Handle Accept or Reject Leave Application - yet to be done
  const handleStatusChange = async (status) => {
    try {
      const response = await axios.post('http://localhost:3000/api/changeStatus', {
        id: selectedLeave.id,
        status: status,
      });
      console.log(response.data);
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
      <div className="space-y-4 w-11/12 mx-auto">
        {leaves.map((leave) => (
          <div key={leave.id} className="flex justify-between items-center p-4 bg-blue-200 rounded-lg shadow">
            <span className='text-xl'>{leave.user.name}</span>
            <button
              onClick={() => handleDetailsClick(leave.id)}
              className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4]"
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Leave Details - not done yet */}
      {isModalOpen && selectedLeave && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Leave Details</h3>
            <p><strong>Reason:</strong> {selectedLeave.reason}</p>
            <p><strong>Start Date:</strong> {new Date(selectedLeave.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(selectedLeave.endDate).toLocaleDateString()}</p>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => handleStatusChange('accept')}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Accept
              </button>
              <button
                onClick={() => handleStatusChange('reject')}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Reject
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveApplications;
