import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AutomationProjects() {
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

  const automationProjects = [
    {
      title: 'Business Process Automation Suite',
      description: 'End-to-end automation solution for streamlining business workflows using modern AI tools. This suite integrates with CRM systems, email platforms, and project management tools to automate repetitive tasks and improve efficiency.',
      technologies: ['n8n', 'Make', 'Voiceflow', 'API Integration'],
      imageUrl: 'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'April 2023',
      link: '/automation/business-process'
    },
    {
      title: 'Document Processing Pipeline',
      description: 'Automated system for processing and analyzing business documents using AI and ML techniques. This pipeline extracts key information from invoices, contracts, and reports using OCR and NLP technologies.',
      technologies: ['OCR', 'NLP', 'Workflow Automation', 'Data Extraction'],
      imageUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'February 2023',
      link: '/automation/document-processing'
    },
    {
      title: 'Customer Support Automation',
      description: 'AI-powered customer support system that uses natural language processing to understand and respond to customer inquiries. The system integrates with existing support platforms and provides 24/7 assistance.',
      technologies: ['ChatGPT API', 'Dialogflow', 'Node.js', 'Customer Support'],
      imageUrl: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'December 2022',
      link: '/automation/customer-support'
    },
    {
      title: 'Marketing Analytics Dashboard',
      description: 'Custom analytics dashboard that aggregates marketing data from multiple sources and provides AI-driven insights and recommendations for campaign optimization.',
      technologies: ['Data Visualization', 'AI Analytics', 'Marketing Automation', 'Dashboard Design'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'October 2022',
      link: '/automation/marketing-analytics'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AI Automation Solutions
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Leveraging artificial intelligence to create powerful automation solutions that transform business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationProjects.map((project, index) => (
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
                            ? 'bg-green-900 text-green-200' 
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className={`text-sm font-medium flex items-center ${
                      isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-500'
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

export default AutomationProjects; 