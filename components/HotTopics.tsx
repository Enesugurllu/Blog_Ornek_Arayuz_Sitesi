'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HotTopics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const topics = [
    {
      title: "Food",
      articles: "37 Articles",
      image: "/food.jpg",
    },
    {
      title: "Space",
      articles: "27 Articles",
      image: "/space.jpg",
    },
    {
      title: "Animal",
      articles: "16 Articles",
      image: "/animal.jpg",
    },
    {
      title: "Minimal",
      articles: "87 Articles",
      image: "/minimal.jpg",
    },
    {
      title: "Travel",
      articles: "45 Articles",
      image: "/travel.jpg",
    },
    {
      title: "Technology",
      articles: "56 Articles",
      image: "/tech.jpg",
    },
    {
      title: "Nature",
      articles: "32 Articles",
      image: "/nature.jpg",
    },
    {
      title: "Lifestyle",
      articles: "24 Articles",
      image: "/lifestyle.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === topics.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? topics.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === topics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleTopics = [...topics.slice(currentIndex), ...topics.slice(0, currentIndex)].slice(0, 4);

  return (
    <section className="border border-gray-800 rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
      <div className="flex gap-8">
        {/* Sol taraf - Başlık ve kontroller */}
        <div className="w-1/4 pt-4">
          <h2 className="text-3xl font-bold text-white">Hot topics</h2>
          <p className="text-gray-400 mt-4 mb-8">
            Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
          </p>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sağ taraf - Kartlar */}
        <div className="w-3/4 overflow-hidden">
          <div className="flex gap-4">
            {visibleTopics.map((topic, index) => (
              <div 
                key={topic.title} 
                className="relative w-[200px] h-[250px] rounded-lg overflow-hidden group flex-shrink-0 transition-all duration-500"
                style={{
                  opacity: index === 0 ? (currentIndex === topics.length - 1 ? 0 : 1) : 1
                }}
              >
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{topic.articles}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotTopics; 