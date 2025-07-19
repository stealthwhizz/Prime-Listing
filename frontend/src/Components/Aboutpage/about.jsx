// About.jsx
import React, { useState } from 'react';
import './about.css';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about-section">
      <h2 onClick={toggleDropdown} className="about-heading">
        About Prime<span class="highlight">Listings</span> {'>'}{'>'}
      </h2>
      {isOpen && (
        <div className="about-content">
          <p>
          Prime Listings: Your Trusted Real Estate Partner
          </p>
          <p>
          With 50 years of local expertise, we transform property dreams into reality. Our dedicated team combines deep market knowledge, personalized service, and cutting-edge technology to guide you seamlessly through buying or selling your home. Committed to integrity and community, we don't just find properties—we help you discover your perfect place. Experience the difference with Prime Listings, where professional excellence meets genuine care.
          Contact us today and let's make your real estate journey extraordinary.
          </p>
          <p>
            Thank you for choosing Prime Listings. Happy shopping!
          </p>
        </div>
      )}
    </div>
  );
};

export default About;