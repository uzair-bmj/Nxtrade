import React, { useState } from 'react'
import Signup from './Signup';
import UserData from '../Hooks/userData';

export default function Login() {
    const [LoginEmail, setLoginEmail] = useState()
    const [LoginPassword, setLoginPassword] = useState()
    const { users, setusers } = UserData()

    const userfound = users.find((items) => { return items.useremail == LoginEmail && items.userpass == LoginPassword })
    function login() {
        if (userfound) {
            alert('login successful')
        }
        else { 
            alert('Invalid email or password')
        }
    }

    return (

        <>
            <div className='loginsection'>

                <div className='loginform'>
                    <h1 className='text-primary text-center fw-bolder'>LOGIN</h1>

                    <input type="email" placeholder='Enter your Email' value={LoginEmail} className='in fw-bold text-white' onChange={(e) => { setLoginEmail(e.target.value) }} required />
                    <input type="password" placeholder='Enter your Password' value={LoginPassword} className='in fw-bold text-white' onChange={(e) => { setLoginPassword(e.target.value) }} required />
                    <input type="submit" value="Login" className='btn btn-outline-primary bt fw-bold text-white' onClick={login} />
                </div>
            </div>



        </>
    )
}
