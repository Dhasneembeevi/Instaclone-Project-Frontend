import React from 'react';
import "./Header.css";


import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='land'><img src='https://cdn4.iconfinder.com/data/icons/social-media-line-3/64/Social-media-expand_Instagram-512.png' alt='logo' className='logo'/>
    <div className='head'> Instaclone</div>
    <Link to="/post">
    <img src="https://cdn1.smartprix.com/rx-i9eG8s2MR-w1200-h1200/9eG8s2MR.jpg" alt='camera' className='cam-icon'/>
   
    </Link>
    </div>
  )
}

export default Header;
