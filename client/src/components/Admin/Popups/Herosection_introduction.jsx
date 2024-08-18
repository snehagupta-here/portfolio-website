import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import pen1 from "../../../images/pen1.png";
export default function Herosection_title(props) {
  const [showModal, setShowModal] = useState(false);
  const [introduction, setIntroduction] = useState(props.introduction); // State to hold the introduction text

  const handleUpdate = async () => {
    // Implement your update logic here (e.g., send the updated introduction to an API)
    console.log("Updated Introduction:", introduction);
    await Cnpost();
    setShowModal(false); // Close the modal after updating
  };
  async function Cnpost(){
   const data =  {introduction}
    const response = await fetch('https://portfolio-website-48v8.onrender.com/api/Hero/introduction/updateintroduction', {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),   
    });
    if(response.ok){
           const result = await response.json();
           console.log("updated intro:",result.introduction);
           props.setIntroduction(result.introduction);
    }
  }

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        introduction_update
      </button> */}
      <img src={pen1} onClick={()=>setShowModal(true)} className="w-[22px] h-[22px] " />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-[1000px] rounded-[20px] my-6 mx-auto max-w-3xl">
            {/* Modal content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Modal header */}
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center flex-1">
                  Hero Section
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={()=>setShowModal(false)}
                >
                  <IoClose />
                </button>
              </div>
              {/* Modal body */}
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Introduction
                </h4>
                {/* Textarea for entering the introduction */}
                <textarea
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  className="w-full h-[146px] bg-[#EDEDED] border border-[#006BC2] rounded-xl pl-4 py-3 text-sm text-gray-700 resize-none "
                  placeholder="Enter introduction"
                  style={{ textAlign: "left" }}
                />
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-6">
                <button
                  className="bg-[#006BC2] text-white active:bg-blue-800 w-[166px] text-sm py-3 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
