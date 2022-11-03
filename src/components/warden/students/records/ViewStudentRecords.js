import React from 'react';
import WardenHeader from '../../WardenHeader';
import { Container } from "react-bootstrap"
import '../../css/Style.css';
import { useState, useEffect, useMemo } from "react";
import { useLocalState } from '../../../../util/useLocalStorage';

const ViewStudentRecords = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [hostelId, setHostelId] = useLocalState("", "hostelId");
    const[students,setStudents]=useState([]);
    const [hasLoaded, setHasLoaded] = useState();

    useEffect(()=>{
        fetch(`/warden/viewHostelStudents/${hostelId}`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }, 
            })
            .then(response => Promise.all([response.json()]))
            .then(([body]) => {
                setStudents(body);
                setHasLoaded(true);
             });
            
    },[]);

    return (
        hasLoaded 
            ?
        <React.Fragment>
            <WardenHeader />
        
        <Container>
      <div className="row text-center">
        <div className="col-sm-8 text-success text-center">
        <h5 className="p-3 fw-bold text-black text-center">
            Students
          </h5>
        
          <table className="table table-bordered text-black text-center">
            <thead>
              <tr>   
                <th>Name</th>
                <th>Email</th>
                <th>Roll No</th>
                <th>Phone No</th>
                <th>Gender</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                  <tr key={student.studentId}>
                    <td>{student.studentName}</td>
                    <td>{student.email}</td>
                    <td>{student.studentRollNo}</td>
                    <td>{student.studentPhoneNo}</td>
                    <td>{student.studentGender}</td>
                    <td>{student.course.courseName}</td>
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

export default ViewStudentRecords;