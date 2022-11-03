import React from 'react';
import Navbar from './Navbar';
import './css/Style.css';
import { Link } from 'react-router-dom';
import {wardenMenuItems} from './wardenMenuItems'

const WardenHeader = () => {
  return (
    <header>
      <div className="nav-area">
      <Link to="/wardenDashboard" className="logo">
          Logo
        </Link>
        <Navbar menuItems={wardenMenuItems} />
      </div>
    </header>
  );
};

export default WardenHeader;