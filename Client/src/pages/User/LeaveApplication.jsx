import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';
import axios from '../../api/axios'

const LeaveApplication = () => {
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const leaveData = {
        reason,
        startDate,
        endDate
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/employee/leave', leaveData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request header
        },
      });
      console.log(response.data);  // Log response for debugging
      
      // Clear form fields after successful submission
      setReason('');
      setStartDate(null);
      setEndDate(null);
      
      // Optionally handle success (e.g., display a success message)
    } catch (error) {
      console.error(error);  // Log error for debugging
      // Optionally handle error (e.g., display an error message)
    }
  };

  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">Leave Application</h2>
        <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
        <div className="flex justify-center items-center w-11/12 mx-auto mt-10">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-lg rounded-lg p-8 w-full"
            >
                {/* Leave Reason */}
                <textarea name='reason'
                className="w-full md:h-32 h-48 p-4 mb-8 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-[#5846F9] shadow-custom placeholder-gray-400"
                placeholder="Leave Reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                />

                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-center mb-8 md:w-7/12 w-11/12 mx-auto">
                    {/* From Date Picker */}
                    <div className='bg-[#5846F9] relative px-2 py-2 md:w-[30%] rounded-2xl'>
                        <div className='pl-5 text-white'>
                            <label htmlFor="fromdate">From</label>
                        </div>
                        <div>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="DD/MM/YYYY"
                                minDate={new Date()}
                                name='startDate'
                                className='w-[70%] pl-3 bg-[#5846F9] rounded-b-2xl text-white 
                                placeholder-white focus:outline-none'
                            />
                            <FiCalendar className='absolute right-2 bottom-3 z-50 text-white text-4xl'/>
                        </div>
                    </div>

                    {/* To Date Picker */}
                    <div className='bg-[#5846F9] relative px-2 py-2 md:w-[30%] rounded-2xl'>
                        <div className='pl-5 text-white'>
                            <label htmlFor="todate">To</label>
                        </div>
                        <div>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="DD/MM/YYYY"
                                minDate={startDate}
                                name='endDate'
                                className='w-[70%] pl-3 bg-[#5846F9] rounded-b-2xl text-white 
                                placeholder-white focus:outline-none'
                            />
                            <FiCalendar className='absolute right-2 bottom-3 z-50 text-white text-4xl'/>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                <button 
                    type="submit"
                    className="px-12 py-2 bg-[#5846F9] text-white rounded-lg hover:bg-[#402cf7] focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LeaveApplication;