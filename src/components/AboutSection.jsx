// src/components/AboutSection.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../images/flower2.jpg';
import aboutImage from '../images/psf.jpg'; // Ensure the path to your images is correct

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-50"></div>
      <div className="relative flex flex-col md:flex-row max-w-3/4 mx-auto text-left bg-black bg-opacity-50 rounded-lg p-5">
        <div className="text-container md:w-1/2 p-5">
          <h2 className="text-5xl font-bold text-white text-center">About Us</h2>
          <p className="mt-4 text-red-300 font-500 text-xl">
            At Athleticus Fitness, we believe in the transformative power of fitness for everyone. Our mission is to empower you to become your best self through a comprehensive range of innovative fitness programs,
            with a special emphasis on calisthenics. Whether you're just beginning your fitness journey or you're a seasoned athlete, we offer the tools, guidance, and support needed to help you achieve your goals.
           
          </p>
          <button className="mt-8 inline-block bg-red-400 text-white text-lg font-semibold py-2 px-4 rounded hover:bg-red-500">
          <NavLink to="/about">Learn More</NavLink>
        </button>
        </div>
        <div className="image-container md:w-1/2 flex justify-center items-center">
          <img
            src={aboutImage}
            alt="About"
            className="rounded-xl object-cover object-center"
            style={{ width: '350px', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
