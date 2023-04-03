import React from 'react';
import "./Landing.css";

import { Link } from 'react-router-dom';
export default function LandingPage() {
 
  return (
    <div className="landing">
        <div className='image'> <img
        className="animation"
        src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="Insta" 
      /></div>
      <div className='content'>
      <span className='text'> 10x Team 04</span>
      <Link to="/view">
      <button className="btn">
        Enter
      </button></Link></div>
    </div>
  );
}
