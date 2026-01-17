import React, { useEffect, useRef, useState } from 'react';
import { methodologyData } from '../../data/mockData';
import { Database, Settings, Brain, AlertCircle, Server, Monitor, ArrowRight, ArrowDown } from 'lucide-react';

const iconMap = {
  Database,
  Settings,
  Brain,
  AlertCircle,
  Server,
  Monitor
};

const Methodology = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % methodologyData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      id="methodology"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#121212] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#8c52ff 1px, transparent 1px), linear-gradient(90deg, #8c52ff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
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
            Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Security Pipeline Architecture
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto px-4">
            Our systematic approach to detecting and responding to network threats
          </p>
        </div>

        {/* Pipeline Flow */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:block">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8c52ff]/30 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-6 gap-3 xl:gap-4">
              {methodologyData.map((step, index) => {
                const Icon = iconMap[step.icon] || Database;
                const isActive = activeStep === index;

                return (
                  <div
                    key={step.step}
                    className="relative"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step Card */}
                    <div
                      className={`relative p-4 xl:p-6 bg-[#0a0e27] border transition-all duration-500 cursor-pointer ${
                        isActive
                          ? 'border-[#8c52ff] shadow-[0_0_30px_rgba(140,82,255,0.3)] -translate-y-2'
                          : 'border-[#8c52ff]/10 hover:border-[#8c52ff]/40'
                      }`}
                    >
                      {/* Step Number */}
                      <div
                        className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${
                          isActive
                            ? 'bg-[#8c52ff] text-white'
                            : 'bg-[#121212] text-[#8c52ff] border border-[#8c52ff]/30'
                        }`}
                      >
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-3">
                        <div
                          className={`w-10 h-10 flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? 'bg-[#8c52ff]/20 border border-[#8c52ff]'
                              : 'bg-[#8c52ff]/10 border border-[#8c52ff]/30'
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 transition-colors duration-500 ${
                              isActive ? 'text-[#8c52ff]' : 'text-[#8c52ff]/70'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <h3
                        className={`text-xs xl:text-sm font-bold text-center mb-1.5 transition-colors duration-500 ${
                          isActive ? 'text-[#8c52ff]' : 'text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[10px] xl:text-xs text-[#d9d9d9]/60 text-center">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    {index < methodologyData.length - 1 && (
                      <div className="absolute top-1/2 -right-1.5 xl:-right-2 -translate-y-1/2 z-10">
                        <ArrowRight
                          className={`w-3 h-3 transition-colors duration-500 ${
                            isActive ? 'text-[#8c52ff]' : 'text-[#8c52ff]/30'
                          }`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tablet: 2-column grid */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
            {methodologyData.map((step, index) => {
              const Icon = iconMap[step.icon] || Database;
              const isActive = activeStep === index;

              return (
                <div
                  key={step.step}
                  className={`relative p-4 sm:p-5 bg-[#0a0e27] border transition-all duration-500 ${
                    isActive
                      ? 'border-[#8c52ff] shadow-[0_0_20px_rgba(140,82,255,0.2)]'
                      : 'border-[#8c52ff]/10'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold mb-2 ${
                          isActive
                            ? 'bg-[#8c52ff] text-white'
                            : 'bg-[#8c52ff]/10 text-[#8c52ff]'
                        }`}
                      >
                        {step.step}
                      </div>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'text-[#8c52ff]' : 'text-[#8c52ff]/50'}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-sm sm:text-base font-bold mb-1 ${isActive ? 'text-[#8c52ff]' : 'text-white'}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#d9d9d9]/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="sm:hidden space-y-3">
            {methodologyData.map((step, index) => {
              const Icon = iconMap[step.icon] || Database;
              const isActive = activeStep === index;

              return (
                <div key={step.step}>
                  <div
                    className={`relative p-4 bg-[#0a0e27] border transition-all duration-500 ${
                      isActive
                        ? 'border-[#8c52ff] shadow-[0_0_20px_rgba(140,82,255,0.2)]'
                        : 'border-[#8c52ff]/10'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Step Number & Icon */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 flex items-center justify-center text-xs font-bold mb-2 ${
                            isActive
                              ? 'bg-[#8c52ff] text-white'
                              : 'bg-[#8c52ff]/10 text-[#8c52ff]'
                          }`}
                        >
                          {step.step}
                        </div>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-[#8c52ff]' : 'text-[#8c52ff]/50'}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-sm font-bold mb-1 ${isActive ? 'text-[#8c52ff]' : 'text-white'}`}>
                          {step.title}
                        </h3>
                        <p className="text-xs text-[#d9d9d9]/60">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < methodologyData.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-[#8c52ff]/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
