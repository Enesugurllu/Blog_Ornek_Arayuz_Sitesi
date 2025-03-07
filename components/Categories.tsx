const Categories = () => {
  const categories = [
    {
      name: "Travel Tips",
      image: "https://storage.googleapis.com/a1aa/image/2UpF8PAuCDdFji6nl4kKSeSPUqLWA2TLvIbL_cGj4_o.jpg",
      posts: 36
    },
    {
      name: "Technology",
      image: "https://storage.googleapis.com/a1aa/image/pUbQ7u0I9RpvXY0IEkQORyUbCA_XQEuzoHnbPUUVWIs.jpg",
      posts: 14
    },
    {
      name: "Business",
      image: "https://storage.googleapis.com/a1aa/image/YFUE21DIC3X2roZ9WF4QLb0MzfLhu3xBRQBB7m6iXmM.jpg",
      posts: 87
    },
    {
      name: "Food",
      image: "https://storage.googleapis.com/a1aa/image/R8c8_rPXBfzU6stralE98W9XASeX57mgKI3WCnEAdr4.jpg",
      posts: 125
    },
    {
      name: "Lifestyle",
      image: "https://storage.googleapis.com/a1aa/image/ZcL-CRdq9f0UI3Z7tZ5RW8EY16W0GBG49hX7EfcIv2I.jpg",
      posts: 6
    }
  ];

  return (
    // max-w-sm yerine max-w-xs kullanıyoruz ve sola hizalama için mr-auto ekliyoruz
    <div className="max-w-xs mr-auto pl-0">
      <div className="bg-gray-800 p-6 rounded-lg">
        {/* text-cyan-400 ekledik */}
        <h2 className="text-xl font-semibold mb-4 text-cyan-400">Categories</h2>
        <div className="border-b-2 border-blue-500 mb-6"></div>
        <div className="space-y-5">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  src={category.image}
                  alt={`${category.name} image`}
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
                {/* hover:text-cyan-400 ve transition ekledik */}
                <span className="text-base hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  {category.name}
                </span>
              </div>
              {/* hover:text-cyan-400 ve transition ekledik */}
              <span className="bg-gray-600 text-sm px-3 py-1.5 rounded-full hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                {category.posts} posts
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;