import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='footer' id='Contacts'>
                <hr style={{ color: 'white', width: '100%' }} />
                <h1 className='text-primary fw-bold text-center'>SOCIAL LINKS </h1>
                <div className='cn'>
                    <a href="https://www.facebook.com/profile.php?id=100064974007458" target='blank'><img src="/Images/Facebook.png" alt="" style={{ width: '60px' }} className='mx-3 fb'/></a>
                    <a href="https://www.instagram.com/uzair_ahmed_45/" target='blank'><img src="/Images/instagram.png" alt="" style={{ width: '50px', borderRadius: '100%' }} className='mx-4 insta'/></a>
                    <a href="https://twitter.com/Uzair_ahmed_45" target='blank'><img src="/Images/twitter.png " alt="" style={{ width: '90px' }} className='mx-3 twt'/></a>
                    <a href="https://wa.me/+923348593896" target='blank'><img src="/Images/whatsapp.png" alt="" style={{ width: '50px', borderRadius: '100%' }} className='mx-3 wt'/></a>
                </div>

                <hr style={{ color: 'white', width: '100%' }} />
                <h5 className='text-white mt-3'>CopyRight &copy;2024 Designed by <span>Nextrade</span></h5>
            </div>


        </>
    )
}
