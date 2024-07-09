// src/components/Hero.jsx
import React from 'react';
import backgroundImage from '../images/Athleticus-Art.webp'; // Ensure the path to your image is correct
import { NavLink } from 'react-router-dom';
const Hero = () => {
  return (
    <section
      id="home"
      className="text-center py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 py-20">
        <h1 className="text-white text-7xl font-bold">Welcome to Athleticus</h1>
        <h2 className="text-white text-4xl font-bold my-2">Unleash Your Inner Athlete</h2>
        <p className="text-white text-2xl mt-4">
          Transform your body and mind with Athleticus Calisthenics Program
        </p>
        <button className="mt-8 inline-block bg-red-400 text-white text-lg font-semibold py-2 px-4 rounded hover:bg-red-500">
          <NavLink to="/programs">Get Started</NavLink>
        </button>
      </div>
    </section>
  );
};

export default Hero;

