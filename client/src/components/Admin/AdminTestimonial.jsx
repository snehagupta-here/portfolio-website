import React, { useState,useEffect } from 'react'
import "../../css/AdminTestimonial.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import pic from "../../images/pic.png";
import upload from "../../images/upload.png"
import pen from "../../images/pen.png"
import pen1 from "../../images/pen1.png"
import xmark from "../../images/xmark1.png"
import Testimonials_service from "./Popups/Testimonials_service";
import Testimonials_serviceadd from "./Popups/Testimonials_serviceadd";
function AdminTestimonial() {
    // const testimonials = [{"name":"Service Name","desc":"service description","organization_name":"company name","photo":""},{"name":"Service Name","desc":"service description","organization_name":"company name","photo":""}]
   const [testimonial,setTestimonial] = useState([]);
    useEffect(()=>{
           getTestimonial();
    },[])
    const getTestimonial = async () =>{
      try {
          const response = await fetch('http://localhost:5000/api/testimonials', {
            method: 'GET'          
          });     
          if (!response.ok) {
            throw new Error(`Failed to fetch experience : ${response.statusText}`);
          }           
          const testimonial = await response.json();
          console.log('Fetched testimonial:', testimonial);            
          setTestimonial(testimonial);
        } catch (error) {
          console.error('Error fetching testimonial:', error.message);
        }
  }
  const handleDelete = async (id) =>{
    const response = await fetch(`http://localhost:5000/api/testimonials/${id}`, {//function to be defined
      method:'DELETE'       
  });
  console.log(response);
  if(response.ok){
      console.log("testimonial deleted");
      const newTestimonial = testimonial.filter((testimonial) => {return testimonial._id !== id});
      console.log(newTestimonial);
      setTestimonial(newTestimonial);
  }
  }
  return (
    <>
    <div id="testimonials" className='flex flex-col w-[80%] xl:w-[70%]'>
       <h1 className='font-[700] mt-[70px] text-[25px] '>Testimonials</h1>
    <div  className='h-auto py-8 w-[99%] mt-[50px] shadows rounded-[20px] flex flex-col justify-evenly'>
         <h1 className='font-[600] text-[15px] ml-[55px] mb-4'>Few good words about me, from other...</h1>
         <div className='flex justify-evenly flex-col items-center 2xl:flex-row'>
            {testimonial.map((testimonial,index)=>{
                return (
                    <div className='h-auto w-[90%] md:max-w-[525px] mb-5 rounded-[10px] border-[2px] pl-6 pt-4 pb-5'>
                    <div className='flex w-full justify-between'>
                        <h1 className='font-[500] text-[15px]'>{testimonial.serviceName}</h1>
                        <div className='mr-3'>
                        {/* <img src={pen1} className='w-[22px] h-[22px] mr-2 text-[black] ' /> */}
                        <div className='flex'>
                        <Testimonials_service testimonial={testimonial} setTestimonial={setTestimonial} />
                        &nbsp;
                        <img src={xmark} className='w-[22px] h-[22px] mr-2 text-[black]' onClick={()=>{handleDelete(testimonial._id)}} />
                        </div>
                        </div>
                    </div>
                    <h2 className='text-[13px] font-[400] text-[#565656] mb-5'>{testimonial.organizationName}</h2>
                    <div className='flex flex-col md:flex-row'>
                        <img src={`http://localhost:5000/${testimonial.photo}`} className='w-[200px] h-[200px] mx-auto mb-8 md:mx-0 md:mb-0 rounded-[20px]' />
                        <h1 className='w-auto mr-4 md:mr-0 h-auto ml-4 text-[15px] leading-[24px]'>{testimonial.description}</h1>
                    </div>
                    {/* <button className='flex font-[600] items-center justify-center w-[200px] h-[50px] bg-[#EAFCFF] rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> 
                  <label htmlFor='fileInput'><img src={upload} className='h-[20px] w-[20px] mr-2' /></label>  Update Picture</button> */}
             
                  {/* <input id="fileInput" type="file" style={{display:"none"}} /> */}
                </div>
                );
            })}
         </div>
         {/* <button className='flex items-center justify-center w-[323px] ml-[55px] h-[54px] bg-[#EAFCFF] rounded-[10px] border-[1px] font-[600] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Testimonial</button> */}
         <Testimonials_serviceadd testimonial={testimonial} setTestimonial={setTestimonial} />
    </div>
    </div>
    </>
  )
}

export default AdminTestimonial
