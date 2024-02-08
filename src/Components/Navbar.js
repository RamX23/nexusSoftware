import React, { useState } from 'react'
import '../Components/navstyle.css'

 
function Navbar() {
    const [show,setshow]=useState(true);
    
  return (

    <div>



      <nav className='navbar fixed-top'>
        <h3>Nexus</h3>
        <div className="nav">
        <a className='bar' onClick={()=> setshow(!show)}>&#9776;</a>
         <ul className={show ? "menu":"mobile-menu"}>
            <li><a href='/'>Home</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#Feedback'>Feedback</a></li>
         </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
