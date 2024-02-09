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
            <a href='/'><li>Home</li></a>
            <a href='#services'><li>Services</li></a>
            <a href='#about'> <li>About</li></a>
            <a href='#Feedback'> <li>Feedback</li></a>
         </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
