import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import axios from 'axios';

const CarouselSection = () => {
  const [carousel1Images, setCarousel1Images] = useState([]);
  const [carousel2Images, setCarousel2Images] = useState([]);

  useEffect(() => {
    // Fetch images for the first carousel
    axios.get('http://localhost:5001/images-list/carousel1')
      .then(response => {
        console.log('Carousel 1 Images fetched:', response.data);
        if (Array.isArray(response.data)) {
          setCarousel1Images(response.data);
        } else {
          console.error('Unexpected response data for carousel 1:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching images for carousel 1:', error);
      });

    // Fetch images for the second carousel
    axios.get('http://localhost:5001/images-list/carousel2')
      .then(response => {
        console.log('Carousel 2 Images fetched:', response.data);
        if (Array.isArray(response.data)) {
          setCarousel2Images(response.data);
        } else {
          console.error('Unexpected response data for carousel 2:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching images for carousel 2:', error);
      });
  }, []);

  return (
    <section className="bg-red-500 bg-opacity-50 flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container bg-black bg-opacity-35 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-6xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience the Athleticus Way
            </h2>
            <p className="max-w-[600px] font-semibold text-black-300 md:text-xl dark:text-gray-400">
              Discover our curated collection of stunning images that capture the essence of Athleticus Fitness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex justify-center">
              {carousel1Images.length > 0 ? (
                <Carousel className="w-full max-w-md">
                  {carousel1Images.map((image, index) => (
                    <div className="h-120" key={index}>
                      <img src={`http://localhost:5001/images/carousel1/${image}`} alt={`Gallery Image ${index + 1}`} className="h-full w-full object-cover" />
                      {console.log(`Displaying image: http://localhost:5001/images/carousel1/${image}`)}
                    </div>
                  ))}
                </Carousel>
              ) : (
                <p>Loading images...</p>
              )}
            </div>
            <div className="flex justify-center">
              {carousel2Images.length > 0 ? (
                <Carousel className="w-full max-w-md">
                  {carousel2Images.map((image, index) => (
                    <div className="h-120" key={index}>
                      <img src={`http://localhost:5001/images/carousel2/${image}`} alt={`Gallery Image ${index + 1}`} className="h-full w-full object-cover" />
                      {console.log(`Displaying image: http://localhost:5001/images/carousel2/${image}`)}
                    </div>
                  ))}
                </Carousel>
              ) : (
                <p>Loading images...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
