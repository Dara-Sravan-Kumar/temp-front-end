import { Container } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import { useLocalState } from '../../util/useLocalStorage';
import { Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import './Hostelpage.css'
import Dashboard from "./StudentDashboard";

const Hostelpage = () => {
  
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [userEmail, setUserEmail] = useLocalState("", "userEmail");
  
 // const[gender,setGender]=useState([]);

  const[hostels,setHostels]=useState([]);
  const [hasLoaded, setHasLoaded] = useState();

  const gender = 'G';

console.log(gender);
  useEffect(()=>{
  fetch(`/student/genderHostelView/${gender}`,{
    method:"GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
},
})
.then(res=>res.json())
.then((result)=>{
console.log(result);
setHostels(result);
setHasLoaded(true);

}
)
},[]);

return (
  <div>
   <Navbar/>
 
  <div className="container" style={{minHeight:"70vh"}}>
    <h1 className="title">Available Hostels</h1>
    <table>
      <thead>
      <tr>
              
              <th>Hostel Name </th>
              <th>Hostel Room </th>
              <th>Hostel Status </th>
              <th>Hostel Type </th>
              <th>Book</th>
             
            </tr>
      </thead>
      <tbody>
                {hostels.map((gethoste) => (
                  <tr key={gethoste.hostelId}>
                     <td>{gethoste.hostelName}</td>
                    <td>{gethoste.hostelRooms}</td>
                    <td> {gethoste.hostelStatus}</td>
                    <td> {gethoste.hostelType}</td>
                    
                    <td><button className="btn btn-success"><a href="/Student/Roompage" style={{textDecoration: "none",color:"white"}}> Select</a></button> </td>
                  </tr>
                ))}
              </tbody>
          
    </table>
  </div>
  </div>
)
        
  /*return (


<div><Navbar/>
   <React.Fragment>
    
        
        <Container>
      <div className="row text-center">
        <div className="col-sm-8 text-success text-center">
        <h5 className="p-3 fw-bold text-black text-center">
            Available Hostels
          </h5>
        <div class="tabledesign">
        <table className="table table-bordered text-black text-center">
            <thead>
              <tr>
              
                <th>Hostel Name </th>
                <th>Hostel Room </th>
                <th>Hostel Status </th>
                <th>Hostel Type </th>
                <th>Book</th>
              </tr>
            </thead>
            <tbody>
                {hostels.map((gethoste) => (
                  <tr key={gethoste.hostelId}>
                     <td>{gethoste.hostelName}</td>
                    <td>{gethoste.hostelRooms}</td>
                    <td> {gethoste.hostelStatus}</td>
                    <td> {gethoste.hostelType}</td>
                    
                    <td><button className="btn btn-success"><a href="/Student/Roompage" style={{textDecoration: "none",color:"white"}}> Select</a></button> </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
         
        </div>
      </div>      
    </Container>

        
    
  </React.Fragment></div>
 
 
  )*/

}
export default Hostelpage