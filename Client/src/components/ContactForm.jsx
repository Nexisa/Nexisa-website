// import React from "react";
import {toast} from 'react-hot-toast'

const ContactForm = () => {

  //using third party api
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ab05c3f0-5a4d-446c-a1bc-7b1e331b2884");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Thanks for Contacting Us")
      console.log("Success", res);
      event.target.reset();
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="bg-gray-200 p-6 rounded-md shadow-lg w-full max-w-md" onSubmit={submitHandler}>
        {/* Your Name Field */}
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
            type="text"
            id="name"
            name="name"  // Add name attribute
            placeholder="Your Name"
          />
        </div>

        {/* Your Email Field */}
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
            type="email"
            id="email"
            name="email"  // Add name attribute
            placeholder="Your Email"
          />
        </div>

        {/* Subject Field */}
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
            type="text"
            id="subject"
            name="subject"  // Add name attribute
            placeholder="Subject"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
            id="message"
            name="message"  // Add name attribute
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-11/12 mx-auto bg-[#5846F9] text-white px-4 py-2 rounded-md hover:bg-[#422ff4] focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;