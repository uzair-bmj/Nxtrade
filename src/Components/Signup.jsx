import React, { useState, useEffect } from "react";
import UserData from "../Hooks/userData";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const { users, setusers } = UserData()

  const navigate = useNavigate()

  function SignUp(e) {
    e.preventDefault();
    const person = {
      username: name,
      useremail: email,
      userpass: password
    }

    const found = users.find((items) => { return items.useremail == email })
    if (!found) {
      if (name && email && password) {
        if (email.includes('@gmail.com')) {
          users.push(person)
          navigate('/signin')
          setname('');
          setemail('');
          setpassword('');
        }
        else{
          alert('please provide valid email address')
        }
      }
      else {
        alert('please provide complete info')
      }
    }
    else {
      alert('users already exists')
    }

  }



  return (
    <>
      <div className="sig">
        <img src="/Images/Graphic.jpg" alt="" />

        <div className="signupsection">


          <div className="signupform">
            <h1 className="text-primary text-center fw-bolder">SIGN UP</h1>
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              className="in  fw-bold text-white"
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />

            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              className="in fw-bold text-white"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
            />
            <input
              type="Password"
              placeholder="Enter your Password"
              value={password}
              className="in fw-bold text-white"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />
            <input
              type="submit"
              value="Signup"
              className="btn btn-primary bt fw-bold text-white"
              onClick={SignUp}
            />

            <p className="df text-center text-primary text-decoration-none mt-2" style={{ cursor: 'pointer' }} onClick={() => { navigate("/signin") }}>
              Already a User? Login
            </p>

          </div>
        </div>

      </div>
    </>
  );
}
