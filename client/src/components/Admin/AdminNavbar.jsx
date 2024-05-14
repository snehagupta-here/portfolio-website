import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import "../../css/AdminNavbar.css";
import {HashLink as Link} from "react-router-hash-link"
function AdminNavbar() {
  return (
    <nav className='flex'>
         <input type="checkbox" id="checkbox" />
  <label htmlFor="checkbox" className="checkbtn">
  <FontAwesomeIcon icon={faBars} />
  </label>
      <div className='flex mt-[40px] '>
<div className='h-[48px] w-[100px] bg-gradient-to-r from-[#00D5C8] to-[#0400D8] ml-[120px] rounded-e-[100px]'></div>
        <h1 className='w-[84px] ml-4'>Shubham Singhal</h1>
      </div>
      <div className='mt-[52px] text-[18px] font-[300] ml-[429px] justify-self-end absolute right-0 navList'>
        <Link to="#about" className='text-[#0400D8] font-[700] mr-8 navListItem'>About</Link>
        <Link to="#work" className='mr-12 navListItem'>Work</Link>
        <Link to="#services" className='mr-12 navListItem'>Services</Link>
        <Link to="#testimonials" className='mr-12 navListItem'>Testimonials</Link>
        <Link to="#contact" className='mr-12 navListItem'>Contact</Link>
        <Link to="#create" className='mr-12 navListItem'>Create</Link>
      </div>
    </nav>
  )
}

export default AdminNavbar
