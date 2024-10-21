// src/components/AdminPanel/SignupDetails.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import AdminNavbar from './AdminNavbar';
import AdminPanel from './AdminPanel';
import './detail.css'
const Signupdetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/Signupdetails`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error!', error);
      });
  }, []);

  return (
    <>
    <AdminPanel/>
    <div className='content'>
      <h2>Signup Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th> {/* Fixed typo here */}
          </tr>
        </thead>
        <tbody>
          {data.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.username}</td>
              <td>{detail.email}</td>
              <td>{detail.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Signupdetails;
