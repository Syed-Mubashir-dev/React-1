import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your account</p>

        <form>

          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>

          <button className="login-btn">Login</button>

        </form>

      </div>

    </div>
  )
}