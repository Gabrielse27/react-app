import React from 'react'
import Hero from '../components/Hero'
import About from "../components/About";
import Logoipsum from "../components/Logoipsum";
import Services from "../components/Services";
import Testimonials from '../components/Testimonials';
import WhyChooseUs from "../components/WhyChooseUs";
import PricingPlans from "../components/PricingPlans";
import CtaSection from "../components/CtaSection";
import LatestBlogs from "../components/LatestBlogs";
import Subscribe from "../components/Subscribe";

 const Home = () => {
  return (
    
    <>
      <Hero />
      <About />
      <Logoipsum />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlans />
      <CtaSection />
      <LatestBlogs />
      <Subscribe />
    </>


  )
}

export default Home