'use client'
import React from 'react';
import Image from 'next/image';

const EditorsPicks = () => {
  const articles = [
    {
      id: 1,
      image: "/images/Editor1.png",
      title: "Helpful Tips for Working from Home as a Freelancer",
      readTime: "5 mins read",
      author: {
        name: "Joseph",
        date: "15 Mar 2023",
        avatar: "/images/avatars/joseph.png"
      }
    },
    {
      id: 2,
      image: "/images/Editor2.png",
      title: "10 Easy Ways to Be Environmentally Conscious At Home",
      readTime: "7 mins read",
      author: {
        name: "Ross",
        date: "15 Mar 2023",
        avatar: "/images/avatars/ross.png"
      }
    },
    {
      id: 3,
      image: "/images/Editor3.png",
      title: "How to Give Your Space a Parisian-Inspired Makeover",
      readTime: "12 mins read",
      author: {
        name: "Steven",
        date: "14 Mar 2023",
        avatar: "/images/avatars/steven.png"
      }
    },
    {
      id: 4,
      image: "/images/Editor4.png",
      title: "Facts About Business That Will Help You Success",
      readTime: "10 mins read",
      author: {
        name: "Harry",
        date: "14 Mar 2023",
        avatar: "/images/avatars/harry.png"
      }
    },
    {
      id: 5,
      image: "/images/Editor5.png",
      title: "The 60 Things To Do About Building A Plan",
      readTime: "15 mins read",
      author: {
        name: "Ronny",
        date: "14 Mar 2023",
        avatar: "/images/avatars/ronny.png"
      }
    }
  ];

  return (
    <>
      <section className="border border-gray-800 rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-400">Editor&apos;s picked</h2>
          <p className="text-gray-400 text-sm mt-2">Featured and highly rated articles</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {articles.slice(0, 2).map((article) => (
            <div key={article.id} className="relative group">
              <div className="relative h-[240px] rounded-xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 right-4 bg-gray-900/80 text-gray-300 text-xs px-2 py-1 rounded-full">
                  {article.readTime}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-white text-lg font-semibold group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 mt-3">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-gray-400 text-sm">{article.author.name}</span>
                  <span className="text-gray-500 text-sm">{article.author.date}</span>
                  <button className="ml-auto text-blue-400 text-sm hover:text-blue-300">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {articles.slice(2).map((article) => (
            <div key={article.id} className="relative group">
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 right-4 bg-gray-900/80 text-gray-300 text-xs px-2 py-1 rounded-full">
                  {article.readTime}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-white text-lg font-semibold group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 mt-3">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-gray-400 text-sm">{article.author.name}</span>
                  <span className="text-gray-500 text-sm">{article.author.date}</span>
                  <button className="ml-auto text-blue-400 text-sm hover:text-blue-300">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mx-auto mt-12 block px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors">
          Show More Posts →
        </button>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="relative w-full h-[120px] overflow-hidden">
          <Image
            src="/images/banner1.png"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default EditorsPicks; 