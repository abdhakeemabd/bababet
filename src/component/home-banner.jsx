import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Home3 from '../assets/images/bg.webp';
import Home2 from '../assets/images/bg1.webp';
import Home1 from '../assets/images/bg2.webp';
import '../assets/style/css/home-banner.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

function HomeBanner() {
  return (
    <div className='home-banner-sec'>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div className='banner-cover'>
          <img className='banner-img' src={Home3} alt="Banner 1" />
          <div className="caption a">
           <div className="container">
            <h1>Get Your user ID  </h1>
            <h1>Master Panel Now</h1>
            <a className='btn' href="wa.me:8003509193">Contact</a>
           </div>
          </div>
        </div>
        <div className='banner-cover'>
          <img className='banner-img' src={Home2} alt="Banner 2" />
          <div className="caption b">
           <div className="container">
            <h1>User ID Avaliable </h1>
            <h1>Master ID Avaliable</h1>
            <a className='btn' href="wa.me:8003509193">Contact</a>
           </div>
          </div>
        </div>
        <div className='banner-cover'>
          <img className='banner-img' src={Home1} alt="Banner 3" />
          <div className="caption c">
           <div className="container">
            <h1>Start With BABABET EXCH </h1>
            <h1> Earn big profit endless profit</h1>
            <a className='btn' href="wa.me:8003509193">Contact</a>
           </div>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default HomeBanner;
