import React, { useState,useEffect } from "react";
import { IoClose } from "react-icons/io5";
import pen1 from "../../../images/pen1.png";
export default function Herosection_title(props) {
  const [showModal, setShowModal] = useState(false);
  const [bio, setBio] = useState(props.bio); // State to hold the bio text
  useEffect(() => {
    setBio(props.bio);
  }, [props.bio]);
  const handleUpdate = () => {
    // Implement your update logic here (e.g., send the updated bio to an API)
    console.log("Updated Bio:", bio);
    setShowModal(false); // Close the modal after updating
    aboutbioadd()
  };
  async function aboutbioadd(){
    // const data = new FormData();
    // data.set('bio',bio);
    const data = {bio};
    // ev.preventDefault();
    const response = await fetch('http://localhost:5000/api/About/bio/', {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),  
     
    });
    if(response.ok){
      const bio = await response.json();
        console.log("bio added");
        console.log(bio);

        props.setBio(bio.bio);
    }
  }
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update Bio
      </button> */}
      <img onClick={()=>setShowModal(true)} src={pen1} className="h-[22px] w-[22px] mr-16" />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-[1000px] rounded-[20px] my-6 mx-auto max-w-3xl">
            {/* Modal content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Modal header */}
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center flex-1">
                  About
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => {setShowModal(false); setBio(props.bio)}}    //when it is closed, the bio is resetted to the initial value
                >
                  <IoClose />
                </button>
              </div>
              {/* Modal body */}
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Bio
                </h4>
                {/* Textarea for entering the bio */}
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full h-32 bg-gray-100 border border-[#006BC2] rounded-xl pl-4 py-3 text-sm text-gray-700 resize-none"
                 
                />
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-6">
                <button
                  className="bg-[#006BC2] text-white w-[166px] active:bg-blue-800 text-sm py-3 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
