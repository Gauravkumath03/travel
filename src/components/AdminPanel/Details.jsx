// src/components/AdminPanel/BookingDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminPanel from './AdminPanel'; 
import './Details.css';
const Details = () => {
  const [bookings, setBookings] = useState([]); 

  useEffect(() => {
    // Fetch booking data from the backend
    axios.get("http://localhost:8081/Details") 
      .then((response) => {
        setBookings(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching booking data!", error);
      });
  }, []);

  return (
    <>
      <AdminPanel />
      <div className="booking-details">
        <h2>Booking Details</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Check In</th>
              <th>Check Out</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.firstname}</td>
                <td>{booking.lastname}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.checkin}</td>
                <td>{booking.checkout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;
