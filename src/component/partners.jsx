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
import Team7 from '../assets/images/logo/logo7.png';
import Team8 from '../assets/images/logo/logo8.png';
import Img1 from '../assets/images/casio/1.webp';
import Img2 from '../assets/images/casio/2.webp';
import Img3 from '../assets/images/casio/3.webp';
import Img4 from '../assets/images/casio/4.webp';
import Img5 from '../assets/images/casio/5.webp';
import Img6 from '../assets/images/casio/6.webp';
import Img11 from '../assets/images/casio/11.webp';
import Img22 from '../assets/images/casio/22.webp';
import Img33 from '../assets/images/casio/33.webp';
import Img44 from '../assets/images/casio/44.webp';
import Img55 from '../assets/images/casio/55.webp';
import Img66 from '../assets/images/casio/33.webp';
const teamMembers = [
  {
    id: 1,
    image: Team1,
    image1:Img1,
    image2:Img11,
    url:'https://www.saffronexch.com',
    username:' bababetexch',
    password:' Bababet1',
  },
  {
    id: 2,
    image: Team3,
    image1:Img2,
    image2:Img22,
    url:'https://www.diamondexch99.com',
    username:' bababetexch1',
    password:' Bababet1',
  },
  {
    id: 3,
    image: Team2,
    image1:Img3,
    image2:Img33,
    url:'https://www.world777.now',
    username:' bababetexch',
    password:' Bababet2',
  },
  {
    id: 4,
    image: Team6,
    image1:Img4,
    image2:Img44,
    url:'https://www.saffron777.com',
    username:' bababetexch1',
    password:' Bababet1',
  },
  {
    id: 5,
    image: Team5,
    image1:Img5,
    image2:Img55,
    url:'https://allpanelexch.com',
    username:' bababetexch',
    password:' Bababet1',
  },
  {
    id: 6,
    image: Team4,
    image1:Img6,
    image2:Img66,
    url:'https://allpanel777.com',
    username:' bababetexch',
    password:' Bababet2',
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
const setting = {
  dots: false,
  arrows:false,
  infinite: true, 
  autoplay:true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
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
    <section id='partners' className='team-sec'>
      <div className="container">
        <div className="row">
            <div className="col-12 mb-3" data-aos="fade-down" data-aos-offset="10">
            <h3 className='text-center text-uppercase'>Our Partners</h3>
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
    <section id='sites' className='partners-sec'>
      <div className="container">
        <div className="row justify-content-center">
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
                <div className="col-6 align-content-center ps-0 ps-sm-auto">
                 <div className="div px-md-3">
                  <h6>User Name:{member.username}</h6>
                  <h6>Password:{member.password} </h6>
                  <a className='text-decoration-none btn mt-2' href={member.url}>Login with demo</a>
                 </div>
                </div>
               </div>
              </div>
            </div>
          ))}
          <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
              <div className="sm-card">
               <div className="row">
                <div className="col-6">
                  <img className='logo-img' src={Team7} alt="Logo"  loading='lazy'/>
                </div>
                <div className="col-6 align-content-center ps-0 ps-sm-auto">
                 <div className="div px-md-3">
                  <h6>User Name:bababetexch3</h6>
                  <h6>Password: Bababet3 </h6>
                  <a className='text-decoration-none btn mt-2' href="https://tenexch.com">Login with demo</a>
                 </div>
                </div>
               </div>
              </div>
            </div>
            <div className="col-md-6 mb-3" data-aos="fade-up" data-aos-offset="10">
              <div className="sm-card">
               <div className="row">
                <div className="col-6">
                  <img className='logo-img' src={Team8} alt="Logo"  loading='lazy'/>
                </div>
                <div className="col-6 align-content-center ps-0 ps-sm-auto">
                 <div className="div px-md-3">
                  <h6>User Name: bababetexch4</h6>
                  <h6>Password: Bababet4</h6>
                  <a className='text-decoration-none btn mt-2' href="https://admin.lotusbook247.com">Login with demo</a>
                 </div>
                </div>
               </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section id='casiono' className="casion-partners-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h3 className='text-center text-uppercase font-bold mb-3'>Our Casio partners</h3>
          </div>
        <Slider {...setting}>
            {teamMembers.map((member) => (
            <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-offset="10" key={member.id}>
              <div className="casino-card">
                <div className="img-card">
                  <img className='team-img' src={member.image1} alt="Logo"  loading='lazy'/>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
        <div className="row">
        <Slider {...setting}>
          {[...teamMembers].map((member) => (
            <div className="col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10" key={member.id}>
              <div className="casino-card">
                <div className="img-card">
                  <img className='team-img' src={member.image2} alt="Logo" loading='lazy' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
   </>
  )
}

export default Partners
