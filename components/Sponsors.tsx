'use client';
import { useState, useEffect } from 'react';
import styles from '../styles/Sponsors.module.css';

// TypeScript için interface tanımlamaları
interface Sponsor {
  name: string;
  image: string;
}

interface SponsorCardProps {
  name: string;
  image: string;
}

const sponsorData: Sponsor[] = [
  {
    name: "Figwire",
    image: "https://storage.googleapis.com/a1aa/image/edxbDGWKpkxvCqs7Lo-Y5ulpg2cYwqvxUeXh17gTS-U.jpg"
  },
  {
    name: "TheFlow",
    image: "https://storage.googleapis.com/a1aa/image/bt4TdMkXPW-lXuXmPjXUxXmY8BrmEvCdwVZK622kmms.jpg"
  },
  {
    name: "Evara",
    image: "https://storage.googleapis.com/a1aa/image/KJl4g4U2Si-iuAd6gIlR8-pb1G3b5Zm723PYbDjc5pM.jpg"
  },
  {
    name: "Agon",
    image: "https://storage.googleapis.com/a1aa/image/xrwxJ2ygx8ChvOiz4dFSywADEgsbqnY3Lu312rp-ugc.jpg"
  },
  {
    name: "Monst",
    image: "https://storage.googleapis.com/a1aa/image/B97G7lLBlqzQ4fZlC-dbjnBLoFDZiiAPpWOE_Eack8c.jpg"
  },
  {
    name: "Adobe",
    image: "https://storage.googleapis.com/a1aa/image/edxbDGWKpkxvCqs7Lo-Y5ulpg2cYwqvxUeXh17gTS-U.jpg"
  },
  {
    name: "Microsoft",
    image: "https://storage.googleapis.com/a1aa/image/bt4TdMkXPW-lXuXmPjXUxXmY8BrmEvCdwVZK622kmms.jpg"
  },
  {
    name: "Google",
    image: "https://storage.googleapis.com/a1aa/image/KJl4g4U2Si-iuAd6gIlR8-pb1G3b5Zm723PYbDjc5pM.jpg"
  },
  {
    name: "Apple",
    image: "https://storage.googleapis.com/a1aa/image/xrwxJ2ygx8ChvOiz4dFSywADEgsbqnY3Lu312rp-ugc.jpg"
  },
  {
    name: "Amazon",
    image: "https://storage.googleapis.com/a1aa/image/B97G7lLBlqzQ4fZlC-dbjnBLoFDZiiAPpWOE_Eack8c.jpg"
  }
];

const SponsorCard: React.FC<SponsorCardProps> = ({ name, image }) => (
  <div className="flex items-center px-4">
    <img 
      src={image} 
      alt={`${name} logo`} 
      className="mr-3 w-12 h-12 object-contain" 
      width={48} 
      height={48}
    />
    <span className="text-lg text-gray-300">{name}</span>
  </div>
);

const Sponsors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSponsors: number = sponsorData.length;
  const visibleItems: number = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSponsors - visibleItems ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSponsors]);

  return (
    <div className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4 md:mb-0">
            Content publishing cooperation with my partners
          </h2>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Learn More
          </a>
        </div>
        
        <div className={styles.carousel}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {sponsorData.map((sponsor, index) => (
              <div key={index} className={styles.carouselItem}>
                <SponsorCard {...sponsor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;