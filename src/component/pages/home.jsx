import React from 'react'
import Header from '../header'
import HomeBanner from '../home-banner'
import Partners from '../partners'
import About from '../about'
import FAQ from '../faq'
import Highlight from '../highlight'
import Contact from '../contact'
import Footer from '../footer'
import Marquee1 from '../marquee'

function Home() {
  return (
    <div>
      <Header/>
      <Marquee1/>
      <HomeBanner/>
      <Partners/>
      <About/>
      <Highlight/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
