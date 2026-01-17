import React, { useEffect, useRef } from 'react';
import { Shield, ChevronDown, Cpu, Lock, Eye } from 'lucide-react';

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
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numParticles; i++) {
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

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(140, 82, 255, ${0.1 * (1 - distance / 150)})`;
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

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4d238b]/20 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8c52ff]/15 rounded-full blur-[100px] z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#8c52ff]/30 blur-3xl rounded-full scale-150 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative p-6 border-2 border-[#8c52ff]/40 rounded-2xl bg-[#0a0e27]/60 backdrop-blur-sm">
              <Shield className="w-24 h-24 text-[#8c52ff] animate-pulse" />
              <div className="absolute -top-2 -right-2">
                <Eye className="w-6 h-6 text-[#8e50ec]" />
              </div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8c52ff]/10 border border-[#8c52ff]/30 rounded-full mb-8">
          <Cpu className="w-4 h-4 text-[#8c52ff]" />
          <span className="text-sm text-[#d9d9d9]">Enterprise-Grade Security Intelligence</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Elevating Enterprise Security Using a
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8c52ff] to-[#8e50ec]">
            SIEM Solution
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#d9d9d9]/80 mb-10 max-w-2xl mx-auto">
          AI-Powered Network Anomaly Detection & Threat Classification
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group flex items-center justify-between gap-4 px-8 py-4 bg-[#4d238b] text-white font-medium text-lg transition-all duration-400 hover:bg-[#8c52ff] hover:shadow-[0_0_40px_rgba(140,82,255,0.5)] min-w-[220px]">
            <span>View Demo Dashboard</span>
            <Lock className="w-5 h-5 group-hover:animate-pulse" />
          </button>
          <button className="group flex items-center justify-between gap-4 px-8 py-4 bg-white/10 text-white font-medium text-lg transition-all duration-400 hover:bg-white hover:text-[#0a0e27] min-w-[220px] backdrop-blur-sm">
            <span>Explore Models</span>
            <Cpu className="w-5 h-5" />
          </button>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '5', label: 'AI Models' },
            { value: '98.1%', label: 'Accuracy' },
            { value: 'Real-Time', label: 'Detection' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#8c52ff]">{stat.value}</div>
              <div className="text-sm text-[#d9d9d9]/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToOverview}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-[#8c52ff]/70 hover:text-[#8c52ff] transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
