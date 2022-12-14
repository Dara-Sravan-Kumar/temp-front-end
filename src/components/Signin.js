import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import SIGN_IMG from './SIgn_img';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalState } from '../util/useLocalStorage';
import { useState } from "react";
import Header from './Header';

const Signin = () => {
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [userEmail, setUserEmail] = useLocalState("", "userEmail");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function sendLoginRequest () {
        const reqBody = {
        "username" : username,
        "password" : password
        };

        fetch('/auth/login',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify(reqBody)
        }).then(response => Promise.all([response.json(), response.headers]))
        .then(([body, headers]) => {
          setJwt(headers.get("Authorization"));
          setUserEmail(body["email"]);
          if(body["authorities"][0]["authority"] === "ROLE_WARDEN") {
            window.location.href = "/wardenDashboard";
          }
          else if(body["authorities"][0]["authority"] === "ROLE_STUDENT") {
            window.location.href = "/Student/Studenthome";
          }
          else if(body["authorities"][0]["authority"] === "ROLE_ADMIN") {
            window.location.href = "/AdminDashboard";
          }
          else alert("You don't have the authority to login");
        });
    }

  return (
    <>
    <Header />
        <div className="row border mb-6">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 mb-5 shadow">
            <div className="container mt-3 mb-15" style={{minHeight:"90px"}}>
                <section className='d-flex justify-content-between'>
                <SIGN_IMG />
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                   <center><h3 className='text-center col-lg-6 mb-4'>Sign IN</h3></center>     
                        <Form >

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="5">
                           Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="username" 
                                placeholder="Email" 
                                value={username} 
                                onChange = {(e) => setUsername(e.target.value)} 
                            />
                            </Col>
                         </Form.Group>

                         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="5">
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

                            <Button id="sumbit" variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="button" onClick={sendLoginRequest}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Don't Have an Account <span><NavLink to="/signup">Register Here</NavLink></span> </p>
                    </div>
                   
                </section>
                

            </div>
          </div></div>


    </>
  )
}

export default Signin