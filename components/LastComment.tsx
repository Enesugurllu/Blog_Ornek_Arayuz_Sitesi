import React from 'react';

const LastComment = () => {
  return (
    // max-w-xs ve mt-8 ekledik, mr-auto ile sola hizaladık
    <div className="max-w-xs mr-auto mt-8 pl-0">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-cyan-400">Last Comment</h2>
        {/* border-blue-500 olarak değiştirdik */}
        <div className="border-b-2 border-blue-500 mb-6"></div>
        <div className="space-y-6">
          <div>
            <p className="text-gray-300 mb-2 text-sm">
              "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far"
            </p>
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/40x40"
                alt="Profile picture of George Orwell"
                className="w-10 h-10 rounded-full mr-3"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">George Orwell</p>
                <p className="text-sm text-gray-500">17 April 2023</p>
              </div>
            </div>
            {/* border-gray-700 olarak değiştirdik */}
            <div className="border-b border-gray-700"></div>
          </div>

          <div>
            <p className="text-gray-300 mb-2 text-sm">
              "Nullam sit amet orci velit. Integer at rhoncus eros. Etiam vulputate eros quis gravida maximus."
            </p>
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/40x40"
                alt="Profile picture of Maya Angelou"
                className="w-10 h-10 rounded-full mr-3"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Maya Angelou</p>
                <p className="text-sm text-gray-500">25 April 2023</p>
              </div>
            </div>
            <div className="border-b border-gray-700"></div>
          </div>

          <div>
            <p className="text-gray-300 mb-2 text-sm">
              "Morbi ligula nisi, finibus vel felis vitae, fringilla mollis leo. In pellentesque laoreet enim."
            </p>
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/40x40"
                alt="Profile picture of Toni Morrison"
                className="w-10 h-10 rounded-full mr-3"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Toni Morrison</p>
                <p className="text-sm text-gray-500">05 May 2023</p>
              </div>
            </div>
            <div className="border-b border-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastComment;