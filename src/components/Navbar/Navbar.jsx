import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../../firebase';
function Navbar() {

  const navRef = useRef(); 

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  })

  return (
    <div ref={navRef} className='navbar'>
      <div class="navbar-left">
        <img src={logo} alt="Netflix logo"/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>

      <div class="navbar-right">
        <img src={search_icon} alt="search-icon" className='icons'/>
        <p className='children'>Children</p>
        <img src={bell_icon} alt="bell-icon" className='icons'/>

        <div class="navbar-profile">
        <img src={profile_img} alt="icon" className='profile'/>
        <img src={caret_icon} alt="" />

        <div class="dropdown">
          <p onClick={()=>{logout()}}>Sign out</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
