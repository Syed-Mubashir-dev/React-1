import React from "react";
import "./Smith.css";
import Smithpic from "../../../assets/Images/smith.png";

import pic from ".../../../src/assets/Images/First.png"
import pic2 from ".../../../src/assets/Images/Sec.png"
import pic3 from ".../../../src/assets/Images/fifth.png"
import pic4 from ".../../../src/assets/Images/forth.png"
import pic5 from ".../../../src/assets/Images/seven.png"

export default function Smith() {
  return (
    <div className="Smith">
      <div data-aos="flip-left" className="Left-4">
        <img src={Smithpic} alt="Smith-Pic" />
      </div>

      <div className="Right-4">
        <p data-aos="zoom-in-up" className="main-p">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus<br/>tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida<br/>enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie,nec molestie<br/>mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse<br/>eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien,<br/>vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum<br/>id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h5 data-aos="zoom-in-up">Tim Smith</h5>
        <p data-aos="zoom-in-up">British Dragon Boat Racing Association</p>

        <div className="Pictures">
          <img  data-aos="fade-left" src={pic} alt='First' />
          <img  data-aos="fade-left" src={pic2} alt='sec' />
          <img  data-aos="fade-left" src={pic3} alt='third' />
          <img  data-aos="fade-left" src={pic4} alt='forth' />
          <img  data-aos="fade-left" src={pic5} alt='fifth' />
      
          <p data-aos="fade-left">Meet all Customers</p>
        </div>



      </div>
    </div>
  );
}
