import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

function ResearchProjects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const researchProjects = [
    {
      title: 'Visual Tracking and Collision Recognition',
      description: 'Advanced simulation system for spinning top dynamics using computer vision and ML techniques. This project uses OpenCV for tracking the motion of spinning tops and TensorFlow for predicting collision dynamics.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Physics Simulation'],
      imageUrl: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 2023',
      link: '/projects/visual-tracking'
    },
    {
      title: 'Osteoporosis Detection in MRI Scans',
      description: 'Machine learning classification system for early detection of osteoporosis using MRI scan analysis. Utilized convolutional neural networks to identify bone density patterns indicative of early-stage osteoporosis.',
      technologies: ['PyTorch', 'Medical Imaging', 'Deep Learning', 'CNN'],
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'January 2023',
      link: '/projects/osteoporosis-detection'
    },
    {
      title: 'Jet Flavor Classification',
      description: 'Deep neural network implementation for particle physics jet classification in high-energy physics. This project aims to accurately identify different types of particle jets in LHC data.',
      technologies: ['Python', 'Deep Learning', 'Particle Physics', 'Data Analysis'],
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'November 2022',
      link: '/projects/jet-classification'
    },
    {
      title: 'Self-Supervised Learning for Image Recognition',
      description: 'Implementation of a self-supervised learning approach for image recognition tasks with limited labeled data. Explored contrastive learning techniques to improve model robustness.',
      technologies: ['TensorFlow', 'Self-Supervised Learning', 'Computer Vision', 'Data Augmentation'],
      imageUrl: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'September 2022',
      link: '/projects/self-supervised-learning'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Research & AI Projects
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Exploring the intersection of physics, computer vision, and machine learning through research and practical implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <article 
                key={index}
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h2>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {project.date}
                    </span>
                  </div>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${
                          isDarkMode 
                            ? 'bg-blue-900 text-blue-200' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className={`text-sm font-medium flex items-center ${
                      isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default ResearchProjects; 