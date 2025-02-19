import React from 'react'
import About1 from '../assets/images/about.jpg';
function About() {
  return (
    <section className='about-sec'>
      <div className="container">
        <div className="row">
          <div className="col-md-6"  data-aos="fade-up" data-aos-offset="10">
            <h3>About Us</h3>
            <p>We are the leading Gaming Master ID provider, transforming the gaming experience with innovation and user-focused solutions. Trusted by gamers worldwide, we offer seamless and secure access to elevate your gameplay. Join us and take your gaming to the next level!</p>
          </div>
          <div className="col-md-6"  data-aos="fade-up" data-aos-offset="10">
            <img className='about-img' src={About1} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
