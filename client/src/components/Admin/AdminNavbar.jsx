import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import "../../css/AdminNavbar.css";
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
        <a className='text-[#0400D8] font-[700] mr-8 navListItem'>About</a>
        <a className='mr-12 navListItem'>Work</a>
        <a className='mr-12 navListItem'>Services</a>
        <a className='mr-12 navListItem'>Testimonials</a>
        <a className='mr-12 navListItem'>Contact</a>
        <a className='mr-12 navListItem'>Create</a>
      </div>
    </nav>
  )
}

export default AdminNavbar
