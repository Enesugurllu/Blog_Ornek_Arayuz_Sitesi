import React from 'react';

// Kategori listesi için type tanımı
type CategoryItem = string;

const Footer: React.FC = () => {
  // Kategori listelerini ayrı değişkenlerde tutuyoruz
  const leftCategories: CategoryItem[] = ['Action', 'Business', 'Adventure', 'Canada', 'America', 'Curiosity'];
  const rightCategories: CategoryItem[] = ['Animal', 'Dental', 'Biology', 'Design', 'Breakfast', 'Dessert'];

  return (
    <div className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 max-w-6xl">
        <footer className="bg-gray-800 rounded-lg p-8 sm:p-10">
          <div className="flex flex-wrap justify-between gap-6">
            {/* Genz Section */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <img
                  src="https://storage.googleapis.com/a1aa/image/plK_jOPFRtlTMQ_Xu_qNIG70UXL-24qQuVk4L0ZaLog.jpg"
                  alt="Genz logo"
                  className="mr-2"
                  width={28}
                  height={28}
                />
                <span className="text-lg font-bold">Genz</span>
              </div>
              <p className="text-gray-400 text-xs mb-3">
                When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five
                When an unknown prnoto sans took a galley and scrambled it to five centurie.
              </p>
              <p className="text-gray-400 font-bold text-xs">Address</p>
              <p className="text-gray-400 text-xs">
                123 Main Street<br />
                New York, NY 10001
              </p>
            </div>

            {/* Newsletter Section */}
            <div className="w-full md:w-1/3">
              <h3 className="text-base font-bold mb-3">Newsletter</h3>
              <p className="text-gray-400 text-xs mb-3">
                Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.
              </p>
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3 py-1.5 bg-gray-700 text-gray-400 border border-gray-600 rounded text-xs"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-3 py-1.5 bg-gray-700 text-gray-400 border border-gray-600 rounded text-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-1.5 bg-gradient-to-r from-[#0ea7e9] to-[#0caaae] border-[#0ea7e9] text-white rounded hover:bg-gradient-to-r hover:from-[#0ea7e9] hover:to-[#0caaae] border-2 text-xs transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Categories Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-base font-bold mb-3">Categories</h3>
              <div className="flex flex-wrap">
                <ul className="w-1/2">
                  {leftCategories.map((item) => (
                    <li key={item} className="mb-1.5">
                      <a href="#" className="text-gray-400 hover:text-cyan-400 text-xs">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="w-1/2">
                  {rightCategories.map((item) => (
                    <li key={item} className="mb-1.5">
                      <a href="#" className="text-gray-400 hover:text-cyan-400 text-xs">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
            <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Created by AllThemes.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-xs">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-xs">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-xs">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;