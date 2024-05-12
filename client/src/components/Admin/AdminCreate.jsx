import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
function AdminCreate() {
  return (
    <>
      <div className='w-[1200px] bg-[#006BC2] mb-[100px] h-[244px] mt-[100px] rounded-[20px]  flex justify-center items-center'>
        <button className='bg-white w-[344px] h-[54px] text-[#006BC2] rounded-[10px] font-[600]'>  <FontAwesomeIcon icon={faPlus} />  Create Section</button>
      </div>
    </>
  )
}

export default AdminCreate
