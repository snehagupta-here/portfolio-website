import React from 'react'
import "../../css/AdminTestimonial.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import pic from "../../images/pic.png";
import upload from "../../images/upload.png"
import pen from "../../images/pen.png"
import pen1 from "../../images/pen1.png"
function AdminTestimonial() {
  return (
    <>
    <div className='h-[582px] w-[1200px] mt-[100px] shadows rounded-[20px] flex flex-col justify-evenly'>
         <h1 className='font-[600] text-[15px] ml-[55px]'>Few good words about me, from other...</h1>
         <div className='flex justify-evenly'>
            <div className='h-[358px] w-[525px] rounded-[10px] border-[2px] pl-6 pt-4 pb-5'>
                <div className='flex w-full'>
                    <h1 className='font-[500] text-[15px]'>Name</h1>
                    <img src={pen1} className='w-[22px] h-[22px] inline ml-16 mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1 justify-self-end' />
                </div>
                <h2 className='text-[13px] font-[400] text-[#565656] mb-5'>Profession, Company name</h2>
                <div className='flex'>
                    <img src={pic} className='w-[200px] h-[200px] rounded-[20px]' />
                    <h1 className='w-[280px] h-[216px] ml-4 text-[15px] leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur.</h1>
                </div>
                <button className='flex font-[600] items-center justify-center w-[200px] h-[50px] bg-[#EAFCFF] rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <img src={upload} className='h-[20px] w-[20px] mr-2' />Update Picture</button>
            </div>
            <div className='h-[358px] w-[525px] rounded-[10px] border-[2px] pl-6 pt-4 pb-5'>
                <div className='flex w-full'>
                    <h1 className='font-[500] text-[15px]'>Name</h1>
                    <img src={pen1} className='w-[22px] h-[22px] inline ml-16 mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1 justify-self-end' />
                </div>
                <h2 className='text-[13px] font-[400] text-[#565656] mb-5'>Profession, Company name</h2>
                <div className='flex'>
                    <img src={pic} className='w-[200px] h-[200px] rounded-[20px]' />
                    <h1 className='w-[280px] h-[216px] ml-4 text-[15px] leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur.</h1>
                </div>
                <button className='flex font-[600] items-center justify-center w-[200px] h-[50px] bg-[#EAFCFF] rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <img src={upload} className='h-[20px] w-[20px] mr-2' />Update Picture</button>
            </div>
         </div>
         <button className='flex items-center justify-center w-[323px] ml-[55px] h-[54px] bg-[#EAFCFF] rounded-[10px] border-[1px] font-[600] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Testimonial</button>
    </div>
    </>
  )
}

export default AdminTestimonial
