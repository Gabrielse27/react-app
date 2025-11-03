import React from "react";
import AboutBanner from '../components/AboutBanner'
import About from '../components/About'
import Logoipsum from '../components/Logoipsum';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Subscribe from '../components/Subscribe'
import './aboutus.css'


 const AboutUs = () => {
  return (
    

    <>
     <AboutBanner />
     <About />
     <Logoipsum />
     <Testimonials />

     <div className="whychoose-wrapper">
     <WhyChooseUs /> 
    </div>

     <Subscribe />
    


    </>
  );
};

export default AboutUs