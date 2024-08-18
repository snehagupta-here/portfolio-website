import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import pen from "../../../images/pen.png";
export default function Herosection_skillname(props) {
  const [showModal, setShowModal] = useState(false);
  const [skill, setSkill] = useState(props.skill.skill); // State to hold the skill name

  const handleUpdate = async () => {
    try {
      console.log("Updating title:", skill);
    await updateSkill();
  
      //  setRefresh(!refresh); // Trigger re-render
      setShowModal(false); // Close the modal after updating
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  
  async function updateSkill() {
    const data = { skill };
    console.log("Sending updated skill:", skill);
    console.log("Skill ID:", props.skill._id);   
    const response = await fetch(`https://portfolio-website-48v8.onrender.com/api/About/skills/edit/${props.skill._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
  
    const result = await response.json();
    console.log('Update successful:', result.skill);
    //  console.log("props title:",props.title);
    // props.setTitle((prevItem) => ({
    //   ...prevItem,
    //   title: result.title
    // }));
    props.setSkill((prevItems) =>
      prevItems.map((item) =>
        item._id === props.skill._id ? { ...item, skill: result.skill } : item
      )
    );
    // props.setTitle(props.title.title:result.title);
    // if (result.title) {
    //   setTitle(result.title); // Update state with the new title
    //   console.log("State updated to:", result.title);
    // }
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
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
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
