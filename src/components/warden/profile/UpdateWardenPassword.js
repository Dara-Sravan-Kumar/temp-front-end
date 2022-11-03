import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import WardenHeader from '../WardenHeader';
import '../css/Style.css';
import { useState, useEffect, useMemo } from "react";
import { useLocalState } from '../../../util/useLocalStorage';


const UpdateWardenPassword = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [userEmail, setUserEmail] = useLocalState("", "userEmail");

    const [password, setPassword] = useState("");
    const [passwordRe, setPasswordRe] = useState("");

    function sendUpdateRequest () {

        if(!(password === passwordRe)) {
            alert("Enter Same Password in both fields");
            return;
        }

        const reqBody = {
            "username" : userEmail,
            "password" : password,
        };

        fetch('/auth/updatePassword',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body : JSON.stringify(reqBody)
        })
        .then((response) => {
          if (response.status === 200)
            return Promise.all([response.status, response.text()]);
            else return Promise.reject("Invalid Update Details attempt");
        })
        .then(([status, body]) => {
            alert(body);
            window.location.href = "/wardenDashboard";
        })
        .catch((message) => {
          alert(message);
        });
    }

    return (
        <>
            <WardenHeader />
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6 mb-3'>Update Details</h3>

                        <Form >

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

                         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                           Re-enter Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="password" 
                                placeholder="Re-enter Password" 
                                value={passwordRe} 
                                onChange = {(e) => setPasswordRe(e.target.value)} 
                            />
                            </Col>
                         </Form.Group>
                       
                       <Button id="sumbit" variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="button" onClick={() => sendUpdateRequest()}>
                           Update
                       </Button>

                        </Form>
                    </div>
                </section>
             
            </div>
             </>
    )
}

export default UpdateWardenPassword;