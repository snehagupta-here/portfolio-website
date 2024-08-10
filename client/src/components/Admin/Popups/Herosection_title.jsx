import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import pen from "../../../images/pen.png";
export default function Herosection_title(props) {
  const [refresh, setRefresh] = useState(false); // State to trigger re-render
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(props.title.title); // Ensure initial title is set

  const handleUpdate = async () => {
    try {
      console.log("Updating title:", title);
    await updateTitle();
  
       setRefresh(!refresh); // Trigger re-render
      setShowModal(false); // Close the modal after updating
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  
  async function updateTitle() {
    const data = { title };
    console.log("Sending updated title:", title);
    console.log("Title ID:", props.title._id);   
    const response = await fetch(`http://localhost:5000/api/Hero/titles/edit/${props.title._id}`, {
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
    console.log('Update successful:', result.title);
    //  console.log("props title:",props.title);
    // props.setTitle((prevItem) => ({
    //   ...prevItem,
    //   title: result.title
    // }));
    props.setTitle((prevItems) =>
      prevItems.map((item) =>
        item._id === props.title._id ? { ...item, title: result.title } : item
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
      <img src={pen} onClick={() => setShowModal(true)} className="w-[22px] h-[22px] mr-2" />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-[1000px] rounded-[20px] my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center text-black flex-1">
                  Hero Section
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => { setShowModal(false); setTitle(props.title.title); }}
                >
                  <IoClose />
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-black text-lg font-bold leading-relaxed">
                  Title
                </h4>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#EDEDED] text-black border border-[#006BC2] rounded-xl pl-4 py-4"
                  style={{ textAlign: "left" }}
                />
              </div>
              <div className="flex items-center justify-end p-6">
                <button
                  className="bg-[#006BC2] text-white active:bg-blue-800 w-[166px] text-sm py-4 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
