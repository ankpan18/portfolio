import React from 'react'
import Profile from '../assets/ankur_PhotoRoom.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Body.css'
import Suven from '../assets/suven.jpg'
// import Dec from '../assets/decrypton.jpg'
import Salesforce from '../assets/salesforce.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.PNG'
import P3 from '../assets/p3.PNG'
import P4 from '../assets/P4.PNG'
import P5 from '../assets/p5.PNG'
import P6 from '../assets/P6.PNG'
import Php from '../assets/php.png'
import Html from '../assets/html.png'
import Css from '../assets/css.jpg';
import Js from '../assets/JS.png'
import Mysql from '../assets/mysql.jpg'
import Mern from '../assets/mern.png'
import Ci from '../assets/ci.png'

function Body() {
  return (
<main>
    <section id='home'>
      <div>
        <h2>I am Ankur Panthri</h2>
        <p>I am a passionate Web developer who enjoys creating dynamic and user-friendly web applications. I am currently working on CodeIgniter, and I am always eager to learn new technologies and best practices.</p>
      </div>

      <div>
        <img src={Profile} alt='Profile Pic'  className='checkimage'/>
      </div>
    </section>

    {/* About Me */}

    <section id='about'>
      
      <h2>Qualifications: <span>Msc. Computer Science (2023) CGPA-8.89 FIRST With Distinction</span></h2>
      <h2>Current Role: <span>PHP Developer at Decrypton</span></h2>
    
    {/* Past Internships */}
    <div className='past_intern'>
      <h2>Previous Internships:</h2>
      <div className='p1'>
        <img src={Salesforce} alt=''/> 
        <span> <span className='subheading'>Salesforce Developer Virtual Internship:</span> Here I learned concepts of Salesforce using Trailheads and completed various modules. Used Apex for development</span>
      </div>

      <div className='p1'>
        <img src={Suven} alt=''/>
        <span> <span className='subheading'>UI/UX (Bootstrap) Coding Internship:</span> This internship involved front end web development of popular websites using Bootstrap.</span>
      </div>
    </div>
  {/* 
    Certications
    <div className='cert'>

    </div> */}

    
    <div className='skills pt-4'>
      <h2>Skills</h2>
      <img src={Html} alt="HTML Developer"/>
      <img src={Css} alt="Css Developer"/>
      <img src={Js} alt="JS Developer"/>
    <img src={Php} alt="PHP Developer"/>
    <img src={Mysql} alt="Mysql Developer"/>
    <img src={Mern} alt="Mern Developer"/>
    <img src={Ci} alt="CI Developer"/>
    {/* <div> <span>PHP </span> </div> */}
    </div>

      {/* <h2>Certications: <span>PHP Developer at Decrypton</span></h2> */}

    </section>


      {/* Projects  */}
      <section id='projects'>
      <h2>Sample Projects</h2>
      <div className='project'>

 <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={P1} />
      <Card.Body>
        <Card.Title>Online Car Rental Website</Card.Title>
        <Card.Text>
          Full stack Car Rental website using HTML,
Bootstrap CSS, JavaScript, PHP and mySQL
        </Card.Text>
        <a href="https://github.com/ankpan18/car_rental_project" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="primary" className='mx-2'>Code</Button></a>
        <a href="https://www.twitter.com/ankur_panthri" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="danger">Live</Button></a>

      </Card.Body>
    </Card>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={P2} />
      <Card.Body>
        <Card.Title>PWA Frontend</Card.Title>
        <Card.Text>
        PWA App Using React JS to build Chat Screen Frontend. Chatdata is coming through API
        </Card.Text>
        <a href="https://github.com/ankpan18/corider" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="primary" className='mx-2'>Code</Button></a>
        <a href="https://rococo-queijadas-67b6fb.netlify.app" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="danger">Live</Button></a>

      </Card.Body>
    </Card>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={P3} />
      <Card.Body>
        <Card.Title>Flipzon
</Card.Title>
        <Card.Text>
        Ecommerce website made using PHP and MySQL......
        </Card.Text>
        <a href="https://github.com/ankpan18/flipzon" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="primary" className='mx-2'>Code</Button></a>
        <a href="https://www.twitter.com/ankur_panthri" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="danger">Live</Button></a>

      </Card.Body>
    </Card>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={P4} />
      <Card.Body>
        <Card.Title>Login MERN</Card.Title>
        <Card.Text>
          A MERN website that allows signup and login with profile photo and otp in email. 
        </Card.Text>
        <a href="https://github.com/ankpan18/login_mern" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="primary" className='mx-2'>Code</Button></a>
        <a href="https://www.twitter.com/ankur_panthri" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="danger">Live</Button></a>

      </Card.Body>
    </Card>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={P5} />
      <Card.Body>
        <Card.Title>Shows Website</Card.Title>
        <Card.Text>
        Fetches shows from TVMaze API and details like
rating, genre in different cards.
        </Card.Text>
        <a href="https://github.com/ankpan18/Shows_app" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="primary" className='mx-2'>Code</Button></a>
        <a href="https://master--helpful-horse-f4ef81.netlify.app/" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="danger">Live</Button></a>

      </Card.Body>
    </Card>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={P6} />
      <Card.Body>
        <Card.Title>Location Extension </Card.Title>
        <Card.Text>
        This extension allows us to get Location based on IP Address. Made using Plasmo, React, Tailwind and TypeScript
        </Card.Text>
        <a href="https://github.com/ankpan18/location-extension" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="primary" className='mx-2'>Code</Button></a>
        <a href="https://www.twitter.com/ankur_panthri" class="social text-white me-4" target="_blank" rel="noopener noreferrer"><Button variant="danger">Live</Button></a>

      </Card.Body>
    </Card>
    
      </div>
      </section>

      </main>
      
  )
}

export default Body