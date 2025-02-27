'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/Testimonials.module.css';

// TypeScript için interface tanımlamaları
interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  text: string;
}

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  text: string;
}

const testimonialData: Testimonial = {
  id: 1,
  name: "Karen Adderiy",
  company: "Alithemes Co",
  image: "https://storage.googleapis.com/a1aa/image/XhWPmf4tO_W0JjrBw2r2PhTH12zQT1WlnLJC9p1Foug.jpg",
  text: "Dignissim quis turpis quis, semper vehicula dolor. Suspendisse tincidunt consequat quam."
};

const testimonials: Testimonial[] = Array(6).fill(testimonialData);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, company, image, text }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={`Profile picture of ${name}`}
        className="w-12 h-12 rounded-full mr-4"
        width={48}
        height={48}
      />
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-gray-400">{company}</p>
      </div>
    </div>
    <p className="text-gray-400 mt-2">{text}</p>
    <div className="text-right mt-4">
      <i className="fas fa-quote-right text-2xl text-gray-600"></i>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalTestimonials: number = testimonials.length;
  const visibleItems: number = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= totalTestimonials - visibleItems + 1 ? 0 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [totalTestimonials]);

  return (
    <div className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-cyan-400">Testimonials</h1>
        <p className="text-center text-gray-400 mt-4">
          Nettracking is a B2B marketing software for telecommunications industry.
        </p>
        <div className="mt-12">
          <div className={styles.carousel}>
            <div 
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.carouselItem}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;