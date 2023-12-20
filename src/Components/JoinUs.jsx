import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function JoinUs() {
    return (
        <div>
            <div className='connect'>
                <img src="/Images/Graphic.jpg" alt="" className='cimg' />
                <h5 className='text-primary text-center fw-bold mt-3'>Lets Connect with us Today For better Tommorrow</h5>
                <p className='text-white text-center ms-2 me-2'>
                    Experience the convergence of expertise and innovation at NexTrade – where web development, graphic designing, animation, SEO mastery, content writing, and blogging excellence unite.With a blend of technical prowess and creative finesse, we redefine online presence, optimizing for success and engagement. Connect with us today to embark on a journey where skill meets imagination, and every pixel resonates with purpose and precision</p>
                <button className='btn btn-primary'><Link to='signup'> Sign Up to Explore</Link></button>
            </div>
            <Outlet/>
        </div>

        
    )
}
