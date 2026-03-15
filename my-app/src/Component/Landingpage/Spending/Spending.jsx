import React from "react";
import "./Spending.css";
import pic from "../../../assets/Images/spending.png";

export default function Spending() {
  return (
    <div className="spending">
      <div data-aos="fade-up-right" className="Left-2">
        <img src={pic} alt="SpendingImg" />
      </div>

      <div className="Right-2">
        <h2 data-aos="fade-up-left">
          The unseen of spending three
          <br />
          years at Pixelgrade
        </h2>
        <p data-aos="fade-up-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sit amet justo ipsum. Sed<br/>accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed<br/>porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          <br/>quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button data-aos="fade-up-left" className='btn-2'>Learn More</button>
      </div>
    </div>
  );
}
