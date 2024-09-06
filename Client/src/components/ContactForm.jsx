// import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="bg-gray-200 p-6 rounded-md shadow-lg w-full max-w-md">
        {/* Your Name Field */}
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
            type="text"
            id="name"
            placeholder="Your Name"
          />
        </div>

        {/* Your Email Field */}
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
            type="email"
            id="email"
            placeholder="Your Email"
          />
        </div>

        {/* Subject Field */}
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
            type="text"
            id="subject"
            placeholder="Subject"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
            id="message"
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