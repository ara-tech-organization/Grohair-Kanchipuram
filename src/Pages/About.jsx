import React from 'react'
import FAQ from '../Components/About/FAQ'

import Header from '../Components/Header'
import Section from '../Components/About/WeProvider'
import Footer from '../Components/Footer'
import FAQSkin from '../Components/About/FAQSkin'

function About() {
  return (
    <div>
        <Header/>
        <Section/>
      <FAQ/>
      <FAQSkin/>
      <Footer/>
    </div>
  )
}

export default About
