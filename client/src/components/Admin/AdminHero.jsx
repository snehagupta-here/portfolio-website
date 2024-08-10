import React, { useEffect } from 'react'
import "../../css/AdminContact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import picture from "../../images/picture.png";
import upload from "../../images/upload.png";
import xmark from "../../images/xmark.png";
import pen from "../../images/pen.png";
import pen1 from "../../images/pen1.png";
import { useState} from "react";
import {axios} from "axios";
import Herosection_firstname from './Popups/Herosection_firstname';
import Herosection_lastname from './Popups/Herosection_lastname';
import Herosection_title from './Popups/Herosection_title';
import Herosection_titleadd from './Popups/Herosection_titleadd';
import Herosection_introduction from './Popups/Herosection_introduction';
// import { getAllTitles } from '../../../../server/controllers/titleController';
function AdminHero(props) {
    const [file,setFile] = useState( null);
    const [selectedFile,setSelectedFile] = useState(null);
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [bio,setBio] = useState([]);
      const [title,setTitle] = useState([]);
      const [introduction,setIntroduction] = useState("");
    // const handleFileChange = (event) => {
    //     const fileList = event.target.files;
    //     console.log(fileList);
    //   };
    //   const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onload = () => {
    //         setSelectedFile(reader.result);
    //       };
    //       reader.readAsDataURL(file);
    //     }
    //   };
    const deletetitle=async (id)=>{
      // ev.preventDefault();
  
        // const data =new FormData();
        // data.set('titleId',id);
        // data.set('username',username);
        const response = await fetch(`http://localhost:5000/api/Hero/titles/remove/${id}`, {//function to be defined
            method:'DELETE'       
        });
        console.log(response);
        if(response.ok){
            console.log("title deleted");
            const newTitles = title.filter((title) => {return title._id !== id});
            console.log(newTitles);
            setTitle(newTitles);
        }
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedFile(reader.result);
          };
          reader.onerror = (error) => {
            console.error('Error occurred while reading the file:', error);
          };
          reader.readAsDataURL(file);
        } else {
          console.error('No file selected');
        }
      };
      // const titles = ["Co-Founder @ Ransh Innovations","Gold Medalist NITM'22","Product Manager" ,"Software Engineer","Innovator"];
     

      // const [titles,setTitles] = useState({});
      // useEffect(()=>{
      //        const getBio = async ()=>{
      //         const res = await axios.get("/bio");
      //         setBio(res.data);
      //         console.log(res.data);
      //        }
      //        getBio();
      // },[])
      useEffect(()=>{
                  getAllTitle();
                  getUser();
                  getIntroduction();
      },[])
      const getIntroduction = async () =>{
        try {
          // console.log("hi welcome");
          const response = await fetch('http://localhost:5000/api/Hero/introduction/getintroduction', {
            method: 'GET'          
          });
    
          if (!response.ok) {
            throw new Error(`Failed to fetch titles : ${response.statusText}`);
          }
                //  console.log("hi welcome to the group");
          const intro = await response.json();
          console.log('Fetched introduction:', intro);
        
          // Update state with fetched titles
          //  setTitle(json);
          // user.map((us) =>{

          //   setFirstname(us.firstname);
          //   setLastname(us.lastname);
          // })
          // console.log(intro);
          setIntroduction(intro.introduction);
        } catch (error) {
          console.error('Error fetching titles:', error.message);
        }
      }
      const getUser = async () =>{
        try {
          const response = await fetch('http://localhost:5000/api/Hero/firstname/getUser', {
            method: 'GET'          
          });
    
          if (!response.ok) {
            throw new Error(`Failed to fetch titles : ${response.statusText}`);
          }
    
          const user = await response.json();
          console.log('Fetched user:', user[0]);
        
          // Update state with fetched titles
          //  setTitle(json);
          user.map((us) =>{

            setFirstname(us.firstname);
            setLastname(us.lastname);
          })
        } catch (error) {
          console.error('Error fetching titles:', error.message);
        }
      }
      const getAllTitle = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/Hero/titles/allTitles', {
            method: 'GET',               
          });
    
          if (!response.ok) {
            throw new Error(`Failed to fetch titles : ${response.statusText}`);
          }
    
          const json = await response.json();
          console.log('Fetched Titles:', json);
        
          // Update state with fetched titles
           setTitle(json);
        } catch (error) {
          console.error('Error fetching titles:', error.message);
        }
      };
    return (
        <>
        <div id="hero" className='flex flex-col'>
        <h1 className='font-[700] mt-[70px] text-[25px] '>Hero Section</h1>
            <div  className='w-[1200px] pl-8 h-auto py-10 mt-[50px] shadows rounded-[20px] flex flex-col justify-evenly content-between'>
                <img src={picture} className='w-[260px] h-[287px] rounded-[20px] mb-6' />   
   
                <button className='flex items-center justify-center w-[260px] h-[54px] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF] mb-8'> 
                <label htmlFor="fileInput"><img src={selectedFile || upload} className='h-[20px] w-[20px] mr-2 ' /></label>
                
                <input type="file" id="fileInput" style={{display:"none"}} onClick={handleFileChange}  />     
                 Update Picture</button>     
             
                <div className='flex w-[60%] justify-between mb-8'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                        <h1 className='text-[15px] font-[600] mb-2'>First Name</h1>
                        <Herosection_firstname firstname={firstname} setFirstname={setFirstname} />
                        
                          {/* {props.modal && <Herosection_firstname modal={props.modal} toggle={props.togglemodal} setModal={props.setmodal} />}  */}
                        </div>
                        <div className='w-[333px] h-[50px] border-[1px] border-[#ACACAC] rounded-[10px] p-3'>{firstname}</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>

                        <h1 className='text-[15px] font-[600] mb-2'>Last Name</h1>
                  
                      <Herosection_lastname lastname={lastname} setLastname={setLastname} />
                        </div>
                        <div className='w-[333px] h-[50px] border-[1px] border-[#ACACAC] rounded-[10px] p-3'>{lastname}</div>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <h1 className='font-[600] text-[15px]'>Titles</h1>
                    <div className='flex flex-wrap mt-4'>
                        {title.map((title,index)=>{
                            return(
                    <div className='h-[54px] w-[333px]  bg-[#006BC2] mr-4 mb-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>{title.title}</h1>
                        <div className='flex  justify-end  mr-[2]'>
                           
                      <Herosection_title title={title} setTitle={setTitle}/>
                            <img src={xmark} className='w-[22px] h-[22px] inline mr-2' onClick={()=>{deletetitle(title._id)}}/>
                        </div>
                        </div>
                        </div>
                            )
                        })}
                       
                  <Herosection_titleadd title={title} setTitle={setTitle} />
                    </div>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-between'>
                    <h1 className='leading-[24px] font-[600] text-[15px] mb-3'>Introduction</h1>
                    <Herosection_introduction introduction={introduction} setIntroduction={setIntroduction} />
                   
                    </div>
                     <div className='w-[1100px] h-[126px] rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>{introduction}</div>
                 
                </div>
            </div>
            </div>
        </>
    )
}

export default AdminHero
