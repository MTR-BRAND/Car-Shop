import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <>
        <div className='footer'>
            <div className='foot1'>
                <p>Privacy Policy</p>
                <p>Term of Use</p>
                <p>© 2021 All rights reserved</p>
            </div>
            <div className='foot2'>
                <p><img src="image/world.png" alt="" />English</p>
                <p><img src="image/three.png" alt="" />USD</p>
            </div>
        </div>
    </>
  )
}

export default Footer