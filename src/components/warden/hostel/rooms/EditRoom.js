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


const EditRoom = () => {
    
    const location = useLocation();

    const [jwt, setJwt] = useLocalState("", "jwt");

    const [roomStatus, setRoomStatus] = useState("");
    const [roomType, setRoomType] = useState("⬇️ Select a Room Type ⬇️");
    let handleRoomTypeChange = (e) => {
        setRoomType(e.target.value)
      }

    const[roomTypes,setRoomTypes]=useState([]);
    const [hasLoaded, setHasLoaded] = useState();
    useEffect(()=>{
        fetch('/warden/viewRoomTypes',{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }, 
            })
            .then(response => Promise.all([response.json()]))
            .then(([body]) => {
                setRoomTypes(body);
                setHasLoaded(true);
             });
            
    },[]);

    function sendEditRoomRequest () {
        fetch(`/warden/editRoom/${location.state.id}, ${roomType}, ${roomStatus}`,{
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
                console.log(response.text());
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
        hasLoaded 
            ?
        <>
            <WardenHeader />
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6 mb-3'>Edit Room No {location.state.no} </h3>
                        <Form >

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                            <i class="zmdi zmdi-account material-icons-name"></i> Room Status
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="roomStatus" 
                                placeholder="Enter Room Status"
                                value={roomStatus} 
                                onChange = {(e) => setRoomStatus(e.target.value)} 
                            />
                            </Col>
                         </Form.Group>

                         <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                            <i class="zmdi zmdi-account material-icons-name"></i> Room Type
                            </Form.Label>
                            <Col sm="10">
                            <select onChange={handleRoomTypeChange}> 
                            <option value="⬇️ Select a Room Type ⬇️"> -- Select a Room Type -- </option>
                                {roomTypes.map(type => (
                                    <option key={type.roomTypeId} value= {type.roomTypeId}> 
                                        Room Name - {type.roomName}, 
                                        Room Fee - {type.roomFee}, 
                                        Room Capacity - {type.roomCapacity}
                                    </option>
                                ))}
                            </select>
                            </Col>
                         </Form.Group>
                       
                       <Button id="sumbit" variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="button" onClick={() => sendEditRoomRequest()}>
                           Edit Room
                       </Button>

                        </Form>
                    </div>
                </section>
             
            </div>
             </>
             : 
             <p>Loading...</p>
    )
}

export default EditRoom;