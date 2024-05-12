import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import picture from "../../images/picture.png";
import up from "../../images/up.png";
import pen from "../../images/pen.png";
import pen1 from "../../images/pen1.png";
import pic from "../../images/pic.png";
function AdminAbout() {
  return (
 <>
  <div className='w-[1200px] pl-8  pt-8 h-[1750px] shadows mt-[100px]  rounded-[20px] content-evenly flex flex-col '>
  <div className='flex flex-col content-evenly '>
                    <h1 className='leading-[24px] font-[600] text-[15px] mb-3'>Bio</h1>
                    <div className='w-[1100px] h-[126px] rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</div>
                </div>
                <div className='flex flex-col mt-8'>
                    <h1 className='font-[600] text-[15px]'>Titles</h1>
                    <div className='flex flex-wrap  justify-between p-8 pl-0'>
                    <div className='h-[54px] w-[286px]  bg-[#006BC2]  mb-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>skill</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>skills</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2]  flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skills</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] mb-3 w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skills</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] mb-3 w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div> 
                        <div className='h-[54px] w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] mb-3 w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2]  flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2] mb-3 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[286px] bg-[#006BC2] flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Skill</h1>
                        <div className='flex  justify-end'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <button className='flex self-start font-[600] items-center justify-center w-[286px] h-[54px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} /> Add Title</button>
                    </div>
                </div>
                <h1 className='leading-[24px] font-[600] text-[15px] mb-4 mt-5 self-start'>Professional Experience</h1>
 
        <div className='flex flex-col w-[1100px] h-[198px] border-[1px] border-[#ACACAC] rounded-[10px] p-5'>

            <div className='flex flex-col'>
                <div className='flex w-full'>
                <h1 className='font-[500] text-[15px] w-1/5'>Abc Position</h1>
            <div className='flex justify-end w-4/5'>
            <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' />
            </div>
                </div>
                <h1 className='text-[#565656] text-[13px] font-[400]'>Some Company Location</h1>
               <h1 className='text-[#565656] text-[13px] font-[400] pb-2'>Oct 2023 - Present</h1>
               </div>
            <div className='flex'>
                <p className='text-[15px] font-[400] leading-[24px] mr-2'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</p>
               
            </div>
        </div>
        <div className='flex flex-col w-[1100px] h-[198px] border-[1px] border-[#ACACAC] rounded-[10px] p-5 mt-8'>
            <div className='flex flex-col'>
                <div className='flex w-full'>
                <h1 className='font-[500] text-[15px] w-1/5 '>Abc Position</h1>
            <div className='flex justify-end w-4/5'>
            <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' />
            </div>
                </div>
               <h1 className='text-[#565656] text-[13px] font-[400]'>Some Company Location</h1>
               <h1 className='text-[#565656] text-[13px] font-[400] pb-2'>Oct 2023 - Present</h1>
               </div>
            <div className='flex '>
                <p className='text-[15px] font-[400] leading-[24px] mr-2'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</p>
            </div>
        </div>
      <button className='flex justify-self-start self-start mt-4 items-center justify-center w-[319px] h-[50px] text-[15px] font-[600] bg-[#EAFCFF] rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Experience</button>
      <div className='flex flex-col '>
        <h1 className='leading-[24px] font-[600] text-[15px] mb-3 mt-8'>Achievements</h1>
        <div className='w-[1100px] h-[126px] rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</div>
        </div> 
        <div className='flex flex-col'>
         <h1 className='text-[15px] font-[600] mt-8 mb-3'>Resume</h1>
         <div className='w-[1100px] justify-between mb-5 items-center flex h-[70px] border-[1px] rounded-[10px] border-[#ACACAC] '>
            <div className='w-full flex items-center'>
            <div className='w-[100px] flex items-center justify-center h-[70px] rounded-l-[10px] bg-[#006BC2] text-white '>PDF</div>
            <div className='flex flex-col content-center ml-4'>
          <h1 className='text-[15px] font-[400]'>Resume Name</h1>
          <h1 className='text-[#727272] text-[14px] font-[400]'>Uploaded on 01/01/2024</h1>
            </div>
            </div>
            <div className='flex justify-end'>
           <img src={up} className='w-[28px] h-[28px] mr-3' />
           <input type="checkbox" checked className='w-[28px] h-[28px] mr-3' />
            </div>
         </div>
         <div className='w-[1100px] justify-between items-center flex h-[70px] border-[1px] rounded-[10px] border-[#ACACAC] '>
            <div className='w-full flex items-center'>
            <div className='w-[100px] flex items-center justify-center h-[70px] rounded-l-[10px] bg-[#006BC2] text-white '>PDF</div>
            <div className='flex flex-col content-center ml-4'>
          <h1 className='text-[15px] font-[400]'>Resume Name</h1>
          <h1 className='text-[#727272] text-[14px] font-[400]'>Uploaded on 01/01/2024</h1>
            </div>
            </div>
            <div className='flex justify-end'>
           <img src={up} className='w-[28px] h-[28px] mr-3' />
           <input type="checkbox" className='w-[28px] h-[28px] mr-3' />
            </div>
         </div>
        </div>
  </div>
 </>
  )
}

export default AdminAbout
