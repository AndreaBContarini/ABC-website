import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  isDarkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      } rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1`}
    >
      <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              isDarkMode
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;