// src/components/Hero.jsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import art4 from '../images/art4.webp';
import art2 from '../images/art2.webp';
import art3 from '../images/art3.webp';
import { NavLink } from 'react-router-dom';

const NewHero = () => {
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id="home" className="text-center hero-section" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        arrows={false}
        pauseOnHover={true}
      >
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <h1 className="text-white text-5xl md:text-7xl font-bold">{slide.title}</h1>
              <h2 className="text-white text-3xl md:text-4xl font-bold my-2">{slide.subtitle}</h2>
              <p className="text-white text-lg md:text-2xl mt-4">{slide.description}</p>
             
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default NewHero;
