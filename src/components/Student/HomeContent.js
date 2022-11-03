import HomeContent from './HomeContent.css'
import React from 'react'
import { Link } from "react-router-dom"
import Hostelpage from "./Hostelpage"


const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Hello "User"</h1>
                    <h2>Welcome To Hostel Website</h2>
                    <Link className="grey" to="/Student/Hostelpage"><button className="button">Book Hostel</button></Link>
                    <Link className="grey" to="/Student/UserRoomdetails"><button className="button">Vaccate Hostel</button></Link>
                    
                </div>
            </header>
           
        </React.Fragment>
    )
}

export default Header;