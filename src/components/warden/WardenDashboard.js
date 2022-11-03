import React from 'react';
import WardenHeader from './WardenHeader';
import './css/Style.css';
import { useState, useEffect, useMemo } from "react";
import { useLocalState } from '../../util/useLocalStorage';

const WardenDashboard = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [userEmail, setUserEmail] = useLocalState("", "userEmail");
    const[warden,setWarden]=useState([]);
    const [hasLoaded, setHasLoaded] = useState();
    const [hostelId, setHostelId] = useLocalState("", "hostelId");

    useEffect(()=>{
        fetch(`/warden/viewWarden/${userEmail}`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }, 
            })
            .then(response => Promise.all([response.json()]))
            .then(([body]) => {
                setWarden(body);
                setHostelId(body.hostel.hostelId);
                setHasLoaded(true);
             });
            
    },[]);

    return (
        hasLoaded 
            ?
        <>
            <WardenHeader />
            <h3>Welcome Warden</h3>
            <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Warden Profile</h2>

          <div className="box">
            <div className="card-header"> 
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-2">
                  <b>Name: {warden.wardenName}</b>
                </li>
                <li className="list-group-item mb-2">
                  <b>Email: {warden.email}</b>
                </li>
                <li className="list-group-item mb-2">
                  <b>Phone No: {warden.wardenPhoneNo}</b>
                </li>
                <li className="list-group-item mb-2">
                  <b>Hostel Name: {warden.hostel.hostelName}</b>
                </li>
                <li className="list-group-item mb-2">
                  <b>Hostel Number: {warden.hostel.hostelId}</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
        : 
        <p>Loading...</p>
    )
}

export default WardenDashboard;