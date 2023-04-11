import React, { useContext, useState } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../images/freedom.png';
import {FiMoon} from 'react-icons/fi';
import {RiSunLine} from 'react-icons/ri';
import { darkContext } from '../../context/ContextProvider';

const Navbar = () => {

  const [open , setOpen] = useState('false');

  const {dark , toggleDark} = useContext(darkContext);

  const isOpen = () =>{
    setOpen(!open);
  }
  return (
    <div className='navbar'>



    {/* --------------- Links --------------------*/}
 
   <div className={!open ? "open-links" : 'links'}>
   
    <ul>
      <li><Link to = '/' onClick={() =>setOpen(true)}>الصفحة الرئيسية</Link></li>
      <li><Link to = '/about'  onClick={() =>setOpen(true)}>معلومات عنا</Link></li>
      <li><Link to = '/subjects'  onClick={() =>setOpen(true)}>موادنا</Link></li>
      <li><Link to = '/choose'  onClick={() =>setOpen(true)}>لماذا نحن</Link></li>
      <li><Link to = '/contact'  onClick={() =>setOpen(true)}>الأتصال بنا</Link></li>
   <h2 className='all'>{!dark ? <FiMoon className='moon' onClick={toggleDark}/> : <RiSunLine className='sun' onClick={toggleDark}/>}</h2>

    </ul>

   </div>


   <div className="icon" onClick={isOpen}>
   <i class="fa-solid fa-bars"></i>
   </div>

   <h2 className='mo'>{!dark ? <FiMoon className='moon' onClick={toggleDark}/> : <RiSunLine className='sun' onClick={toggleDark}/>}</h2>


    {/* --------------- logo --------------------*/}
    <div className="logo">
   <h2><span>Space</span> <b>Center</b></h2>
   <img src={logo} alt="Logo" />
   </div>


    </div>
  )
}

export default Navbar