const PopularPost = () => {
  const posts = [
    {
      title: "Helpful Tips for Working from Home as a Freelancer",
      image: "https://storage.googleapis.com/a1aa/image/h-XM6X-sRYl1PCpCMubjHRR3BEKf5wbLm9poCZPl4Zk.jpg",
      readTime: "5 mins read",
      date: "25 April 2023"
    },
    {
      title: "10 Easy Ways to Be Environmentally Conscious At Home",
      image: "https://storage.googleapis.com/a1aa/image/Dta2SeD0IsoWgKu4nYJ3xCt-gPRuoUYK77KauL9C8qg.jpg",
      readTime: "7 mins read",
      date: "12 May 2023"
    },
    {
      title: "How to Give Your Space a Parisian-Inspired Makeover",
      image: "https://storage.googleapis.com/a1aa/image/lS0EL79qzI2BLGy9MY9pvZqnwoKZpmpIS7Gh9DGoqPo.jpg",
      readTime: "12 mins read",
      date: "15 May 2023"
    },
    {
      title: "Facts About Business That Will Help You Success",
      image: "https://storage.googleapis.com/a1aa/image/5YdYh9iXFxtYdKETYlJyHIYxwVqnEA8F_Ev0x7S4fqg.jpg",
      readTime: "89 mins read",
      date: "27 June 2023"
    },
    {
      title: "The 60 Things To Do About Building A Plan",
      image: "https://storage.googleapis.com/a1aa/image/_Zg0G2AnV_4azVeOoqf7fOK3IiWOotGyGm2FQr5CdXg.jpg",
      readTime: "35 mins read",
      date: "28 June 2023"
    }
  ];

  return (
    <div className="max-w-xs mr-auto pl-0 mt-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-blue-400 mb-4">Popular Posts</h2>
        {posts.map((post, index) => (
          <div key={index} className={`${index !== posts.length - 1 ? 'border-b border-gray-700' : ''} pb-2 mb-2`}>
            <div className="flex items-center mb-2">
              <img
                src={post.image}
                alt={`Image of ${post.title}`}
                className="w-12 h-12 rounded-full mr-3"
                width={50}
                height={50}
              />
              <div>
                <h3 className="text-sm font-semibold hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {post.readTime} • {post.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPost;