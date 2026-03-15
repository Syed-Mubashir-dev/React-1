import React from 'react'
import "./System.css"
import System1 from "../../../assets/Images/System1.png"
import System2 from "../../../assets/Images/System2.png"
import System3 from "../../../assets/Images/System3.png"

export default function System() {
  return (
    <div className='System'>

       <div className='center'>
        <h2  data-aos="fade-right">Manage your entire community<br/>in a single system</h2>
        <p  data-aos="fade-right">Who is Nextcent suitable for?</p>
      </div>

     <div className='boxes'>

      <div className='fade' data-aos="fade-up-right">
        <div className='box-1'>
        <img src={System1} alt='Logo'  />
        <h2 >Membership<br/>Organisations</h2>
        <p>Our membership management<br/>software provides full automation of<br/>membership renewals and payments</p>
      </div>
      </div>

     <div className='fade' data-aos="fade-up">
       <div className='box-1'>
        <img src={System2} alt='Logo'  />
        <h2>National<br/>Associations</h2>
        <p>Our membership management<br/>software provides full automation of<br/>membership renewals and payments</p>
      </div>
     </div>

      <div className='fade' data-aos="fade-up-left">
        <div className='box-1'>
        <img src={System3} alt='Logo'  />
        <h2>Clubs And<br/>Groups</h2>
        <p>Our membership management<br/>software provides full automation of<br/>membership renewals and payments</p>
      </div>
      </div>
      </div>
    </div>
  )
}
