import React from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import AdminHero from '../../components/Admin/AdminHero'
import AdminAbout from '../../components/Admin/AdminAbout'
import AdminTestimonial from '../../components/Admin/AdminTestimonial'
import AdminContact from '../../components/Admin/AdminContact'
import AdminCreate from '../../components/Admin/AdminCreate'
import AdminWork from '../../components/Admin/AdminWork'
import AdminService from '../../components/Admin/AdminService'
function AdminHomePage() {
  return (
    <div>
        <AdminNavbar />
        <div className='flex flex-col items-center justify-evenly'>
        <AdminHero />
        <AdminAbout />
        <AdminWork />
        <AdminService />
        <AdminTestimonial />
        <AdminContact />
        <AdminCreate />
        </div>
    </div>
  )
}

export default AdminHomePage
