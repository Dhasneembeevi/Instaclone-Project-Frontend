import React from 'react';
import "./Header.css";


import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='land'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' alt='logo' className='logo'/>
    <div className='head'> Instaclone</div>
    <Link to="/post">
    <img src="https://cdn1.smartprix.com/rx-i9eG8s2MR-w1200-h1200/9eG8s2MR.jpg" alt='camera' className='cam-icon'/>
   
    </Link>
    </div>
  )
}

export default Header;

