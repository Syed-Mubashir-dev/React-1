import React from 'react'
import "./Helping.css"
import helppic from "../../../assets/Images/help1.png"
import helppic2 from "../../../assets/Images/help2.png"
import helppic3 from "../../../assets/Images/help4.png"
import helppic4 from "../../../assets/Images/help3.png"

export default function Helping() {
  return (
    <div className='Helping'>

      <div className='Left-3'>
        <h2 data-aos="fade-right">Helping a local<br/><span>Business reinvent itself</span></h2>
        <p data-aos="fade-right">We reached here with our hard work and dedication.</p>
        </div>


      <div className='Right-3'>
          <div className='div-1'>

            <div data-aos="fade-left" className='pack-1'>
              <img src={helppic} alt='Helping-Pic' />
              <div className='box-info'>
              <h4>2,245,341</h4>
              <p>Members</p>
              </div>
            </div>

             <div  data-aos="fade-left" className='pack-1'>
              <img src={helppic2} alt='Helping-Pic' />
              <div className='box-info'>
              <h4>46,328</h4>
              <p>Clubs</p>
              </div>
            </div>
          </div>



          <div className='div-1'>

            <div  data-aos="fade-left" className='pack-1'>
              <img src={helppic3} alt='Helping-Pic' />
              <div className='box-info'>
              <h4>828,867</h4>
              <p>Event Bookings</p>
              </div>
            </div>

             <div  data-aos="fade-left" className='pack-1'>
              <img src={helppic4} alt='Helping-Pic' />
              <div className='box-info'>
              <h4>1,926,436</h4>
              <p>Payments</p>
              </div>
            </div>
          </div>




      </div>
      
    </div>
  )
}
