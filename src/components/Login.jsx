import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/login", {
        email, password
      })
      .then(res => {
        if (res.data === "exist") {
          history("/", { state: { id: email } });
        } else if (res.data === "notexist") {
          alert("User has not signed up");
        }
      })
      .catch(e => {
        alert("Wrong details");
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
}

return (
    <body>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" />
        <style>
          {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Quicksand", sans-serif;
          }

          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #000;
          }

          section {
            position: absolute;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2px;
            flex-wrap: wrap;
            overflow: hidden;
          }

          section::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(#000, #838485, #000);
            animation: animate 5s linear infinite;
          }

          @keyframes animate {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

section span {
  position: relative;
  display: block;
  width: calc(6.25vw - 2px);
  height: calc(6.25vw - 2px);
  background: #181818;
  z-index: 2;
  transition: 1.5s;
}

section span:hover {
  background: #838485;
  transition: 0s;
}

section .signin {
  position: absolute;
  width: 400px;
  background: #222;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.9); /* Corrected box shadow value */
}

section .signin .content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}

section .signin .content h2 {
  font-size: 2em;
  color: #838485;
  text-transform: uppercase;
}

section .signin .content .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

section .signin .content .form .inputBox {
  position: relative;
  width: 100%;
}

section .signin .content .form .inputBox input {
  position: relative;
  width: 100%;
  background: #333;
  border: none;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 1em;
}

section .signin .content .form .inputBox i {
  position: absolute;
  left: 0;
  padding: 15px 10px;
  font-style: normal;
  color: #aaa;
  transition: 0.5s;
  pointer-events: none;
}

.signin .content .form .inputBox input:focus ~ i,
.signin .content .form .inputBox input:valid ~ i {
  transform: translateY(-7.5px);
  font-size: 0.8em;
  color: #fff;
}

.signin .content .form .links {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.signin .content .form .links a {
  color: #fff;
  text-decoration: none;
}

.signin .content .form .links a:nth-child(2) {
  color: #838485;
  font-weight: 600;
}

.signin .content .form .inputBox input[type="submit"] {
  padding: 10px;
  background: #838485;
  color: #000;
  font-weight: 600;
  font-size: 1.35em;
  letter-spacing: 0.05em;
  cursor: pointer;
}

input[type="submit"]:active {
  opacity: 0.6;
}

@media (max-width: 900px) {
  section span {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}

@media (max-width: 600px) {
  section span {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
} 

`}
        </style>
      </Helmet>

      <section> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span>
         <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span>
         <span></span> <span></span> <span></span> <span></span> 
        <span></span> <span></span> <span></span> <span></span>
         <span></span> <span></span> <span></span> <span></span> 
         <span></span> <span></span> <span></span> <span></span> 
         <span></span> <span></span> <span></span> <span></span> 
         <span></span> <span></span> <span></span> <span></span>
          <span></span> <span></span> <span></span> <span></span> 
          <span></span> <span></span> <span></span> <span></span>
           <span></span> <span></span> <span></span> <span></span> 
           <span></span> <span></span> <span></span> <span></span> 
           <span></span> <span></span> <span></span> <span></span> 
           <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span> 
            <span></span> <span></span> <span></span> <span></span>
             <span></span> <span></span> <span></span> <span></span> 
             <span></span> <span></span> <span></span> <span></span> 
             <span></span> <span></span> <span></span> <span></span> 
             <span></span> <span></span> <span></span> <span></span> 
             <span></span> <span></span> <span></span> <span></span> 
             <span></span> <span></span> <span></span> <span></span>
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span> 
              <span></span> <span></span> <span></span> <span></span>
             <span></span> <span></span> <span></span> <span></span>
              <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span>
            <span></span> <span></span><span></span> <span></span>
            <span></span> <span></span> <span></span> <span></span>  
      
         <div class="signin"> 
      
          <div class="content"> 
      
           <h2>Sign In</h2> 
      
           <div class="form">

           <form action='POST'>
      
            <div class="inputBox"> 
      
             <input type="text" required  onChange={(e) => { setEmail(e.target.value) }} /> <i>Email</i> 
      
            </div>  

            <br/>

            <div class="inputBox"> 
      
             <input type="password" required  onChange={(e) => { setPassword(e.target.value) }}/> <i>Password</i> 
      
            </div> 

            <br/>

            <div class="links"> 
            <Link to = "/signup">Signup</Link>
            <Link to ="/forgotpassword">Forgot Password</Link> 
            </div> 

            <br/>

            <div class="inputBox"> 
      
             <input type="submit" value="Sign in" onClick={submit}/> 
      
            </div> 
            
            </form>
      
           </div>  
      
          </div> 
      
         </div> 
      
        </section> 
  
    
  </body>
    )
}

export default Login

