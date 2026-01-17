import React, { useEffect, useRef, useState } from 'react';
import { visualizationsData } from '../../data/mockData';
import { X, ChevronLeft, ChevronRight, Image, Grid, BarChart2, PieChart } from 'lucide-react';

const categoryIcons = {
  Dashboard: Grid,
  Analysis: BarChart2,
  Models: PieChart
};

const Visualizations = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

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

  const categories = ['All', ...new Set(visualizationsData.map(v => v.category))];

  const filteredVisualizations = activeCategory === 'All'
    ? visualizationsData
    : visualizationsData.filter(v => v.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < filteredVisualizations.length) {
      setSelectedImage(newIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0e27] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-sm font-medium mb-4">
            Visualizations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Security Analytics Visualizations
          </h2>
          <p className="text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto">
            Comprehensive visual analysis of threat detection and network behavior
          </p>
        </div>

        {/* Category Filters */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#8c52ff] text-white'
                  : 'bg-[#121212] text-[#d9d9d9]/70 border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Visualizations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredVisualizations.map((viz, index) => {
            const CategoryIcon = categoryIcons[viz.category] || Image;

            return (
              <div
                key={viz.id}
                className={`group relative aspect-[4/3] bg-[#121212] border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(index)}
              >
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#8c52ff]/10 border border-[#8c52ff]/20 mb-4 group-hover:bg-[#8c52ff]/20 transition-colors">
                    <CategoryIcon className="w-8 h-8 text-[#8c52ff]/70 group-hover:text-[#8c52ff] transition-colors" />
                  </div>
                  <p className="text-sm text-[#d9d9d9]/70 text-center group-hover:text-white transition-colors">
                    {viz.title}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-[#8c52ff] mb-1 block">{viz.category}</span>
                    <span className="text-sm text-white font-medium">{viz.title}</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-4 bg-[#8c52ff]/30 group-hover:h-6 transition-all" />
                  <div className="absolute top-0 right-0 h-px w-4 bg-[#8c52ff]/30 group-hover:w-6 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-[#0a0e27]/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}
          {selectedImage < filteredVisualizations.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Content */}
          <div
            className="max-w-4xl w-full bg-[#121212] border border-[#8c52ff]/20 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-[#0a0e27] flex items-center justify-center mb-6">
              <div className="text-center">
                <Image className="w-16 h-16 text-[#8c52ff]/50 mx-auto mb-4" />
                <p className="text-[#d9d9d9]/50">Visualization Placeholder</p>
                <p className="text-sm text-[#8c52ff]/70 mt-2">Image would display here</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#8c52ff] mb-1 block">
                  {filteredVisualizations[selectedImage]?.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {filteredVisualizations[selectedImage]?.title}
                </h3>
              </div>
              <div className="text-sm text-[#d9d9d9]/50">
                {selectedImage + 1} / {filteredVisualizations.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Visualizations;
