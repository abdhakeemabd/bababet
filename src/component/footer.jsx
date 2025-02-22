import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";


import Logo from '../assets/images/logo1.jpeg'
import '../assets/style/css/footer.css'
function Footer() {
  return (
    <footer className='footer-sec'>
      <div className="container">
      <a href='https://wa.link/66a9vn' className='whatsapp'>
        <FaWhatsapp/>
      </a>
        <div className="row">
          <div className="col-md-5">
            <img className='logo' src={Logo} alt="Logo" />
            <h5 >Follow Us</h5>
            <div className="scoial-media-link">
              <a target='_blank' href="https://www.instagram.com/invites/contact/?igsh=n7sawc458s95&utm_content=q4c8igg"><FaInstagram /></a>
              <a target='_blank' href="https://www.facebook.com/share/1A5vc9Fbcm/"><FaFacebookF /></a>
              <a target='_blank' href="https://t.me/bababetexch"><FaTelegramPlane /></a>
              <a target='_blank' href="https://wa.link/66a9vn"><FaWhatsapp /></a>
              <a target='_blank' href=""> <FaXTwitter /></a>
            </div>
          </div>
          <div className="col-md-3 tex-md-center">
            <h4>Quick Link</h4>
            <ul className='menu'>
              <li className='link-items'>
              <a className='link' href='/'>Home</a>
              </li>
              <li className='link-items'>
              <a className='link' href='#partners'>Partners</a>
              </li>
              <li className='link-items'>
              <a className='link' href='#sites'>Sites</a>
              </li>
              <li className='link-items'>
              <a className='link' href='#casiono'>Casino Partners</a>
              </li>
              <li className='link-items'>
              <a className='link' href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-md-cetner">
            <h4>Our Sites</h4>
            <ul className='menu'>
              <li className='link-items'>
              <a target='_blank' href='https://www.saffronexch.com' className='link'>saffron exch</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://www.diamondexch99.com' className='link'>diamond exch 99</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://www.world777.now' className='link'>world 777</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://www.saffron777.com' className='link'>saffron 777</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://allpanelexch.com' className='link'>ALL</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://allpanel777.com' className='link'>allpanel 777</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://tenexch.com' className='link'>Lotus</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://admin.lotusbook247.com' className='link'>tenexch</a>
              </li>
            </ul>
          </div>
          <div className="col-12">
          <h6><span className='text-danger'>18+  </span>This game maybe habit forming of financially risky. Play responsibly</h6>
            <h6>Copyright © 2025 bababetexch.com  All Rights Reserved.</h6>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
