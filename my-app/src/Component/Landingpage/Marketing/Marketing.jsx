import React from "react";
import "./Marketing.css";
import marketpic from "../../../assets/Images/market1.png"
import marketpic1 from "../../../assets/Images/market2.png"
import marketpic2 from "../../../assets/Images/market3.png"

export default function Marketing() {
  return (
    <div className="Marketing">
      <div className="center">
        <h2  data-aos="fade-left">Caring is the new marketing</h2>
        <p  data-aos="fade-left" className="different-p">
          The Nextcent blog is the best place to read about the latest
          membership insights,<br/>trends and more. See who's joining the community,
          read about how our community<br/>are increasing their membership income
          and lot's more.​
        </p>
      </div>


      <div className="Flex">

       <div data-aos="fade-up-right" className="position">
         <img src={marketpic} alt="Marketing-pic"  />
        
        <div  className="position-box">
          <p className="Main-paragraph">Creating Streamlined<br/>Safeguarding Processes with<br/>OneRen</p>
            <p>Read More</p>
        </div>
       </div>

        <div data-aos="fade-up" className="position">
         <img src={marketpic1} alt="Marketing-pic"  />
        
        <div className="position-box">
          <p className="Main-paragraph">What are your safeguarding<br/>responsibilities and how can<br/>you manage them?</p>
            <p>Read More</p>
        </div>
       </div>

        <div data-aos="fade-up-left" className="position">
         <img src={marketpic2} alt="Marketing-pic"  />
        
        <div className="position-box">
          <p className="Main-paragraph">Revamping the Membership<br/>Model with Triathlon <br/>Australia</p>
            <p>Read More</p>
        </div>
       </div>

      </div>



    </div>
  );
}
