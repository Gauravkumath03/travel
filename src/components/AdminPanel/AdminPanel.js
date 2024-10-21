import React from 'react'
// import Slidebar from './Slidebar'; 
import { Link } from 'react-router-dom';
import './navbar.css';

const AdminPanel = () => {
  return (
    <>
     <div className="sidebar">
            <h2>Travelistra</h2>
            <ul>
                <li><Link to="/dashboard ">Dashboard</Link></li>
                <li><Link to="/Details">Booking Details</Link></li>
                <li><a href='Signupdetails'>Signup Details</a></li>
                <li><a href='Contactt'>ContactUs Details</a></li>

                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
    </>
  )
}

export default AdminPanel