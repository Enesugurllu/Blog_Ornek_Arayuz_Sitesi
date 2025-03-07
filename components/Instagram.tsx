import React from 'react';

const Instagram = () => {
  return (
    // max-w-xs ve mt-8 ekleyerek Categories ile aynı genişlikte ve üstten boşluk bırakacak şekilde ayarladık
    <div className="max-w-xs mr-auto pl-0 mt-8">
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="text-center mb-4">
          <div className="flex items-center mb-2">
            <i className="fas fa-cube text-cyan-400 text-3xl"></i>
            <span className="text-cyan-400 text-xl font-semibold ml-2">Genz</span>
          </div>
          <div className="border-b-2 border-blue-500 mb-6"></div>
          <p className="text-gray-400 text-sm">Follow us on instagram</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <img
            src="https://storage.googleapis.com/a1aa/image/C7r8jY4S-viq8vYnAzEBbfX5UopvEpH7JcrEKrZh7qM.jpg"
            alt="Image of a traditional Japanese pagoda with a mountain in the background"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/XX59iyfOT-2Yvu7tNt202u9tTPsFYoqqluAVO1G_PeY.jpg"
            alt="Image of a mountain range during sunset"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/J-eL30iiYbwRTLmRptp4HxXmMFQFRmCOW-_ay6lXXm4.jpg"
            alt="Image of a bridge at night with lights"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/iybmmLGV1tVJrO6JS5iWcS_SWH5HYvNrLURf6CtNzJg.jpg"
            alt="Image of the Golden Gate Bridge with greenery in the foreground"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/Z31kSh8TrC4s_QkiQAIB0ey8dW_jGzcTBmdh3Fp4EDg.jpg"
            alt="Image of a lake surrounded by mountains"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/_gL-laiVvvsPnjXimcJOQ_RJQvWVNKvwmtPlPKWGifg.jpg"
            alt="Image of a wooden cabin in the mountains"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/O9O4DbNqrQvI2dJvcL8iPKRvVv05Yn6pN-ONOhEWcaA.jpg"
            alt="Image of a desert landscape with rock formations"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/RQNyirq85kC9R9F2pTvx8ipOa7L-jrsd6WV6oM2LrIc.jpg"
            alt="Image of a rocky coastline with blue water"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/laWZtfKEoDADWNFkL1vJRh4jlUQmFa50oy4nqrOz_Ws.jpg"
            alt="Image of a cityscape at sunset"
            className="rounded-lg hover:opacity-80 transition-opacity duration-300"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;