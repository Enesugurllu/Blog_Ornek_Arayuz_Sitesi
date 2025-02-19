"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Hero: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);
  const words: string[] = ['Creator', 'Designer'];
  const [delta, setDelta] = useState<number>(200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.1);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(100);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Sol Taraf */}
      <div className="w-1/2 pl-20">
        <h2 className="text-blue-400 text-xl mb-4">Hello Everyone!</h2>
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-white text-6xl font-bold">I&apos;m</h1>
          <h1 className="text-blue-500 text-6xl font-bold">{text}</h1>
          <span className="animate-blink text-6xl text-blue-500">|</span>
        </div>
        <p className="text-gray-400 text-lg max-w-xl mb-8">
          I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I&apos;m not adding motion just to spruce things up, but doing it in ways that.
        </p>
        
        {/* Email Input ve Subscribe */}
        <div className="flex gap-4 max-w-xl">
          <input
            type="email"
            placeholder="Type your email address"
            className="flex-1 px-6 py-4 bg-gray-800 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
            Subscribe→
          </button>
        </div>
      </div>

      {/* Sağ Taraf - Görsel */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="relative h-full">
          <div className="absolute top-1/2 -translate-y-1/2 right-20">
            <img
              src="/images/adam.png"
              alt=""
              className="max-w-md object-contain relative z-10"
            />
          </div>
          {/* Dekoratif Elementler */}
          <span className="absolute top-20 left-40 text-blue-500 text-4xl animate-float-slow-1 z-20">+</span>
          <span className="absolute bottom-40 left-60 text-blue-500 text-4xl animate-float-slow-2 z-0">×</span>
          <div className="absolute top-1/2 left-20 w-4 h-4 rounded-full bg-blue-500 animate-float-slow-3 z-20"></div>
          
          {/* Yeni Dekoratif Elementler */}
          <span className="absolute top-40 right-40 text-blue-500 text-4xl animate-float-slow-2 z-0">+</span>
          <span className="absolute bottom-20 right-20 text-blue-500 text-4xl animate-float-slow-3 z-20">×</span>
          <div className="absolute top-32 right-60 w-4 h-4 rounded-full bg-blue-500 animate-float-slow-1 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 