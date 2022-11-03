import React from 'react';
import './css/Style.css';

export const wardenMenuItems = [
    {
      title: 'Home',
      url: '/wardenDashboard',
    },
    {
      title: 'Profile',
      url: '/warden/viewProfile',
      submenu: [
        {
          title: 'Edit Profile',
          url: '/warden/editProfile',
        },
        {
          title: 'Update Password',
          url: '/warden/updatePassword',
        },
      ],
    },
    {
      title: 'Hostel',
      url: '/',
      submenu: [
        {
          title: 'Rooms',
          url: '',
          submenu: [
            {
              title: 'View Rooms',
              url: '/warden/viewRooms',
            },
            {
              title: 'Add Rooms',
              url: '/warden/addRoom',
            },
          ],
        },
        {
          title: 'Room Type',
          url: '',
          submenu: [
            {
              title: 'View Room Types',
              url: '/warden/viewRoomTypes',
            },
            {
              title: 'Add Room Types',
              url: '/warden/addRoomType',
            },
          ],
        },
      ],
    },
    {
      title: 'Students',
      url: '/',
      submenu: [
        {
          title: 'View Records',
          url: '/warden/viewStudentRecords',
        },
        {
          title: 'Rooms',
          url: '',
          submenu: [
            {
              title: 'Allot Room Requests',
              url: '',
            },
            {
              title: 'Vacate Room Requests',
              url: '',
            },
            {
              title: 'Allot Room',
              url: '',
            },
            {
              title: 'Vacate Room',
              url: '',
            }
          ],
        },
      ],
    },
    {
      title: 'Statistics',
      url: '',
    },
  ];