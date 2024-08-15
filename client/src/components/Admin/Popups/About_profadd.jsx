import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Herosection_skillname(props) {
  const [showModal, setShowModal] = useState(false);
  const [experience, setExperience] = useState({ profession: '',
    organization: '',
    location: '',
    isRemote: false,
    startDate: '',
    endDate: '',
    currentlyWorkinghere: false,
    description: ''});

  const handleUpdate = () => {
    // Additional logic for handling the update
    addExperience();
    setShowModal(false); // Close the modal after updating
  };
    const addExperience = async () =>{
      // console.log("experience",experience);
      const dataToSend = {
        ...experience,
        endDate: experience.currentlyWorkinghere ? null : experience.endDate,
        location:experience.isRemote? null : experience.location
      };
      // console.log(data);
      const response = await fetch('http://localhost:5000/api/About/professional-experience/', {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(dataToSend),
          // credentials: "include"
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const result = await response.json();
      // console.log('Experience added successfully:', result);
         props.setExperience([...props.experience,result]);
           console.log(props.experience);
    }
  return (
    <>
      <button
        className='flex justify-self-start self-start mt-4 items-center justify-center w-[319px] h-[50px] text-[15px] font-[600] bg-[#EAFCFF] rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Experience
      </button>

      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Profession
                </h4>
                <input
                  type="text"
                  value={experience.profession}
                  onChange={(e) => setExperience({ ...experience, profession: e.target.value })}
                  placeholder="Profession"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />

                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Organization
                </h4>
                <input
                  type="text"
                  value={experience.organization}
                  onChange={(e) => setExperience({ ...experience, organization: e.target.value })}
                  placeholder="Organization"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />

                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Location
                </h4>
                <input
                  type="text"
                  value={experience.isRemote===true?"":experience.location}
                  onChange={(e) => setExperience({ ...experience, location: e.target.value })}
                  placeholder="Location"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                  disabled={experience.isRemote} // Disable input if isRemote is true
                />

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked={experience.isRemote}
                    onChange={() => setExperience({ ...experience, isRemote: !experience.isRemote })}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Work from Home</label>
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-blueGray-500 text-lg font-bold leading-relaxed mr-2">
                    Start Date:
                  </label>
                  <input
                    value={experience.startDate}
                    onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
                    className="bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mr-2"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-blueGray-500 text-lg font-bold leading-relaxed mr-2">
                    End Date:
                  </label>
                  <input
                    value={experience.currentlyWorkinghere===true?"":experience.endDate}
                    onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
                    className="bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mr-2"
                    disabled={experience.currentlyWorkinghere}
                  />
                  <div className="flex items-center ml-4">
                    <input
                      type="checkbox"
                      checked={experience.currentlyWorkinghere}
                      onChange={() => setExperience({ ...experience, currentlyWorkinghere: !experience.currentlyWorkinghere })}
                      className="mr-2"
                    />
                    <label className="text-sm text-gray-700">Currently Working Here</label>
                  </div>
                </div>

                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Description
                </h4>
                <textarea
                  value={experience.description}
                  onChange={(e) => setExperience({ ...experience, description: e.target.value })}
                  placeholder="Description"
                  className="w-full h-32 bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                />
              </div>
              <div className="flex items-center justify-end p-6">
                <button
                  className="bg-[#006BC2] text-white active:bg-blue-800 text-sm py-3 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1"
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
