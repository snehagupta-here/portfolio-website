import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import pen from "../../../images/pen.png";
import axios from "axios";
export default function ContactForm(props) {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
const [contact,setContact] = useState(props.contact);
  const handleUpdate = () => {
    console.log("Email:", email);
    setShowModal(false); // Close the modal after updating
    createorupdateemail();
  };
  async function createorupdateemail(){
    const data=new FormData();
    data.append("types",contact.types);
    data.append("ids",contact.ids);
    const response = await fetch(`http://localhost:5000/api/contact/${props.contact._id}`, {
      method:'PUT',
      body: data,
      // credentials: "include"
    });
    if(response.ok){
      const result = await response.json();
      console.log("updated the email");
        // console.log("email added");
        props.setContact((prev) =>
          prev.map((c) => c._id === props.contact._id ? {...result} : c)
        )
    }
  }
  

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Contact Us
      </button> */}
      <img src={pen} className="w-[22px] h-[22px] mr-2" onClick={()=>{setShowModal(true)}} />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center flex-1 text-black">
                  Contact Us
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <IoClose />
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed text-black">
                type
                </h4>
                <input          
                  value={contact.types}
                  onChange={(e) => setContact({...contact,types:e.target.value})}
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed text-black">
                id
                </h4>
                <input          
                  value={contact.ids}
                  onChange={(e) => setContact({...contact,ids:e.target.value})}
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
              </div>
              <div className="flex items-center justify-end p-6">
                <button
                  className="bg-[#006BC2] text-white active:bg-blue-800 text-sm py-3 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1"
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
