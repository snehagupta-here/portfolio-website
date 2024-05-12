import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Herosection_title() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(""); // State to hold the input value

  const handleUpdate = () => {
    // Implement your update logic here (e.g., send the updated name to an API)
    console.log("Update title:", title);
    setShowModal(false); // Close the modal after updating
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        title_update
      </button>
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/* Modal content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Modal header */}
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center flex-1">
                  Hero Section
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <IoClose />
                </button>
              </div>
              {/* Modal body */}
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Title
                </h4>
                {/* Text input for entering the first name */}
                
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#EDEDED] border border-[#006BC2] rounded-xl px-40 py-4 "
                  placeholder="Enter title"
                  style={{ textAlign: "left" }}
                />
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-6 ">
                
                <button
                  className="bg-[#006BC2] text-white active:bg-blue-800 text-sm py-4 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                  type="button"
                  onClick={handleUpdate}
                >
                 Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      )}
    </>
  );
}
