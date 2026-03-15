import React from 'react'
import "./Footer.css"


export default function Footer() {
  return (
    <div className='Footer'>

      <div className='Left-5'>
        <h1>Nexcent</h1>
        <p>Copyright © 2020 Landify UI Kit.</p>
        <p>All rights reserved</p>
      </div>

      <div className='Right-5'>

          <div className='same'>
            <h3>Company</h3>
            <ul className='options'>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Blog</a></li>
              <li><a href='/'>Contact us</a></li>
              <li><a href='/'>Pricing</a></li>
              <li><a href='/'>Testimonials</a></li>
            </ul>
          </div>

          <div className='same'>
            <h3>Support</h3>
            <ul className='options'>
              <li><a href='/'>Help Center </a></li>
              <li><a href='/'>Terms of service</a></li>
              <li><a href='/'>Legal</a></li>
              <li><a href='/'>Privacy policy</a></li>
              <li><a href='/'>Status</a></li>
            </ul>
          </div>

          <div className='same'>
            <h3>Stay up to date</h3>

            <input type='text' placeholder='Your email address'/>
          
          </div>

      </div>


      
    </div>
  )
}
