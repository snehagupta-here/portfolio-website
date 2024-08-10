import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
export default function Herosection_titleadd(props) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(""); // State to hold the input value

  const handleUpdate = async (ev) => {
    // Implement your update logic here (e.g., send the updated name to an API)
    console.log("Add title:", title);
    await  addtitle(ev);
    setShowModal(false); // Close the modal after updating
  };
  const addtitle = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set('title',title);
    console.log(data);
    const response = await fetch('http://localhost:5000/api/Hero/titles/create', {
        method:'POST',
        // headers:{
        //   'Content-Type':'application/json',
        // },
        body:data,
        // credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const result = await response.json();
    console.log('Title added successfully:', result);
    // console.log('skill added successfully:', result);
    console.log("props.title:",props.title);
         props.setTitle([...props.title,result]);
  }

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={props.toggle}
      >
        title_add
      </button> */}
       <button onClick={()=>setShowModal(true)} className='flex self-start font-[600] items-center justify-center w-[296px] h-[54px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Title</button>
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
                  onClick={()=>{setShowModal(false); setTitle("")}}
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
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#EDEDED] border border-[#006BC2] rounded-xl pl-4 py-4 "
                  placeholder="Enter title"
                  style={{ textAlign: "left" }}
                />
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-6 ">
                
                <button
                  className="bg-[#006BC2] text-white w-[141px] active:bg-blue-800 text-sm py-4 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                  type="button"
                  onClick={handleUpdate}
                >
                  Add
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
