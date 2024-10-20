import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import LeaveHistoryModal from '../../components/LeaveHistoryModal'

const LeaveDetails = () => {
  const [leaveData, setLeaveData] = useState([]); // Initialize with an empty array
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all leave details
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get('/admin/approved-leaves', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setLeaveData(response.data.leaveApplications);
      })
      .catch(error => console.error('Error fetching leave data:', error));
  }, []);

  // Open modal and fetch specific leave details by ID
  const handleDetailsClick = (leaveId) => {
    const token = localStorage.getItem("token");
    axios.get(`/admin/leave-applications/${leaveId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setSelectedLeave(response.data.leaveApplication);
        setIsModalOpen(true);
      })
      .catch(error => console.error('Error fetching leave details:', error));
  };

  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">
        Leave History
      </h2>
      <div className="bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8"></div>
      {leaveData.length !== 0 ? (
        <div className="space-y-4">
            {leaveData.map((leave, index) => (
            <div key={leave._id} className="flex justify-between items-center bg-[#CADFFF] p-4 rounded-xl">
                <span className='font-bold text-lg'>
                    <span className='mr-4'>{index + 1}.</span> 
                    {leave.user.name}
                </span>
                <button
                    className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4]"
                    onClick={() => handleDetailsClick(leave._id)}
                    >
                    Details
                </button>
            </div>
            ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-52 text-4xl">
          Nothing to show here
        </div>
      )}
      
      
      {/* Modal for leave details */}
      {isModalOpen && (
        <LeaveHistoryModal
          leave={selectedLeave}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default LeaveDetails;
