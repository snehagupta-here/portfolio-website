import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import pen1 from "../../../images/pen1.png";
export default function ServiceDetailsForm(props) {
  const [showModal, setShowModal] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
   const [service,setService] = useState(props.service);
const [file,setFile] = useState(null);
  const handleUpdate = () => {
    console.log("Service Details:", service);
    setShowModal(false); // Close the modal after updating
    Cnpost();
  };
  async function Cnpost(){
    const data = new FormData();
    // console.log("photo",service.photo);
    // console.log("file",file);
    data.set('serviceName',service.serviceName);
    data.set('description',service.description);
    data.set('photo',service.photo);
    // console.log("description",service.description);
    // Function to handle the file setting
   
    const response = await fetch(`http://localhost:5000/api/Services/works/${props.service._id}`, {
        method:'PUT',
        body: data,
        // credentials: "include"
    });
    if(response.ok){
      const result = await response.json();
        console.log("service added");
        console.log("result.photo",result.photo);
        // console.log('Response content type:', result.photo.headers.get('Content-Type'));
        // console.log('Response headers:', result.photo.headers);
      props.setService((prevItems) =>
        prevItems.map((item) =>
          item._id === props.service._id ? { ...result } : item
        )
      );
    }
  }


  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Service Details
      </button> */}
        <img src={pen1} className="w-[22px] h-[22px] mr-2" onClick={()=>setShowModal(true)} />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center flex-1">
                  Works
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <IoClose />
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Service Name
                </h4>
                <input
                  type="text"
                  value={service.serviceName}
                  onChange={(e) => setService({...service,serviceName:e.target.value})}
                  placeholder="Enter service name"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Photo
                </h4>
                {service.photo && <img src={`http://localhost:5000/${service.photo}`} className="h-[200px] w-[200px]"  />} 
                <br></br>
               <input
  type="file"
 // Set the value attribute to the previously uploaded photo file URL
  onChange={(e) => { setFile(e.target.files[0]); setService({...service, photo: e.target.files[0]})}}
  className="mb-4"
/>
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Description
                </h4>
                <textarea
                  value={service.description}
                  onChange={(e) => setService({...service,description:e.target.value})}
                  placeholder="Enter service description"
                  className="w-full h-32 bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
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
