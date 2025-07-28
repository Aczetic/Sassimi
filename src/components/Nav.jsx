import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png';
import hamImage from '../assets/hamburger-menu.png';
import closeImage from '../assets/close.png';
import Auth from "./Auth";
import {  useEffect, useRef, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Nav = () => {
    const [isDrawerOpen , setIsDrawerOpen] = useState(false);
    const [isDarkMode , setIsDarkMode] = useState(null);
    const navRef = useRef();
    useEffect(()=>{
      if(isDarkMode !== null){
        console.log('called');
        document.querySelector('body').classList.toggle('dark')
      }
    },[isDarkMode])

  return (
    <div data-aos = 'fade' data-aos-duration='1000' className = 'nav'>
      
      {isDrawerOpen&&<div id = 'nav-cover' onClick = {()=>setIsDrawerOpen(false)}></div>}

     <NavLink to = '/' ><img src = {logo}  height = '35px' width = '35px' style = {{padding:'0 1rem'}}/></NavLink>
           { !isDrawerOpen && <div onClick = {()=>setIsDrawerOpen(true)} className = 'ham' style = {{backgroundImage:`url(${hamImage})`}}>
            </div>}
            {isDrawerOpen && <div className = 'ham' onClick = {()=>setIsDrawerOpen(false)} style = {{backgroundImage:`url(${closeImage})`, transform:'scale(0.8)'}}></div>}
        <div ref = {navRef} className = 'links-small' style = {{ transform:isDrawerOpen? 'translateX(0)': 'translateX(200px' , transition:'0.5s' }}>
            <NavLink  to = '/product'>Product</NavLink>
            <NavLink  to = '/pricing'>Pricing</NavLink>
            <NavLink  to = '/company'>Company</NavLink>
            <NavLink  to = '/resources'>Resources</NavLink>
            <NavLink  to = '/contact'>Contact</NavLink>
            {
              isDarkMode?<LightModeIcon onClick = {()=>setIsDarkMode(false)} /> : <DarkModeIcon onClick = {()=>setIsDarkMode(true)}/>
            }
        </div>
        <div className = 'links-big'>
            <NavLink to = '/product'>Product</NavLink>
            <NavLink to = '/pricing'>Pricing</NavLink>
            <NavLink to = '/company'>Company</NavLink>
            <NavLink to = '/resources'>Resources</NavLink>
            <NavLink to = '/contact'>Contact</NavLink>
            {
              isDarkMode?<LightModeIcon onClick = {()=>setIsDarkMode(false)} /> : <DarkModeIcon onClick = {()=>setIsDarkMode(true)}/>
            }
        </div>
      <Auth/>
    </div>
  )
}

export default Nav
