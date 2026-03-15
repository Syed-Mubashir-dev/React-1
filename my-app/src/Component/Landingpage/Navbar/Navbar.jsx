import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/Images/logo.png";

import { FaFacebook } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="Parent">
      <div className="Logo">
        <img data-aos="fade-right" src={logo} alt="Logo" />
        <h2 data-aos="fade-right">Mubashir</h2>
      </div>

      <ul className="Options">
        <li data-aos="fade-down">
          <a href="/">Home</a>
        </li>
        <li data-aos="fade-down">
          <a href="/">Features</a>
        </li>
        <li data-aos="fade-down">
          <a href="/">Community</a>
        </li>
        <li data-aos="fade-down">
          <a href="/">Blog</a>
        </li>
        <li data-aos="fade-down">
          <a href="/">Pricing</a>
        </li>
      </ul>

      <Link to={"/login"}>
        <button data-aos="fade-left" className="btn">
          Login
        </button>
      </Link>
    </div>
  );
}
