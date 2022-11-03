import React from 'react'
import user1 from '../../images/patrick.png'
import {useEffect,useState } from "react";
import { useLocalState } from '../../util/useLocalStorage';
import './Testimonials.css'


const Home = () => {
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
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Your Profile</h2>
                    <p></p>
                </div>
                <div className="cust-container">
                    <img src={user1} alt="Avatar" style={{width:"90px"}}/>
                    <ul className="list-group list-group-flush">
                <li className="list-group-item mb-2">
                  <b>Name: </b>  {students.studentName}
                 
                </li>
                <li className="list-group-item mb-2">
                  <b>Email: </b>{students.email}
                 
                </li>
                <li className="list-group-item mb-2">
                  <b>Roll No: </b> {students.studentRollNo}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Phone No: </b> {students.studentPhoneNo}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Gender: </b> {students.studentGender}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Course Name:</b>
                
                </li>
              </ul>
                </div>

                
            </section>
        </React.Fragment>
    )
}

export default Home;


/* <div className="cust-container">
                    <img src={user2} alt="Avatar" style={{width:"70px"}}/>
                    <p><span>ABC</span> Faculty</p>
                    <p>Nice enviroment to run my personal projects.</p>
                </div> */