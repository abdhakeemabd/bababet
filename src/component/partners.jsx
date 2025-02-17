import React from 'react'
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/style/css/partners.css';
import Team1 from '../assets/images/logo/logo.png';
import Team2 from '../assets/images/logo/logo2.png';
import Team3 from '../assets/images/logo/logo3.png';
import Team4 from '../assets/images/logo/logo4.png';
import Team5 from '../assets/images/logo/logo5.png';
import Team6 from '../assets/images/logo/logo6.png';
const teamMembers = [
  {
    id: 1,
    image: Team1,
  },
  {
    id: 2,
    image: Team3,
  },
  {
    id: 3,
    image: Team2,
  },
  {
    id: 4,
    image: Team6,
  },
  {
    id: 5,
    image: Team5,
  },
  {
    id: 6,
    image: Team4,
  },
];
const settings = {
  dots: false,
  arrows:false,
  infinite: true, 
  autoplay:true,
  autoplaySpeed: 3000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
function Partners() {
  return (
   <>
    <section className='team-sec'>
      <div className="container">
        <div className="row">
            <div className="col-12 mb-3" data-aos="fade-down" data-aos-offset="10">
            <h4>Our Partners</h4>
            </div>
            <Slider {...settings}>
            {teamMembers.map((member) => (
            <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-offset="10" key={member.id}>
              <div className="team-card">
                <div className="img-card">
                  <img className='team-img' src={member.image} alt="Logo"  loading='lazy'/>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </section>
    <section className='partners-sec'>
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-down" data-aos-offset="10" >
            <h3 className='text-center mb-3 text-uppercase font-bold'>Our Sites</h3>
          </div>
        {teamMembers.map((member) => (
            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10" key={member.id}>
              <div className="sm-card">
               <div className="row">
                <div className="col-6">
                  <img className='logo-img' src={member.image} alt="Logo"  loading='lazy'/>
                </div>
                <div className="col-6 align-content-center">
                 <div className="div px-3">
                  <h6>User Name:</h6>
                  <h6>Password: </h6>
                  <a className='text-decoration-none btn mt-2' href="wa.me:8003509193">Login with demo</a>
                 </div>
                </div>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  )
}

export default Partners
