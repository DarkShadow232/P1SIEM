import React, { useEffect, useRef, useState } from 'react';
import { visualizationsData } from '../../data/mockData';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Visualizations = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
    if (newIndex >= 0 && newIndex < visualizationsData.length) {
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

        {/* Visualizations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {visualizationsData.map((viz, index) => (
            <div
              key={viz.id}
              className={`group relative bg-[#121212] border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={viz.imageUrl}
                  alt={viz.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="text-[10px] sm:text-xs text-[#8c52ff] mb-1 block">{viz.category}</span>
                  <span className="text-sm sm:text-base text-white font-medium">{viz.title}</span>
                </div>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-[#8c52ff]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-px h-4 bg-[#8c52ff]/50 group-hover:h-6 transition-all" />
                <div className="absolute top-0 left-0 h-px w-4 bg-[#8c52ff]/50 group-hover:w-6 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-[#0a0e27]/98 backdrop-blur-md z-50 flex items-center justify-center p-4"
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
          {selectedImage < visualizationsData.length - 1 && (
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
            className="max-w-5xl w-full bg-[#121212] border border-[#8c52ff]/20 overflow-hidden mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="bg-[#0a0e27] p-2 sm:p-4">
              <img
                src={visualizationsData[selectedImage]?.imageUrl}
                alt={visualizationsData[selectedImage]?.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            
            {/* Info bar */}
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#8c52ff]/10">
              <div>
                <span className="text-[10px] sm:text-xs text-[#8c52ff] mb-0.5 sm:mb-1 block">
                  {visualizationsData[selectedImage]?.category}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {visualizationsData[selectedImage]?.title}
                </h3>
              </div>
              <div className="text-xs sm:text-sm text-[#d9d9d9]/50">
                {selectedImage + 1} / {visualizationsData.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Visualizations;
