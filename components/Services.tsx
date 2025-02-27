'use client'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHourglassHalf, 
  faPaintBrush, 
  faBullhorn, 
  faCamera, 
  faSearch, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons'

interface ServiceItem {
  icon: typeof faHourglassHalf;
  title: string;
  description: string;
}

const serviceItems: ServiceItem[] = [
  {
    icon: faHourglassHalf,
    title: "Motion & Web Graphy",
    description: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email alerts"
  },
  {
    icon: faPaintBrush,
    title: "UI/Ux Consultancy",
    description: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email alerts"
  },
  {
    icon: faBullhorn,
    title: "Branding & Design",
    description: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email alerts"
  },
  {
    icon: faCamera,
    title: "Product Photography",
    description: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email alerts"
  },
  {
    icon: faSearch,
    title: "Key Seo Optimization",
    description: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email alerts"
  },
  {
    icon: faUsers,
    title: "Social Management",
    description: "NetTracking is a very powerful Web 2.0 site search engine allows you to find email alerts"
  }
];

const Services: FC = () => {
  return (
    <div className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-cyan-400">My Services</h1>
        <p className="text-center text-gray-400 mt-4">
          With many years of experience in the field of Digital Marketing,<br />
          I am confident to bring you many outstanding values.
        </p>
        <div className="mt-12 bg-gray-800 rounded-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceItems.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <FontAwesomeIcon icon={service.icon} className="text-4xl text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services