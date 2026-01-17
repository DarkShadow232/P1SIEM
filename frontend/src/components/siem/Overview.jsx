import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../../data/mockData';
import { Cpu, BarChart3, Zap, Shield } from 'lucide-react';

const iconMap = {
  0: Cpu,
  1: BarChart3,
  2: Zap,
  3: Shield
};

const Overview = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0e27] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8c52ff]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8c52ff]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-sm font-medium mb-4">
            Overview
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Advanced Security Intelligence
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-lg text-[#d9d9d9]/80 leading-relaxed mb-6">
              This enterprise-grade SIEM solution leverages state-of-the-art machine learning
              algorithms to detect network anomalies and classify security threats in real-time.
              Built for scalability and precision, it provides comprehensive protection against
              known and unknown attack patterns.
            </p>
            <p className="text-lg text-[#d9d9d9]/80 leading-relaxed">
              The system implements <span className="text-[#8c52ff] font-semibold">5 different AI/ML models</span> for
              multi-layered security analysis, with One-Class SVM as the primary detection engine —
              specifically chosen for its ability to detect zero-day threats without requiring labeled attack data.
            </p>

            {/* Feature Highlights */}
            <div className="mt-8 flex flex-wrap gap-4">
              {['Zero-Day Detection', 'Real-Time Analysis', 'Enterprise-Ready'].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-[#8c52ff]/5 border border-[#8c52ff]/20"
                >
                  <div className="w-1.5 h-1.5 bg-[#8c52ff] rounded-full" />
                  <span className="text-sm text-[#d9d9d9]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {statsData.map((stat, index) => {
              const Icon = iconMap[index] || Shield;
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-[#121212] border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative">
                    <Icon className="w-8 h-8 text-[#8c52ff]/70 mb-4 group-hover:text-[#8c52ff] transition-colors" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-base text-[#8c52ff] font-medium mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-[#d9d9d9]/60">
                      {stat.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
