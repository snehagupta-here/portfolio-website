import React from 'react'
import "../../css/AdminContact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import picture from "../../images/picture.png";
import upload from "../../images/upload.png";
import pen from "../../images/pen.png";
import pen1 from "../../images/pen1.png";
import { useState} from "react";
function AdminHero() {
    const [file,setFile] = useState( null);
    // if (file){
    //     const data = new FormData();
    //     const filename = Date.now() + file.name;
    //     data.append("name",filename);
    //     data.append("file",file);
    //     updatedUser.profilePic = filename;
    //     try{
    //             axios.post("/upload",data)
    //     }catch(e){
    //         console.log(e);
    //     }
    // }
    return (
        <>
        <div id="hero" className='flex flex-col'>
        <h1 className='font-[700] mt-[70px] text-[25px] '>Hero Section</h1>
            <div  className='w-[1200px] pl-8 h-[1013px] mt-[50px] shadows rounded-[20px] flex flex-col justify-evenly content-between'>
                <img src={picture} className='w-[260px] h-[287px] rounded-[20px]' />        <label htmlFor="fileInput">
                <button className='flex items-center justify-center w-[260px] h-[54px] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <img src={upload} className='h-[20px] w-[20px] mr-2' />Update Picture</button>     
                     </label>
                       <input id="fileInput" type="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}  />
                <div className='flex w-[60%] justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                        <h1 className='text-[15px] font-[600] mb-2'>First Name</h1>
                           <img src={pen1} className='w-[20px] h-[20px]' />
                        </div>
                        <div className='w-[333px] h-[50px] border-[1px] border-[#ACACAC] rounded-[10px] p-3'>Shubham</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>

                        <h1 className='text-[15px] font-[600] mb-2'>Last Name</h1>
                        <img src={pen1} className='w-[20px] h-[20px]' />
                        </div>
                        <div className='w-[333px] h-[50px] border-[1px] border-[#ACACAC] rounded-[10px] p-3'>Singhal</div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-[600] text-[15px]'>Titles</h1>
                    <div className='flex flex-wrap mt-4'>
                    <div className='h-[54px] w-[333px]  bg-[#006BC2] mr-4 mb-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Co-Founder @ Ransh Innovations</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[333px] bg-[#006BC2] mr-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Gold Medalist NITM'22</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[333px] bg-[#006BC2] mr-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Product Manager</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[333px] bg-[#006BC2] mr-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Software Engineer</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <div className='h-[54px] w-[333px] bg-[#006BC2] mr-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>Innovator</h1>
                        <div className='flex  justify-end  mr-[2]'>
                            <img src={pen} className='w-[22px] h-[22px] inline mr-2' />
                            <FontAwesomeIcon icon={faCircleXmark} className='mr-4 mt-1' />
                        </div>
                        </div>
                        </div>
                        <button className='flex self-start font-[600] items-center justify-center w-[296px] h-[54px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Title</button>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <h1 className='leading-[24px] font-[600] text-[15px] mb-3'>Introduction</h1>
                    <div className='w-[1100px] h-[126px] rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</div>
                </div>
            </div>
            </div>
        </>
    )
}

export default AdminHero
