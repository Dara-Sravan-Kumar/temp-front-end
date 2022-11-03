import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import WardenHeader from '../WardenHeader';
import '../css/Style.css';
import { useState, useEffect, useMemo } from "react";
import { useLocalState } from '../../../util/useLocalStorage';


const EditWardenProfile = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [userEmail, setUserEmail] = useLocalState("", "userEmail");

    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    function sendUpdateRequest () {
        fetch(`/warden/editWarden/${name}, ${phoneNo}, ${userEmail}`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }, 
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

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                            <i class="zmdi zmdi-account material-icons-name"></i> Name
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

                         <Form.Group as={Row} className="mb-3" controlId="formPlaintextphone">
                            <Form.Label column sm="2">
                            <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>Phone
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

export default EditWardenProfile;