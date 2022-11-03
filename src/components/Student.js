import React from 'react';
import './Student.css';

const Student = () => {
  return (
   
    <div class="wrapper">

    <div class="content">
     
       <div class="card" style={{ background: "#1e1e20" }}>
 
             <div class="icon">
             <i class="zmdi zmdi-file-text material-icons-name"></i></div>
             <p class="title">My Room Details</p>
             <p class="text">Your Room Details</p>
 
       </div>
       <div class="card" style={{ background: "#1e1e20" }}>
 
             <div class="icon">
             <i class="zmdi zmdi-search"></i></div>
             <p class="title">Find New Room</p>
             <p class="text">Find Room for Yourself</p>
 
       </div>
       <div class="card" style={{ background: "#1e1e20" }}>
 
             <div class="icon">
             <i class="zmdi zmdi-account material-icons-name"></i></div>
             <p class="title">Vaccate Room Request</p>
             <p class="text">Put Rquest for vaccating Room</p>
 
       </div>
       <div class="card" style={{ background: "#1e1e20" }}>
 
 <div class="icon">
 <i class="zmdi zmdi-money-box"></i></div>
 <p class="title">Pay Fee</p>
 <p class="text">Pay your fee here</p>

</div>
       
      
      
    </div>
 
 </div>
 
 
    )
}

export default Student
