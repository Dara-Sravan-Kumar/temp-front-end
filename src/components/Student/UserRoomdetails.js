import {React,useState} from 'react'
import { Link} from "react-router-dom";
import Navbar from "./Navbar";
import { useLocalState } from '../../util/useLocalStorage';

const UserRoomdetails = () => {

    const [buttonText, setButtonText] = useState("Vaccate Room");
    const [jwt, setJwt] = useLocalState("", "jwt");

    function sendVaccateRequest(){
    fetch(`/student/roomReq/`,{
        method:"POST",
      headers:{'Authorization':`Bearer ${jwt}`
    }}
    ).then((result)=>{console.log();
      alert("Request sent for this Room to the warden");
      
    })
    
    setButtonText("Vaccate Request Sent!");
        
    }
  return (
    <div><Navbar/>
      
      <div className="row border mb-6">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Your Room Details</h2>

          <div className="box">
            <div className="card-header">
          <center>Details of your Room </center>    
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-2">
                  <b>Hostel Name: </b> 
                 
                </li>
                <li className="list-group-item mb-2">
                  <b>Room Type: </b>
                 
                </li>
                <li className="list-group-item mb-2">
                  <b>Room No: </b>
                
                </li>
                
                
               </ul>
            </div>
          </div>
         <center><Link className="btn btn-primary my-2" style={{ background: "rgb(13, 88, 100)" }} to={"/Student/Studenthome"}>
            Go Back
          </Link>
              </center> 
              <center>Want to Vaccate Room? </center><center>Click on the Vaccate Room Button to submit Request </center>
             <center> 
            <button className="btn btn-success mt-3" style={{textDecoration: "none",color:"white"}} 
            onClick={() => sendVaccateRequest()}>
                 {buttonText}</button> 
              </center>
        </div>
       
      </div>
    </div>
        
        
  )
}

export default UserRoomdetails