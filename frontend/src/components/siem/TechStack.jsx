import React, { useEffect, useRef, useState } from 'react';
import { techStackData } from '../../data/mockData';
import { Code, Brain, Layers, Grid3X3, Table, Server, LineChart, PieChart, Code2, Braces, BookOpen, Settings, Filter, Globe, FileJson, Save } from 'lucide-react';

const iconMap = {
  Code,
  Brain,
  Layers,
  Grid3x3: Grid3X3,
  Table,
  Server,
  LineChart,
  PieChart,
  Code2,
  Braces,
  BookOpen,
  Settings,
  Filter,
  Globe,
  FileJson,
  Save
};

const TechStack = () => {
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

  const categories = [
    { key: 'mlAi', title: 'Machine Learning & AI', color: '#8c52ff' },
    { key: 'dashboard', title: 'Dashboard & Visualization', color: '#8e50ec' },
    { key: 'dataProcessing', title: 'Data Processing', color: '#4d238b' },
    { key: 'deployment', title: 'Deployment', color: '#8c52ff' }
  ];

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#121212] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #8c52ff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built With Modern Technologies
          </h2>
          <p className="text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto">
            Enterprise-grade tools and frameworks powering our security solution
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <div
              key={category.key}
              className={`p-6 bg-[#0a0e27] border border-[#8c52ff]/10 hover:border-[#8c52ff]/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-8"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Tech Items */}
              <div className="flex flex-wrap gap-3">
                {techStackData[category.key]?.map((tech, index) => {
                  const Icon = iconMap[tech.icon] || Code;

                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-2 px-4 py-2 bg-[#121212] border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Icon className="w-4 h-4 text-[#8c52ff]/70 group-hover:text-[#8c52ff] transition-colors" />
                      <span className="text-sm text-[#d9d9d9]/80 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className={`mt-12 p-8 bg-gradient-to-r from-[#4d238b]/20 via-[#0a0e27] to-[#8c52ff]/20 border border-[#8c52ff]/20 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#d9d9d9]/80">
            All components are{' '}
            <span className="text-[#8c52ff] font-semibold">production-ready</span>{' '}
            and designed for{' '}
            <span className="text-[#8c52ff] font-semibold">enterprise scalability</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
