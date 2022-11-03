import React from 'react';
import AdminHeader from './AdminHeader';
import '../warden/css/Style.css';
import { useState, useEffect, useMemo } from "react";
import { useLocalState } from '../../util/useLocalStorage';

const AdminDashboard = () => {

    return <div>
        <AdminHeader />
        <div>Welcome Admin</div>
    </div>
}

export default AdminDashboard;