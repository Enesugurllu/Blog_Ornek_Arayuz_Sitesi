import React from 'react';
import Link from 'next/link';

const Breadcrumb = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 px-4">
      <nav className="flex items-center text-sm text-gray-400">
        <Link href="/" className="flex items-center text-cyan-400 hover:text-cyan-500 transition-colors duration-300">
          <i className="fas fa-home"></i>
          <span className="ml-2">Home</span>
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
          Blog
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-400">Digital Design That Will Help You Start Your Business</span>
      </nav>
    </div>
  );
};

export default Breadcrumb;