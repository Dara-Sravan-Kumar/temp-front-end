import {React,useState} from 'react'
import {Container, Form, Modal, Nav, Navbar, NavDropdown,Button, NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Contact from '../Contact'
import Hostelpage from './Hostelpage'
import Editprofile from './Editprofile'
import Changepswd from './Changepswd'
import Studenthome from './Studenthome'
import Roompage from './Roompage'
import Logout from './Logout'
import './Dashb.css'

const StudentDashboard = () => {
 return (
    <nav className="header">
        <div className="nav-wrapper">
            <a className="logo text-white" href='/'>Hoster Availability Project</a>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

            <ul className="menu">
                <li><a className="menu text-white" href="/">Home</a></li>
                 <li> <a className="menu text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  
                  <li><Link class="dropdown-item text-white" to="/Student/ViewUser">My Details</Link></li>
                  <li><Link class="dropdown-item text-white" to="/Student/Changepswd">Change Password</Link></li>
                  <li><Link class="dropdown-item text-white" to="/Student/Editprofile">Update Profile</Link></li>
               
                   <li><Link class="dropdown-item text-white"  to="/Logout">Logout</Link></li> 
             
                
                </ul>   </li>          
            </ul>
        </div>
    </nav>
)
  

}

export default StudentDashboard;

/*
return (
    <>
    
    <Navbar bg="primary"  expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Hostel Web Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
           
            </Nav>
            <Nav> 
                            <NavDropdown title="Room" id="basic-nav-dropdown">
              <NavDropdown.Item>
              <Link class="nav-link text-black" to="/Hostelpage">Room Request</Link>
              <Link class="nav-link text-black" to="/Editprofile">Room Vaccate Rquest</Link>
                </NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
          <Nav> 
            <Form.Label column sm="2">
                            <i class="zmdi zmdi-account material-icons-name"></i> 
                            </Form.Label>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item>
              <Link class="nav-link text-black" to="/ViewUser">My Profile</Link>
              <Link class="nav-link text-black" to="/Editprofile">Edit Profile</Link>
                </NavDropdown.Item>
              
              <NavDropdown.Item to="#action/3.3">Logout</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    </>
    

  )
  


<Nav.Link href="#home">Room</Nav.Link>*/ 

