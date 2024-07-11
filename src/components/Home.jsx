import React from 'react'
import github from '../../src/images/github.svg'
import linkedin from '../../src/images/linkedin.svg'
// import email from '../../src/images/email.svg'

export default function Home() {
  return (
    <section  id="home-page" className="home-page" >
    <div className="home-top">

      <p className="body">Suraj Reddy - Web developer / GenAI / Computer Vision</p>
      <p className="heading">A passionate developer and researcher.</p>
      <p className="body2">Hey, I’m Suraj Reddy, a web developer with over one year of experience in backend frameworks. I specialise in database management, REST API &amp; developing computer vision solutions.</p>
      <p className="body3">I’m currently searching for backend developer roles while learning &amp; growing every single day.</p>

    </div>
      <div className="home-bottom">
      <a href="https://github.com/Suraj-000" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub Account" className="account-logo" /></a>        
      <a href="https://www.linkedin.com/in/reddy-suraj/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="account-logo" /></a>       
      {/* <a email="reddy.suraj.official@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="email" className="account-logo" /></a>        */}

      </div>
  </section>
  )
}
