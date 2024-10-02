import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';

const LeaveApplication = () => {
  const [leaveReason, setLeaveReason] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ leaveReason, fromDate, toDate });
    // Implement form submission logic here
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
                <textarea
                className="w-full md:h-32 h-48 p-4 mb-8 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-[#5846F9] shadow-custom placeholder-gray-400"
                placeholder="Leave Reason"
                value={leaveReason}
                onChange={(e) => setLeaveReason(e.target.value)}
                />

                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-center mb-8 md:w-7/12 w-11/12 mx-auto">
                    {/* From Date Picker */}
                    <div className='bg-[#5846F9] relative px-2 py-2 md:w-[30%] rounded-2xl'>
                        <div className='pl-5 text-white'>
                            <label htmlFor="fromdate">From</label>
                        </div>
                        <div>
                            <DatePicker
                                selected={fromDate}
                                onChange={(date) => setFromDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="DD/MM/YYYY"
                                minDate={new Date()}
                                name='fromdate'
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
                                selected={toDate}
                                onChange={(date) => setToDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="DD/MM/YYYY"
                                minDate={fromDate}
                                name='todate'
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
                    className="px-12 py-2 bg-[#5846F9] text-white rounded-lg hover:bg-[#402cf7] focus:outline-none focus:ring-2 focus:ring-blue-500"
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