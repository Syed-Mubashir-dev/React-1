import React from 'react'
import "./Hero.css"
import Heroimg from "../../../assets/Images/Hero.png"

export default function Hero() {
  return (
    <div className='Hero'>

      <div className='Left'>
        <h1 data-aos="fade-right">Lessons and insights <br/><span>From 8 years</span></h1>
        <p data-aos="fade-right" className='line-2'>Where to grow your business as a photographer: site or social media?</p>

        <button data-aos="fade-right" className='btn-2'>Register</button>
      </div>
      <div data-aos="fade-left" className='Right'>
        <img  src={Heroimg} alt='Hero-img' />
      </div>
    </div>
    
  )
}
