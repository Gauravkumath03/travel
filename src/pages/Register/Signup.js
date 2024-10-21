import React, { useState } from 'react';
import './Signup.css'; // For additional custom styles
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

// import { Breadcrumb } from 'react-bootstrap';

function Signup() {
  const navigate = useNavigate('')
  const [username, setusername] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword]=useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && email && password){
      axios.post(`http://localhost:8081/Signup`,{username,email,password})
      .then(()=>{
          navigate('/Login')
      })
      .catch((err)=>{
        console.error('Error',err);
        
      })
    }



    // console.log(formData);
  };

  return (
    <>
<Breadcrumbs  title="Sign UP" pagename="Signup" />

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center">Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={(e)=>{setusername(e.target.value)}}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e)=>{setemail(e.target.value)}}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
              <div>
                <a href="AdminLogin">admin</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
