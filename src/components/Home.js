import React, { useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom'
import user1 from './patrick.png'
import user2 from './nan.jpg'
import './Header.css'
import Pricing from './Student/Pricing'

const Home = () => {


  return (
    <div><Header/>

<React.Fragment>
        <header className="bg-image">
                <div className="bg-container">
                    <h1>Welcome </h1>
                    <h2>HOSTEL AVAILABILITY PROJECT</h2>
                    <Link to="/Login">Login!</Link>
                </div>
            </header>
        </React.Fragment>
        <section className="content-container">
                <div className="textArea"> 
                    <h2>About Us</h2>
                    <p></p>
                </div>
                <div className="cust-container">
                Established in 1922 as a unitary, teaching and residential University by the Act of the then Central Legislative Assembly, a strong commitment to excellence in teaching, research and social outreach has made the University a role-model and trend setter for other universities. The President of India is the Visitor, the Vice-President is the Chancellor and the Chief Justice of the Supreme Court of India is the Pro-Chancellor of the University. Beginning with three colleges and 750 students, it has grown as one of the largest universities in India with 16 faculties, over 80 academic departments, an equal number of colleges and over seven lakh students. Over 500 programmes offered by the University are approved by Academic and Executive Councils, out of which 209 programmes are being considered for NAAC accreditation purpose. The rest being run in colleges are separately accredited. 

Drawing students and faculty from across India and abroad, the University has emerged as a symbol of excellence, integrity and openness of mansa (thought), vaacha (speech) and karmana (action).
           
                </div>

                
            </section>
        <Pricing/>
        
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Testimonials</h2>
                    <p>What others say about us.</p>
                </div>
                <div className="cust-container">
                    <img src={user1} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>DR XYZ</span> Professor</p>
                    <p>Great Place to live!</p>
                </div>

                <div className="cust-container">
                    <img src={user2} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>ABC</span>Alumni </p>
                    <p>Nice enviroment.</p>
                </div>
            </section>
      
      
    </div>
  )
}

export default Home