import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from 'react-router-dom';
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
  slug: string;
}

function ResearchProjects() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Detect project from URL on load
  useEffect(() => {
    if (params.projectSlug) {
      const project = researchProjects.find(p => p.slug === params.projectSlug);
      if (project) {
        setSelectedProject(project);
      }
    } else {
      // Se non c'è un projectSlug nell'URL, imposta selectedProject a null
      setSelectedProject(null);
    }
  }, [params.projectSlug]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to scroll to top on page load or project change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProject]);

  // Handle project selection with URL update
  const handleSelectProject = (project: ResearchProject) => {
    setSelectedProject(project);
    navigate(`/research-projects/${project.slug}`);
  };

  // Handle back button with URL update
  const handleBackToProjects = () => {
    setSelectedProject(null);
    navigate('/research-projects');
  };

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

<img src="/assets/spinVSstill.png" alt="Spin vs Still Classification" width="80%" />

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

---

## 🧠 Results

- 🎯 **Accurate detection** of spinning tops
- 🎯 **Stable tracking** across frames
- 🎯 **Effective collision detection** in nearly all test cases

We also added visual effects such as **animated life bars and wake trails** to enhance clarity and analysis.

{{VIDEO_PLACEHOLDER}}

---

## 🚀 What's Next?

- Deployment on **Raspberry Pi**
- **VR integration** for immersive visualization
- **Dataset expansion & optimization**
- More advanced behavior analysis (e.g. spin duration, rebound effects)

---

## 🔗 Resources

- 📄 [Spin-Still Detection on Colab](https://colab.research.google.com/drive/1RUMcqxHviCsavNz8NgW24dRUeKXDkTlr?usp=chrome_ntp)
- 👨‍💻 [Andrea's GitHub Repository](https://github.com/AndreaBContarini/Computer_Vision_Beyblade)
- 📚 Reference Articles:
  - [YOLOv8 Transfer Learning on Blood Cells](https://plainenglish.io/blog/transfer-learning-with-yolov8-a-case-study)
  - [Golf Ball Detection with Kalman Filter](https://arxiv.org/pdf/2012.09393)
`;

  // Markdown content for the Lung CT Scan article
  const lungCTArticleContent = `# 🫁 Lung CT Scan Segmentation with Deep Learning

## Overview

This project focuses on building a **2D segmentation algorithm** for lung CT scans of patients affected by **COVID-19**, with the goal of distinguishing between different types of lung tissues.

The deep learning model is trained and evaluated using real annotated medical data, achieving a **mean Intersection over Union (IoU) of 76%**, showing promising performance in identifying pathological tissue.

Code repository: [GitHub - ML-Lungs_Segmentation](https://github.com/AndreaBContarini/ML-Lungs_Segmentation)

---

## 🩻 The Problem

Due to the limitations of RT-PCR testing during the pandemic, medical imaging such as CT scans emerged as a critical diagnostic tool. Radiological imaging, combined with AI-based image analysis, provides a fast and sensitive approach to detecting COVID-related lung conditions.

This project presents a deep learning framework for **automatic segmentation** of lung tissues in CT scan slices, helping to distinguish between:

- 🫁 Normal lung (label \`1\`)
- 🩶 Ground-glass opacity (label \`2\`)
- 🟥 Consolidation (label \`3\`)
- ⬛ Non-lung/background (label \`0\`)

---

## 🗂️ Dataset

- **Source**: Chinese dataset 2019nCoVR
- **Samples**: 750 CT slices (512×512 pixels) with pixel-level medical annotations
- **Labels**: Each pixel classified as background, normal lung, glass opacity, or consolidation

> 📌 Data was augmented to reach **3000 images** through rotations and flips, then split into train (80%), validation (10%), and test (10%).

---

## 🧠 Model Architecture – U-Net

We implemented a **U-Net architecture**, widely used for biomedical image segmentation, featuring:

- **Encoder-Decoder** structure
- **Skip connections** for preserving spatial details
- **Loss function**: CrossEntropy with PyTorch built-in weight handling
- **Optimizer**: Adam (\`lr = 1e-3\`)
- **Batch size**: 5
- **Epochs**: 35 (~100 minutes training time)

![U-Net Architecture Revisited](/assets/u_net_rivisited.png)

---

## 📉 Training & Performance

Training monitored via:

- **Loss metrics**: convergence after ~30 epochs
- **IoU**: calculated over all classes
- **Test performance**:
  - **Mean IoU**: \`76%\`
  - **Test loss**: \`19%\`

> 🔍 Qualitative analysis also confirms strong similarity between predicted and ground-truth masks.

---

## 🧪 Example Results

From left to right:
1. Original CT image
2. Ground truth segmentation
3. Predicted segmentation

Predicted masks visually align well with medical annotations, confirming good generalization by the network.

![Lung Segmentation Examples](/assets/examples_lungs.png)

---

## 🚀 Future Improvements

- Increase **number of epochs**
- Deepen U-Net architecture with more convolutional layers
- Address hardware limits (RAM/GPU) to allow longer training
- Consider using **Colab Pro** or cloud computing for scalability

---

## 🔗 Resources

- 🧬 GitHub Repository: [AndreaBContarini/ML-Lungs_Segmentation](https://github.com/AndreaBContarini/ML-Lungs_Segmentation)
`;

  // Markdown content for the NMR ML article
  const nmrMLArticleContent = `# 🧠 Machine Learning Applications in NMR Imaging

## Overview

This project explores how **Machine Learning** can be used in **Magnetic Resonance Imaging (MRI)** to differentiate between **healthy** and **osteoporotic** patients, starting from NMR images of the heel bone (calcaneus).

We developed a model that compresses multiple MRI slices into a **latent space**, used to train a classifier. Although the results are preliminary, this pipeline lays the groundwork for AI-supported diagnostics.

![Project Workflow Overview](/assets/workflow_NMR.png)

🔗 GitHub repository: [AndreaBContarini/ML-in-NMR](https://github.com/AndreaBContarini/ML-in-NMR)

---

## 🧪 Physics Behind MRI

MRI imaging is based on the interaction between external magnetic fields and nuclear spin. After applying RF pulses, the system produces a **Free Induction Decay** signal, processed through Fourier transforms to generate spatially-resolved images.

Two key time parameters are:

- **T1 (longitudinal relaxation)** – measured via TR (repetition time)
- **T2 (transversal relaxation)** – measured via TE (echo time)

---

## 🎯 Objective

To reduce multi-temporal MRI scans into a lower-dimensional **latent space**, which can be used by a classifier to predict patient condition.

- ✅ Input: T1 and T2-weighted MRI slices
- ✅ Output: Binary classification — \`Healthy\` or \`Osteoporotic\`

---

## 🗂️ Dataset

- **Source**: Santa Lucia Hospital, Rome
- **Patients**: 33 total
  - Healthy: 12
  - Osteoporotic: 21
- **Data Format**: \`.nii\` files converted to \`.npy\`
- **Slices**:
  - T1 images at 10 TR values (e.g., 280 to 2000 ms)
  - T2 images at 9 TE values (e.g., 25 to 225 ms)
- **Image size**: 512×512 pixels

---

## 🛠️ Preprocessing

- **Normalization**: T2 slices normalized by their first echo (TE = 25 ms)
- **Slicing**: Center slices selected for analysis
- **Tensor shape**:
  - T1: (1, 10, 512, 512)
  - T2: (6, 8, 512, 512) — after removing first slice post-normalization

---

## 🧠 Model Architecture

The **MRI_Classifier**:

1. Applies log transformation to T1 and T2
2. Uses **Conv3D + MaxPooling + AveragePooling**
3. Extracts features per slice
4. **Concatenates** and flattens the tensors
5. Projects into a **latent space**
6. Performs **binary classification** via sigmoid + BCE loss

![Model Architecture Implementation](/assets/flowchart_code.png)

> ⚖️ Class imbalance handled with \`pos_weight\` (≈0.57) in loss function.

---

## 🔁 Jackknife Cross-Validation

- Leave-one-out strategy:
  - Train on all patients except one
  - Validate on the excluded patient
  - Repeat for each patient
- Useful when working with **small datasets**

---

## 📉 Results

- **AUC**: 0.42 (worse than random baseline)
- **Confusion matrix**: Confirms poor performance
- **Latent space visualization**:
  - **ICA** and **PCA** show 2 rough clusters
  - **t-SNE** and **UMAP** reveal similar structure
- Poor classifier performance likely due to:
  - Dataset imbalance
  - Small sample size


  
## 📊 Latent Space Analysis

After retraining on the full dataset, we extracted features from the **flatten layer** and applied:

- **Independent Component Analysis (ICA)**
- **Principal Component Analysis (PCA)**
- **t-SNE / UMAP** for non-linear projections

Clustering shows some promise, but data limitations remain a bottleneck.

---

## 🚀 Future Directions

- 🔄 **Balance and expand** the dataset
- 🧪 Use **cGANs** to generate synthetic MRI scans
- 🔍 Perform **ablation studies** to understand the most informative slices
- 📈 Extend classification to **osteopenic** cases (more granular output)
- 🔧 Improve model depth and feature extraction

---

## 🔗 Resources

- 👨‍💻 GitHub: [AndreaBContarini/ML-in-NMR](https://github.com/AndreaBContarini/ML-in-NMR)
- 📊 MRI dataset (provided by Santa Lucia Hospital, not publicly released)
`;

  // Markdown content for the Jet Flavor Tagging article
  const jetFlavorArticleContent = `# 💥 Jet Flavor Tagging with Deep Neural Networks

## Overview

In this project, we explore the use of **Deep Neural Networks (DNNs)** to classify the **flavor of hadronic jets** produced in high-energy proton-proton collisions at the LHC. Specifically, the goal is to distinguish **bottom-quark jets** from those originated by **light and charm quarks** using features derived from simulated data.

🔗 GitHub Repository: [AndreaBContarini/DNNs-JetJetFlavorTagging](https://github.com/AndreaBContarini/DNNs-JetJetFlavorTagging)

---

## 🔬 The Physics

- A **jet** is a collimated spray of particles produced from a quark or gluon.
- In particular, identifying **b-jets** (jets originating from bottom quarks) is crucial in many new physics searches.
- Bottom quarks have a relatively long lifetime and high mass, creating distinctive signatures (like secondary vertices and large impact parameters).

---

## 🧠 Neural Network Models

We trained two architectures:

- **Feed-Forward Neural Network (FFNN)** with 9 hidden layers and ReLU activation
- **Long Short-Term Memory (LSTM)** network to handle sequences of features

Both models perform **binary classification** (b-quark vs non-b-quark).

---

## 📊 Dataset & Features

- **Source**: Simulated dataset ([link](http://mlphysics.ics.uci.edu/data/hb_jet_flavor_2016/))
- **Size**: 11 million samples
- **Input**: 16 handcrafted features including:
  - Jet transverse momentum and pseudorapidity
  - Track-level and vertex-level observables
  - Impact parameter significances, jet widths, vertex energy fraction

Features were normalized and invalid entries replaced with -1.

---

## 🧪 Training Strategy

- Framework: **PyTorch on Google Colab**
- Optimizer: **SGD with momentum**, scheduled learning rate
- Loss: **Cross-Entropy**
- Metric: **AUC (Area Under ROC Curve)**
- Checkpointing: automatic save of best models and training logs

---

## ⚙️ Hyperparameter Optimization

| Model  | Best AUC | Notable Parameters            |
|--------|----------|-------------------------------|
| FFNN   | 0.924    | Layers: 4096→2048→1024→...    |
| LSTM   | 0.924    | hidden_dim=14, 3-layer MLP    |

![Grid Search and Hyperparameter Optimization Results](/assets/hyperparameters_LHC.png)

---

## 📈 Results

- Both FFNN and LSTM reached an **AUC of 0.924**, matching state-of-the-art performance
- Slight class imbalance was observed (label 0 performed better than label 1)
- Confusion matrices and ROC curves validated robustness
- Good generalization with no evident overfitting

![ROC Curves for Different Model Configurations](/assets/ROC_LHC.png)

---

## 🔮 Future Directions

- Apply **class-balanced loss** or oversampling
- Investigate **AutoEncoder-based anomaly detection** for unsupervised tagging
- Extend training to real LHC Run 3 data
- Explore transformer-based architectures

---

## 🔗 Resources

- 🧠 GitHub: [DNNs-JetJetFlavorTagging](https://github.com/AndreaBContarini/DNNs-JetJetFlavorTagging)
- 📊 Dataset: [UCI ML Physics Dataset](http://mlphysics.ics.uci.edu/data/hb_jet_flavor_2016/)
`;

  // Markdown content for the AI File Operations Agent article
  const aiFileOperationsArticleContent = `# AI-Powered File Operations Agent

## Overview

This project presents an intelligent autonomous agent designed for comprehensive CRUD file operations, featuring both CLI interface and Model Context Protocol (MCP) integration. The system leverages advanced artificial intelligence to analyze, manage, and manipulate files through natural language commands, creating a seamless bridge between human intent and file system operations.

The architecture offers two distinct operational approaches, each optimized for specific use cases and technical requirements. The first implements a custom ReAct (Reasoning + Acting) architecture with manual tool orchestration and a dual-model system. The second utilizes the modern Pydantic-AI framework for declarative tool orchestration with comprehensive validation capabilities.

![System Architecture](/assets/architecture.png)

## Architectural Approaches

### Custom ReAct Implementation

The primary implementation features a from-scratch ReAct architecture that provides maximum control over reasoning and action cycles. This approach utilizes GPT-4o for primary reasoning and planning tasks, while employing LLaMA 3 8B for cost-effective query validation. The system emphasizes transparency and customization, offering direct control over reasoning loops and tool execution with minimal framework overhead.

This architecture proves particularly effective for performance-critical scenarios where low latency and local execution are paramount. The lightweight structure enables seamless MCP integration while maintaining full transparency for debugging and customization purposes. Direct control over reasoning loops ensures optimal performance in scenarios requiring precise file operation handling.

### Modern Pydantic-AI Framework

The alternative implementation showcases modern agentic frameworks through Pydantic-AI, demonstrating declarative tool orchestration with automatic structured output validation. This approach features built-in error handling, type-safe dependency injection, and framework-managed conversation flow.

The Pydantic-AI implementation maintains identical user interface and functionality while leveraging cutting-edge framework capabilities for streamlined development and robust operation. This approach particularly benefits scenarios where rapid development and built-in validation are prioritized over fine-grained control.

## Core Components and Tools

The system architecture centers around five essential CRUD operations that form the foundation of comprehensive file management capabilities. These tools include directory enumeration with detailed metadata through \`list_files()\`, complete file content retrieval via \`read_file()\`, flexible file creation and modification through \`write_file()\`, secure file removal with \`delete_file()\`, and intelligent file analysis using \`answer_question_about_files()\`.

The centralized tool registry manages orchestration and ensures consistent operation across different agent implementations. The CLI interface provides intuitive local interaction, while the MCP server component enables seamless integration with compatible clients like Claude Desktop. Comprehensive security layers implement query validation, path traversal protection, and safe operation controls.

## Usage and Integration

Both implementations maintain strict adherence to tool-based architecture requirements, ensuring every file operation utilizes appropriate tools with ReAct patterns implementing internal reasoning loops for intelligent decision-making. The system features automatic detection of queries requiring tool execution, providing robust and reliable operation across diverse use cases.

Getting started requires Python 3.8+ with virtual environment setup recommended for optimal dependency management. Installation involves cloning the repository, activating the virtual environment, and installing required dependencies. API configuration requires creating a \`.env\` file with OpenAI and Groq API keys for full functionality.

\`\`\`bash
# Clone and setup the project
git clone https://github.com/AndreaBContarini/File_Operations_Agent
cd File_Operations_Agent
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
\`\`\`

The custom ReAct agent enables sophisticated natural language interactions such as "Show me all Python files and summarize their functionality" or "Find the most recently modified file and analyze its structure." The Pydantic-AI implementation provides identical capabilities through a modern framework interface, offering the same functionality with enhanced built-in validation and error handling.

## Model Context Protocol Integration

The project provides comprehensive MCP server integration for seamless operation with Claude Desktop and other compatible clients. This integration transforms the agent into a powerful tool accessible directly from Claude Desktop, enabling natural language file operations without leaving the chat interface.

Setup involves configuring API keys in \`mcp_config.json\`, installing the configuration in Claude Desktop, and restarting the application to load the new capabilities. Available MCP tools include natural language query processing, directory listing with metadata, complete file reading, file creation and modification with append support, and secure file deletion capabilities.

## Testing and Quality Assurance

The project includes a comprehensive test suite featuring 40 tests with a 97.5% success rate, thoroughly validating all CRUD components, agent functionality, error scenarios, security measures, and integration capabilities. The optimized test structure includes dedicated files for tools and agents, with shared configuration and fixtures ensuring consistent testing across all components.

Test execution utilizes pytest with options for running complete test suites or specific component tests. The extensive coverage validates tool operations, agent behavior, error handling, security controls, and integration scenarios, ensuring reliability across all operational contexts.

## Security and Performance

Security measures include comprehensive query validation to prevent unsafe operations, path traversal controls for secure file access limitation, thorough input sanitization, and robust error handling. The system demonstrates accurate detection of required file operations, stable tool execution across different scenarios, effective query validation, and production-ready MCP integration.

Performance characteristics include low-latency operation for local execution, efficient resource utilization through the dual-model approach, and scalable architecture supporting both lightweight and feature-rich implementations.

## Future Development and Resources

Planned enhancements include deployment capabilities for Raspberry Pi platforms, dataset expansion and optimization, advanced behavioral analysis features, and integration with additional MCP platforms. The modular architecture supports extensibility and adaptation to emerging requirements in the AI-powered file operations domain.

The complete project is available on [GitHub](https://github.com/AndreaBContarini/File_Operations_Agent) with comprehensive documentation, extensive testing guides, and practical examples demonstrating both architectural approaches. This implementation serves as a robust foundation for intelligent file operations using cutting-edge AI technologies and modern software engineering practices.
`;

  // Markdown content for the Lennard-Jones article
  const lennardJonesArticleContent = `# 🧪 Simulating Lennard-Jones Systems with Molecular Dynamics

## Overview

This project focuses on simulating a 3D system of interacting particles using **Molecular Dynamics (MD)** in the canonical **NTV ensemble**. Implemented entirely in **C++**, the code models the thermodynamic behavior of particles interacting via the **Lennard-Jones potential**, using the **Tuckerman time-reversible algorithm** and incorporating temperature control via **Velocity Rescaling** and the **Nosé-Hoover thermostat**.

🔗 GitHub repository: [AndreaBContarini/MD_simulation](https://github.com/AndreaBContarini/MD_simulation)

---

## ⚙️ Simulation Setup

- **512 particles** in a cubic box with periodic boundary conditions  
- **Lennard-Jones potential** truncated at cutoff radius \`r_c = 2.5σ\`  
- Simulations run at reduced temperature \`T* = 1.4\` and densities \`ρ* = 0.1 – 0.4\`  
- Observables: **reduced pressure** and **reduced potential energy** per particle  
- Tail corrections applied to account for truncated potential effects

---

## 🧠 Algorithms & Techniques

### Tuckerman Integration

Time-reversible MD integrator based on Trotter factorization of the Liouville operator, implemented as a Velocity Verlet scheme.

### Temperature Control

- **Velocity Rescaling** during equilibration  
- **Nosé-Hoover Thermostat** for accurate canonical ensemble dynamics

### Code Structure

Key modules include:
- \`pvector.hpp\`: vector operations  
- \`params.hpp\`: simulation parameters  
- \`particle.hpp\`: particle dynamics and interactions  
- \`sim.hpp\`: simulation loop, observables, and thermodynamic tracking  

---

## 📊 Results & Analysis

- Simulation results match the literature values reported by Johnson et al. (1993)  
- Thermodynamic observables show convergence and consistency under both thermostat strategies  
- Linear dependence of energy error on \`dt²\` confirms the 2nd-order accuracy of the integrator  
- Visualizations (2D/3D particle configs) were generated using Python + Google Colab

---

## ✅ Final Remarks

The simulation achieved high accuracy, validating both the numerical scheme and the thermodynamic modeling. The **Nosé-Hoover thermostat** especially allowed for more realistic fluctuations, closely replicating canonical ensemble behavior.

📄 [Read the full technical article (PDF)](https://github.com/AndreaBContarini/MD_simulation/blob/main/Article.pdf)
`;

  const researchProjects: ResearchProject[] = [
    {
      id: 1,
      title: 'AI-Powered File Operations Agent',
      description: 'Intelligent autonomous agent for CRUD file operations with CLI interface and MCP integration. Implements ReAct architecture with GPT-4o and LLaMA 3 for natural language file management.',
      technologies: ['Python', 'GPT-4o', 'LLaMA 3', 'ReAct Pattern', 'MCP', 'CLI', 'Pydantic-AI'],
      imageUrl: '/assets/File_Op_Agent.png',
      date: 'June 2025',
      content: aiFileOperationsArticleContent,
      slug: 'ai-file-operations-agent'
    },
    {
      id: 2,
      title: 'Beyblade Detection & Tracking with Computer Vision',
      description: 'Real-time system to detect, track, and analyze spinning Beyblade tops including collision detection using deep learning and tracking algorithms.',
      technologies: ['Computer Vision', 'YOLOv8', 'OpenCV', 'Kalman Filter', 'Object Tracking'],
      imageUrl: '/assets/cover_beyblade.png',
      date: 'January 2025',
      content: beybladeArticleContent,
      slug: 'beyblade-detection-tracking'
    },
    {
      id: 3,
      title: 'Lung CT Scan Segmentation with Deep Learning',
      description: 'Deep learning framework for automatic segmentation of lung tissues in CT scan slices, helping to distinguish between normal and pathological tissues in COVID-19 patients.',
      technologies: ['Deep Learning', 'Medical Imaging', 'PyTorch', 'U-Net', 'Image Segmentation'],
      imageUrl: '/assets/lung_covid.png',
      date: 'September 2022',
      content: lungCTArticleContent,
      slug: 'lung-ct-scan-segmentation'
    },
    {
      id: 4,
      title: 'Machine Learning Applications in NMR Imaging',
      description: 'Developing ML models to analyze MRI scans of the heel bone for osteoporosis diagnosis, with a focus on dimensionality reduction and latent space clustering.',
      technologies: ['Machine Learning', 'MRI', 'PyTorch', 'Dimensionality Reduction', 'Medical Imaging'],
      imageUrl: '/assets/ML_NMR.png',
      date: 'July 2024',
      content: nmrMLArticleContent,
      slug: 'ml-nmr-imaging'
    },
    {
      id: 5,
      title: 'Jet Flavor Tagging with Deep Neural Networks',
      description: 'Using Deep Neural Networks to classify the flavor of hadronic jets in high-energy physics, with focus on bottom-quark identification for LHC experiments.',
      technologies: ['Deep Learning', 'PyTorch', 'High Energy Physics', 'LSTM', 'Classification'],
      imageUrl: '/assets/LHC_ML.png',
      date: 'January 2023',
      content: jetFlavorArticleContent,
      slug: 'jet-flavor-tagging'
    },
    {
      id: 6,
      title: 'Simulating Lennard-Jones Systems with Molecular Dynamics',
      description: 'A C++ implementation of Molecular Dynamics simulations for thermodynamic analysis of particles interacting via the Lennard-Jones potential using Tuckerman algorithm.',
      technologies: ['C++', 'Molecular Dynamics', 'Physics Simulation', 'Thermodynamics', 'Scientific Computing'],
      imageUrl: '/assets/MD.png',
      date: 'January 2024',
      content: lennardJonesArticleContent,
      slug: 'lennard-jones-molecular-dynamics'
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
        {researchProjects
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((project) => (
          <article 
            key={project.id}
            className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${project.content ? 'cursor-pointer' : ''}`}
            onClick={() => project.content ? handleSelectProject(project) : null}
            id={project.slug}
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
  const renderProject = (project: ResearchProject) => {
    // Funzione per renderizzare video embedded in modo sicuro
    const renderHtmlVideo = () => {
      if (selectedProject?.id === 2) {  // Solo per l'articolo Beyblade
        return (
          <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full my-8">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/atZ-MPWE14Q?si=_5PzLXksdL2Q9CFD" 
              title="Beyblade Detection & Tracking Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        );
      }
      return null;
    };

    // Modifica il contenuto Markdown per rimuovere la sezione HTML che mostra l'iframe
    const processedContent = project.content?.replace(
      /{{VIDEO_PLACEHOLDER}}/g,
      '🎬 **[Click here to view the demo video](#video)**'
    );

    return (
      <>
        <div className="mb-6 flex items-center">
          <button
            onClick={handleBackToProjects}
            className={`mr-4 flex items-center ${
              isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
            }`}
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>

        <article className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-8 mb-10`} id={project.slug}>
          <div className="prose max-w-none prose-lg mx-auto">
            <div className={`${isDarkMode ? 'prose-invert' : ''}`}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
                  h2: ({node, ...props}) => <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
                  h3: ({node, ...props}) => <h3 className={`text-xl font-bold mt-6 mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
                  h4: ({node, ...props}) => <h4 className={`text-lg font-bold mt-5 mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
                  p: ({node, ...props}) => {
                    // Controlla se ci sono figli e se il primo è una stringa
                    const firstChild = Array.isArray(props.children) && props.children.length > 0 
                      ? props.children[0] 
                      : null;
                      
                    // Se il testo contiene il link al video, aggiungiamo uno stile speciale
                    if (typeof firstChild === 'string' && firstChild.includes('[Click here to view the demo video]')) {
                      return (
                        <p className={`mb-4 ${isDarkMode ? 'text-green-300' : 'text-green-600'} text-center text-xl font-bold animate-pulse`} {...props} />
                      );
                    }
                    
                    return <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} {...props} />;
                  },
                  div: ({node, ...props}) => {
                    // Controlliamo se questo div è il contenitore per la griglia di immagini
                    if (node?.properties?.className && 
                        typeof node.properties.className === 'string' && 
                        node.properties.className.includes('image-grid')) {
                      return <div className="flex flex-wrap justify-around items-start my-6" {...props} />;
                    }
                    return <div {...props} />;
                  },
                  a: ({node, ...props}) => {
                    // Se è il link al video, creiamo un'ancora per lo scroll
                    if (props.href === '#video') {
                      return (
                        <a 
                          className={`inline-block px-6 py-3 rounded-lg ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-400'} text-white font-bold transition-colors duration-300`}
                          onClick={(e) => {
                            e.preventDefault();
                            const videoElement = document.getElementById('demo-video');
                            if (videoElement) {
                              videoElement.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          {...props}
                        />
                      );
                    }
                    return <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />;
                  },
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="mb-1" {...props} />,
                  img: ({node, ...props}) => {
                    // Gestione speciale per le immagini che vogliamo mostrare affiancate
                    const isConfusionMatrix = props.src?.includes('confusion_martix_NMR.png');
                    const isPCA = props.src?.includes('PCA_NMR.png');
                    
                    // Se l'immagine è parte di un gruppo che deve stare affiancato
                    if (isConfusionMatrix || isPCA) {
                      return (
                        <div className="inline-block w-1/2 px-2 my-2">
                          <img className="mx-auto rounded-lg shadow-lg max-w-full max-h-80" {...props} />
                          {props.alt && <p className="text-center text-sm italic mt-2">{props.alt}</p>}
                        </div>
                      );
                    }
                    
                    // Per tutte le altre immagini, riduciamo la dimensione ma manteniamo il layout verticale
                    return (
                      <div className="my-4">
                        <img className="mx-auto rounded-lg shadow-lg max-w-full max-h-96" {...props} />
                        {props.alt && <p className="text-center text-sm italic mt-2">{props.alt}</p>}
                      </div>
                    );
                  },
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
                {processedContent}
              </ReactMarkdown>
              
              {/* Video demo con ancoraggio */}
              {selectedProject?.id === 2 && (
                <div id="demo-video" className="my-8 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    🎬 Demo Video: Beyblade Detection & Tracking
                  </h3>
                  <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full my-8 rounded-lg shadow-xl">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full" 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/atZ-MPWE14Q?si=_5PzLXksdL2Q9CFD" 
                      title="Beyblade Detection & Tracking Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
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
  };

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