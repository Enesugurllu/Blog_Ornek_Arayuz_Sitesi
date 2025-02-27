'use client';
import { useState } from 'react';
import Image from 'next/image';

interface FilterButton {
  name: string;
  label: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage: number = 6;

  const filterButtons: FilterButton[] = [
    { name: 'all', label: 'All Projects' },
    { name: 'web', label: 'Web Development' },
    { name: 'mobile', label: 'Mobile Apps' },
    { name: 'motion', label: 'Motion' },
    { name: 'graphic', label: 'Graphic Design' }
  ];

  const projects: Project[] = [
    {
      title: "Flyer design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://storage.googleapis.com/a1aa/image/m_rqHgKg9Pin5FERGeB1_M4FKdKTAPXNN4B5neTCA7w.jpg",
      category: "graphic"
    },
    {
      title: "Web App",
      description: "Modern web application built with React.",
      image: "https://storage.googleapis.com/a1aa/image/e_boDZQQJbG5iS94YWMvjE19YZL5ihHjI_x32intrcw.jpg",
      category: "web"
    },
    {
      title: "Mobile App UI",
      description: "Mobile application interface design.",
      image: "https://storage.googleapis.com/a1aa/image/wEfCCaqYxsWZ4e2NTcDNKYMe9aERzcOhOvc-yMMl8iI.jpg",
      category: "mobile"
    },
    {
      title: "Disk cover",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat elit ac lacus suscipit, malesuada suscipit.",
      image: "https://storage.googleapis.com/a1aa/image/wEfCCaqYxsWZ4e2NTcDNKYMe9aERzcOhOvc-yMMl8iI.jpg",
      category: "graphic"
    },
    {
      title: "Pattern design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat elit ac lacus suscipit, malesuada suscipit.",
      image: "https://storage.googleapis.com/a1aa/image/ncm54vOTM8DGS8Qghz8RKzkDQAhPdi_VPIVCPZJK9eA.jpg",
      category: "graphic"
    },
    {
      title: "Logo design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat elit ac lacus suscipit, malesuada suscipit.",
      image: "https://storage.googleapis.com/a1aa/image/Aby7oyVNJu903pMwJAh1CmwZiG4zEJvSJFRvIe0BHk0.jpg",
      category: "graphic"
    },
    {
      title: "Animal pattern",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat elit ac lacus suscipit, malesuada suscipit.",
      image: "https://storage.googleapis.com/a1aa/image/H4zPnddZAflBie7kRwCvcwyaENNr0XN87z7I31IW-U0.jpg",
      category: "graphic"
    }
  ];

  const filteredProjects: Project[] = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const indexOfLastProject: number = currentPage * projectsPerPage;
  const indexOfFirstProject: number = indexOfLastProject - projectsPerPage;
  const currentProjects: Project[] = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages: number = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="min-h-screen pt-16 mt-12" style={{ backgroundColor: '#0f172a' }}>
      {/* Hero Section - Made more compact */}
      <div className="flex items-center justify-center min-h-[20vh] px-4 mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cyan-500">My Latest Projects</h1>
          <p className="text-base text-gray-300 mt-2 max-w-2xl mx-auto">
            The convention is the main event of the year for professionals in the world of design and architecture.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        {/* Filter Buttons - Made more compact */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {filterButtons.map((button: FilterButton) => (
            <button
              key={button.name}
              onClick={() => setActiveFilter(button.name)}
              className={`${
                activeFilter === button.name 
                  ? 'bg-gradient-to-r from-[#0ea7e9] to-[#0caaae] border-[#0ea7e9]' 
                  : 'bg-gray-700 hover:bg-gradient-to-r hover:from-[#0ea7e9] hover:to-[#0caaae] border-[#0ea7e9]'
              } text-white px-5 py-2 rounded-full text-base transition-all duration-300 transform hover:-translate-y-0.5 border-2`}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - Made more compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {currentProjects.map((project: Project, index: number) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 rounded-b-lg">
                <h2 className="text-base font-semibold text-white">{project.title}</h2>
                <p className="text-xs text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Made more compact */}
        {currentProjects.length > 0 && (
          <div className="flex justify-center mt-6">
            {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map((page: number) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${
                  currentPage === page 
                    ? 'bg-gradient-to-r from-[#0ea7e9] to-[#0caaae] border-[#0ea7e9]' 
                    : 'bg-gray-700 hover:bg-gradient-to-r hover:from-[#0ea7e9] hover:to-[#0caaae] border-[#0ea7e9]'
                } text-white px-4 py-1.5 rounded-full mx-1.5 text-base transition-all duration-300 transform hover:-translate-y-0.5 border-2`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
