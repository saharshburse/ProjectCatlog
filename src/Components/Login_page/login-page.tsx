import React, { useState } from 'react';
import './login-page.css';
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }; 

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
    if(username==="admin@email.com"&& password==="admin@123"){
      console.log("login sucess");
      // <Navigate to='/admin'  replace={true} />;
      localStorage.setItem("authtoken", "true");
      navigate('/admin');
    }
    else{
      setUsername("");
      setPassword("");
      console.log("Incorrect Userid or password");
    }
  };

  return (
    <div>
      
    <div className="login-page">

      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} placeholder="Enter Username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Enter Password" required />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
