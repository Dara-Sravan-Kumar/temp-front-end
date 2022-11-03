import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import WardenHeader from '../../WardenHeader';
import '../../css/Style.css';
import { useState, useEffect, useMemo } from "react";
import { useLocalState } from '../../../../util/useLocalStorage';
import {useLocation} from 'react-router-dom';


const EditRoomType = () => {
    
    const location = useLocation();

    const [jwt, setJwt] = useLocalState("", "jwt");

    const [roomName, setRoomName] = useState("");
    const [roomFee, setRoomFee] = useState("");
    const [roomCapacity, setRoomCapacity] = useState("");

    function sendEditRoomTypeRequest () {
        fetch(`/warden/editRoomType/${location.state.id}, ${roomName}, ${roomFee}, ${roomCapacity}`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }, 
        })
        .then((response) => {
          if (response.status === 200)
            return Promise.all([response.status, response.text()]);
            else {
                return Promise.reject("Invalid Update Details attempt");
            }
        })
        .then(([status, body]) => {
            alert(body);
            window.location.href = "/warden/viewRooms";
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
                        <h3 className='text-center col-lg-6 mb-3'>Edit Room Type </h3>
                        <Form >

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                            <i class="zmdi zmdi-account material-icons-name"></i> Room Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="roomName" 
                                placeholder="Enter Room Name"
                                value={roomName} 
                                onChange = {(e) => setRoomName(e.target.value)} 
                            />
                            </Col>
                         </Form.Group>

                         <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                            <i class="zmdi zmdi-account material-icons-name"></i> Room Fee
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="roomFee" 
                                placeholder="Enter Room Fee"
                                value={roomFee} 
                                onChange = {(e) => setRoomFee(e.target.value)} 
                            />
                            </Col>
                         </Form.Group>

                         <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                            <i class="zmdi zmdi-account material-icons-name"></i> Room Capacity
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="roomCapacity" 
                                placeholder="Enter Room Capacity"
                                value={roomCapacity} 
                                onChange = {(e) => setRoomCapacity(e.target.value)} 
                            />
                            </Col>
                         </Form.Group>
                       
                       <Button id="sumbit" variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="button" onClick={() => sendEditRoomTypeRequest()}>
                           Edit Room Type
                       </Button>

                        </Form>
                    </div>
                </section>
             
            </div>
             </>
    )
}

export default EditRoomType;