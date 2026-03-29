import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Article {
  id: number;
  title: string;
  summary: string;
  date: string;
  thumbnail: string;
  content: string;
  technologies: string[];
  slug: string;
}

function AutomationProjects() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Detect article from URL on load
  useEffect(() => {
    if (params.articleSlug) {
      const article = articles.find(a => a.slug === params.articleSlug);
      if (article) {
        setSelectedArticle(article);
      }
    } else {
      // Se non c'è un articleSlug nell'URL, imposta selectedArticle a null
      setSelectedArticle(null);
    }
  }, [params.articleSlug]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to scroll to top on page load or article change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedArticle]);

  // Handle article selection with URL update
  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    navigate(`/automation-projects/${article.slug}`);
  };

  // Handle back button with URL update
  const handleBackToArticles = () => {
    setSelectedArticle(null);
    navigate('/automation-projects');
  };

  // Markdown content for the article
  const santaLuciaArticle = `# AI Automation for Santa Lucia Eye Clinic

## Introduction

The Santa Lucia Eye Clinic in Cosenza is renowned for its excellence in ophthalmic care. However, like many healthcare facilities, it faced challenges in managing appointments, sorting emails, and optimizing patient communication. To address these issues, Martes AI implemented artificial intelligence and automation solutions, improving operational efficiency and enhancing the user experience.

## The Challenge

The clinic needed:

- An automated system to handle appointment requests and provide fast responses to frequently asked questions.
- An effective method to classify and sort incoming emails, reducing the burden on the administrative staff.

These problems were causing delays in responses and negatively impacting patient satisfaction.

## The Solution

To tackle these challenges, Martes AI developed two main solutions:

### 1. Chatbot for Handling Website Requests

Using Voiceflow, an intelligent chatbot was created capable of:

- Retaining conversation context via a JavaScript function to improve user interaction.
- Classifying requests, distinguishing between appointment scheduling and general clinic inquiries.
- Delivering smooth, natural responses by adapting the number of messages for effective communication.
- Guiding users through the appointment booking process, collecting essential details such as name, reason for visit, date, and time.
- Automatically sending request details to Make, ensuring seamless integration with the clinic's management system.

### 2. Email Management Automation

To improve the organization of incoming emails, an automated scenario was implemented in Make, based on an advanced classification system.

#### How the Email Classification System Works

When a new email is received, an advanced AI model analyzes the subject and body of the message.  
Based on a well-structured classification prompt, the email is automatically categorized into one of the following classes:

1. General questions about the clinic (hours, services, address).  
2. Appointment bookings, confirmations, or cancellations.  
3. Spam or advertising.  
4. Job applications and CV submissions.  
5. Complaints, administrative requests, or post-visit feedback.  
6. Bills and account statements from service providers.

Once classified, the email is automatically forwarded to the relevant department or archived, easing the administrative staff's workload.

#### The AI Classification Prompt

To ensure accurate results, a specialized prompt was developed that assigns the AI model the role of "email classification expert." The prompt includes:

- Clear rules for classifying each email type  
- Real examples for each category, with typical subjects and contents  
- Specific instructions for analyzing the communication context  
- A numeric response system (from 1 to 6) to streamline further automation

This methodology ensures a classification accuracy above 95%, essential for the smooth functioning of the entire automation system.

### Email Automation Diagram – Santa Lucia Eye Clinic

![Diagram of the email automation implemented for the Santa Lucia Eye Clinic in Cosenza](https://i.ibb.co/0yvHGXZK/scenario-clinica.png)

## The Results

The implementation of Martes AI solutions delivered tangible benefits:

- Around **60% reduction** in response times to general inquiries thanks to the chatbot.  
- Over **50% decrease** in administrative workload due to email automation.  
- **Improved patient satisfaction**, thanks to faster responses and better-organized service.

## Reflections

Integrating artificial intelligence in healthcare offers significant benefits in terms of efficiency and service quality. However, to achieve optimal results, it is essential to:

- Customize solutions to the facility's specific needs.  
- Continuously monitor and optimize performance.  
- Ensure that automation enhances—rather than replaces—human interaction, especially in sensitive areas like healthcare.

## Conclusion

Thanks to Martes AI, the Santa Lucia Eye Clinic in Cosenza has transformed the management of communications and appointments, improving operational efficiency and patient experience. The strategic use of artificial intelligence and automation proves to be a winning solution for healthcare institutions aiming to innovate while maintaining high standards of care.
`;

  // Markdown content for the WhatsApp agent article
  const whatsappAgentArticle = `# ✈️ AI WhatsApp Agent for Travel Agencies

## 💰 +€27,500 in Monthly Revenue with an AI Chatbot

### The Power of AI Automation

The adoption of our AI-driven technologies brought a major impact to one of our client travel agencies. By leveraging automation — which we'll break down below — the agency recorded an **increase in monthly revenue of approximately €27,500**, by optimizing its client database and delivering personalized, targeted travel offers.

---

## 📲 Phase 1: Reaching 3,000 Contacts via WhatsApp

The project began by reaching out to 3,000 users, including former customers and existing contacts stored in the agency's Google Contacts. The objective was to **re-engage** them by showcasing new travel opportunities and converting conversations into either direct bookings or qualified leads.

### 1. Smart WhatsApp Chatbot Setup

We built and trained an AI-powered chatbot with the following abilities:

- Automatically send promotional posters and messages to all contacts  
- Instantly reply to common inquiries in real-time  
- Manage user preferences like opt-outs or hand-offs to a human agent  

### 2. Promotional Campaigns with Dynamic User Interaction

The chatbot sent various travel posters offering multiple destinations for different seasons and travel periods — such as this example:

![Kenya Travel Cover](https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=409,fit=crop/mk39w0PZ1DIe7Dp6/kenya-ALpo4xMbXwSnMXBq.jpg)

---

### 🧾 Results from Phase 1

- **4%** of contacted users became **qualified leads**, purchasing travel packages  
- **12%** of users started a conversation with the chatbot  

---

## 🤖 Phase 2: Smarter Chatbot & Hyper-Personalized Offers

After the initial success, we enhanced the chatbot's capabilities, making it more intelligent and adaptive to user needs. This next step was crucial for improving efficiency and personalizing offers at scale.

### 1. LLM Integration for Natural Conversations

We integrated **Large Language Models (LLMs)** like ChatGPT into the system, improving its ability to:

- Understand complex queries  
- Respond naturally and accurately  
- Adapt based on context using custom-engineered prompts  

### 2. Personalized Destination Recommendations

The chatbot evolved into a real virtual travel assistant, able to:

- Recommend destinations based on **country, season, budget**, or **family needs**  
- Suggest travel packages aligned with user interests (beach, mountains, city escapes)  

### 3. Automated Data Collection & Lead Management

All user interactions are:

- **Automatically logged**  
- **Sent to the agency's team** via email or internal messaging  
- **Stored in a central Google Sheet** for seamless lead tracking and customer hand-off  

This streamlined flow allows agents to **directly follow up with interested users** and close deals, ensuring a smooth transition from AI to human support.

---

## 📈 Final Impact

In October 2024 alone, the AI system helped generate **€82,170** in sales. Here's a snapshot of some contracts closed:

![Contract Screenshot](https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=549,fit=crop/mk39w0PZ1DIe7Dp6/whatsapp-image-2024-11-01-at-23.22.10-A3Qw77Ok5PfMMzGy.jpeg)
`;

  // Markdown content for the newsletter agent article
  const newsletterArticle = `# AI Agent for a Scientific Newsletter

> _"Martes AI's Agent completely transformed our newsletter: reliable scientific content, professional images... all just one click away."_  
> — Davide Beccetti, CEO @ Shape-UP

## Introduction

In a context where **source reliability** and **operational efficiency** are key, [**Shape-UP**](https://shape-up.it/en/home-en/), a company in the health and wellness sector, turned to **Martes AI** to optimize the creation and distribution of its scientific newsletter. The goal? To **automate the entire editorial process** while maintaining the credibility of sources and high visual standards — all without sacrificing human control where needed.

![AI Newsletter Automation Workflow](/assets/scenario_make_shapeup.png)
*Diagram showing the automation pipeline developed by Martes AI, from Google Sheets to Mailchimp.*

## The Problem

Before this solution, Shape-UP faced **long production times** for each newsletter. Writing scientific articles manually, finding credible sources, and creating coherent visual content took **several hours per week**. Additionally, formatting and sending campaigns via Mailchimp added more complexity — limiting how frequently newsletters could be sent out.

## The Solution: A Tailored AI Agent

Martes AI designed and implemented a **custom AI Agent**, integrated with **Google Sheets, Make (formerly Integromat)**, and **Mailchimp**, automating the full lifecycle of the scientific newsletter. Here are the core features:

### 1. **Streamlined Input via Google Sheets**
The main interface is a simple Google Sheet. By entering a **keyword** (e.g., "low carb diet"), the agent triggers a complete automated workflow via webhook.

### 2. **Automated Scientific Research**
The AI connects directly to **PubMed Central**, retrieving **peer-reviewed scientific articles** relevant to the keyword. All information is **verified and sourced from institutional databases**.

### 3. **Content Summarization and Simplification**
Once the data is collected, the AI Agent **summarizes and simplifies** the content into a **clear, readable article**, preserving scientific accuracy while making it accessible to a broader audience.

### 4. **Medical Image Generation**
Using a structured prompt system and AI image generation tools, the agent produces **professional, medically relevant visuals**. These are converted into **public URLs** via Claudinary, ensuring they're easily shareable in newsletters.

### 5. **Editable Content with "Human in the Loop"**
Shape-UP can **revise articles or images at any point**. The agent incorporates human feedback instantly, generating updated content in seconds.

### 6. **Auto-Formatting and Mailchimp Delivery**
Once approved, the article is **automatically converted to HTML** and pushed to Mailchimp for distribution. The entire process — from idea to delivery — can be completed in minutes.

## Results

Thanks to the AI Agent implementation:

- **Production time reduced by 90%**, from hours to just minutes per newsletter.
- **Increased frequency**: from one newsletter a month to multiple per week.
- **Zero manual effort** in formatting, research, or mailing.
- **Higher visual and scientific quality**, with sources and references included.

## Conclusions and Lessons Learned

Automation doesn't mean removing the human element — it means **enhancing it with intelligent tools**. The AI Agent built for Shape-UP shows how it's possible to combine **efficiency, quality, and scalability**, even in complex sectors like scientific communication.

This solution serves as a **replicable model** for any organization aiming to transform its communication through smart, accessible AI systems. At Martes AI, we believe innovation should **simplify, not complicate**.

Visit us: [www.martes-ai.com](https://www.martes-ai.com)
`;

  const kerberosArticle = `# Kerby: the AI Agent Managing 800 Quotes per Year for Kerberos Energy

## Introduction

Kerberos Energy is an Italian energy company that handles a high volume of quote requests from business clients every day. Managing these requests manually — reading each email, extracting the relevant data, and crafting a personalized response — was consuming hours of work and slowing down the sales pipeline.

Martes AI developed **Kerby**, an intelligent email agent that fully automates the quote management process, enabling Kerberos Energy to handle over **800 quotes per year** without human intervention on routine requests.

---

## The Challenge

The Kerberos Energy team faced a recurring bottleneck:

- **High volume of inbound quote requests** arriving via email daily
- **Repetitive manual work**: reading requests, classifying them, extracting data, and sending responses
- **Slow response times** that risked losing potential clients to faster competitors
- **Inconsistent reply quality** depending on workload and operator availability

The company needed a solution that could operate 24/7, respond instantly, and integrate seamlessly with their existing workflow.

---

## The Solution: Kerby

Martes AI designed and deployed **Kerby**, an AI-powered email agent built on a custom automation pipeline. Here's how it works:

1. **Email Monitoring**: Kerby continuously monitors the company inbox for new quote requests
2. **Intent Classification**: Each incoming email is analyzed to detect whether it's a quote request, a follow-up, a complaint, or general inquiry
3. **Data Extraction**: For quote requests, Kerby extracts the key parameters (energy consumption, contract type, business size) using an LLM
4. **Automated Response**: Kerby generates a personalized quote or preliminary response and sends it directly, or routes complex cases to a human operator
5. **CRM Logging**: All interactions are automatically logged for tracking and follow-up

---

## Results

| Metric | Before Kerby | After Kerby |
|--------|-------------|-------------|
| Quotes processed/year | ~300 (manual) | **800+** |
| Average response time | 4–8 hours | **< 5 minutes** |
| Operator time on routine quotes | ~3 hours/day | **< 30 minutes/day** |
| Quote consistency | Variable | **Standardized** |

---

## Technologies Used

- **n8n** — workflow orchestration and email pipeline
- **OpenAI GPT-4o** — intent classification and response generation
- **Custom CRM integration** — automatic data logging
- **SMTP / IMAP** — email monitoring and sending

---

## Conclusions

Kerby demonstrates how AI automation can transform a high-volume, repetitive process into a competitive advantage. Kerberos Energy now responds to quote requests faster than any competitor, freeing their team to focus on closing deals rather than processing emails.

> "Kerby changed how we work. What used to take our team hours now happens automatically in minutes." — Kerberos Energy team

Visit us: [www.martes-ai.com](https://www.martes-ai.com)
`;

  const buildupArticle = `# From Paper to WhatsApp: Field Reporting with Prisma Agent for BuildUp FM

## Introduction

BuildUp FM is an Italian facilities management company whose field technicians spend their days on-site — inspecting equipment, completing maintenance tasks, and tracking their work hours. For years, this data was captured on paper forms, then manually transferred to spreadsheets at the end of each day.

Martes AI integrated **Prisma Agent** — Martes AI's intelligent reporting platform — with WhatsApp, creating a frictionless reporting workflow that eliminated paper entirely and gave management real-time visibility into field operations.

---

## The Challenge

BuildUp FM's reporting process had several pain points:

- **Paper-based timesheets** that technicians filled in at the end of each shift
- **Manual data entry** by back-office staff every evening to transfer paper records to spreadsheets
- **Errors and omissions** caused by illegible handwriting or forgotten details
- **Zero real-time visibility** for project managers who needed up-to-date hour tracking
- **Compliance risk** from incomplete or delayed reporting

The company needed a reporting system that was simple enough for field technicians (who are not office workers) and powerful enough to give management instant, accurate data.

---

## The Solution: Prisma Agent on WhatsApp

Martes AI deployed **Prisma Agent** — a conversational AI system integrated directly into WhatsApp Business — as the reporting interface for BuildUp FM's field teams.

### How it works:

1. **End of task**: The technician opens WhatsApp and sends a simple message to the Prisma Agent chat (e.g., "Finito intervento caldaia via Roma 14, 3 ore")
2. **Structured extraction**: Prisma Agent parses the message, extracting: technician ID, location, task type, hours worked, and any anomalies
3. **Validation & confirmation**: The agent replies with a structured summary for the technician to confirm, reducing errors
4. **Automatic logging**: Confirmed entries are immediately written to the management dashboard and accounting system
5. **Daily summary**: At end of day, managers receive an automatic WhatsApp summary of all field activity

---

## Results

| Metric | Before | After Prisma Agent |
|--------|--------|--------------------|
| Reporting method | Paper forms | WhatsApp messages |
| Data entry lag | 12–24 hours | **Real-time** |
| Back-office data entry time | ~2 hours/day | **0** |
| Reporting errors | ~15% of entries | **< 2%** |
| Technician adoption time | — | **< 1 day** |

---

## Why WhatsApp?

Field technicians already use WhatsApp every day. By meeting them on a platform they know and trust, BuildUp FM achieved **near-instant adoption** with zero training required. There was no new app to install, no new interface to learn.

---

## Technologies Used

- **Prisma Agent** (Martes AI) — conversational AI for structured data collection
- **WhatsApp Business API** — the reporting interface
- **n8n** — workflow automation and system integration
- **Google Sheets / custom dashboard** — real-time data visualization

---

## Conclusions

The BuildUp FM project shows that the best digital transformation is often the most invisible one. Field workers didn't change their habits — they just replaced a paper form with a WhatsApp message. The result was a fully digital, real-time reporting system with zero friction and zero training.

Visit us: [www.martes-ai.com](https://www.martes-ai.com)
`;

  // Sample articles list
  const articles = [
    {
      id: 1,
      title: 'AI Automation for Santa Lucia Eye Clinic',
      summary: 'How Martes AI implemented an integrated system for email classification and appointment booking at a leading eye clinic in Cosenza.',
      date: 'March 20, 2025',
      thumbnail: '/assets/Clinica_Sta_Lucia.png',
      content: santaLuciaArticle,
      technologies: ['AI Classification', 'Email Automation', 'Voiceflow', 'Make', 'API Integration'],
      slug: 'santa-lucia-eye-clinic'
    },
    {
      id: 2,
      title: 'AI WhatsApp Agent for Travel Agencies',
      summary: 'How an AI chatbot on WhatsApp generated an additional €27,500 in monthly revenue by delivering personalized travel offers.',
      date: 'February 12, 2025',
      thumbnail: '/assets/bluvacanze.png',
      content: whatsappAgentArticle,
      technologies: ['WhatsApp Business API', 'AI Chatbot', 'LLM Integration', 'Google Sheets', 'Travel Tech'],
      slug: 'whatsapp-agent-travel-agency'
    },
    {
      id: 3,
      title: 'AI Agent for a Scientific Newsletter',
      summary: 'How Martes AI automated the entire editorial process for a scientific newsletter, reducing production time by 90% while maintaining high quality standards.',
      date: 'April 4, 2025',
      thumbnail: '/assets/newsletter_AI.png',
      content: newsletterArticle,
      technologies: ['Content Automation', 'Make Integration', 'PubMed API', 'Mailchimp', 'AI Images'],
      slug: 'scientific-newsletter-agent'
    },
    {
      id: 4,
      title: 'Kerby: AI Email Agent for Kerberos Energy',
      summary: 'How Martes AI built an intelligent email agent that autonomously manages over 800 quote requests per year for an Italian energy company.',
      date: 'February 20, 2026',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      content: kerberosArticle,
      technologies: ['n8n', 'OpenAI GPT-4o', 'Email Automation', 'CRM Integration', 'AI Agent'],
      slug: 'kerby-email-agent-kerberos-energy'
    },
    {
      id: 5,
      title: 'From Paper to WhatsApp: Reporting for BuildUp FM',
      summary: 'How Martes AI replaced paper-based field reporting with a WhatsApp AI agent using Prisma, giving BuildUp FM real-time operational visibility.',
      date: 'March 10, 2026',
      thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
      content: buildupArticle,
      technologies: ['WhatsApp Business API', 'Prisma Agent', 'n8n', 'Workflow Automation', 'Field Tech'],
      slug: 'whatsapp-reporting-buildup-fm'
    }
  ];

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  
  // Ordina gli articoli dal più recente al più vecchio
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Render article list
  const renderArticleList = () => (
    <>
      <div className="mb-12 text-center">
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          AI Automation Solutions
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Leveraging artificial intelligence to create powerful automation solutions that transform business processes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {currentArticles.map((article) => (
          <article 
            key={article.id}
            className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer`}
            onClick={() => handleSelectArticle(article)}
            id={article.slug}
          >
            <div className="h-60 overflow-hidden">
              <img 
                src={article.thumbnail} 
                alt={article.title} 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {article.title}
                </h2>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {article.date}
                </span>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {article.summary}
              </p>
              <div className="mb-4 flex flex-wrap">
                {article.technologies.map((tech, idx) => (
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
              <button 
                className={`text-sm font-medium flex items-center ${
                  isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-500'
                }`}
              >
                Read Article
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 mb-8">
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1
                      ? isDarkMode
                        ? 'bg-green-600 text-white'
                        : 'bg-green-500 text-white'
                      : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

  // Render single article
  const renderArticle = (article: Article) => (
    <>
      <div className="mb-6 flex items-center">
        <button
          onClick={handleBackToArticles}
          className={`mr-4 flex items-center ${
            isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-500'
          }`}
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Articles
        </button>
      </div>

      <article className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-8 mb-10`} id={article.slug}>
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
                a: ({node, ...props}) => <a className="text-blue-500 hover:underline" {...props} />,
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
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
        <div className="text-right mt-6 italic">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Posted on {article.date}
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
          {selectedArticle ? renderArticle(selectedArticle) : renderArticleList()}
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default AutomationProjects; 