import React, { useEffect, useRef, useState } from 'react';
import { projectLinksData } from '../../data/mockData';
import { Github, ExternalLink, FileText, ArrowRight, Mail } from 'lucide-react';

const iconMap = {
  Github,
  ExternalLink,
  FileText
};

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0e27] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#4d238b]/10 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8c52ff]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Links Section */}
        <div
          className={`mb-16 sm:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Resources
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              Project Resources
            </h2>
          </div>

          {/* Links Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {projectLinksData.map((link, index) => {
              const Icon = iconMap[link.icon] || ExternalLink;

              return (
                <a
                  key={index}
                  href={link.url}
                  className={`group relative p-4 sm:p-5 md:p-6 bg-[#121212] border border-[#8c52ff]/10 hover:border-[#8c52ff]/50 transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#8c52ff]/10 border border-[#8c52ff]/30 mb-3 sm:mb-4 group-hover:bg-[#8c52ff]/20 transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#8c52ff]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-[#8c52ff] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8c52ff] font-medium mb-1 sm:mb-2">{link.description}</p>
                    <p className="text-xs sm:text-sm text-[#d9d9d9]/60">{link.detail}</p>
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[#8c52ff] text-xs sm:text-sm">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Large Shield Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8c52ff]/20 blur-2xl sm:blur-3xl rounded-full scale-150" />
              <img 
                src="https://customer-assets.emergentagent.com/job_siemshield/artifacts/octpbb5h_siem-logo.png" 
                alt="SIEM Security" 
                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(140,82,255,0.5)]"
              />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Ready to Secure Your Network?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Deploy enterprise-grade AI-powered security monitoring for your infrastructure.
            Contact us to discuss implementation and customization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <button className="group w-full sm:w-auto flex items-center justify-center sm:justify-between gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#4d238b] text-white font-medium text-base sm:text-lg transition-all duration-400 hover:bg-[#8c52ff] hover:shadow-[0_0_40px_rgba(140,82,255,0.5)] min-h-[52px]">
              <span>Request Demo</span>
              <Mail className="w-5 h-5 group-hover:animate-pulse" />
            </button>
            <button className="group w-full sm:w-auto flex items-center justify-center sm:justify-between gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white font-medium text-base sm:text-lg transition-all duration-400 hover:bg-white hover:text-[#0a0e27] backdrop-blur-sm min-h-[52px]">
              <span>Download Docs</span>
              <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
