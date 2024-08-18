import React from 'react'
import Herosection_firstname from '../../components/Admin/Popups/Herosection_firstname'
import Herosection_lastname from '../../components/Admin/Popups/Herosection_lastname'
import Herosection_titleadd from '../../components/Admin/Popups/Herosection_titleadd'
import Herosection_title from '../../components/Admin/Popups/Herosection_title'
import Herosection_introduction from '../../components/Admin/Popups/Herosection_introduction'
import About_skill from '../../components/Admin/Popups/About_skill'
import Create_heading from '../../components/Admin/Popups/Create_heading'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import AdminHero from '../../components/Admin/AdminHero'
import AdminAbout from '../../components/Admin/AdminAbout'
import AdminTestimonial from '../../components/Admin/AdminTestimonial'
import AdminContact from '../../components/Admin/AdminContact'
import AdminCreate from '../../components/Admin/AdminCreate'
import AdminWork from '../../components/Admin/AdminWork'
import AdminService from '../../components/Admin/AdminService'
import { useState } from 'react'
function AdminHomePage() {
  const [modal, setmodal] = useState(false);
  const toggleModal = () => {
    setmodal(!modal);
    console.log(modal);
  };
  return (
    <div>
        <AdminNavbar modal={modal} setmodal={setmodal} togglemodal ={toggleModal}  />
        <Create_heading/> 
        <div className='flex flex-col items-center justify-evenly overflow-x-hidden flex-wrap'>
        <AdminHero modal={modal} setmodal={setmodal} togglemodal ={toggleModal}  />
        <AdminAbout modal={modal} setmodal={setmodal} togglemodal ={toggleModal}  />
        <AdminWork modal={modal} setmodal={setmodal} togglemodal ={toggleModal} />
        <AdminService modal={modal} setmodal={setmodal} togglemodal ={toggleModal}  />
        <AdminTestimonial modal={modal} setmodal={setmodal} togglemodal ={toggleModal}  />
        <AdminContact modal={modal} setmodal={setmodal} togglemodal ={toggleModal}  />
        {/* <AdminCreate modal={modal} setmodal={setmodal} togglemodal ={toggleModal}  /> */}
        </div>
    </div>
  )
}

export default AdminHomePage
