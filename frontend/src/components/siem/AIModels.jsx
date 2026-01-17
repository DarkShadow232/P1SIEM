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
      className="relative py-24 md:py-32 bg-[#0a0e27] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4d238b]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-sm font-medium mb-4">
            AI Models
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Detection Arsenal
          </h2>
          <p className="text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto">
            Multi-layered machine learning architecture for comprehensive threat detection
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiModelsData.map((model, index) => {
            const Icon = iconMap[model.icon] || Star;
            const isExpanded = expandedModel === model.id;

            return (
              <div
                key={model.id}
                className={`group relative p-6 border transition-all duration-500 cursor-pointer ${
                  model.isPrimary
                    ? 'bg-gradient-to-br from-[#4d238b]/20 to-[#0a0e27] border-[#8c52ff]/50 lg:col-span-2'
                    : 'bg-[#121212] border-[#8c52ff]/10 hover:border-[#8c52ff]/40'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setExpandedModel(isExpanded ? null : model.id)}
              >
                {/* Primary Badge */}
                {model.isPrimary && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-[#8c52ff] text-white text-xs font-bold">
                    <Star className="w-3 h-3" fill="currentColor" />
                    PRIMARY
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 border ${
                    model.isPrimary
                      ? 'bg-[#8c52ff]/20 border-[#8c52ff]/50'
                      : 'bg-[#8c52ff]/10 border-[#8c52ff]/30'
                  }`}>
                    <Icon className="w-6 h-6 text-[#8c52ff]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {model.name}
                    </h3>
                    <p className="text-sm text-[#8c52ff]/80">
                      {model.type}
                    </p>
                  </div>
                </div>

                {/* Accuracy Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#d9d9d9]/60">Accuracy</span>
                    <span className="text-lg font-bold text-[#8c52ff]">{model.accuracy}%</span>
                  </div>
                  <div className="h-2 bg-[#0a0e27] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4d238b] to-[#8c52ff] transition-all duration-1000"
                      style={{ width: isVisible ? `${model.accuracy}%` : '0%' }}
                    />
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#8c52ff]/50" />
                    <span className="text-sm text-[#d9d9d9]/70">Best For: {model.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-[#d9d9d9]/70">{model.status}</span>
                  </div>
                </div>

                {/* Description (Expandable) */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-[#d9d9d9]/70 pt-4 border-t border-[#8c52ff]/10">
                    {model.description}
                  </p>
                </div>

                {/* Expand Indicator */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-[#8c52ff]/50">
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
