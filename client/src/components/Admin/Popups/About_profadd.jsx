import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export default function Herosection_skillname() {
  const [showModal, setShowModal] = useState(false);
  const [profession, setProfession] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [description, setDescription] = useState("");

  const handleUpdate = () => {
    console.log("Details:", {
      profession,
      organization,
      location,
      isRemote,
      startMonth,
      startYear,
      endMonth,
      endYear,
      currentlyWorking,
      description
    });
    setShowModal(false); // Close the modal after updating
    addproffexp()
  };
  async function addproffexp(ev){
    const data = new FormData();
    data.set('profession',profession);
    data.set('organization',organization);
    data.set('location',location);
    data.set('isRemote',isRemote);
    data.set('startDate',startDate);
    data.set('endDate',endDate);
    data.set('currentlyWorking',currentlyWorking);
    data.set('description',description);
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/api/About/professional-experience/', {
        method:'POST',
        body: data,
        credentials: "include"
    });
    if(response.ok){
        console.log("added");
    }
  }
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Details
      </button> */}
       <button className='flex justify-self-start self-start mt-4 items-center justify-center w-[319px] h-[50px] text-[15px] font-[600] bg-[#EAFCFF] rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]' onClick={()=>setShowModal(true)}> <FontAwesomeIcon icon={faPlus} className='mr-2'  /> Add Experience</button>
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
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  placeholder="Profession"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Organization
                </h4>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Organization"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Location
                </h4>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked={isRemote}
                    onChange={() => setIsRemote(!isRemote)}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Work from Home</label>
                </div>
                <div className="flex items-center mb-4">
                  <label className="text-blueGray-500 text-lg font-bold leading-relaxed mr-2">
                    Start Date:
                  </label>
                  <select
                    value={startMonth}
                    onChange={(e) => setStartMonth(e.target.value)}
                    className="bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mr-2"
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}
                    className="bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Year</option>
                    {[...Array(10)].map((_, i) => {
                      const year = new Date().getFullYear() - i;
                      return <option key={year} value={year}>{year}</option>;
                    })}
                  </select>
                </div>
                <div className="flex items-center mb-4">
                  <label className="text-blueGray-500 text-lg font-bold leading-relaxed mr-2">
                    End Date:
                  </label>
                  <select
                    value={endMonth}
                    onChange={(e) => setEndMonth(e.target.value)}
                    className="bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mr-2"
                    disabled={currentlyWorking}
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                    className="bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    disabled={currentlyWorking}
                  >
                    <option value="">Year</option>
                    {[...Array(10)].map((_, i) => {
                      const year = new Date().getFullYear() - i;
                      return <option key={year} value={year}>{year}</option>;
                    })}
                  </select>
                  <div className="flex items-center ml-4">
                    <input
                      type="checkbox"
                      checked={currentlyWorking}
                      onChange={() => setCurrentlyWorking(!currentlyWorking)}
                      className="mr-2"
                    />
                    <label className="text-sm text-gray-700">Currently Working Here</label>
                  </div>
                </div>
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Description
                </h4>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
