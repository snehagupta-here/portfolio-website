import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import Create_heading from "./Popups/Create_heading";
function AdminCreate() {
  return (
    <>
    <div id="create" className='flex flex-col'>
    <h1 className='font-[700] mt-[70px] text-[25px] '>Create New Section</h1>
      <div className='w-[1200px] bg-[#006BC2] mb-[100px] mt-[50px] h-[244px] mt-[100px] rounded-[20px]  flex justify-center items-center'>
        {/* <button className='bg-white w-[344px] h-[54px] text-[#006BC2] rounded-[10px] font-[600]'>  <FontAwesomeIcon icon={faPlus} />  Create Section</button> */}
    <Create_heading />
      </div>
      </div>
    </>
  )
}

export default AdminCreate
