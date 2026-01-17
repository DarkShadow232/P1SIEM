import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinksData } from '../../data/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', ...navLinksData.map(n => n.id)];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0a0e27]/95 backdrop-blur-md border-b border-[#8e50ec]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_siemshield/artifacts/octpbb5h_siem-logo.png" 
                alt="SIEM Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(140,82,255,0.6)]"
              />
            </div>
            <span className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight">
              SIEM<span className="text-[#8c52ff]">.</span>AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinksData.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
                  activeSection === link.id
                    ? 'text-[#8c52ff]'
                    : 'text-[#d9d9d9]/70 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#8c52ff] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:flex items-center gap-2 px-4 xl:px-6 py-2.5 bg-[#4d238b] text-white font-medium text-sm transition-all duration-300 hover:bg-[#8c52ff] hover:shadow-[0_0_30px_rgba(140,82,255,0.4)]"
          >
            View Demo
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-[#0a0e27]/98 backdrop-blur-lg border-b border-[#8e50ec]/20 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-1 overflow-y-auto max-h-[70vh]">
          {navLinksData.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-3.5 text-left text-base font-medium transition-all duration-300 min-h-[48px] ${
                activeSection === link.id
                  ? 'text-[#8c52ff] bg-[#8c52ff]/10'
                  : 'text-[#d9d9d9]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-3 px-6 py-3.5 bg-[#4d238b] text-white font-medium text-base transition-all duration-300 hover:bg-[#8c52ff] min-h-[48px]"
          >
            View Demo
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
