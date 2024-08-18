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
import xmark1 from "../../images/xmark1.png";
import {useState, useEffect} from "react";
import upload from "../../images/upload.png";
function AdminAbout() {
    // const skills = ["skill1","skill2","skill3" ,"skill4"];
    const [skill,setSkill] = useState([]);
    const [bio,setBio] = useState("");
    const [achievement,setAchievement] = useState("");
    const [experience,setExperience] = useState([]);
    // const [experiences,setExperiences] = useState({});
    // useEffect(()=>{
    //        const getBio = async ()=>{
    //         const res = await axios.get("/bio");
    //         setBio(res.data);
    //         console.log(res.data);
    //        }
    //        getBio();
    // },[])
    useEffect(()=>{
               getBio();
               getAllSkill();
               getAchievement();
                getExperience();
    },[])
    const [file,setFile] = useState(null);
   const getExperience = async () =>{
    try {
        const response = await fetch('https://portfolio-website-48v8.onrender.com/api/About/professional-experience/', {
          method: 'GET'          
        });     
        if (!response.ok) {
          throw new Error(`Failed to fetch experience : ${response.statusText}`);
        }           
        const experience = await response.json();
        console.log('Fetched bio:', experience);            
        setExperience(experience);
      } catch (error) {
        console.error('Error fetching titles:', error.message);
      }
   }
    const getBio = async () =>{
        try {
            const response = await fetch('https://portfolio-website-48v8.onrender.com/api/About/bio/bio', {
              method: 'GET'          
            });     
            if (!response.ok) {
              throw new Error(`Failed to fetch titles : ${response.statusText}`);
            }           
            const bio = await response.json();
            console.log('Fetched bio:', bio);            
            setBio(bio.bio);
          } catch (error) {
            console.error('Error fetching titles:', error.message);
          }
    }
    const getAchievement = async () =>{
        try {
             console.log("hi welcome");
            const response = await fetch('https://portfolio-website-48v8.onrender.com/api/About/achievement/achievement', {
              method: 'GET'          
            });
      
            if (!response.ok) {
              throw new Error(`Failed to fetch achievement : ${response.statusText}`);
            }
                  //  console.log("hi welcome to the group");
            const achievement = await response.json();
            console.log('Fetched Achivements:', achievement);
          
            // Update state with fetched titles
            //  setTitle(json);
            // user.map((us) =>{
  
            //   setFirstname(us.firstname);
            //   setLastname(us.lastname);
            // })
            // console.log(intro);
            setAchievement(achievement.achievement);
          } catch (error) {
            console.error('Error fetching titles:', error.message);
          }
    }
    const handleDelete=async (id)=>{
        // ev.preventDefault();
    
          // const data =new FormData();
          // data.set('titleId',id);
          // data.set('username',username);
          const response = await fetch(`https://portfolio-website-48v8.onrender.com/api/About/skills/remove/${id}`, {//function to be defined
              method:'DELETE'       
          });
          console.log(response);
          if(response.ok){
              console.log("skill deleted");
              const newSkills = skill.filter((skill) => {return skill._id !== id});
              console.log(newSkills);
              setSkill(newSkills);
          }
      };
    const getAllSkill = async () => {
        try {
          const response = await fetch('https://portfolio-website-48v8.onrender.com/api/About/skills', {
            method: 'GET',               
          });
    
          if (!response.ok) {
            throw new Error(`Failed to fetch titles : ${response.statusText}`);
          }
    
          const json = await response.json();
          console.log('Fetched Skills:', json);
        
          // Update state with fetched titles
           setSkill(json);
        } catch (error) {
          console.error('Error fetching skills:', error.message);
        }
      };
      const handleDelete1=async (id)=>{
        // ev.preventDefault();
    
          // const data =new FormData();
          // data.set('titleId',id);
          // data.set('username',username);
          const response = await fetch(`https://portfolio-website-48v8.onrender.com/api/About/professional-experience/remove/${id}`, {//function to be defined
              method:'DELETE'       
          });
          console.log(response);
          if(response.ok){
              console.log("experience deleted");
              const newExperience = experience.filter((experience) => {return experience._id !== id});
              console.log(newExperience);
              setExperience(newExperience);
          }
      };
      const handleFileChange = async () =>{

      }
  return (
 <>
 <div id="about" className='flex flex-col w-[80%] xl:w-[70%]'>
      <h1 className='font-[700] mt-[70px] text-[25px] '>About</h1>
  <div  className=' px-8 sm:px-16 pt-8 h-auto pb-16 shadows mt-[50px]  rounded-[20px] content-evenly flex flex-col '>
  <div className='flex flex-col content-evenly '>
    <div className='flex justify-between'>
                    <h1 className='leading-[24px] font-[600] text-[15px] mb-3'>Bio</h1>
                    {/* <img src={pen1}  className='w-[22px] h-[22px] inline mr-16' /> */}
                    <About_bio bio={bio} setBio={setBio}/>
    </div>
                    <div className='w-[99%] min-h-[100px] h-auto rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>{bio}</div>      
                    {/* { bio.description} */}
                </div>
                <div className='flex flex-col mt-8'>
                    <h1 className='font-[600] text-[15px]'>Skills</h1>
                    <div className='flex flex-wrap  p-8 pl-0'>
                    {skill.map((skill,index)=>{
                        return(
                                  <div className='h-[54px] w-[298px] mr-4  bg-[#006BC2]  mb-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                                  <div className='flex w-full'>
                                  <h1 className='text-[15px] min-w-[200px] w-[4/5]'>{skill.skill}</h1>
                                  <div className='flex  justify-end  mr-[2]'>
                                      {/* <img src={pen} key={index} className='w-[22px] h-[22px] inline mr-2' /> */}
                                      <About_skill skill={skill} setSkill={setSkill} />
                                      <img src={xmark} key={index} className='w-[22px] h-[22px] inline mr-2' onClick={()=>{handleDelete(skill._id)}} />
                                  </div>
                                  </div>
                                  </div>
                        )
                    })};
                       {/* <button className='flex self-start font-[600] items-center justify-center w-[286px] h-[54px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Skill</button> */}
                       <About_skilladd skill={skill} setSkill={setSkill}/>
                    </div>
                </div>
                <h1 className='leading-[24px] font-[600] text-[15px] mb-4 mt-5 self-start'>Professional Experience</h1>
 
          {experience.map((experience,index)=>{
            return (

        <div className='flex flex-col w-auto h-auto mb-5  border-[1px] border-[#ACACAC] rounded-[10px] p-5'>

            <div className='flex flex-col'>
                <div className='flex w-full justify-between'>
                <h1 className='font-[500] text-[15px] '>{experience.profession}</h1>
            <div className='flex '>
            {/* <img src={pen1} className='w-[22px] h-[22px] ' /> */}
            <About_prof experience={experience} setExperience={setExperience} />
            &nbsp;
            <img src={xmark1} onClick={()=>{handleDelete1(experience._id)}} className='w-[22px] h-[22px]  text-[black] ' />
            </div>
                </div>
                <h1 className='text-[#565656] text-[13px] font-[400]'>{experience.organization} , {!experience.location?"Remote":experience.location}</h1>
               <h1 className='text-[#565656] text-[13px] font-[400] pb-2'><span>{experience.startDate}</span> - <span>{!experience.endDate?"Present":experience.endDate}</span></h1>
               </div>
            <div className='flex'>
                <p className='text-[15px] font-[400] leading-[24px] mr-2'>{experience.description}.</p>         
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
      <About_profadd experience={experience} setExperience={setExperience}  />
      <div className='flex flex-col '>
        <div className='flex justify-between mt-8'>
        <h1 className='leading-[24px] font-[600] text-[15px] mb-3 '>Achievements</h1>
        {/* <img src={pen1} className='w-[22px] h-[22px]   text-[black] mr-16' /> */}
        <About_achievement achievement={achievement} setAchievement={setAchievement} />
        </div>
        <div className='w-[99%] min-h-[100px] h-auto rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>{achievement}</div>
        </div> 
        <div className='flex flex-col'>
         <h1 className='text-[15px] font-[600] mt-8 mb-3'>Resume</h1>
         <div className='w-[99%] justify-between mb-5 items-center flex h-[70px] border-[1px] rounded-[10px] border-[#ACACAC] '>
            <div className='w-full flex items-center'>
            <div className='w-[100px] flex items-center justify-center h-[70px] rounded-l-[10px] bg-[#006BC2] text-white '>PDF</div>
            <div className='flex flex-col content-center ml-4'>
          <h1 className='text-[13px] md:text-[15px] font-[400]'>Resume Name</h1>
          <h1 className='text-[#727272] text-[1] text-[12px] md:text-[14px] font-[400]'>Uploaded on 01/01/2024</h1>
            </div>
            </div>
            <div className='flex justify-end'>
           <img src={up} className='w-[20px] h-[20px] md:w-[28px] md:h-[28px] mr-1 md:mr-3' />
           <input type="checkbox" checked className='w-[28px] h-[28px] mr-3' />
            </div>
         </div>
         <div className='w-[99%] justify-between items-center flex h-[70px] border-[1px] rounded-[10px] border-[#ACACAC] '>
            <div className='w-full flex items-center'>
            <div className='w-[100px] flex items-center justify-center h-[70px] rounded-l-[10px] bg-[#006BC2] text-white '>PDF</div>
            <div className='flex flex-col content-center ml-4'>
          <h1 className='text-[13px] md:text-[15px] font-[400]'>Resume Name</h1>
          <h1 className='text-[#727272] text-[12px] md:text-[14px] font-[400]'>Uploaded on 01/01/2024</h1>
            </div>
            </div>
            <div className='flex justify-end'>
           <img src={up} className='w-[20px] h-[20px] md:w-[28px] md:h-[28px] mr-1 md:mr-3' />
           <input type="checkbox" className='w-[28px] h-[28px] mr-3' />
            </div>
         </div>
            <div className='block mt-8'>

            {file && <img src={URL.createObjectURL(file)} className='w-[260px] h-[287px] rounded-[20px] mb-6' />}    
          <div className='flex items-center'>
                <label htmlFor="fileInput"><img src={upload} className='h-[17px] w-[17px] sm:h-[20px] sm:w-[20px] mr-2 ' /></label>
                
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])} />     
                <button className='flex items-center justify-center w-[260px] h-[54px] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF] mb-8' onClick={handleFileChange}> 
                 Upload Resume</button>     
          </div>
            </div>
        </div>
  </div>
  </div>
 </>
  )
}

export default AdminAbout
