import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminPanel from './AdminPanel';
import './Details.css'; 
const Contactt = () => {
  const [contacts, setcontacts] = useState([]); 

    useEffect(() => {
        // Fetch booking data from the backend
        axios.get("http://localhost:8081/Contactt") 
          .then((response) => {
            setcontacts(response.data); 
          })
          .catch((error) => {
            console.error("Error fetching booking data!", error);
          });
      }, []);
    
  return (
    <>
         <AdminPanel />
         <div className="booking-details">
        <h2>ContactUs Details</h2>
        <table>
          <thead>
            <tr>
              <th> Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Contactt