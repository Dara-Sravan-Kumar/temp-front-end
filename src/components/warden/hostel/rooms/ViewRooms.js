import React from 'react';
import WardenHeader from '../../WardenHeader';
import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap"
import '../../css/Style.css';
import { useState, useEffect, useMemo } from "react";
import { useLocalState } from '../../../../util/useLocalStorage';
import {useNavigate} from 'react-router-dom';

const ViewRooms = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [hostelId, setHostelId] = useLocalState("", "hostelId");
    const[rooms,setRooms]=useState([]);
    const [hasLoaded, setHasLoaded] = useState();

    useEffect(()=>{
        fetch(`/warden/viewRooms/${hostelId}`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }, 
            })
            .then(response => Promise.all([response.json()]))
            .then(([body]) => {
                setRooms(body);
                setHasLoaded(true);
             });
    },[]);

    const navigate = useNavigate(); 
    const sendEditRoomRequest = (roomId, roomNo, bedsOccupied) => {
      if(bedsOccupied > 0) {
        alert("Can't edit Room");
        return;
      }
      navigate("/warden/editRoom", {state:{id:roomId ,no:roomNo}});  
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
            Available Rooms
          </h5>
        
          <table className="table table-bordered text-black text-center">
            <thead>
              <tr>
              
                <th>Room No</th>
                <th>Room Status</th>
                <th>Beds Occupied</th>
                <th>Room Type</th>
                <th>Room Fee</th>
                <th>Room Capacity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {rooms.map((room) => (
                  <tr key={room.roomId}>
                     <td>{room.roomNo}</td>
                    <td>{room.roomStatus}</td>
                    <td>{room.bedsOccupied}</td>
                    <td>{room.roomType.roomName}</td>
                    <td>{room.roomType.roomFee}</td>
                    <td>{room.roomType.roomCapacity}</td>
                    <td>
                      <Button id="sumbit" variant="primary" className='col-lg-6' style={{ background: "rgb(13, 88, 100)" }} type="button" onClick={() => sendEditRoomRequest(room.roomId, room.roomNo, room.bedsOccupied)}>
                           Edit Room
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

export default ViewRooms;