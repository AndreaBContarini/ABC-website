import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ResearchProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  date: string;
  content?: string;
}

function ResearchProjects() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to scroll to top on page load or project change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProject]);

  // Markdown content for the Beyblade article
  const beybladeArticleContent = `# 🌀 Beyblade Detection & Tracking with Computer Vision

## Overview

Our project focuses on developing a real-time Computer Vision system to **detect, track, and analyze spinning Beyblade tops**—including the detection of **collisions**—using a combination of deep learning and tracking algorithms.

Built as part of a university course on Computer Vision, the solution integrates advanced techniques such as **YOLOv8**, **Kalman Filtering**, and **color-based ID association**. The code is publicly available on [GitHub](https://github.com/AndreaBContarini/Computer_Vision_Beyblade).

---

## 🎯 Objectives

- **Detect Beyblades** in different spinning states (\`Spin\` vs \`Still\`)
- **Track individual tops** across video frames
- **Detect collisions** in real-time between spinning tops
- Explore different detection and tracking strategies for accuracy and performance

---

## 🔍 Phase 1 – Spin/Still Classification

We trained a neural network to classify the spinning state of each Beyblade using video data captured at 60fps with an iPhone 12. The dataset includes various backgrounds and camera angles (0°, 45°, 90°).

![Data Collection Setup](/assets/data_collection.png)

- **Bounding box creation**: YOLO format
- **Model**: YOLOv8 with transfer learning
- **Training**: First 10 layers frozen to retain pretrained features
- **Result**: Robust classification with good accuracy on unseen data

![Spin vs Still Classification](/assets/spinVSstill.png)

> 📄 See the notebook: [Spin-Still Detection on Colab](https://colab.research.google.com/drive/1RUMcqxHviCsavNz8NgW24dRUeKXDkTlr?usp=chrome_ntp)

---

## 🛰️ Phase 2 – Tracking & Collision Detection

We explored two approaches for collision detection:

### Approach A – Machine Learning

- Trained a 3-class classifier: \`Spin\`, \`Still\`, and \`Collision\`
- Result: **Inaccurate** — too many false positives and ambiguous frames

### ✅ Approach B – Kalman Filter + IoU (Optimal)

- **Kalman Filter** for stable tracking
- **Color matching** to maintain consistent IDs
- **IoU + center deviation** to detect collisions
- **Cooldown logic** to avoid repeated counts

![Overall Workflow](/assets/workflow.png)

> 📄 See the notebook: [Collision Detection on Colab](https://colab.research.google.com/drive/198SISJwn60p8h-UMt8uNjTf3GRu2wmUw#scrollTo=yVI7j5xc39Io)

---

## 🧠 Results

- 🎯 **Accurate detection** of spinning tops
- 🎯 **Stable tracking** across frames
- 🎯 **Effective collision detection** in nearly all test cases

We also added visual effects such as **animated life bars and wake trails** to enhance clarity and analysis.

---

## 🚀 What's Next?

- Deployment on **Raspberry Pi**
- **VR integration** for immersive visualization
- **Dataset expansion & optimization**
- More advanced behavior analysis (e.g. spin duration, rebound effects)

---

## 🔗 Resources

- 👨‍💻 GitHub Repository: [AndreaBContarini/Computer_Vision_Beyblade](https://github.com/AndreaBContarini/Computer_Vision_Beyblade)
- 📚 Reference Articles:
  - YOLOv8 Transfer Learning on Blood Cells
  - Golf Ball Detection with Kalman Filter
`;

  const researchProjects: ResearchProject[] = [
    {
      id: 1,
      title: 'Beyblade Detection & Tracking with Computer Vision',
      description: 'Real-time system to detect, track, and analyze spinning Beyblade tops including collision detection using deep learning and tracking algorithms.',
      technologies: ['Computer Vision', 'YOLOv8', 'Kalman Filter', 'Object Tracking'],
      imageUrl: '/assets/cover_beyblade.png',
      date: 'May 2023',
      content: beybladeArticleContent
    },
    {
      id: 2,
      title: 'Visual Tracking and Collision Recognition',
      description: 'Advanced simulation system for spinning top dynamics using computer vision and ML techniques. This project uses OpenCV for tracking the motion of spinning tops and TensorFlow for predicting collision dynamics.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Physics Simulation'],
      imageUrl: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 2023'
    },
    {
      id: 3,
      title: 'Osteoporosis Detection in MRI Scans',
      description: 'Machine learning classification system for early detection of osteoporosis using MRI scan analysis. Utilized convolutional neural networks to identify bone density patterns indicative of early-stage osteoporosis.',
      technologies: ['PyTorch', 'Medical Imaging', 'Deep Learning', 'CNN'],
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'January 2023'
    },
    {
      id: 4,
      title: 'Jet Flavor Classification',
      description: 'Deep neural network implementation for particle physics jet classification in high-energy physics. This project aims to accurately identify different types of particle jets in LHC data.',
      technologies: ['Python', 'Deep Learning', 'Particle Physics', 'Data Analysis'],
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'November 2022'
    },
    {
      id: 5,
      title: 'Self-Supervised Learning for Image Recognition',
      description: 'Implementation of a self-supervised learning approach for image recognition tasks with limited labeled data. Explored contrastive learning techniques to improve model robustness.',
      technologies: ['TensorFlow', 'Self-Supervised Learning', 'Computer Vision', 'Data Augmentation'],
      imageUrl: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'September 2022'
    }
  ];

  // Render project list
  const renderProjectList = () => (
    <>
      <div className="mb-12 text-center">
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Research & AI Projects
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Exploring the intersection of physics, computer vision, and machine learning through research and practical implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchProjects.map((project) => (
          <article 
            key={project.id}
            className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${project.content ? 'cursor-pointer' : ''}`}
            onClick={() => project.content ? setSelectedProject(project) : null}
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
              {project.content && (
                <button 
                  className={`text-sm font-medium flex items-center ${
                    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                  }`}
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );

  // Render single project
  const renderProject = (project: ResearchProject) => (
    <>
      <div className="mb-6 flex items-center">
        <button
          onClick={() => setSelectedProject(null)}
          className={`mr-4 flex items-center ${
            isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
          }`}
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </button>
        <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h1>
      </div>

      <article className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-8 mb-10`}>
        <div className="prose max-w-none prose-lg mx-auto">
          <div className={`${isDarkMode ? 'prose-invert' : ''}`}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
                h2: ({node, ...props}) => <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
                h3: ({node, ...props}) => <h3 className={`text-xl font-bold mt-6 mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
                h4: ({node, ...props}) => <h4 className={`text-lg font-bold mt-5 mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
                p: ({node, ...props}) => <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} {...props} />,
                a: ({node, ...props}) => <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                img: ({node, ...props}) => (
                  <div className="my-6">
                    <img className="mx-auto rounded-lg shadow-lg max-w-full" {...props} />
                    {props.alt && <p className="text-center text-sm italic mt-2">{props.alt}</p>}
                  </div>
                ),
                strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                em: ({node, ...props}) => <em className="italic" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className={`border-l-4 ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} pl-4 py-2 italic my-4`} {...props} />
                ),
                code: ({node, ...props}) => (
                  <code className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded px-1 py-0.5`} {...props} />
                ),
                pre: ({node, ...props}) => (
                  <pre className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded p-4 overflow-x-auto my-4`} {...props} />
                ),
                hr: ({node, ...props}) => <hr className={`${isDarkMode ? 'border-gray-600' : 'border-gray-300'} my-8`} {...props} />,
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>
        </div>
        <div className="text-right mt-6 italic">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Posted on {project.date}
          </p>
        </div>
      </article>
    </>
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedProject ? renderProject(selectedProject) : renderProjectList()}
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default ResearchProjects; 