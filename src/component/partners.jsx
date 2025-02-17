import React from 'react'
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/style/css/partners.css';
import Team1 from '../assets/images/bg.webp';
import Team2 from '../assets/images/bg3.webp';
import Team3 from '../assets/images/bg2.webp';
import Team4 from '../assets/images/bg.webp';
import Team5 from '../assets/images/bg3.webp';
import Team6 from '../assets/images/bg2.webp';
import Team7 from '../assets/images/bg.webp';
const teamMembers = [
  {
    id: 1,
    image: Team1,
  },
  {
    id: 2,
    image: Team2,
  },
  {
    id: 3,
    image: Team5,
  },
  {
    id: 4,
    image: Team4,
  },
  {
    id: 5,
    image: Team7,
  },
  {
    id: 6,
    image: Team3,
  },
  {
    id: 7,
    image: Team6,
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
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
function Partners() {
  return (
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
  )
}

export default Partners
