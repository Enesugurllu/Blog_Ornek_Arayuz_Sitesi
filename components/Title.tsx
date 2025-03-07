import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

const Title = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Digital Design That Will Help You Start Your Business
          </h1>
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center">
              <i className="far fa-user mr-2"></i>
              <span className="text-sm">by Rosalina</span>
            </div>
            <div className="flex items-center">
              <i className="far fa-calendar mr-2"></i>
              <span className="text-sm">July 22, 2023</span>
            </div>
            <div className="flex items-center">
              <i className="far fa-clock mr-2"></i>
              <span className="text-sm">5 min read</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0 mr-24">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Title;