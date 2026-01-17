import React, { useEffect, useRef, useState } from 'react';
import { featuresData } from '../../data/mockData';
import { Shield, Brain, BarChart3, Swords, Plug, Target } from 'lucide-react';

const iconMap = {
  Shield,
  Brain,
  BarChart3,
  Swords,
  Plug,
  Target
};

const Features = () => {
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
      id="features"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#121212] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #8c52ff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Comprehensive Security Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto px-4">
            Everything you need to protect your enterprise network with AI-powered intelligence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {featuresData.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <div
                key={feature.id}
                className={`group relative p-5 sm:p-6 md:p-8 bg-[#0a0e27] border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className="relative mb-4 sm:mb-5 md:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#8c52ff]/10 border border-[#8c52ff]/30 group-hover:bg-[#8c52ff]/20 transition-all duration-400">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#8c52ff]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#8c52ff] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#d9d9d9]/70 mb-2 sm:mb-3">
                    {feature.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8c52ff]/70">
                    {feature.detail}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-6 sm:h-8 bg-gradient-to-b from-[#8c52ff]/50 to-transparent group-hover:h-8 sm:group-hover:h-12 transition-all duration-400" />
                  <div className="absolute top-0 right-0 h-px w-6 sm:w-8 bg-gradient-to-l from-[#8c52ff]/50 to-transparent group-hover:w-8 sm:group-hover:w-12 transition-all duration-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
