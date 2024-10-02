// import React from 'react'
import { dummyData } from '../../utils/data';

const SalarySlip = () => {
  const clickHandler = (url, fileName) => {
    fetch(url)
      .then((response) => {
        response.blob().then((blob) => {
          // Creating new object of the file
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = fileName;
          alink.click();
        });
      });
  };
  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">Salary Slip</h2>
        <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
        {dummyData.length != 0 ? 
            (
                <div className="container mx-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-[#5846F9] text-white border-b-4 border-white">
                            <tr>
                                <th className="px-4 py-3">Month</th>
                                <th className="px-4 py-3">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                        {dummyData.map((data, index) => (
                            <tr key={index} className="bg-[#CADFFF] border-b-4 border-white">
                            <td className="px-4 py-2 flex justify-center items-center">
                                <div className='text-2xl'>
                                    {data.month}
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <div className='flex justify-center items-center'>
                                    <button
                                    onClick={() => clickHandler(data.url, `${data.month}.jpg`)}
                                    className="px-12 py-2 bg-[#5846F9] text-white rounded-lg hover:bg-[#402cf7] focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                                    >
                                        Download
                                    </button>
                                </div>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) 
            : 
            (
                <div className='flex justify-center items-center mt-52 text-4xl'>
                    Nothing to show :)
                </div>
            )
        }
            
    </div>
  )
}

export default SalarySlip