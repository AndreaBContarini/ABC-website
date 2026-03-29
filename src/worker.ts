interface Env {
  AI: {
    autorag: (name: string) => {
      search: (opts: { query: string; max_num_results?: number }) => Promise<{
        data: Array<{
          id: string;
          score: number;
          filename?: string;
          attributes?: Record<string, string>;
          content: Array<{ type: string; text: string }>;
        }>;
      }>;
    };
  };
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function researchProjectsHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Research Projects – Andrea Belli Contarini</title></head>
<body>
<h1>Research &amp; AI Projects – Andrea Belli Contarini</h1>

<h2>Cost-Optimized RAG Agent</h2>
<p>A production-ready Retrieval-Augmented Generation (RAG) agent built with LangChain featuring multi-provider LLM routing that achieves 60-80% cost savings. Routes between OpenAI GPT-4o, Groq LLaMA 3, and local Ollama models based on query complexity and cost constraints. Includes semantic caching and automatic fallback logic.</p>
<p>Technologies: Python, LangChain, OpenAI, Groq, Ollama, RAG, Vector Search, FAISS</p>

<h2>AI-Powered File Operations Agent</h2>
<p>An autonomous agent using the ReAct (Reasoning + Acting) architecture with GPT-4o and LLaMA 3 that can perform complex file system operations through natural language commands. Features tool use, multi-step reasoning, error recovery, and supports both cloud and local LLMs.</p>
<p>Technologies: Python, ReAct, GPT-4o, LLaMA 3, LangChain, Tool Use, Autonomous Agents</p>

<h2>Beyblade Detection and Tracking with Computer Vision</h2>
<p>Real-time computer vision system to detect, track, and analyze spinning Beyblade tops including collision detection. Built with YOLOv8 for spin/still classification, Kalman Filter for stable multi-object tracking, color-based ID association, and IoU-based collision detection. University project for Computer Vision course.</p>
<p>Technologies: Python, YOLOv8, Kalman Filter, OpenCV, Computer Vision, Deep Learning, Object Tracking</p>

<h2>Lung CT Scan Segmentation with Deep Learning</h2>
<p>2D segmentation algorithm for lung CT scans of COVID-19 patients using a U-Net deep learning architecture. Distinguishes between normal lung tissue, ground-glass opacity, consolidation, and non-lung background. Achieves mean Intersection over Union (IoU) of 76% on real annotated medical data.</p>
<p>Technologies: Python, U-Net, PyTorch, Medical Imaging, Deep Learning, Image Segmentation, COVID-19</p>

<h2>Machine Learning in NMR Imaging for Osteoporosis Detection</h2>
<p>Machine learning classification system for early detection of osteoporosis using MRI scan analysis. Applies CNN-based deep learning models to analyze bone density patterns in NMR imaging data. Part of medical imaging research at University of Geneva.</p>
<p>Technologies: PyTorch, CNN, Medical Imaging, NMR, MRI, Deep Learning, Osteoporosis Detection</p>

<h2>Jet Flavor Tagging in Particle Physics</h2>
<p>Deep neural network implementation for particle physics jet classification at the Large Hadron Collider (LHC). Classifies jet flavor (b-quark, c-quark, light quark) from detector signatures using deep learning. Research project in high-energy physics at CERN scale.</p>
<p>Technologies: Python, Deep Learning, TensorFlow, Particle Physics, LHC, CERN, Jet Classification</p>

<h2>Lennard-Jones Molecular Dynamics Simulation</h2>
<p>High-performance C++ simulation of molecular dynamics using the Lennard-Jones potential to model atomic interactions. Implements velocity Verlet integration, periodic boundary conditions, and energy conservation checks. Computational physics project analyzing thermodynamic properties of simple fluids.</p>
<p>Technologies: C++, Molecular Dynamics, Computational Physics, Lennard-Jones, Numerical Simulation</p>

<p>Author: Andrea Belli Contarini, Physicist and AI Solutions Architect, Sapienza University of Rome and University of Geneva, Co-Founder of Martes AI.</p>
</body>
</html>`;
}

function automationProjectsHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>AI Automation Projects – Andrea Belli Contarini</title></head>
<body>
<h1>AI Automation Solutions – Andrea Belli Contarini – Martes AI</h1>

<h2>AI Automation for Santa Lucia Eye Clinic</h2>
<p>Martes AI implemented AI automation solutions for the Santa Lucia Eye Clinic in Cosenza, reducing email response times by 60%. Built an automated system for handling appointment requests and answering frequently asked questions using Voiceflow chatbot. Implemented email classification and sorting pipeline to reduce administrative burden. Technologies used: Voiceflow, Make, email automation, NLP, chatbot.</p>
<p>Technologies: Voiceflow, Make, Email Automation, NLP, Healthcare AI, Chatbot</p>

<h2>WhatsApp AI Agent for Travel Agencies</h2>
<p>AI-powered WhatsApp chatbot for travel agencies that generates additional monthly revenue by automating customer inquiries, travel package recommendations, and booking assistance. The agent handles natural language conversations 24/7, qualifies leads, and escalates complex requests to human agents. Built with n8n workflow automation and WhatsApp Business API integration.</p>
<p>Technologies: n8n, WhatsApp Business API, AI Chatbot, Workflow Automation, Lead Generation, Travel Tech</p>

<h2>Scientific Newsletter AI Agent</h2>
<p>Automated AI agent that monitors PubMed for new scientific publications, generates summaries, and publishes a weekly newsletter. Reduces content creation time by 90% for research teams. Integrates with PubMed API for paper discovery, uses LLMs for intelligent summarization, and automates the full publishing pipeline. Built for researchers and academic institutions.</p>
<p>Technologies: n8n, PubMed API, OpenAI, Newsletter Automation, Scientific Research, Content Generation</p>

<h2>Kerby: AI Email Agent for Kerberos Energy</h2>
<p>Martes AI built "Kerby", an intelligent email agent that autonomously manages over 800 quote requests per year for Kerberos Energy, an Italian energy company. Kerby monitors the company inbox, classifies incoming emails, extracts key parameters from quote requests using GPT-4o, generates personalized responses, and logs all interactions to the CRM. Response time dropped from 4-8 hours to under 5 minutes. Technologies: n8n, OpenAI GPT-4o, email automation, CRM integration.</p>
<p>Technologies: n8n, OpenAI GPT-4o, Email Automation, CRM Integration, AI Agent</p>

<h2>From Paper to WhatsApp: Field Reporting for BuildUp FM</h2>
<p>Martes AI deployed Prisma Agent integrated with WhatsApp Business for BuildUp FM, an Italian facilities management company. Field technicians send simple WhatsApp messages at the end of each task; Prisma Agent parses the message, validates the data, logs it in real-time to the management dashboard, and eliminates all paper-based reporting. Back-office data entry time dropped from 2 hours/day to zero. Technologies: WhatsApp Business API, Prisma Agent, n8n, workflow automation.</p>
<p>Technologies: WhatsApp Business API, Prisma Agent, n8n, Workflow Automation, Field Operations</p>

<p>Author: Andrea Belli Contarini, Co-Founder and CTO at Martes AI – Italian tech company specializing in AI-powered software solutions for business processes with Make, n8n, Voiceflow, and custom AI agents.</p>
</body>
</html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    // AI Search API endpoint
    if (url.pathname === '/api/search') {
      const q = url.searchParams.get('q')?.trim();
      if (!q) {
        return new Response(JSON.stringify({ error: 'Missing query parameter: q' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...CORS },
        });
      }

      try {
        const result = await env.AI.autorag('bitter-truth-ae07').search({
          query: q,
          max_num_results: 5,
        });
        return new Response(JSON.stringify(result), {
          headers: { 'Content-Type': 'application/json', ...CORS },
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Search failed';
        return new Response(JSON.stringify({ error: message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...CORS },
        });
      }
    }

    // Pre-rendered HTML pages for Cloudflare AI Search crawler
    if (url.pathname === '/content/research-projects') {
      return new Response(researchProjectsHTML(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    if (url.pathname === '/content/automation-projects') {
      return new Response(automationProjectsHTML(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    // Pass everything else to static SPA assets
    return env.ASSETS.fetch(request);
  },
};
