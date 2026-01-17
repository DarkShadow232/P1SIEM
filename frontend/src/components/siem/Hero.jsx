import React, { useEffect, useRef } from 'react';
import { ChevronDown, Cpu, Lock } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < Math.min(numParticles, 80); i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 82, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections (limit on mobile for performance)
        const connectionDistance = window.innerWidth < 768 ? 100 : 150;
        particles.slice(i + 1, i + 10).forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(140, 82, 255, ${0.1 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e27]">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27] z-10" />
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#4d238b]/20 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[#8c52ff]/15 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 pb-8">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#8c52ff]/30 blur-2xl sm:blur-3xl rounded-full scale-150 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_siemshield/artifacts/octpbb5h_siem-logo.png" 
                alt="SIEM Security Logo" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain drop-shadow-[0_0_20px_rgba(140,82,255,0.5)] sm:drop-shadow-[0_0_30px_rgba(140,82,255,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8c52ff]/10 border border-[#8c52ff]/30 rounded-full mb-6 sm:mb-8">
          <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8c52ff]" />
          <span className="text-xs sm:text-sm text-[#d9d9d9]">Enterprise-Grade Security Intelligence</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
          Elevating Enterprise Security Using a
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8c52ff] to-[#8e50ec]">
            SIEM Solution
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#d9d9d9]/80 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          AI-Powered Network Anomaly Detection & Threat Classification
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <button className="group w-full sm:w-auto flex items-center justify-center sm:justify-between gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#4d238b] text-white font-medium text-base sm:text-lg transition-all duration-400 hover:bg-[#8c52ff] hover:shadow-[0_0_40px_rgba(140,82,255,0.5)] min-h-[52px]">
            <span>View Demo Dashboard</span>
            <Lock className="w-5 h-5 group-hover:animate-pulse" />
          </button>
          <button className="group w-full sm:w-auto flex items-center justify-center sm:justify-between gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white font-medium text-base sm:text-lg transition-all duration-400 hover:bg-white hover:text-[#0a0e27] backdrop-blur-sm min-h-[52px]">
            <span>Explore Models</span>
            <Cpu className="w-5 h-5" />
          </button>
        </div>

        {/* Floating Stats */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {[
            { value: '5', label: 'AI Models' },
            { value: '98.1%', label: 'Accuracy' },
            { value: 'Real-Time', label: 'Detection' }
          ].map((stat, index) => (
            <div key={index} className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#8c52ff]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#d9d9d9]/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToOverview}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce p-2"
        aria-label="Scroll to overview"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#8c52ff]/70 hover:text-[#8c52ff] transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
