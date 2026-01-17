import React, { useEffect, useRef, useState } from 'react';
import { aiModelsData } from '../../data/mockData';

const PerformanceChart = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);

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

  const sortedModels = [...aiModelsData].sort((a, b) => b.accuracy - a.accuracy);
  const maxAccuracy = Math.max(...sortedModels.map(m => m.accuracy));

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#121212] overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Performance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            AI Model Performance Comparison
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto px-4">
            A comprehensive overview of our AI models' effectiveness in anomaly detection
          </p>
        </div>

        {/* Chart Container */}
        <div
          className={`bg-[#0a0e27] border border-[#8c52ff]/10 p-4 sm:p-6 md:p-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Legend */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#4d238b] to-[#8c52ff]" />
              <span className="text-xs sm:text-sm text-[#d9d9d9]/70">Supervised</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#8e50ec]/60 to-[#8c52ff]/60" />
              <span className="text-xs sm:text-sm text-[#d9d9d9]/70">Unsupervised</span>
            </div>
          </div>

          {/* Horizontal Bar Chart */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {sortedModels.map((model, index) => {
              const isSupervised = model.type.includes('Supervised');
              const barWidth = (model.accuracy / 100) * 100;
              const isHighest = model.accuracy === maxAccuracy;

              return (
                <div
                  key={model.id}
                  className={`group transition-all duration-300 ${
                    hoveredBar === model.id ? 'scale-[1.01] sm:scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setHoveredBar(model.id)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {/* Model Name & Type */}
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="text-sm sm:text-base text-white font-medium">{model.name}</span>
                      {isHighest && (
                        <span className="px-1.5 sm:px-2 py-0.5 bg-[#8c52ff] text-white text-[10px] sm:text-xs font-bold">
                          BEST
                        </span>
                      )}
                    </div>
                    <span className="text-base sm:text-lg font-bold text-[#8c52ff]">
                      {model.accuracy}%
                    </span>
                  </div>

                  {/* Bar */}
                  <div className="h-8 sm:h-10 bg-[#121212] overflow-hidden relative">
                    <div
                      className={`h-full transition-all duration-1000 ease-out relative ${
                        isSupervised
                          ? 'bg-gradient-to-r from-[#4d238b] to-[#8c52ff]'
                          : 'bg-gradient-to-r from-[#8e50ec]/60 to-[#8c52ff]/60'
                      }`}
                      style={{
                        width: isVisible ? `${barWidth}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>

                    {/* Marker Lines - Hidden on mobile */}
                    {[90, 95, 100].map((mark) => (
                      <div
                        key={mark}
                        className="hidden sm:block absolute top-0 bottom-0 w-px bg-[#8c52ff]/20"
                        style={{ left: `${mark}%` }}
                      />
                    ))}
                  </div>

                  {/* Type Label */}
                  <div className="mt-1 text-[10px] sm:text-xs text-[#d9d9d9]/50 truncate">
                    {model.type}
                  </div>
                </div>
              );
            })}
          </div>

          {/* X-Axis Labels */}
          <div className="flex justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#8c52ff]/10">
            <span className="text-[10px] sm:text-xs text-[#d9d9d9]/50">0%</span>
            <span className="text-[10px] sm:text-xs text-[#d9d9d9]/50">50%</span>
            <span className="text-[10px] sm:text-xs text-[#d9d9d9]/50">100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceChart;
