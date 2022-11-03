import React from 'react';
import WardenHeader from '../../WardenHeader';
import { Container } from "react-bootstrap"
import '../../css/Style.css';
import { useState, useEffect, useMemo } from "react";
import { useLocalState } from '../../../../util/useLocalStorage';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const ViewRoomTypes = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
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

    const[roomTypeStatus,setRoomTypeStatus]=useState();
    const navigate = useNavigate(); 
    const sendEditRoomTypeRequest = (roomTypeId) => {

      fetch(`/warden/checkRoomType/${roomTypeId}`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }, 
        })
        .then(response => Promise.all([response.text()]))
        .then(([body]) => {
          if(!(body === "true")) {
            alert("Can't edit Room Type, In Use");
            return;
          }
            navigate("/warden/editRoomType", {state:{id:roomTypeId}});
         });
    }

    const sendRemoveRoomTypeRequest = (roomTypeId) => {

      fetch(`/warden/removeRoomType/${roomTypeId}`,{
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }, 
        })
        .then(response => Promise.all([response.text()]))
        .then(([body]) => {
          alert(body);
          window.location.href = "/warden/viewRoomTypes";
         });
    }

    return (
        hasLoaded 
            ?
        <React.Fragment>
            <WardenHeader />
        
        <Container>
      <div className="row text-center">
        <div className="col-sm-8 text-success text-center">
        <h5 className="p-3 fw-bold text-black text-center">
            Available RoomTypes
          </h5>
        
          <table className="table table-bordered text-black text-center">
            <thead>
              <tr>   
                <th>Room Type</th>
                <th>Room Fee</th>
                <th>Room Capacity</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {roomTypes.map((roomType) => (
                  <tr key={roomType.roomTypeId}>
                    <td>{roomType.roomName}</td>
                    <td>{roomType.roomFee}</td>
                    <td>{roomType.roomCapacity}</td>
                    <td>
                      <Button id="sumbit" variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="button" onClick={() => sendEditRoomTypeRequest(roomType.roomTypeId)}>
                           Edit Room Type
                       </Button>
                    </td>
                    <td>
                      <Button id="sumbit" variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="button" onClick={() => sendRemoveRoomTypeRequest(roomType.roomTypeId)}>
                           Remove Room Type
                       </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>      
    </Container>
  </React.Fragment>
  : 
  <p>Loading...</p>
    )
}

export default ViewRoomTypes;