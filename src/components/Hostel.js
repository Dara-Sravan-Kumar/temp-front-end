import { Container } from "react-bootstrap"
import React, { useState, useEffect } from "react";


const Hostel = () => {

    const [hos, sethos] = useState([]);

    useEffect(() => {
        const gethos = async () => {
          const res = await fetch("http://localhost:8080/student/genderHostelView/{genderHostelType}");
          const getdata = await res.json();
          sethos(getdata);
          // console.log(getdata);
        };
    
        gethos();
      },[]);


  return (
    
    <React.Fragment>
        
        <Container>
      <div className="row text-center">
        <div className="col-sm-8 text-success text-center">
          <h5 className="p-3 fw-bold text-black text-center">
            Fetch Data from MYSQL Database in Reactjs
          </h5>
        
          <table className="table table-bordered text-black text-center">
            <thead>
              <tr>
                <th>Hostel Name</th>
                <th>Hostel Room</th>
                <th>Hostel Status</th>
                <th>Hostel Type</th>
                <th>Book</th>
              </tr>
            </thead>
            <tbody>
                {hos.map((getcate) => (
                  <tr key={getcate.hostelName}>
                    <td>{getcate.hostelRooms}</td>
                    <td> {getcate.hostelStatus}</td>
                    <td> {getcate.hostelType}</td>
                    <td><button href="" className="btn btn-success"> Select </button> </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>      
    </Container>

        
    
  </React.Fragment>
 
  )
}

export default Hostel;