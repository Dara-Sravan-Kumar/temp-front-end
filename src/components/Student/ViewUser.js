import React, { useEffect,useState } from "react";
import { Link} from "react-router-dom";
import { useLocalState } from '../../util/useLocalStorage';
import Dashboard from "./StudentDashboard";
import Navbar from './Navbar'



const ViewUser = () => {

              const [jwt, setJwt] = useLocalState("", "jwt");
              const [userEmail, setUserEmail] = useLocalState("", "userEmail");
              const [hasLoaded, setHasLoaded] = useState();
              const[students,setStudents]=useState([]);
              
              useEffect(()=>{
              fetch(`/student/viewProfile/${userEmail}`,{
                method:"GET",
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
            },
            })
            .then(res=>res.json())
            .then((result)=>{
            console.log(result);
            setStudents(result);
            setHasLoaded(true);
            }
            )
            },[]);




         
      return (
        <div><Navbar/>
        <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">My Profile</h2>

          <div className="box">
            <div className="card-header">
              Details of user id : 
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-2">
                  <b>Name: </b> {students.studentName}
                 
                </li>
                <li className="list-group-item mb-2">
                  <b>Email: </b>{students.email}
                 
                </li>
                <li className="list-group-item mb-2">
                  <b>Roll No: </b>{students.studentRollNo}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Phone No: </b>{students.studentPhoneNo}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Gender: </b>{students.studentGender}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Course Name:</b>
                
                </li>
              </ul>
            </div>
          </div>
         <center><Link className="btn btn-primary my-2" style={{ background: "rgb(13, 88, 100)" }} to={"/Student/Studenthome"}>
            Go Back
          </Link></center> 
        </div>
      </div>
    </div>
        
        </div>
   
    
  );
}

export default ViewUser
