"use client"
import React, { useState } from 'react'
import Link from 'next/link'

// Menü öğeleri için tip tanımı
type MenuItems = {
  [key: string]: string[];
}

// Navbar bileşeni
const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const menuItems: MenuItems = {
    home: ['Ana Sayfa', 'Son Yazılar', 'Popüler', 'Öne Çıkanlar'],
    about: ['Hakkımda', 'Ekibimiz', 'Vizyonumuz', 'Kariyer'],
    category: ['Teknoloji', 'Yaşam', 'Seyahat', 'Spor'],
    singlePost: ['Son Gönderiler', 'Önerilen', 'Trendler', 'Arşiv'],
    pages: ['SSS', 'İletişim', 'Gizlilik', 'Koşullar']
  };

  // MouseEvent tipleri için
  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 py-6 bg-[#0f172a]/95 backdrop-blur-sm border-b border-gray-800">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-blue-500">Genz</span>
        </Link>
      </div>

      {/* Ana Menü */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Home Dropdown */}
        <div className="relative group"
             onMouseEnter={() => handleMouseEnter('home')}
             onMouseLeave={handleMouseLeave}>
          <button className="text-gray-300 hover:text-blue-500 text-lg font-medium pb-2 flex items-center">
            Home
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown === 'home' && (
            <div className="absolute left-0 -mt-1 w-48 rounded-xl bg-[#0f172a] border border-gray-700 shadow-xl">
              <div className="py-2">
                {menuItems.home.map((item: string, index: number) => (
                  <Link
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-500 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* About Me Dropdown */}
        <div className="relative group"
             onMouseEnter={() => handleMouseEnter('about')}
             onMouseLeave={handleMouseLeave}>
          <Link href="/hakkimda" className="text-gray-300 hover:text-blue-500 text-lg font-medium pb-2 flex items-center">
            About Me
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          {activeDropdown === 'about' && (
            <div className="absolute left-0 -mt-1 w-48 rounded-xl bg-[#0f172a] border border-gray-700 shadow-xl">
              <div className="py-2">
                {menuItems.about.map((item: string, index: number) => (
                  <Link
                    key={index}
                    href={item === 'Hakkımda' ? '/Project' : '#'}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-500 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>


        {/* Category Dropdown */}
        <div className="relative group"
             onMouseEnter={() => handleMouseEnter('category')}
             onMouseLeave={handleMouseLeave}>
          <button className="text-gray-300 hover:text-blue-500 text-lg font-medium pb-2 flex items-center">
            Category
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown === 'category' && (
            <div className="absolute left-0 -mt-1 w-48 rounded-xl bg-[#0f172a] border border-gray-700 shadow-xl">
              <div className="py-2">
                {menuItems.category.map((item: string, index: number) => (
                  <Link
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-500 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Single Post Dropdown */}
        <div className="relative group"
             onMouseEnter={() => handleMouseEnter('singlePost')}
             onMouseLeave={handleMouseLeave}>
          <button className="text-gray-300 hover:text-blue-500 text-lg font-medium pb-2 flex items-center">
            Single Post
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown === 'singlePost' && (
            <div className="absolute left-0 -mt-1 w-48 rounded-xl bg-[#0f172a] border border-gray-700 shadow-xl">
              <div className="py-2">
                {menuItems.singlePost.map((item: string, index: number) => (
                  <Link
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-500 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pages Dropdown */}
        <div className="relative group"
             onMouseEnter={() => handleMouseEnter('pages')}
             onMouseLeave={handleMouseLeave}>
          <button className="text-gray-300 hover:text-blue-500 text-lg font-medium pb-2 flex items-center">
            Pages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown === 'pages' && (
            <div className="absolute left-0 -mt-1 w-48 rounded-xl bg-[#0f172a] border border-gray-700 shadow-xl">
              <div className="py-2">
                {menuItems.pages.map((item: string, index: number) => (
                  <Link
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-500 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact - No Dropdown */}
        <Link href="/contact" className="text-gray-300 hover:text-blue-500 text-lg font-medium">
          Contact
        </Link>
      </div>

      {/* Sağ Taraf - Arama, Tema Değiştirici ve Subscribe */}
      <div className="flex items-center space-x-6">
        {/* Arama Butonu ve Menüsü */}
        <div className="relative">
          <button 
            className="p-2 text-gray-300 hover:text-blue-500"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Arama Menüsü */}
          {isSearchOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-[#0f172a] border border-gray-700 rounded-2xl shadow-xl p-4">
              <div className="flex items-center bg-gray-800 rounded-xl px-3 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Ara..."
                  className="bg-transparent border-none focus:ring-0 text-gray-300 text-sm ml-2 w-full outline-none"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-gray-400 text-xs font-medium mb-2">Popüler Aramalar:</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="text-gray-300 text-sm hover:text-blue-500">
                    <span className="text-blue-500">#</span>Teknoloji
                  </button>
                  <button className="text-gray-300 text-sm hover:text-blue-500">
                    <span className="text-blue-500">#</span>Yaşam
                  </button>
                  <button className="text-gray-300 text-sm hover:text-blue-500">
                    <span className="text-blue-500">#</span>Seyahat
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tema Değiştirici */}
        <button className="p-2 text-gray-300 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        {/* Subscribe Butonu */}
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300 text-lg font-medium">
          Subscribe
        </button>
      </div>
    </nav>
  )
}

export default Navbar 