import React from 'react'
import About1 from '../assets/images/about.jpg';
import { FaRegStar, FaRegSmile } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";



function About() {
  return (
    <section className='about-sec'>
      <div className="container">
        <div className="row">
          <div className="col-md-6"  data-aos="fade-up" data-aos-offset="10">
            <h3>About Us</h3>
            <p>We are the leading Gaming User ID Master ID provider, transforming the gaming experience with innovation and user-focused solutions. Trusted by gamers worldwide, we offer seamless and secure access to elevate your gameplay. Join us and take your gaming to the next level!</p>
            <div className="row">
              <div className="col-6 mb-2" data-aos="fade-up" data-aos-offset="10">
                <div className="d-flex align-items-center gap-3">
                  <div className='icons'><FaRegStar /></div>
                  <h5>100% safe & secure</h5>
                </div>
              </div>
              <div className="col-6 mb-2" data-aos="fade-up" data-aos-offset="10">
               <div className="d-flex align-items-center gap-3">
                <div className='icons'><FaAward /></div>
                <h5>Best Offers</h5>
               </div>
              </div>
              <div className="col-6 mb-2" data-aos="fade-up" data-aos-offset="10">
                <div className="d-flex align-items-center gap-3">
                  <div className='icons'><FaRegSmile /></div>
                  <h5>Happy Clients</h5>
                </div>
              </div>
              <div className="col-6 mb-2" data-aos="fade-up" data-aos-offset="10">
               <div className="d-flex align-items-center gap-3">
                <div className='icons'><GrStatusGood /></div>
                <h5>Innovative Gaming</h5>
               </div>
              </div>
              <div className="col-md-6 my-3">
              <a className='btn' href="https://wa.link/66a9vn">Get Started</a>
              </div>
            </div>
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
