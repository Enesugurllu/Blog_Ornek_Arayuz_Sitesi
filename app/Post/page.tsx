import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Title from '../../components/Title'
import Navbar from '../../components/Navbar'
import Breadcrumb from '../../components/Breadcrumb'
import Categories from '../../components/Categories'
import PopularPost from '../../components/PopularPost'
import LastComment from '../../components/LastComment'
import Instagram from '../../components/Instagram'
import Comments from '../../components/Comments'
import LeaveComment from '../../components/LeaveComment'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] dark:bg-navy-900">
      <Navbar/>
      {/* Navbar'ın altında kalan içerik için pt-24 (padding-top) eklendi */}
      <div className="pt-24">
        <Breadcrumb />
        <Title/>
        
        {/* Ana içerik container'ı */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* Sol taraf - Blog içeriği */}
          <div className="md:w-2/3">
            <div className="mb-8">
              <p className="text-sm text-gray-400 mb-4">
                The fancy moon going in little artist painting. Thirty days of lavender in the dairy farm. Great artist of paints, far and again. He now feeling. Caring trademark projects noteworthy than minimal, their 20th poetry feeling may. Include pink be.
              </p>
              <img 
                src="https://storage.googleapis.com/a1aa/image/cc8pnn-sF3uEvnDexy9Qxftu6i2wx4CnpwXPOsjQrgc.jpg" 
                alt="A futuristic car with neon lights in a dark environment" 
                className="w-full rounded-lg mb-4"
                width={600}
                height={400}
              />
              <p className="text-sm text-gray-400">
                Tortor placerat bibendum consequat sagittis, facilisi facilisi pellentesque morbi. Id commodo placerat et vitae a massa. Lacus et bibendum sollicitudin lacus nec non. Dictum volutpat praesent nam ornare mauris et vehicula. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut est.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Use your headings</h2>
              <p className="text-sm text-gray-400 mb-4">
                Thirty there is time wear across days, make mind on these you. Can young a really, many, bring mind of song that them by play. Tactilely from daily sign to noteworthy bloom left. Tornado clean daydreaming visionary process room and. Now with dreamy dramatically place everything of days.
              </p>
              <div className="bg-blue-800 p-6 rounded-lg mb-4">
                <div className="text-3xl text-center text-blue-300 mb-4">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-lg text-center mb-4">
                  Blandit consequat feugiat sed dapibus lorem diam nibh venenatis sodales pulvinar augue adipiscing turpis nulla sit tincidunt non lacus sit amet et white dreamy dramatically place.
                </p>
                <div className="text-center">
                  <img 
                    src="https://storage.googleapis.com/a1aa/image/tWb8exFclpvk7IqiMP8ZdQ7iUGY7rbvwW-qK7s6pz1U.jpg"
                    alt="Profile picture of Ronald Richards"
                    className="w-12 h-12 rounded-full mx-auto mb-2"
                    width={50}
                    height={50}
                  />
                  <p className="text-sm">Ronald Richards</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Smaller heading</h3>
              <div className="flex flex-col md:flex-row mb-4">
                <p className="text-sm text-gray-400 mb-4 md:mb-0 md:mr-4">
                  Thirty there is time wear across days, make mind on these you. Can young a really, many, bring mind of song that them by play. Tactilely from daily sign to noteworthy bloom left. Tornado clean daydreaming visionary process room and. Now with dreamy dramatically place everything of days.
                </p>
                <img 
                  src="https://storage.googleapis.com/a1aa/image/bpdUKuGUMwQ6FPyzRJ9ZIRj81ktfCmbrokNwPU5X8rw.jpg"
                  alt="A futuristic drone flying over water"
                  className="w-full md:w-1/3 rounded-lg"
                  width={300}
                  height={200}
                />
              </div>
              <p className="text-sm text-gray-400 mb-4">
                With what dreamy dramatically place everything although. Place out far dramatically place artistically, include noteworthy yet from visionary process room. Thirty is time a studio of the whimsical projects, afternoon artist going in faded maybe.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Tortor placerat bibendum consequat sagittis, facilisi facilisi pellentesque morbi. Id commodo placerat et vitae a massa. Lacus et bibendum sollicitudin lacus nec non. Dictum volutpat praesent nam ornare mauris et vehicula. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut est.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img 
                  src="https://storage.googleapis.com/a1aa/image/-G6Sp7xiuuqfB-1WEWBBr4CZU23t_l2nN681B0LH3bw.jpg"
                  alt="A person in a futuristic suit with neon lights"
                  className="w-full rounded-lg"
                  width={300}
                  height={200}
                />
                <img 
                  src="https://storage.googleapis.com/a1aa/image/cc8pnn-sF3uEvnDexy9Qxftu6i2wx4CnpwXPOsjQrgc.jpg"
                  alt="A futuristic car with neon lights in a dark environment"
                  className="w-full rounded-lg"
                  width={300}
                  height={200}
                />
                <img 
                  src="https://storage.googleapis.com/a1aa/image/YRF6nCW4rir4GClC4KrUxMrPpQCuq3jOWbc38vUsyIo.jpg"
                  alt="A serene landscape with mountains and a lake"
                  className="w-full rounded-lg"
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <p className="text-sm text-gray-400">furniture in your house</p>
            
            {/* Eklenen çizgi ve tags butonları */}
            <div className="border-t border-gray-700 my-6"></div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 text-sm bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 hover:-translate-y-1 transform transition-all duration-300">
                #Travel
              </button>
              <button className="px-4 py-2 text-sm bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 hover:-translate-y-1 transform transition-all duration-300">
                #Lifestyle
              </button>
              <button className="px-4 py-2 text-sm bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 hover:-translate-y-1 transform transition-all duration-300">
                #Fashion
              </button>
              <button className="px-4 py-2 text-sm bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-cyan-400 hover:-translate-y-1 transform transition-all duration-300">
                #Technology
              </button>
            </div>
            <Comments />
            <div className="border-t border-gray-700 my-8"></div>
            <LeaveComment />
          </div>

          {/* Sağ taraf - Categories */}
          <div className="md:w-1/3">
            <Categories />
            <PopularPost />
            <LastComment />
            <Instagram />
          </div>
        </div>
      </div>

      {/* Footer'ı en alta */}
      <Footer />
    </div>
  )
}

export default page
