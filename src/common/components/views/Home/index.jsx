import React from 'react'

export default function Home() {
  // require the logo image both from client and server
  const logoImage = require('./kiki.jpg')

  return (
    <div className="page page-home">
      <div className="page-content">
        <h2>Home</h2>
        <p><img src={logoImage} alt="Kiki" /></p>
      </div>
    </div>
  )
}
