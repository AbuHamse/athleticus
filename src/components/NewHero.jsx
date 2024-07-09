// src/components/Hero.jsx
import React from 'react';
import Slider from 'react-slick';
import art4 from '../images/art4.webp';
import art2 from '../images/art2.webp';
import art3 from '../images/art3.webp';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const heroSlides = [
    {
      image: art4,
      title: "Welcome to Athleticus",
      subtitle: "Unleash Your Inner Athlete",
      description: "Transform your body and mind with Athleticus Calisthenics Program",
    },
    {
      image: art2,
      title: "Strength Training",
      subtitle: "Build Your Power",
      description: "Join our strength training program to increase your muscle mass and strength.",
    },
    {
      image: art3,
      title: "Flexibility",
      subtitle: "Enhance Your Flexibility",
      description: "Improve your flexibility with our specialized stretching exercises.",
    },
  ];

  return (
    <section id="home" className="text-center hero-section" style={{ overflowX: 'hidden', overflowY :'hidden' }}>
      <Slider {...settings}>
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <h1 className="text-white text-5xl md:text-7xl font-bold">{slide.title}</h1>
              <h2 className="text-white text-3xl md:text-4xl font-bold my-2">{slide.subtitle}</h2>
              <p className="text-white text-lg md:text-2xl mt-4">{slide.description}</p>
              <button className="mt-8 inline-block bg-red-400 text-white text-lg font-semibold py-2 px-4 rounded hover:bg-red-500">
                <NavLink to="/programs">Get Started</NavLink>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default NewHero;
