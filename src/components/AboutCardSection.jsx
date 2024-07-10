import React from 'react';
import img1 from '../images/carousel2/img10.jpg';
import img2 from '../images/carousel2/img11.jpg';
import img3 from '../images/carousel2/img8.jpg';
import img4 from '../images/carousel2/img9.jpg';

export default function AboutCardSection() {
  const cards = [
    {
      title: 'Strength and Flexibility',
      description: 'Unlock your potential with our calisthenics routines designed to build strength and flexibility.',
      link: '#',
      linkText: 'Learn More',
      imageSrc: img2,
    },
    {
      title: 'Comprehensive Programs',
      description: 'Our tailored programs cater to all fitness levels, from beginners to advanced athletes.',
      link: '/programs',
      linkText: 'Explore Now',
      imageSrc: img3,
    },
    {
      title: 'Expert Guidance',
      description: 'Train under the guidance of our experienced instructors to achieve your fitness goals.',
      link: '#',
      linkText: 'Discover More',
      imageSrc: img4,
    },
    {
      title: 'Community Support',
      description: 'Join a supportive community of like-minded individuals passionate about calisthenics.',
      link: '#',
      linkText: 'Connect with Us',
      imageSrc: img1,
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4">
      {cards.map((card, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
          <img
            src={card.imageSrc}
            alt="Card Image"
            width={400}
            height={300}
            className="w-full h-60 object-cover transition-all duration-300 group-hover:opacity-50"
          />
          <div className="absolute inset-0 bg-background/80 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-90 transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary-foreground">{card.title}</h3>
            <p className="text-muted-foreground mt-2">{card.description}</p>
            <a
              href={card.link}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
            >
              {card.linkText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
