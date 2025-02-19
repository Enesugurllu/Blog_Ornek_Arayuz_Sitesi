'use client'
import React from 'react';
import Image from 'next/image';

const PopularTags = () => {
  const tags = [
    { name: 'Travel', image: '/images/tags/travel.png' },
    { name: 'Culture', image: '/images/tags/culture.png' },
    { name: 'Lifestyle', image: '/images/tags/lifestyle.png' },
    { name: 'Fashion', image: '/images/tags/fashion.png' },
    { name: 'Food', image: '/images/tags/food.png' },
    { name: 'Space', image: '/images/tags/space.png' },
    { name: 'Animal', image: '/images/tags/animal.png' },
    { name: 'Minimal', image: '/images/tags/minimal.png' },
    { name: 'Interior', image: '/images/tags/interior.png' },
    { name: 'Plant', image: '/images/tags/plant.png' },
    { name: 'Nature', image: '/images/tags/nature.png' },
    { name: 'Business', image: '/images/tags/business.png' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-[#0e9eac]">Popular Tags</h2>
        <p className="text-gray-400 mt-2">Most searched keywords</p>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {tags.map((tag, index) => (
          <button
            key={tag.name}
            className="group relative bg-[#0f172a] border border-gray-800 rounded-xl p-4 transition-all duration-300 hover:border-[#0e9eac] hover:shadow-lg hover:shadow-[#0f4c5d] w-full text-left"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={tag.image}
                  alt={tag.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-white group-hover:text-[#0e9eac] transition-colors">
                {tag.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default PopularTags; 