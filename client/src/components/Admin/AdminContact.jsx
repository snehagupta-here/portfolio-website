import React from 'react'
import "../../css/AdminContact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark,faPlus,faPen} from '@fortawesome/free-solid-svg-icons';
import xmark from "../../images/xmark.png";
import pen from "../../images/pen.png";
function AdminContact() {
  return (
    <>
    <div  id="contact" className='flex flex-col'>

   
    <h1 className='font-[700] mt-[70px] text-[25px] '>Contact</h1>
      <div  className='w-[1200px] h-[434px] shadows mt-[50px]  rounded-[20px] flex flex-col justify-evenly content-between'>
        <div className='flex justify-evenly'><div className='flex flex-col'><h1 className='text-[15px] font-[600]'>Email</h1><div className='h-[54px] w-[333px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>somemail@gmail.com<img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div></div>
        <div><h1 className='text-[15px] font-[600]'>Instagram</h1><div className='h-[54px] w-[333px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>somemail@gmail.com <img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div></div>
        <div><h1 className='text-[15px] font-[600]'>Linkedin</h1><div className='h-[54px] w-[333px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>somemail@gmail.com<img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div></div>
        </div>
        <div className='flex'> 
         <div className='flex flex-col ml-11'><h1 className='text-[15px] font-[600]'>Twitter</h1><div className='h-[54px] w-[333px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>somemail@gmail.com<img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div></div>
         </div>
        <div className='flex justify-evenly items-end mr-4'>  
        <div className='flex flex-col'><h1 className='text-[15px] font-[600]'>Message Section</h1><div className='h-[54px] w-[192px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>Name<img src={pen} className='w-[22px] h-[22px] inline ml-16 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div></div>
        <div className='h-[54px] w-[192px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>Email<img src={pen} className='w-[22px] h-[22px] inline ml-16 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div>
        <div className='h-[54px] w-[192px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>Message<img src={pen} className='w-[22px] h-[22px] inline ml-12 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div>
        <button className='flex items-center justify-center w-[323px] h-[54px] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Section</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default AdminContact
