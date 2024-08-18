import React, { useEffect } from 'react'
import "../../css/AdminContact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark,faPlus,faPen} from '@fortawesome/free-solid-svg-icons';
import xmark from "../../images/xmark1.png";
import pen from "../../images/pen.png";
import Contact_email from "./Popups/Contact_email";
import Contact_emailadd from "./Popups/Contact_emailadd";
import { useState} from 'react';
// let messages = ["name","email","message"];
function AdminContact() {
  useEffect(()=>{
  getContact();
  },[])
  const [contact,setContact] = useState([]);

  const handleDelete = async (id) =>{
    const response = await fetch(`https://portfolio-website-48v8.onrender.com/api/contact/${id}`, {//function to be defined
        method:'DELETE'       
    });
    console.log(response);
    if(response.ok){
        console.log("contact deleted");
        const newContact = contact.filter((contact) => {return contact._id !== id});
        console.log(newContact);
        setContact(newContact);
    }
}

  const getContact = async () =>{
    try {
        const response = await fetch('https://portfolio-website-48v8.onrender.com/api/contact/', {
          method: 'GET'          
        });     
        if (!response.ok) {
          throw new Error(`Failed to fetch contact : ${response.statusText}`);
        }           
        const contacts = await response.json();
        console.log('Fetched contact:',contacts);            
        setContact(contacts);
      } catch (error) {
        console.error('Error fetching project:', error.message);
      }
}
  return (
    <>
    <div  id="contact" className='flex flex-col w-[80%] xl:w-[70%] mb-16'>
    <h1 className='font-[700] mt-[70px] text-[25px] '>Contact</h1>
      <div  className='w-[99%] h-auto py-8 shadows mt-[50px] px-12  rounded-[20px] flex flex-col justify-evenly '>
      <div className='flex flex-col mb-6'>
                
                    {/* <div className='flex flex-wrap mt-4'>
                        {contacts.map((title,index)=>{
                            return(
                    <div className='h-[54px] w-[333px]  bg-[#006BC2] mr-4 mb-4 flex pt-3 pl-3 text-white rounded-[10px]'>
                        <div className='flex w-full'>
                        <h1 className='text-[15px] w-[252px] w-[4/5]'>{title.id}</h1>
                        <div className='flex  justify-end  mr-[2]'>
                           
                      <Contact_emailadd title={title} setTitle={setTitle}/>
                            <img src={xmark} className='w-[22px] h-[22px] inline mr-2' onClick={()=>{deletetitle(title._id)}}/>
                        </div>
                        </div>
                        </div>
                            )
                        })}
                  <Contact_email title={title} setTitle={setTitle} />
                    </div> */}
                </div>
        <div className='flex  flex-wrap w-[100%]'>     
        {contact.map((contact,index)=>{ 
          return (
            <div className='ml-3 mr-3 w-[100%] lg:w-[30%]'>
              <h1 className='text-[15px] font-[600]'>{contact.types}</h1>
              <div className='flex h-[54px] w-[99%] sm:max-w-[333px] bg-[#006BC2]  mb-3 pt-3 pl-3 text-white text-[14px] sm:text-[16px] rounded-[10px] justify-between'>
                 <h1>{contact.ids}</h1>
                 <div className='flex'>
                 {/* <img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /> */}
                 <Contact_email contact={contact} setContact={setContact} />
                 <FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' onClick={()=>{handleDelete(contact._id)}} />
                 </div>
              </div>
              {/* <div className='h-[54px] w-[333px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>{contact.id}<img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div> */}
              </div>
          )    
        })}
        <br></br>
       <Contact_emailadd contact={contact} setContact={setContact} />
         </div>
        {/* <div><h1 className='text-[15px] font-[600]'>Instagram</h1><div className='h-[54px] w-[333px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>somemail@gmail.com <img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div>
        </div>
        <div><h1 className='text-[15px] font-[600]'>Linkedin</h1><div className='h-[54px] w-[333px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>somemail@gmail.com<img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div></div> */}
       
         {/* <div className='flex flex-col ml-11'><h1 className='text-[15px] font-[600]'>Twitter</h1><div className='h-[54px] w-[333px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>somemail@gmail.com<img src={pen} className='w-[22px] h-[22px] inline ml-24 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div>
         </div> */}
        {/* <div className='flex'> 
         </div> */}
    
        {/* <div className='flex  items-end mr-4'>  
        <div className='flex flex-col'>
          <h1 className='text-[15px] font-[600]'>Message Section</h1>
          <div className='h-[54px] w-[192px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>Name<img src={pen} className='w-[22px] h-[22px] inline ml-16 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div></div>
        <div className='h-[54px] w-[192px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>Email<img src={pen} className='w-[22px] h-[22px] inline ml-16 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div>
        <div className='h-[54px] w-[192px] bg-[#006BC2] pt-3 pl-3 text-white rounded-[10px]'>Message<img src={pen} className='w-[22px] h-[22px] inline ml-12 mr-2' /><FontAwesomeIcon icon={faCircleXmark} className='mr-2 mt-1' /></div> */}
        {/* <button className='flex items-center justify-center w-[323px] h-[54px] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Section</button> */}
      {/* <Contact_emailadd /> */}
        {/* </div> */}
      </div>
      </div>
    </>
  )
}

export default AdminContact
