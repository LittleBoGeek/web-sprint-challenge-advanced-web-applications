import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { axiosWithAuth } from './utils/axiosWithAuth'


const Login = (props) => {

  const history = useHistory() //enable the ability to useHisory history prop
  const [login, setLogin] = useState ({
    username:'',
    password:'' // set up state object
  })

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const handleChange = (e) => {
  setLogin({
    ...login,[e.target.name]:e.target.value
  })
}

  const handleSubmit = (e) => {
   e.preventDefault();
  axios
   .post('http://localhost:5000/api/colors')
   .then(res => {
     console.log(res)
     window.localStorage.setItem('token',res.data.payload)
   })
   props.history.push('/bubbles')
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1> 
  
      <h5> Log on in!</h5>
     

      <form onSubmit={handleSubmit}>
     
<input 
type="text"
name="username"
label="username"
value={login.username}
className="input"
 onChange={handleChange}
/>

<input 
type="password"
name="password"
label="password"
value={login.password}
className="input"
 onChange={handleChange}
/>


        <button type="submit"> login </button>
      </form>
    </>
  );
};

export default Login;
