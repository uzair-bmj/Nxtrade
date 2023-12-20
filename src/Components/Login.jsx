import React, { useState } from 'react'

export default function Login() {

    const [users, setusers] = useState([]);
    
    const [LoginEmail, setLoginEmail] = useState()
    const [LoginPassword, setLoginPassword] = useState()

    function login(e) {
        e.preventDefault();
        const userfound = users.find((items) => { return items.email == LoginEmail && items.password == LoginPassword })
        if (userfound) {
            alert('Login Successful')
        }
        else {
            alert('Invalid email or Password')
        }
        setLoginEmail('');
        setLoginPassword('');

    }

    return (

        <>
            <div className='loginsection'>
                <h1 className='text-primary text-center fw-bolder'>LOGIN</h1>
                <div className="signupform">
                    <input type="email" placeholder='Enter your Email' value={LoginEmail} className='in fw-bold text-white' onChange={(e) => { setLoginEmail(e.target.value) }} required />
                    <input type="password" placeholder='Enter your Password' value={LoginPassword} className='in fw-bold text-white' onChange={(e) => { setLoginPassword(e.target.value) }} required />
                    <input type="submit" value="Login" className='btn btn-outline-primary bt fw-bold text-white' onClick={login} />
                </div>
            </div>


        </>
    )
}
