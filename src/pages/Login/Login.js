import React, { useState } from 'react';
import './Login.css'; // For additional custom styles
// import { Breadcrumb } from 'react-bootstrap';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Login=({setUser})=> {


  const navigate = useNavigate()
const [email,setemail]=useState()
const [password,setpassword]=useState()


const handleSubmit = (e) => {
  e.preventDefault();
  
  if (email && password) {
      axios.post('http://localhost:8081/Login', { email, password })
          .then(res => {
              if(res.data === 'success!!'){
                // setUser({email,password})
                navigate('/');
              }else{
                alert('Please check your email or password!')
              }
          })
          .catch(err => {
              console.error(err);
              alert("An error occurred. Please try again.");
          });
  } else {
      alert("Please enter both email and password.");
  }
};


  return (
    <>
    <Breadcrumbs title="Login Here" pagename="Login"/>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e)=>{
                    setemail(e.target.value)
                  }}
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
                  onChange={(e)=>{
                    setpassword(e.target.value)
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
