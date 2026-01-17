import React, { useEffect, useRef, useState } from 'react';
import { performanceMetricsData, attackTypesData } from '../../data/mockData';
import { Zap, Scan, Key, Database, Bot, FileOutput, Eye, ShieldAlert, TrendingUp, CheckCircle2 } from 'lucide-react';

const attackIconMap = {
  Zap,
  Scan,
  Key,
  Database,
  Bot,
  FileOutput,
  Eye,
  ShieldAlert
};

const Results = () => {
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
      id="results"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0e27] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Performance Metrics Section */}
        <div
          className={`mb-24 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-sm font-medium mb-4">
              Results
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Proven Performance
            </h2>
            <p className="text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto">
              Battle-tested metrics demonstrating enterprise-grade reliability
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {performanceMetricsData.map((metric, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-[#121212] border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <TrendingUp className="w-5 h-5 text-[#8c52ff]/50 mb-3 group-hover:text-[#8c52ff] transition-colors" />
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-xs text-[#d9d9d9]/60">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attack Types Section */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Threat Coverage
            </h3>
            <p className="text-lg text-[#d9d9d9]/70 max-w-xl mx-auto">
              Protection against the most common and sophisticated attack vectors
            </p>
          </div>

          {/* Attack Types Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {attackTypesData.map((attack, index) => {
              const Icon = attackIconMap[attack.icon] || ShieldAlert;

              return (
                <div
                  key={index}
                  className={`group relative p-6 bg-[#121212] border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#8c52ff]/10 border border-[#8c52ff]/20 group-hover:bg-[#8c52ff]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#8c52ff]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium mb-1">{attack.name}</div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-green-500">Protected</span>
                      </div>
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

export default Results;
