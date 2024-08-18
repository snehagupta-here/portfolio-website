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
        const response = await fetch(`https://portfolio-website-48v8.onrender.com/api/Hero/titles/remove/${id}`, {//function to be defined
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
    // const handleFileChange =async (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onload = async () => {
    //         setSelectedFile(reader.result);
    //       };
    //           // Prepare the form data to send to the server
    //     const formData = new FormData();
    //     formData.append('profilePicture', file);

    //     try {
    //       // Make a POST request to upload the image
    //       const response = await fetch(`http://localhost:5000/api/Hero/profilepic`,  {
    //         method:'PUT',
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //         body:formData
    //       });
    //       // Handle response (e.g., update state, show success message)
    //       console.log('File uploaded successfully:', response.data);
    //     } catch (error) {
    //       console.error('Error occurred while uploading the file:', error);
    //     }
    //     reader.onerror = (error) => {
    //       console.error('Error occurred while reading the file:', error);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    //      else {
    //       console.log('No file selected');
    //     }
    //   };
    const handleFileChange = async () => {
      console.log("getting file");
      console.log(file);
      if (file) {
        const formData = new FormData();
        formData.append('profile', file);
        // formData.append('username', 'your-username'); // Replace with the actual username or another identifier
  
        try {
          const response = await fetch(`https://portfolio-website-48v8.onrender.com/api/Hero/profilepic`, {
            method: 'PUT',
            body: formData,
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log('File uploaded successfully:', data);

          } else {
            console.error('Failed to upload file:', response.statusText);
          }
        } catch (error) {
          console.error('Error occurred while uploading the file:', error);
        }
      } else {
        console.log('No file selected');
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

                  getProfile();
      },[])
      const getProfile = async () =>{
        
        try {
          console.log("hi welcome");
          const response = await fetch('https://portfolio-website-48v8.onrender.com/api/Hero/profilepic/profile', {
            method: 'GET'          
          });
    
          if (!response.ok) {
            // throw new Error(`Failed to fetch pic: ${response.statusText}`);
            <h1>no profile present</h1>
          }
                //  console.log("hi welcome to the group");
          const pic = await response.json();
          console.log('Fetched pic:', pic);
          const baseUrl = 'https://portfolio-website-48v8.onrender.com/';
      const imageUrl = `${baseUrl}${pic.profile}`;
      
      // Fetch the image file
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error('Failed to fetch image');
      }
      console.log("imageresponse",imageResponse);
      // Convert the response to a Blob
       const imageBlob = await imageResponse.blob();
        
           setFile(imageBlob);
          console.log("imageblob",imageBlob);
        
        } catch (error) {
          console.error('Error fetching pic:', error.message);
        }
      }
      const getIntroduction = async () =>{
        try {
          // console.log("hi welcome");
          const response = await fetch('https://portfolio-website-48v8.onrender.com/api/Hero/introduction/getintroduction', {
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
          const response = await fetch('https://portfolio-website-48v8.onrender.com/api/Hero/firstname/getUser', {
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
          const response = await fetch('https://portfolio-website-48v8.onrender.com/api/Hero/titles/allTitles', {
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
        <div id="hero" className='flex flex-col w-[80%]  xl:w-[70%] '>
        <h1 className='font-[700] mt-[70px] text-[25px] '>Hero Section</h1>
            <div  className='w-auto w-[100%]    pl-8 px-8 sm:px-16 h-auto py-10 mt-[50px] shadows rounded-[20px] flex flex-col  justify-evenly content-between'>
               {file && <img src={URL.createObjectURL(file)} className='w-[260px] h-[287px] rounded-[20px] mb-6' />}    
          <div className='flex items-center'>
                <label htmlFor="fileInput"><img src={upload} className='h-[20px] w-[20px] mr-2 ' /></label>
                
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])} />     
                <button className='flex items-center justify-center w-[260px] ml-4 sm:ml-0 h-[54px] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF] mb-8' onClick={handleFileChange}> 
                 Update Picture</button>     
          </div>       
                <div className='flex w-[80%] flex-wrap justify-between  mb-8 '>
                    <div className='flex flex-col w-[100%] md:w-[35%]'>
                        <div className='flex w-[100%] justify-between'>
                        <h1 className='text-[15px] font-[600] mb-2'>First Name</h1>
                        <Herosection_firstname firstname={firstname} setFirstname={setFirstname} />
                
                          {/* {props.modal && <Herosection_firstname modal={props.modal} toggle={props.togglemodal} setModal={props.setmodal} />}  */}
                        </div>
                        <div className='w-auto w-[100%] md:min-w-[230px] lg:min-w-[330px] h-[50px] border-[1px] border-[#ACACAC] rounded-[10px] p-3'>{firstname}</div>
                    </div>
                    <div className='flex flex-col w-[100%] mt-8 md:w-[35%] md:mt-0'>
                        <div className='flex w-[100%] justify-between'>

                        <h1 className='text-[15px] font-[600] mb-2'>Last Name</h1>
                  
                      <Herosection_lastname lastname={lastname} setLastname={setLastname} />
                        </div>
                        <div className='w-auto w-[80%] md:min-w-[230px] lg:min-w-[330px] h-[50px] border-[1px] border-[#ACACAC] rounded-[10px] p-3'>{lastname}</div>
                    </div>
                </div>
                <div className='flex flex-col mb-6 '>
                    <h1 className='font-[600] text-[15px]'>Titles</h1>
                    <div className='flex flex-wrap mt-4'>
                        {title.map((title,index)=>{
                            return(
                    <div className='h-auto min-h-[54px] w-auto bg-[#006BC2] mr-4 mb-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full flex-wrap'>
                        <h1 className='text-[13px] sm:text-[15px] w-auto min-w-[100%] sm:min-w-[230px]'>{title.title}</h1>
                        <div className='flex  justify-end  mr-[2]'>
                           
                      <Herosection_title title={title} setTitle={setTitle}/>
                            <img src={xmark} className='w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] inline mr-2' onClick={()=>{deletetitle(title._id)}}/>
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
                     <div className='w-[99%] h-auto min-h-[100px] rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>{introduction}</div>
                 
                </div>
            </div>
            </div>
        </>
    )
}

export default AdminHero
