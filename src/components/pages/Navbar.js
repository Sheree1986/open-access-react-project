import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import Dropdown from './Dropdown';
// import Logo from '../images/logo.png';
// import { MenuItems } from './MenuItems';
// import { MenuItems2 } from './MenuItems2';



function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  // const onMouseEnter1 = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };



  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  // const onMouseLeave1 = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          OPEN ACCESS TO SUCCESS
          {/* <img src={Logo} alt="circle"></img> */}
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>

          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/neurodiversity'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Neurodiversity 
             
            </Link>
            {dropdown && <Dropdown />}
          </li>
          {/* <li className='nav-item'
            onMouseEnter1={onMouseEnter1}
            onMouseLeave1S={onMouseLeave1}
        
           
          > */}
           <li className='nav-item'>
          <Link
              to='/resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resources
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
         
           
          <li className='nav-item'>
            <Link
              to='/api'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Lang
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/face'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Face
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
      
         
        </ul>
    
      </nav>
    </>        
  );
}
export default Navbar;
