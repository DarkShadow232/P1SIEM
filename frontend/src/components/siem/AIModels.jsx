import React, { useEffect, useRef, useState } from 'react';
import { aiModelsData } from '../../data/mockData';
import { Star, Layers, Binary, TreeDeciduous, Sigma, CheckCircle, ChevronRight } from 'lucide-react';

const iconMap = {
  Star,
  Layers,
  Binary,
  TreeDeciduous,
  Sigma
};

const AIModels = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedModel, setExpandedModel] = useState(null);

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
      id="models"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0e27] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-[#4d238b]/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            AI Models
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            AI-Driven Security Detection
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto px-4">
            Multi-layered machine learning architecture for comprehensive threat detection
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {aiModelsData.map((model, index) => {
            const Icon = iconMap[model.icon] || Star;
            const isExpanded = expandedModel === model.id;

            return (
              <div
                key={model.id}
                className={`group relative p-4 sm:p-5 md:p-6 border transition-all duration-500 cursor-pointer ${
                  model.isPrimary
                    ? 'bg-gradient-to-br from-[#4d238b]/20 to-[#0a0e27] border-[#8c52ff]/50 sm:col-span-2 lg:col-span-2'
                    : 'bg-[#121212] border-[#8c52ff]/10 hover:border-[#8c52ff]/40'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setExpandedModel(isExpanded ? null : model.id)}
              >
                {/* Primary Badge */}
                {model.isPrimary && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-[#8c52ff] text-white text-[10px] sm:text-xs font-bold">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" />
                    PRIMARY
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 border flex-shrink-0 ${
                    model.isPrimary
                      ? 'bg-[#8c52ff]/20 border-[#8c52ff]/50'
                      : 'bg-[#8c52ff]/10 border-[#8c52ff]/30'
                  }`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#8c52ff]" />
                  </div>
                  <div className="flex-1 min-w-0 pr-16 sm:pr-20">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1 truncate">
                      {model.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8c52ff]/80 truncate">
                      {model.type}
                    </p>
                  </div>
                </div>

                {/* Accuracy Bar */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                    <span className="text-xs sm:text-sm text-[#d9d9d9]/60">Accuracy</span>
                    <span className="text-base sm:text-lg font-bold text-[#8c52ff]">{model.accuracy}%</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-[#0a0e27] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4d238b] to-[#8c52ff] transition-all duration-1000"
                      style={{ width: isVisible ? `${model.accuracy}%` : '0%' }}
                    />
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8c52ff]/50 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#d9d9d9]/70">Best For: {model.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#d9d9d9]/70">{model.status}</span>
                  </div>
                </div>

                {/* Description (Expandable) */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-xs sm:text-sm text-[#d9d9d9]/70 pt-3 sm:pt-4 border-t border-[#8c52ff]/10">
                    {model.description}
                  </p>
                </div>

                {/* Expand Indicator */}
                <div className="mt-3 sm:mt-4 text-center">
                  <span className="text-[10px] sm:text-xs text-[#8c52ff]/50">
                    {isExpanded ? 'Click to collapse' : 'Click to expand'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIModels;
