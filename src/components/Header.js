import React, { useRef } from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

  const head=useRef(null);
  const handleClick=()=>{
    console.log("Clicked");
    // head.current.style.color ="white"
    if(head.current.style.display==="none")
    {
      head.current.style.display="flex";
      head.current.style.flexDirection="column";
      head.current.style.visibility="visible";

    }
    else{
      head.current.style.display="none";
      // head.current.style.flexDirection="none";
      head.current.style.visibility="none";
    }
    
  }
  return (
    <header className="nav_head">
        <div className='tabs' ref={head}>
       <p><a href='#home'>Home</a></p>
        <p><a href='#about'>About Me</a></p>
        <p><a href='#projects'>Projects</a></p>
        <p><a href='#contact'>Contact</a></p>
        </div>
        <div className='toggle' onClick={handleClick} >
        <FontAwesomeIcon icon={faBars} style={{color:'ghostWhite'}}/>
        </div>

    </header>
    
  )
}

export default Header