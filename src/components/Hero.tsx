 import React from 'react';
import './Hero.css';
 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content d-flex">
        <div className="text-side">
          <p className="welcome-text">Welcome to StorAid</p>
          <h1 className="hero-title">Space Simplified,
           Storage Perfected</h1>
          <p className="hero-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nulla explicabo eos beatae iusto nisi laudantium ipsum, suscipit quia blanditiis soluta aliquid minima quod hic.</p>
          <button className="btn btn-warning">Discover More</button>
        </div>

        <div className="hero-image">
            <img src="src/assets/bild-hero.svg" alt="Hero image"/>
          {/* tom om vi använder CSS-bakgrund */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
