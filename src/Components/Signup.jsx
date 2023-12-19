import React, { useState, useEffect } from 'react'


export default function Signup() {

    const [userarray, setuserarray] = useState([])
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [submitted, setsubmitted] = useState(false)

    function checkemail(email) {
        return userarray.some(user => user.email === email);
    }

    function submit(e) {
        e.preventDefault();

        if (email.includes('@gmail.com')) {
            if (!checkemail(email)) {
                setuserarray([...userarray, { name, email, password }]);
                console.log(userarray)
                setname('');
                setemail('');
                setpassword('');
                setsubmitted(true);
                alert('user registered successfully')
            } else {
                alert('User Already Exists');
            }
        } else {
            alert('Please provide a valid email address');
        }
    }


    useEffect(() => {
        console.log(userarray);
    }, [userarray]);

    // for login
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    function checkLogin(e) {
        e.preventDefault();

        const user = userarray.find(user => user.email === loginEmail && user.password === loginPassword);

        if (user) {
            alert("Login Successful");
        } else {
            alert("Invalid Email or Password");
        }
        setLoginEmail('');
        setLoginPassword('')
    }
    function display() {
        const loginSections = document.querySelectorAll(".loginsection");
        loginSections.forEach(section => {
            if (section.style.display === "block") {
                section.style.display = "none";
                
            } else {
                section.style.display = "block";
            }
        });
    }







    return (
        <>
            <div className=' sig'>
                <div className='signupsection'>
                    <h1 className='text-primary text-center fw-bolder' >SIGN UP</h1>
                    <form action="" onSubmit={submit} className='signupform'>
                        <input type="text" placeholder='Enter your Name' value={name} className='in  fw-bold text-white' onChange={(e) => { setname(e.target.value) }} required />
                        <input type="email" placeholder='Enter your Email' value={email} className='in fw-bold text-white' onChange={(e) => { setemail(e.target.value) }} required />
                        <input type="Password" placeholder='Enter your Password' value={password} className='in fw-bold text-white' onChange={(e) => { setpassword(e.target.value) }} required />
                        <input type="submit" value="Signup" className='btn btn-primary bt fw-bold text-white' onClick={submit} disabled={setsubmitted} />
                        <p className='df text-center text-primary text-decoration-none mt-2' onClick={display}>Already a User? Login</p>
                    </form>

                    <div className='loginsection'>
                        <h1 className='text-primary text-center fw-bolder'>LOGIN</h1>
                        <form onSubmit={checkLogin} className='signupform'>
                            <input type="email" placeholder='Enter your Email' value={loginEmail} className='in fw-bold text-white' onChange={(e) => { setLoginEmail(e.target.value) }} required />
                            <input type="password" placeholder='Enter your Password' value={loginPassword} className='in fw-bold text-white' onChange={(e) => { setLoginPassword(e.target.value) }} required />
                            <input type="submit" value="Login" className='btn btn-outline-primary bt fw-bold text-white' />
                        </form>
                    </div>
                </div>
                <div className='connect'>
                    <img src="/Images/Graphic.jpg" alt="" className='cimg'  />
                    <h5 className='text-primary text-center fw-bold mt-3'>Lets Connect with us Today For better Tommorrow</h5>
                    <p className='text-white text-center ms-2 me-2'>
                        Experience the convergence of expertise and innovation at NexTrade – where web development, graphic designing, animation, SEO mastery, content writing, and blogging excellence unite. Our team thrives on crafting immersive digital experiences, building robust web solutions, and designing captivating visuals that speak volumes. With a blend of technical prowess and creative finesse, we redefine online presence, optimizing for success and engagement. Connect with us today to embark on a journey where skill meets imagination, and every pixel resonates with purpose and precision</p>
                </div>
            </div>



        </>
    )
}