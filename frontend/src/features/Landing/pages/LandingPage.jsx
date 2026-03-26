import React, { useState, useEffect } from 'react';
import Navbar from '../../shared/components/Navbar';
import { useNavigate } from 'react-router';

const LandingPage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900 relative">
      
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center md:py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          Intelligent Conversations, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
            Powered by Open Source.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience next-generation AI chat. Fast, secure, and context-aware interactions built on a lightweight, modern technology stack.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={()=>{navigate("/chat")}} className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 cursor-pointer">
            Start Chatting Now
          </button>
          <a target='_blank' rel="noreferrer" href='https://github.com/karthik-j-nair/ai-assessment-project' className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm cursor-pointer">
            View Source Code
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Why choose our platform?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Lightning Fast</h3>
              <p className="text-slate-600">Optimized React frontend paired with a lightweight Flask backend ensures rapid response times and a fluid UI.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                🧠
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Context Aware</h3>
              <p className="text-slate-600">Leveraging LangChain's memory management to maintain conversational context just like a human would.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Local & Secure</h3>
              <p className="text-slate-600">Chat histories are safely stored in a local relational database, keeping your data footprint minimal and secure.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Built with Modern Tech</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A carefully curated stack designed for performance, developer experience, and cost-effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* React */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all text-center">
            <div className="text-4xl mb-3">⚛️</div>
            <h4 className="font-bold text-slate-800">React</h4>
            <span className="text-sm text-slate-500">Frontend UI</span>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-bold text-slate-800">Tailwind CSS</h4>
            <span className="text-sm text-slate-500">Styling & Layout</span>
          </div>

          {/* Flask */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all text-center">
            <div className="text-4xl mb-3">🌶️</div>
            <h4 className="font-bold text-slate-800">Python Flask</h4>
            <span className="text-sm text-slate-500">API Backend</span>
          </div>

          {/* SQLite3 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all text-center">
            <div className="text-4xl mb-3">🗄️</div>
            <h4 className="font-bold text-slate-800">SQLite3</h4>
            <span className="text-sm text-slate-500">Relational Database</span>
          </div>

          {/* LangChain */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all text-center">
            <div className="text-4xl mb-3">🦜</div>
            <h4 className="font-bold text-slate-800">LangChain</h4>
            <span className="text-sm text-slate-500">AI Orchestration</span>
          </div>

          {/* Mistral AI */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all text-center">
            <div className="text-4xl mb-3">🌪️</div>
            <h4 className="font-bold text-slate-800">Gemini AI API</h4>
            <span className="text-sm text-slate-500">Free Tier LLM</span>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
        <p>© {new Date().getFullYear()} AI Chat Bot - Built for seamless AI interactions.</p>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all z-50 cursor-pointer flex items-center justify-center animate-bounce"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

    </div>
  );
};

export default LandingPage;