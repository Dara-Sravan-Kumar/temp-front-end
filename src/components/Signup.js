import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import SIGN_IMG from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [gender, setGender] = useState("");
    const [courseName, setCourseName] = useState("");

    function sendRegisterRequest () {
        const reqBody = {
        "name" : name,
        "email" : email,
        "password" : password,
        "rollNo" : rollNo,
        "phoneNo" : phoneNo,
        "gender" : gender,
        "courseName" : courseName
        };

        fetch('/student/registration',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify(reqBody)
        })
        .then((response) => {
          if (response.status === 200)
            return Promise.all([response.status, response.body]);
          else return Promise.reject("Invalid login attempt");
        })
        .then(([status, body]) => {
            window.location.href = "/login";
        })
        .catch((message) => {
          alert(message);
        });
    }

    
    return (
        
        <div>
          <Header/>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 mb-5 shadow">
            <div className="container mt-3 mb-15" style={{minHeight:"90px"}}>
           <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-1 p-3" style={{ width: "100%" }}>
                 <center><h3 className='text-center col-lg-6 mb-2'>Sign Up</h3>
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
                                value={name} 
                                onChange = {(e) => setName(e.target.value)} 
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
                                value={email} 
                                onChange = {(e) => setEmail(e.target.value)}
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
                                value={phoneNo} 
                                onChange = {(e) => setPhoneNo(e.target.value)}
                            />
                            </Col>
                         </Form.Group>

                         <Form.Group as={Row} className="mb-1" controlId="formPlaintextroll">
                            <Form.Label column sm="2">
                        Rollno
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="roll" 
                                placeholder="Enter Your Roll No" 
                                className="mb-4"
                                value={rollNo} 
                                onChange = {(e) => setRollNo(e.target.value)}
                            />
                            </Col>
                         </Form.Group>

                         <Form.Group as={Row} className="mb-2" controlId="formPlaintextcourse">
                            <Form.Label column sm="2">
                         Course
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="courseName" 
                                placeholder="CourseName" 
                                className="mb-4"
                                value={courseName} 
                                onChange = {(e) => setCourseName(e.target.value)}
                            />
                            </Col>
                         </Form.Group>


                        <fieldset>
                        <Form.Group as={Row} className="mb-2">
                            <Form.Label as="legend" column sm={2}>
                            Gender
                            </Form.Label>
                            <Col sm={10}>
                            {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Male" name="group1" type={type} id={`inline-${type}-1`} 
                                            onChange = {(e) => setGender("Male")}
                                />
                                <Form.Check inline label="Female"name="group1" type={type} id={`inline-${type}-2`} 
                                            onChange = {(e) => setGender("Female")}
                                />
                                </div>
                            ))}          
                            </Col>
                        </Form.Group>
                        </fieldset>
                                                
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                             Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange = {(e) => setPassword(e.target.value)}
                            />
                            </Col>
                         </Form.Group>
                       
                       <Button id="sumbit" variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="button" onClick={() => sendRegisterRequest()}>
                           Register
                       </Button>


                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                   
                </section>
             
            </div></div></div> 
        </div>
    )
}

export default Home