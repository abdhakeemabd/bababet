import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";


import '../assets/style/css/header.css';
import Logo from '../assets/images/logo.jpeg';
function Header() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-6">
              <Link to={"/"}>
                <img src={Logo} className='logo' alt="Logo" loading='lazy' />
              </Link>
            </div>
            <div className="col-lg-9 col-2">
              <nav ref={navRef} className="">
                <ul className='justify-content-lg-end'>
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/about"}>About</Link></li>
                  <li><Link to={"/services"}>Partners</Link></li>
                  <li><Link to={"/contact"}>Why Us</Link></li>
                  <li><Link to={"/contact"}>FAQ</Link></li>
                  <li><Link to={"/contact"}>Contact</Link></li>
                  <li><a className='btn' href='wa.me:8949555876'>+91 8949555876</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 col-4 justify-items-end align-items-center">
              <ul className='p-0 m-0 d-flex justify-content-end'>
                <li>
                  <button aria-label="Menu"
                    className="nav-btn btn"
                    onClick={showNavbar}>
                    {isNavOpen ? <IoCloseOutline /> : <RiMenu3Fill />}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
