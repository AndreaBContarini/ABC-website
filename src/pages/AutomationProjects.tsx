import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to scroll to top on page load or article change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedArticle]);

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
            onClick={() => setSelectedArticle(article)}
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
          onClick={() => setSelectedArticle(null)}
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