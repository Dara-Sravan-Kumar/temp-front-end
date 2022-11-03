import { Container } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import { useLocalState } from '../../util/useLocalStorage';
import {useNavigate} from 'react-router-dom';
import Roomrequest from "./Roomrequest";
import Navbar from './Navbar'
import { Link, NavLink } from 'react-router-dom'
import Dashboard from "./StudentDashboard";



const Roompage = () => {
  const [buttonText, setButtonText] = useState('Request');

   const navigate = useNavigate();
 const [jwt, setJwt] = useLocalState("", "jwt");
  const[rooms,setRooms]=useState([]);
  const [hasLoaded, setHasLoaded] = useState();
  const hostelId='1';
  
  useEffect(()=>{
  fetch(`/student/viewRoomType/${hostelId}`,{
    method:"GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
},
})
.then(res=>res.json())
.then((result)=>{
console.log(result);
setRooms(result);
setHasLoaded(true);

}
)
},[]);


function roomrequestfunc(){
//const[roomTypeId,setRoomTypeId]=useState();
const roomTypeId='2';

  fetch(`/student/roomReq/${roomTypeId}`,{
    method:"POST",
    headers:{'Authorization':`Bearer ${jwt}`
}}
).then((result)=>{console.log();
  alert("Request sent for this Room to the warden");
  
})

setButtonText("Request Sent!");

}




  return (
    <React.Fragment>
        <Navbar/>
        <div style={{minHeight:"70vh"}}>
    <Container>
    <div className="container">
    <h1 className="title">Types of Room Available</h1>
    <table>
      <thead>
      <tr>
              
              
              <th>Room Name </th>
              <th>Room Fee </th>
              <th>Room Capacity </th>
              <th>Book</th>
              
            </tr>
      </thead>
      <tbody>
                {rooms.map((getrooms) => (
                  <tr key={getrooms.roomTypeId}>
                     
                    <td>{getrooms.roomName}</td>
                    <td> {getrooms.roomFee}</td>
                    <td> {getrooms.roomCapacity}</td>
                    
                    <td><button className="btn btn-success" style={{textDecoration: "none",color:"white"}} onClick={()=>roomrequestfunc()}>
                      {buttonText}</button> </td>
                      <td></td>
                  </tr>
                ))}
              </tbody>
          
    </table>
  </div>  
  
</Container>
</div>
</React.Fragment>

    

 
  )
}

export default Roompage;