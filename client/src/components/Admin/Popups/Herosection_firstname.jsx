// import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import React from 'react'
import { useState } from 'react';
import "../../../css/modal.css";
import pen1 from "../../../images/pen1.png";
export default function Herosection_firstname(props) {
  const [showModal, setShowModal] = useState(false);
 const [firstname,setFirstname] = useState(props.firstname);
  const handleUpdate = async () => {
    // Implement your update logic here (e.g., send the updated name to an API)
    console.log("Updated First Name:", firstname);
    await Cnpost();
    setShowModal(false); // Close the modal after updating
  };
  async function Cnpost(ev){
    const data = {firstname};
    // data.set('firstName',firstname);
    console.log("sending firstname",firstname);
    // ev.preventDefault();
    const response = await fetch('https://portfolio-website-48v8.onrender.com/api/Hero/firstname/updatefirstname', {//function to be defined
        method:'PUT',     
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),   
    });
    // if(response.ok){
    //     setRedirect(true);
    // }
    if(response.ok){
      console.log("response is received");
       let result = await response.json();
      console.log(result);
       props.setFirstname(result);
    }
  }
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
        // onClick={onClose}
      >
        firstname_update */}
      {/* </button> */}
      <img src={pen1}   onClick={() => setShowModal(true)} className='w-[22px] h-[22px] inline' />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-[1000px] rounded-[20px] my-6 mx-auto max-w-3xl">
            {/* Modal content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Modal header */}
              <div className="flex items-center justify-between p-5">
                <h3 className="text-[25px] font-bold text-center flex-1">
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
                  First Name
                </h4>
                {/* Text input for entering the first name */}
                
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="w-full bg-[#EDEDED]  border border-[#006BC2] rounded-xl pl-4 py-4 "
                  placeholder="Enter first name"
                  style={{ textAlign: "left" }}
                />
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-end p-6 ">        
                <button
                  className="bg-[#006BC2] text-white active:bg-blue-800 text-sm py-4 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[166px]  "
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

// export default function Herosection_firstname(props) {
//   const [firstName, setFirstName] = useState("");
//   // return  (props.trigger)?(
//   //   <div className='bg-white text-black text-3xl'>
//   //     <h2>hi i am a popup</h2>
//   //     <button onClick={()=>props.setTrigger(false)}>close</button>
//   //   </div>
//   // ):"";
//   // const [modal,setModal] =useState(false);
//   // const toggleModal = () =>{
//   //   props.setModal(!props.modal);
//   //   console.log(props.modal);
//   // }
//   if(props.modal) {
//     console.log(props.modal);
//     document.body.classList.add('active-modal');
//   } else {
//     console.log(props.modal);
//     document.body.classList.remove('active-modal');
//   }
  
//   return (      
//     <>
//         {/* <button onClick={toggleModal} className="w-[100px] h-[100px] bg-black text-white">
//         Open
//       </button> */}
//       {/* {props.modal && (
//         <div className="modal">
//           <div onClick={toggleModal} ></div>
//           <div className="modal-content">
          
//             <button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </button>
//           </div>
//         </div>
//       )} */}
//       {props.modal && (
//         <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//           <div className="relative w-auto my-6 mx-auto max-w-3xl">
//             {/* Modal content */}
//             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//               {/* Modal header */}
//               <div className="flex items-center justify-between p-5">
//                 <h3 className="text-3xl font-bold text-center flex-1">
//                   Hero Section
//                 </h3>
//                 <button
//                   className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                   onClick={props.toggle}
//                 >
//                   <IoClose />
//                 </button>
//               </div>
//               {/* Modal body */}
//               <div className="relative p-6 flex-auto">
//                 <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
//                   First Name
//                 </h4>
//                 {/* Text input for entering the first name */}
                
//                 <input
//                   type="text"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className="w-full bg-[#EDEDED] border border-[#006BC2] rounded-xl px-40 py-4 "
//                   placeholder="Enter first name"
//                   style={{ textAlign: "left" }}
//                 />
//               </div>
//               {/* Modal footer */}
//               <div className="flex items-center justify-end p-6 ">
                
//                 <button
//                   className="bg-[#006BC2] text-white active:bg-blue-800 text-sm py-4 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
//                   type="button"
//                   onClick={props.toggle}
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {props.setModal && (
//         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//       )}
//     </>
//   )
// }


