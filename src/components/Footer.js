import React from 'react'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faQuora, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

function Footer() {
  return (

    <div className="mt-5">

  <div className="text-lg-start text-white" style={{backgroundColor:'#1c2331'}}>
    <section className="d-flex justify-content-between align-items-center p-4" style={{backgroundColor: '#2a976d'}}>
      <div className="me-5 col-6">
        <span>Get connected with me on social networks:</span>
      </div>
      
      <div className="icons">
        <a href="https://www.twitter.com/ankur_panthri" class="social text-white me-4" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} />
        </a>

        <a href="https://www.linkedin.com/in/ankur-panthri" class="social text-white me-4" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
		  
		 <a href="https://www.quora.com/profile/Ankur-Panthri" class="social text-white me-4" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faQuora} />
        </a>
      </div>
    </section>



    <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      Copyright © 2023 Ankur Panthri. All Rights Reserved.
    </div>
	  
  </div>

</div>
  )
}

export default Footer