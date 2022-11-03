import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import SIGN_IMG from '../SIgn_img'
import { NavLink } from 'react-router-dom'
import { useState } from "react";
//import { useNavigate } from 'react-router-dom'
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './StudentDashboard'
import Navbar from './Navbar'

const editprofile = () => {

     return (
        <div><Navbar/>
    <div className="container mt-3" style={{minHeight:"70vh"}}>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                    <center> <h3 className='text-center col-lg-6 mb-3'>Edit Profile</h3>
</center>   
                        <Form >

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                             Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="name" 
                                placeholder="Enter Your Name"
                            />
                            </Col>
                         </Form.Group>

                         <Form.Group as={Row} className="mb-3" controlId="formPlaintextemail">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="email" 
                                placeholder="Enter Your email"
                            />
                            </Col>
                         </Form.Group>

                         <Form.Group as={Row} className="mb-3" controlId="formPlaintextphone">
                            <Form.Label column sm="2">
                           Phone
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="phone" 
                                placeholder="Enter Your Phone No." 
                               
                            />
                            </Col>
                         </Form.Group>


                      
                       
                    <center>  <Button variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="submit" >
                           Update Details
                       </Button></center> 


                        </Form>
                         </div>
                    
                </section>
             
            </div>
            </div>
  )
}

export default editprofile