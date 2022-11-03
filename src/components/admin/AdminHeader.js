import React from 'react';
import Navbar from '../warden/Navbar';
import '../warden/css/Style.css';
import { Link } from 'react-router-dom';
import { adminMenuItems } from './adminMenuItems';

const AdminHeader = () => {
  return (
    <header>
      <div className="nav-area">
      <Link to="/adminDashboard" className="logo">
          Logo
        </Link>
        <Navbar menuItems={adminMenuItems} />
      </div>
    </header>
  );
};

export default AdminHeader;