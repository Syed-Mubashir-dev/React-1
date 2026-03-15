import React from 'react'
import "./Client.css"
import First from ".../../../src/assets/Images/First.png"
import Sec from ".../../../src/assets/Images/Sec.png"
import third from ".../../../src/assets/Images/fifth.png"
import forth from ".../../../src/assets/Images/forth.png"
import fifth from ".../../../src/assets/Images/seven.png"
import seven from ".../../../src/assets/Images/third.png"



export default function Client() {
  return (
    <div className='Client'>
      <div className='center'>
        <h2  data-aos="fade-left">Our Clients</h2>
        <p  data-aos="fade-left">We have been working with some Fortune 500+ clients</p>
      </div>
    <div className="marquee">

  <div className="marquee-track">

    <div className="marquee-content">
      <img src={First} alt="" />
      <img src={Sec} alt="" />
      <img src={third} alt="" />
      <img src={forth} alt="" />
      <img src={fifth} alt="" />
      <img src={seven} alt="" />
    </div>

    {/* Duplicate */}
    <div className="marquee-content">
      <img src={First} alt="" />
      <img src={Sec} alt="" />
      <img src={third} alt="" />
      <img src={forth} alt="" />
      <img src={fifth} alt="" />
      <img src={seven} alt="" />
    </div>

  </div>

</div>
    </div>
  )
}
