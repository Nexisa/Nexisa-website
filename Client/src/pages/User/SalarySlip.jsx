// import React from 'react'
import asham from '../../assets/Team/Asham.jpg'

const SalarySlip = () => {
  const clickHandler = () => {
    fetch(`${asham}`).then((response) => {
        response.blob().then((blob) => {
            // Creating new object of JPG file
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = `${asham}`;
            alink.click();
        });
    });
  }
  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">Salary Slip</h2>
        <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
        <div className='flex flex-col md:flex-row md:w-9/12 gap-16 md:gap-0 mx-auto mt-28 md:mt-16'>
            <div className='md:w-1/2 w-11/12 mx-auto flex justify-center items-center'>
                <img src={asham} alt="salary slip" className='md:w-9/12 rounded-3xl object-contain'/>
            </div>
            <div className='md:w-1/2 w-11/12 mx-auto flex justify-center items-center'>
                <button className='bg-[#5846F9] px-8 py-2 text-2xl rounded-2xl text-white'
                onClick={clickHandler}>
                    Download JPG
                </button>
            </div>
        </div>
    </div>
  )
}

export default SalarySlip