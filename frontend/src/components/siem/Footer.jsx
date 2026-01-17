import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#121212] border-t border-[#8c52ff]/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_siemshield/artifacts/octpbb5h_siem-logo.png" 
                alt="SIEM Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-white">
                SIEM<span className="text-[#8c52ff]">.</span>AI
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#d9d9d9]/60 max-w-sm">
              Purpose-built SIEM solution with AI-powered anomaly detection.
              Protecting networks with cutting-edge machine learning technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base text-white font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Overview', 'Features', 'AI Models', 'Dashboard', 'Results'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-[#d9d9d9]/60 hover:text-[#8c52ff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm sm:text-base text-white font-semibold mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Documentation', url: 'https://qms-docs.netlify.app' },
                { name: 'GitHub Repository', url: '#' },
                { name: 'Live Demo', url: '#' },
                { name: 'API Reference', url: '#' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-sm text-[#d9d9d9]/60 hover:text-[#8c52ff] transition-colors"
                    target={item.url.startsWith('http') ? '_blank' : '_self'}
                    rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#8c52ff]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-[#d9d9d9]/50 text-center sm:text-left">
              © 2025 SIEM Security Solution. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-[#d9d9d9]/50 hover:text-[#8c52ff] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-[#d9d9d9]/50 hover:text-[#8c52ff] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-[#4d238b] hover:bg-[#8c52ff] text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(140,82,255,0.5)] z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
};

export default Footer;
