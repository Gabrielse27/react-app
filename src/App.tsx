 import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Logoipsum from './components/Logoipsum';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import PricingPlans from './components/PricingPlans';
import CtaSection from './components/CtaSection';
import LatestBlogs from './components/LatestBlogs';



function App() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Logoipsum/>
      <Services/>
      <Testimonials/>
      <WhyChooseUs/>
      <PricingPlans/>
      <CtaSection/>
      <LatestBlogs/>

      
    </>
  );
}

export default App;
