import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import ViewUser from "./ViewUser"
import editprofile from "./Editprofile"
import Changepswd from "./Changepswd"
import Stack from "react-bootstrap/Stack"
import Home from "../Home"
import './Navbar.css'
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: "#37387a" }}>
      <Container fluid="xxl">
        <Navbar.Brand href="#home"><p class="text-white">Hostel Availability Project</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"><p class="text-white">Home</p></Nav.Link>
           <div class="dropdown">
            <NavDropdown title={<span class="text-white">Profile</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="./Editprofile">Update Profile</NavDropdown.Item>
              <NavDropdown.Item href="./ViewUser">View User</NavDropdown.Item>
              <NavDropdown.Item href="./Changepswd">
              Change Password
              </NavDropdown.Item>
              <NavDropdown.Item href="../Home">
               Logout
              </NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
/*import {React,useState} from 'react'
import {Container, Form, Modal, Nav, Navbar, NavDropdown,Button, NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Navbar.css'

const navbar = () => {
  
    return (
        <>
      
      <nav class="navbar navbar-expand-lg justify-content-between" style={{ background: "#37387a" }}>
        <div class="container-fluid">
        
          <a class="navbar-brand justify-content-between text-white" href="#">Hostel Availability System </a>
      
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link active text-white" aria-current="page" href="/Student/Studenthome">Home</a>
              </li>
            </ul>
           
          
               
              <div class="dropdown">
              
                
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  
                  
                  <li><Link class="dropdown-item" to="/Student/Changepswd">Change Password</Link></li>
                  <li><Link class="dropdown-item" to="/Student/Editprofile">Update Profile</Link></li>
               
                   <li><Link class="dropdown-item"  to="/Logout">Logout</Link></li> 
             
                
                </ul>
                
              </div>
              
          </div>
      
        </div>
      </nav>
      
      </>
      
        )
}

export default navbar*/