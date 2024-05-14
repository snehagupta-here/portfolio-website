import React from 'react'
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
function AdminHero(props) {
    const [file,setFile] = useState( null);
    const [selectedFile,setSelectedFile] = useState(null);
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
      const titles = ["Co-Founder @ Ransh Innovations","Gold Medalist NITM'22","Product Manager" ,"Software Engineer","Innovator"];
      const [bio,setBio] = useState([]);
      const [introduction,setIntroduction] = useState("");

      // const [titles,setTitles] = useState({});
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
                        <Herosection_firstname />
                           {/* <img src={pen1} onClick={ props.togglemodal} className='w-[20px] h-[20px]' alt="" /> */}
                           {/* {isPopupOpen && <Herosection_firstname onClose={togglePopup} />} */}
                          {props.modal && <Herosection_firstname modal={props.modal} toggle={props.togglemodal} setModal={props.setmodal} />} 
                        </div>
                        <div className='w-[333px] h-[50px] border-[1px] border-[#ACACAC] rounded-[10px] p-3'>Shubham</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>

                        <h1 className='text-[15px] font-[600] mb-2'>Last Name</h1>
                        {/* <img src={pen1} className='w-[20px] h-[20px]' onClick={ props.togglemodal} />
                        {props.modal && <Herosection_lastname modal={props.modal} toggle={props.togglemodal} setModal={props.setmodal} />} */}
                      <Herosection_lastname />
                        </div>
                        <div className='w-[333px] h-[50px] border-[1px] border-[#ACACAC] rounded-[10px] p-3'>Singhal</div>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <h1 className='font-[600] text-[15px]'>Titles</h1>
                    <div className='flex flex-wrap mt-4'>
                        {titles.map((title,index)=>{
                            return(
                    <div className='h-[54px] w-[333px]  bg-[#006BC2] mr-4 mb-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>{title}</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            {/* <img src={pen} className='w-[22px] h-[22px] inline mr-2' onClick={props.togglemodal} />
                            {props.modal && <Herosection_title modal={props.modal}  toggle={props.togglemodal} setModal={props.setmodal} />} */}
                      <Herosection_title />
                            <img src={xmark} className='w-[22px] h-[22px] inline mr-2' />
                        </div>
                        </div>
                        </div>
                            )
                        })}
                        {/* <button onClick={props.togglemodal} className='flex self-start font-[600] items-center justify-center w-[296px] h-[54px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Title</button>
                        {props.modal && <Herosection_titleadd modal={props.modal}  toggle={props.togglemodal} setModal={props.setmodal} />} */}
                  <Herosection_titleadd />
                    </div>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-between'>
                    <h1 className='leading-[24px] font-[600] text-[15px] mb-3'>Introduction</h1>
                    <Herosection_introduction />
                    {/* <img src={pen1} className='w-[22px] h-[22px] mr-16' onClick={props.togglemodal} />
                    {props.modal && <Herosection_introduction modal={props.modal}  toggle={props.togglemodal} setModal={props.setmodal} />} */}
                    </div>
                     <div className='w-[1100px] h-[126px] rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</div>
                    {/* {introduction} */}
                </div>
            </div>
            </div>
        </>
    )
}

export default AdminHero
