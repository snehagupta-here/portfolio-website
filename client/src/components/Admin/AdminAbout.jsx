import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import picture from "../../images/picture.png";
import up from "../../images/up.png";
import pen from "../../images/pen.png";
import pen1 from "../../images/pen1.png";
import xmark from "../../images/xmark.png";
import About_bio from "./Popups/About_bio";
import About_prof from "./Popups/About_prof";
import About_profadd from "./Popups/About_profadd";
import About_skill from "./Popups/About_skill";
import About_skilladd from "./Popups/About_skilladd";
import About_achievement from "./Popups/About_achievement";
import axios from "axios";
import {useState, useEffect} from "react";
function AdminAbout() {
    const skills = ["skill1","skill2","skill3" ,"skill4","skill5"];
    const [bio,setBio] = useState([]);
    const experiences = [{"position":"ABC Position","location":"some company location","date":"oct 3,2023","desc":"lorem 2"},{"position":"ABC Position","location":"some company location","date":"oct 3,2023","desc":"lorem 2"}]
    // const [experiences,setExperiences] = useState({});
    // useEffect(()=>{
    //        const getBio = async ()=>{
    //         const res = await axios.get("/bio");
    //         setBio(res.data);
    //         console.log(res.data);
    //        }
    //        getBio();
    // },[])
  return (
 <>
 <div id="about" className='flex flex-col'>
      <h1 className='font-[700] mt-[70px] text-[25px] '>About</h1>
  <div  className='w-[1200px] pl-8  pt-8 h-auto pb-16 shadows mt-[50px]  rounded-[20px] content-evenly flex flex-col '>
  <div className='flex flex-col content-evenly '>
    <div className='flex justify-between'>
        
                    <h1 className='leading-[24px] font-[600] text-[15px] mb-3'>Bio</h1>
                    {/* <img src={pen1}  className='w-[22px] h-[22px] inline mr-16' /> */}
                    <About_bio />
    </div>
                    <div className='w-[1100px] h-[126px] rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</div>      
                    {/* { bio.description} */}
                </div>
                <div className='flex flex-col mt-8'>
                    <h1 className='font-[600] text-[15px]'>Skills</h1>
                    <div className='flex flex-wrap justify-between p-8 pl-0'>
                    {skills.map((skill,index)=>{
                        return(
                                  <div className='h-[54px] w-[298px]  bg-[#006BC2]  mb-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                                  <div className='flex w-full'>
                                  <h1 className='text-[15px] min-w-[200px] w-[4/5]'>{skill}</h1>
                                  <div className='flex  justify-end  mr-[2]'>
                                      {/* <img src={pen} key={index} className='w-[22px] h-[22px] inline mr-2' /> */}
                                      <About_skill />
                                      <img src={xmark} key={index} className='w-[22px] h-[22px] inline mr-2' />
                                  </div>
                                  </div>
                                  </div>
                        )
                    })}
                       {/* <button className='flex self-start font-[600] items-center justify-center w-[286px] h-[54px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Skill</button> */}
                       <About_skilladd />
                    </div>
                </div>
                <h1 className='leading-[24px] font-[600] text-[15px] mb-4 mt-5 self-start'>Professional Experience</h1>
 
          {experiences.map((experience,index)=>{
            return (

        <div className='flex flex-col w-[1100px] h-auto mb-5  border-[1px] border-[#ACACAC] rounded-[10px] p-5'>

            <div className='flex flex-col'>
                <div className='flex w-full justify-between'>
                <h1 className='font-[500] text-[15px] '>{experience.position}</h1>
            <div className='flex '>
            {/* <img src={pen1} className='w-[22px] h-[22px] ' /> */}
            <About_prof />
            <img src={xmark} className='w-[22px] h-[22px]  text-[black] ' />
            </div>
                </div>
                <h1 className='text-[#565656] text-[13px] font-[400]'>{experience.location}</h1>
               <h1 className='text-[#565656] text-[13px] font-[400] pb-2'>{experience.date}</h1>
               </div>
            <div className='flex'>
                <p className='text-[15px] font-[400] leading-[24px] mr-2'>{experience.desc}.</p>         
            </div>
        </div>
            )
          })}
        {/* <div className='flex flex-col w-[1100px] h-[198px] border-[1px] border-[#ACACAC] rounded-[10px] p-5 mt-8'>
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
        </div> */}
      {/* <button className='flex justify-self-start self-start mt-4 items-center justify-center w-[319px] h-[50px] text-[15px] font-[600] bg-[#EAFCFF] rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Experience</button> */}
      <About_profadd />
      <div className='flex flex-col '>
        <div className='flex justify-between mt-8'>
        <h1 className='leading-[24px] font-[600] text-[15px] mb-3 '>Achievements</h1>
        {/* <img src={pen1} className='w-[22px] h-[22px]   text-[black] mr-16' /> */}
        <About_achievement />
        </div>
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
  </div>
 </>
  )
}

export default AdminAbout
