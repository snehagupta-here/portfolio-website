import React from 'react'
import "../../css/AdminTestimonial.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import pic from "../../images/pic.png";
import upload from "../../images/upload.png"
import pen from "../../images/pen.png"
import pen1 from "../../images/pen1.png"
import xmark from "../../images/xmark.png"
import Testimonials_service from "./Popups/Testimonials_service";
import Testimonials_serviceadd from "./Popups/Testimonials_serviceadd";
function AdminTestimonial() {
    const testimonials = [{"name":"Service Name","desc":"service description","organization_name":"company name","photo":""},{"name":"Service Name","desc":"service description","organization_name":"company name","photo":""}]
    // useEffect(()=>{
    //        const getServices = async ()=>{
    //         const res = await axios.get("/service");
    //         setServices(res.data);
    //         console.log(res.data);
    //        }
    //        getServices();
    // },[])
  return (
    <>
    <div id="testimonials" className='flex flex-col'>
       <h1 className='font-[700] mt-[70px] text-[25px] '>Testimonials</h1>
    <div  className='h-auto py-8 w-[1200px] mt-[50px] shadows rounded-[20px] flex flex-col justify-evenly'>
         <h1 className='font-[600] text-[15px] ml-[55px] mb-4'>Few good words about me, from other...</h1>
         <div className='flex justify-evenly'>
            {testimonials.map((testimonial,index)=>{
                return (
                    <div className='h-auto w-[525px] mb-5 rounded-[10px] border-[2px] pl-6 pt-4 pb-5'>
                    <div className='flex w-full justify-between'>
                        <h1 className='font-[500] text-[15px]'>{testimonial.name}</h1>
                        <div className='mr-3'>
                        {/* <img src={pen1} className='w-[22px] h-[22px] mr-2 text-[black] ' /> */}
                        <Testimonials_service />
                        <img src={xmark} className='w-[22px] h-[22px] mr-2 text-[black] ' />
                        </div>
                    </div>
                    <h2 className='text-[13px] font-[400] text-[#565656] mb-5'>Profession, Company name</h2>
                    <div className='flex'>
                        <img src={pic} className='w-[200px] h-[200px] rounded-[20px]' />
                        <h1 className='w-[280px] h-[216px] ml-4 text-[15px] leading-[24px]'>{testimonial.desc}</h1>
                    </div>
                    <button className='flex font-[600] items-center justify-center w-[200px] h-[50px] bg-[#EAFCFF] rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> 
                  <label htmlFor='fileInput'><img src={upload} className='h-[20px] w-[20px] mr-2' /></label>  Update Picture</button>
             
                  <input id="fileInput" type="file" style={{display:"none"}} />
                </div>
                );
            })}
         </div>
         {/* <button className='flex items-center justify-center w-[323px] ml-[55px] h-[54px] bg-[#EAFCFF] rounded-[10px] border-[1px] font-[600] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Testimonial</button> */}
         <Testimonials_serviceadd />
    </div>
    </div>
    </>
  )
}

export default AdminTestimonial
