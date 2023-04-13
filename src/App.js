import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
const App = () => {

  const [formData, setFormData] = useState({
    first_name : "", 
    last_name : "", 
    email : ""});

  const handleChange = (e) => {
    console.log("e---------------------", e.target.name, e.target.value)
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' },
      body: JSON.stringify(formData),
  };
 let response = await fetch('http://localhost:4000/postFormData', requestOptions);
  if(response){
    alert(response.message)
  }

   
  }
  return (
    <div className="container"> 
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='body'>
        <div className='sidebar'>
          <ul>
            <li>
              HOME
            </li>
            <li>
              PROFILE
            </li>
            <li>
              DASHBOARD
            </li>
          </ul>
        </div>
        <div className='content'>
            <div className='profile-div'>
              PROFILE
            </div>
            <div className='profile-content'>
              <form>
                <TextField className='text' name='first_name' id="outlined-basic" label="First Name" variant="outlined" onChange={handleChange}/>
                <TextField className='text' name='last_name' id="outlined-basic" label="Last Name" variant="outlined" onChange={handleChange}/>
                <TextField className='text' name='email' id="outlined-basic" label="Email" variant="outlined" onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>
              </form>
            </div>
        </div>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
