import React from "react";



const InquiryCard = (props) => {
  return (
    <div className={`bg-white text-black rounded-xl p-10 shadow-lg pb-24  border border-gray-200 
                shadow-md shadow-gray-400 ${props.className}`}>
      <form className="grid gap-4">
        <div className="grid grid-cols-2 gap-4 mt-15">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3E6EB4]" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3E6EB4]" 
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Phone Number" 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3E6EB4]" 
          />
          <input 
            type="text" 
            placeholder="Company Name" 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3E6EB4]" 
          />
        </div>
        <input 
          type="text" 
          placeholder="Inquiry Type" 
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3E6EB4] w-full" 
        />
        <textarea 
          placeholder="Message" 
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3E6EB4] w-full h-44"
        />
        <button 
          type="submit" 
          className="bg-[#3E6EB4] text-white py-3 rounded-full w-full hover:bg-[#3E6EB4] transition-colors"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

export default InquiryCard;
