import React from 'react';
import { Shield, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#121212] border-t border-[#8c52ff]/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_siemshield/artifacts/octpbb5h_siem-logo.png" 
                alt="SIEM Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">
                SIEM<span className="text-[#8c52ff]">.</span>AI
              </span>
            </div>
            <p className="text-[#d9d9d9]/60 mb-6 max-w-sm">
              Enterprise-grade SIEM solution with AI-powered anomaly detection.
              Protecting networks with cutting-edge machine learning technology.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Mail, label: 'Email' }
              ].map(({ icon: Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center bg-[#0a0e27] border border-[#8c52ff]/10 hover:border-[#8c52ff]/50 hover:bg-[#8c52ff]/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-[#d9d9d9]/70 hover:text-[#8c52ff]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Overview', 'Features', 'AI Models', 'Dashboard', 'Results'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[#d9d9d9]/60 hover:text-[#8c52ff] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'GitHub Repository', 'Live Demo', 'API Reference', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#d9d9d9]/60 hover:text-[#8c52ff] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#8c52ff]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#d9d9d9]/50 text-sm">
              © 2025 SIEM Security Solution. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#d9d9d9]/50 hover:text-[#8c52ff] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#d9d9d9]/50 hover:text-[#8c52ff] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#4d238b] hover:bg-[#8c52ff] text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(140,82,255,0.5)] z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
