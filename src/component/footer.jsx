import React from 'react'
import Logo from '../assets/images/logo.jpeg'
import { Link } from "react-router-dom";
import '../assets/style/css/footer.css'
function Footer() {
  return (
    <footer className='footer-sec'>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img className='logo' src={Logo} alt="Logo" />
            <div className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, odio! Possimus, facere harum. Dicta explicabo incidunt aperiam repudiandae non blanditiis, repellendus eligendi aliquam asperiores ut, recusandae aut autem nulla suscipit!</div>
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
              <a className='link' href='#casiono'>Casio Partners</a>
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
              <a target='_blank' href='https://www.saffronexch.com' className='link' to={"/"}>saffron exch</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://www.diamondexch99.com' className='link' to={"/"}>diamond exch 99</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://www.world777.now' className='link' to={"/"}>world 777</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://www.saffron777.com' className='link' to={"/"}>saffron 777</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://allpanelexch.com' className='link' to={"/"}>ALL</a>
              </li>
              <li className='link-items'>
              <a target='_blank' href='https://allpanel777.com' className='link' to={"/"}>allpanel 777</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
