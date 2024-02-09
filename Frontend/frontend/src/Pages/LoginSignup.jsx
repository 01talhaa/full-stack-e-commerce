import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }


  const login = async () => {
    console.log("login function executed", formData);
  
    let responsData;
    await fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'  // Fix the typo here
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => responsData = data);
  
    if (responsData.success) {
      localStorage.setItem('auth-token', responsData.token);
      window.location.replace("/");
    } else {
      alert(responsData.error);
    }
  };
  
  const signUp = async () => {
    console.log("Sign up is working", formData);
  
    let responsData;
    await fetch('http://localhost:4000/signup', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'  // Fix the typo here
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => responsData = data);
  
    if (responsData.success) {
      localStorage.setItem('auth-token', responsData.token);
      window.location.replace("/");
    } else {
      alert(responsData.error);
    }
  };
  

  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>{state}</h1>
        <div className="loginSignup-fields">
          {state === "Sign Up" ? (
            <input type="text" 
            name="username"
            value={formData.username}
            onChange={changeHandler}
            placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" 
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Email Address" />
          <input type="password" 
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Password" />
        </div>
        <button onClick={() => {state === "Login"? login() : signUp()}}>Continue</button>

        {state === "Sign Up" ? 
        (
          <p className="loginSignup-login">
            Already have an account? <span onClick={() => {setState("Login")}}>Login here</span>
          </p>
        ) 
        : 
        (
          <p className="loginSignup-login">
            Create an account? <span onClick={() => {setState("Sign Up")}}>Click Here</span>
          </p>
        )}

        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
