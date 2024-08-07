import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import pen from "../../../images/pen.png";
export default function Herosection_skillname() {
  const [showModal, setShowModal] = useState(false);
  const [skillName, setSkillName] = useState(""); // State to hold the skill name


  async function Cnpost(ev){
    const data = new FormData();
    data.set('skillName',skillName);
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/api/about', {
        method:'POST',
        body: data,
        credentials: "include"
    });
    if(response.ok){
        console.log("data sent");
    }
  }
  const handleUpdate = () => {
    // Implement your update logic here (e.g., send the updated skill name to an API)
    console.log("Updated Skill Name:", skillName);
    setShowModal(false); // Close the modal after updating
    skillupdate();
  };
  async function skillupdate(ev){
    const data = new FormData();
    data.set('skillName',skillName);
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/api/About/skills/edit', {
        method:'POST',
        body: data,
        credentials: "include"
    });
    if(response.ok){
        console.log("updated");
    }
  }

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update Skill Name
      </button> */}
      <img onClick={()=>setShowModal(true)} src={pen} className="h-[22px] w-[22px] mr-2" />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-[1000px] rounded-[20px] my-6 mx-auto max-w-3xl">
            {/* Modal content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Modal header */}
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-black text-center flex-1">
                 About
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
                <h4 className="my-4 text-black text-lg font-bold leading-relaxed">
                  Skills
                </h4>
                {/* Text input for entering the skill name */}
                <input
                  type="text"
                  value={skillName}
                  onChange={(e) => setSkillName(e.target.value)}
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl pl-4 py-3 text-sm text-gray-700 "
                  placeholder="Enter skill name"
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
