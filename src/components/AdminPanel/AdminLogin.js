// src/components/AdminPanel/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'jimmy' && password === '2003') {
      navigate('/Dashboard'); // Redirect to admin panel
    } else {
      alert('Please check Admin or Password !');
    }
  };

  return (
    <>
    
    <div className='username'>
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Admin Login</h2>
      <br></br>
      Admin :<input id="amd" 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      Password :<input className='my-3'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </>
  );
};

export default AdminLogin;
