import React, { useEffect } from 'react';
  import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import './App.css';
import AOS from 'aos';
import Home from './component/pages/home';
import './assets/style/boostrap/bootstrap.css'
// import HomeBanner from './component/home-banner';
// import About from './component/about';
// import Partners from './component/partners';
// import Contact from './component/contact';
// import FAQ from './component/faq';
// import Highlight from './component/highlight';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
  });
}, []);
  return (
    
    <>
     <Router>
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path='/' element={<About/>}/>
      <Route path='/' element={<Partners/>}/>
      <Route path='/' element={<Contact/>}/>
      <Route path='/' element={<FAQ/>}/>
      <Route path='/' element={<Highlight/>}/> */}
    </Routes>
    </Router>
    </>
  )
}

export default App
