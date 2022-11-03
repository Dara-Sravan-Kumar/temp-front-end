import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
    
  


const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
      });
    
      const { id } = useParams();
    
      useEffect(() => {
        loadUser();
      }, []);
    
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
      };
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">My Profile</h2>

          <div className="box">
            <div className="card-header">
              Details of user id : {user.email}
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-2">
                  <b>Name:</b> {user.email}
                 
                </li>
                <li className="list-group-item mb-2">
                  <b>Email:</b>{user.email}
                 
                </li>
                <li className="list-group-item mb-2">
                  <b>Roll No:</b>{user.email}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Phone No:</b>{user.email}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Gender:</b>{user.email}
                
                </li>
                <li className="list-group-item mb-2">
                  <b>Course Name:</b>{user.email}
                
                </li>
              </ul>
            </div>
          </div>
         <center><Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link></center> 
        </div>
      </div>
    </div>
  );
}

export default ViewUser
