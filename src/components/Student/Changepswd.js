import React from 'react'
import {Container, Form, Modal, Nav, NavDropdown,Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from './Navbar'
const Changepswd = () => {
  return (
  
    <div>
        <Navbar/>
        <div className="container mt-3" style={{minHeight:"70vh"}}>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                    <center> <h3 className='text-center col-lg-6 mb-3'>Change Password</h3>
</center>   
                        <Form >

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                             Old Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="oldpassword" 
                                placeholder="Old Password"
                            />
                            </Col>
                         </Form.Group>

                         



                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            New Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="newpassword" 
                                placeholder="New Password" 
                               
                            />
                            </Col>
                         </Form.Group>
                       
                    <center>  <Button variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="submit" >
                           Upadte Password
                       </Button></center> 


                        </Form>
                         </div>
                    
                </section>
             
            </div>
            </div>
  )
}

export default Changepswd