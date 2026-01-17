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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0e27] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Visualizations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Security Analytics Visualizations
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto px-4">
            Comprehensive visual analysis of threat detection and network behavior
          </p>
        </div>

        {/* Category Filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 min-h-[40px] ${
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#8c52ff]/10 border border-[#8c52ff]/20 mb-2 sm:mb-3 md:mb-4 group-hover:bg-[#8c52ff]/20 transition-colors">
                    <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#8c52ff]/70 group-hover:text-[#8c52ff] transition-colors" />
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#d9d9d9]/70 text-center group-hover:text-white transition-colors line-clamp-2">
                    {viz.title}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
                    <span className="text-[10px] sm:text-xs text-[#8c52ff] mb-0.5 sm:mb-1 block">{viz.category}</span>
                    <span className="text-xs sm:text-sm text-white font-medium line-clamp-1">{viz.title}</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-3 sm:h-4 bg-[#8c52ff]/30 group-hover:h-4 sm:group-hover:h-6 transition-all" />
                  <div className="absolute top-0 right-0 h-px w-3 sm:w-4 bg-[#8c52ff]/30 group-hover:w-4 sm:group-hover:w-6 transition-all" />
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
            className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Navigation */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          )}
          {selectedImage < filteredVisualizations.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          )}

          {/* Content */}
          <div
            className="max-w-4xl w-full bg-[#121212] border border-[#8c52ff]/20 p-4 sm:p-6 md:p-8 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-[#0a0e27] flex items-center justify-center mb-4 sm:mb-6">
              <div className="text-center">
                <Image className="w-12 h-12 sm:w-16 sm:h-16 text-[#8c52ff]/50 mx-auto mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-[#d9d9d9]/50">Visualization Placeholder</p>
                <p className="text-xs sm:text-sm text-[#8c52ff]/70 mt-1 sm:mt-2">Image would display here</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] sm:text-xs text-[#8c52ff] mb-0.5 sm:mb-1 block">
                  {filteredVisualizations[selectedImage]?.category}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {filteredVisualizations[selectedImage]?.title}
                </h3>
              </div>
              <div className="text-xs sm:text-sm text-[#d9d9d9]/50">
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
