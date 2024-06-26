import React from 'react'
import '../../css/AdminContact.css';
import pic from "../../images/pic.png";
import xmark from "../../images/xmark.png";
import xmark1 from "../../images/xmark1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import Works_service from "./Popups/Works_service";
import Works_serviceadd from "./Popups/Works_serviceadd";
import Works_projectadd from "./Popups/Works_projectadd";
import pen1 from "../../images/pen1.png"
function AdminWork() {
    const projects = [{"position":"ABC Position","photo":"","desc":"lorem 2"},{"position":"ABC Position","photo":"","desc":"lorem 2"}]
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
    <div id="work" className='flex flex-col'>
       <h1 className='font-[700] mt-[70px] text-[25px] '>Work</h1>
    <div className='shadows rounded-[20px] w-[1200px] h-auto py-8 mt-[50px]  flex flex-col justify-evenly items-center' >
        <h1 className='leading-[24px] font-[600] text-[15px]  ml-[50px] self-start mb-4'>Projects</h1>     
            {projects.map((project,index)=>{
                return (
                    <div className='flex flex-col w-[1100px] mb-8  h-[248px] border-[1px] border-[#ACACAC] rounded-[10px] p-5'>
                    <div className='flex flex-col'>
                        <div className='flex w-full justify-between'>
                        <h1 className='font-[500] text-[15px] '>{project.position}</h1>
                    <div className='flex  '>
                    <img src={pen1} className='w-[22px] h-[22px] mr-2' />
                    
                            {/* <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' /> */}
                            <img src={xmark1} className='w-[22px] h-[22px]' />
                    </div>
                        </div>
                        <ul className='flex mb-3 text-[13px] list-disc justify-evenly w-[228px]'>
                            <li className='mr-2'>Skill1</li> 
                            <li className='mr-2'>Skill2</li>
                            <li className='mr-2'>Skill3</li>
                            <li className='mr-2'>Skill4</li>  
                        </ul>
                       </div>
                    <div className='flex'>
                        <p className='text-[15px] font-[400] w-[820px] leading-[24px] mr-2'>{project.desc}</p>
                        <img src={pic} className='w-[230px] h-[150px] rounded-[20px]' />
                    </div>
                </div>
                );
            })}
        {/* <div className='flex flex-col w-[1100px] h-[248px] border-[1px] border-[#ACACAC] rounded-[10px] p-5'>

            <div className='flex flex-col'>
                <div className='flex w-full'>
                <h1 className='font-[500] text-[15px] w-1/5'>Abc Position</h1>
            <div className='flex justify-end w-4/5'>
            <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' />
            </div>
                </div>
                <ul className='flex mb-3 text-[13px] list-disc justify-evenly w-[228px]'>
                    <li className='mr-2'>Skill1</li> 
                    <li className='mr-2'>Skill2</li>
                    <li className='mr-2'>Skill3</li>
                    <li className='mr-2'>Skill4</li>
                </ul>
               </div>
            <div className='flex'>
                <p className='text-[15px] font-[400] w-[820px] leading-[24px] mr-2'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</p>
                <img src={pic} className='w-[230px] h-[150px] rounded-[20px]' />
            </div>
        </div>
        <div className='flex flex-col w-[1100px] h-[248px] border-[1px] border-[#ACACAC] rounded-[10px] p-5 mt-8'>
            <div className='flex flex-col'>
                <div className='flex w-full'>
                <h1 className='font-[500] text-[15px] w-1/5 '>Abc Position</h1>
            <div className='flex justify-end w-4/5'>
            <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' />
            </div>
                </div>
                <ul className='flex mb-3 text-[13px] list-disc justify-evenly w-[228px]'>
                    <li className='mr-2'>Skill1</li> 
                    <li className='mr-2'>Skill2</li>
                    <li className='mr-2'>Skill3</li>
                    <li className='mr-2'>Skill4</li>
                </ul>
               </div>
            <div className='flex '>
                <p className='text-[15px] font-[400] w-[820px] leading-[24px] mr-2'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</p>
                <img src={pic} className='w-[230px] h-[150px] rounded-[20px]' />
            </div>
        </div> */}
      {/* <button className='flex self-start ml-[50px] mt-4 items-center justify-center w-[319px] h-[50px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Projects</button> */}
      <Works_projectadd />
      </div>
      </div>
    </>
  )
}

export default AdminWork
