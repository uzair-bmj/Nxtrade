import React, { useState, useEffect } from 'react'


export default function Signup() {

    const [users, setusers] = useState([]);
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [LoginEmail ,setLoginEmail] = useState()
    const [LoginPassword ,setLoginPassword] = useState()


    function SignUp(e) {
        e.preventDefault();


        const finduser = users.find((items) => { return items.email == email })
        if (!finduser) {
            if (name && email && password) {
                if (email.includes('@gmail.com')) {
                    setusers([...users, { name, email, password }])
                    alert("user registered Successfully")
                }
                else {
                    alert('Please provide valid email address')
                }
            }
            else {
                alert('Please provide complete info')
            }
        }


        else {
            alert("User already exsists")
        }
        setname('');
        setemail('');
        setpassword('');
    }
    function login(e){
        e.preventDefault();
        const userfound = users.find((items)=>{return items.email == LoginEmail && items.password == LoginPassword})
        if(userfound){
            alert('Login Successful')
        }
        else{
            alert('Invalid email or Password')
        }
        setLoginEmail('');
        setLoginPassword('');

    }





    // function display() {
    //     const loginSections = document.querySelectorAll(".loginsection");
    //     loginSections.forEach(section => {
    //         if (section.style.display === "block") {
    //             section.style.display = "none";

    //         } else {
    //             section.style.display = "block";
    //         }
    //     });
    // }







    return (
        <>
            <div className=' sig'>
                <div className='signupsection'>
                    <h1 className='text-primary text-center fw-bolder' >SIGN UP</h1>
                    <div className='signupform'>
                        <input type="text" placeholder='Enter your Name' value={name} className='in  fw-bold text-white' onChange={(e) => { setname(e.target.value) }} required />

                        <input type="email" placeholder='Enter your Email' value={email} className='in fw-bold text-white' onChange={(e) => { setemail(e.target.value) }} required />
                        <input type="Password" placeholder='Enter your Password' value={password} className='in fw-bold text-white' onChange={(e) => { setpassword(e.target.value) }} required />
                        <input type="submit" value="Signup" className='btn btn-primary bt fw-bold text-white' onClick={SignUp} />
                        <p className='df text-center text-primary text-decoration-none mt-2' >Already a User? Login</p>
                    </div>

                    <div className='loginsection'>
                        <h1 className='text-primary text-center fw-bolder'>LOGIN</h1>   
                        <div className="signupform">
                            <input type="email" placeholder='Enter your Email' value={LoginEmail} className='in fw-bold text-white' onChange={(e) => { setLoginEmail(e.target.value) }} required />
                            <input type="password" placeholder='Enter your Password' value={LoginPassword} className='in fw-bold text-white' onChange={(e) => { setLoginPassword(e.target.value) }} required />
                            <input type="submit" value="Login" className='btn btn-outline-primary bt fw-bold text-white' onClick={login}/>
                        </div>
                    </div>
                </div>
                <div className='connect'>
                    <img src="/Images/Graphic.jpg" alt="" className='cimg' />
                    <h5 className='text-primary text-center fw-bold mt-3'>Lets Connect with us Today For better Tommorrow</h5>
                    <p className='text-white text-center ms-2 me-2'>
                        Experience the convergence of expertise and innovation at NexTrade – where web development, graphic designing, animation, SEO mastery, content writing, and blogging excellence unite. Our team thrives on crafting immersive digital experiences, building robust web solutions, and designing captivating visuals that speak volumes. With a blend of technical prowess and creative finesse, we redefine online presence, optimizing for success and engagement. Connect with us today to embark on a journey where skill meets imagination, and every pixel resonates with purpose and precision</p>
                </div>
            </div>



        </>
    )
}