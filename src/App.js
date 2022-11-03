import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About.js';
import Signup from './components/Signup';
import Errror from './components/Student/Errror';
import ViewUser from './components/Student/ViewUser';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Editprofile from './components/Student/Editprofile';
import { AppContext } from './components/Student/Context.js';
import StudentDashboard from './components/Student/StudentDashboard';
import Hostelpage from './components/Student/Hostelpage';
import Roompage from './components/Student/Roompage';
import Studenthome from './components/Student/Studenthome';
import Logout from './components/Student/Logout';
import Changepswd from './components/Student/Changepswd';
import Roomrequest from './components/Student/Roomrequest';
import UserRoomdetails from './components/Student/UserRoomdetails';
import { useState } from 'react';
import PrivateRoute from './PrivateRoute';
import Footer from './components/Student/Footer';
import AboutUs from './components/AboutUs';
// import Signin from './components/Signin';

import WardenDashboard from './components/warden/WardenDashboard';
import EditWardenProfile from './components/warden/profile/EditWardenProfile';
import UpdateWardenPassword from './components/warden/profile/UpdateWardenPassword';
import ViewRooms from './components/warden/hostel/rooms/ViewRooms';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import AddRoom from './components/warden/hostel/rooms/AddRoom';
import EditRoom from './components/warden/hostel/rooms/EditRoom';
import ViewRoomTypes from './components/warden/hostel/roomTypes/ViewRoomTypes';
import AddRoomType from './components/warden/hostel/roomTypes/AddRoomType';
import EditRoomType from './components/warden/hostel/roomTypes/EditRoomType';
import ViewStudentRecords from './components/warden/students/records/ViewStudentRecords';
import AdminHostel from './components/admin/hostel/AdminHostel';

function App() {
  const [users, setUsers] = useState(null);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_USER':
        setUsers({ user: payload.user });
        return;
      default:
        return;
    }
  };

  return (
    <>
      <AppContext.Provider value={{ users, dispatchUserEvent }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Errror />} />

          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/Student/Editprofile'
            element={
              <PrivateRoute>
                <Editprofile />
              </PrivateRoute>
            }
          />
          <Route
            path='/Student/ViewUser'
            element={
              <PrivateRoute>
                <ViewUser />
              </PrivateRoute>
            }
          />
          <Route
            path='/Student/Changepswd'
            element={
              <PrivateRoute>
                <Changepswd />
              </PrivateRoute>
            }
          />
          <Route
            path='/Student/Hostelpage'
            element={
              <PrivateRoute>
                <Hostelpage />
              </PrivateRoute>
            }
          />
          <Route
            path='/Student/Roompage'
            element={
              <PrivateRoute>
                <Roompage />
              </PrivateRoute>
            }
          />
          <Route
            path='/Student/Roomrequest'
            element={
              <PrivateRoute>
                <Roomrequest />
              </PrivateRoute>
            }
          />
          <Route
            path='/Student/Studenthome'
            element={
              <PrivateRoute>
                <Studenthome />
              </PrivateRoute>
            }
          />
          <Route
            path='/Student/UserRoomdetails'
            element={
              <PrivateRoute>
                <UserRoomdetails />
              </PrivateRoute>
            }
          />
          <Route
            path='/Logout'
            element={
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
            }
          />
          {/* <Header /> */}

          <Route
            path='/wardenDashboard'
            element={
              <PrivateRoute>
                <WardenDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/editProfile'
            element={
              <PrivateRoute>
                <EditWardenProfile />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/updatePassword'
            element={
              <PrivateRoute>
                <UpdateWardenPassword />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/viewRooms'
            element={
              <PrivateRoute>
                <ViewRooms />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/addRoom'
            element={
              <PrivateRoute>
                <AddRoom />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/editRoom'
            element={
              <PrivateRoute>
                <EditRoom />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/viewRoomTypes'
            element={
              <PrivateRoute>
                <ViewRoomTypes />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/addRoomType'
            element={
              <PrivateRoute>
                <AddRoomType />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/editRoomType'
            element={
              <PrivateRoute>
                <EditRoomType />
              </PrivateRoute>
            }
          />
          <Route
            path='/warden/viewStudentRecords'
            element={
              <PrivateRoute>
                <ViewStudentRecords />
              </PrivateRoute>
            }
          />

          {/* TODO: Remove private route comments */}
          <Route
            path='/admin/dashboard'
            element={
              // <PrivateRoute>
              <AdminDashboard />
              // </PrivateRoute>
            }
          />
          <Route
            path='/admin/hostel'
            element={
              // <PrivateRoute>
              <AdminHostel />
              // </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
