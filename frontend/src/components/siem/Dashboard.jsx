import React, { useEffect, useRef, useState } from 'react';
import { dashboardFeaturesData } from '../../data/mockData';
import { Activity, Bell, Search, Network, AlertTriangle, Clock, Code, FileDown, Monitor, ExternalLink } from 'lucide-react';

const iconMap = {
  Activity,
  Bell,
  Search,
  Network,
  AlertTriangle,
  Clock,
  Code,
  FileDown
};

const Dashboard = () => {
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
      id="dashboard"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0e27] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#4d238b]/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#8c52ff]/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#8c52ff]/10 border border-[#8c52ff]/30 text-[#8c52ff] text-sm font-medium mb-4">
            Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade Security Dashboard
          </h2>
          <p className="text-lg text-[#d9d9d9]/70 max-w-2xl mx-auto">
            ELK Stack-inspired real-time monitoring and visualization
          </p>
        </div>

        {/* Dashboard Preview */}
        <div
          className={`relative mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Browser Frame */}
          <div className="bg-[#121212] border border-[#8c52ff]/20 overflow-hidden">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0e27] border-b border-[#8c52ff]/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-[#121212] text-sm text-[#d9d9d9]/50 flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  SIEM Security Dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="p-6 space-y-4">
              {/* Top Bar */}
              <div className="flex items-center justify-between p-4 bg-[#0a0e27] border border-[#8c52ff]/10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#8c52ff]/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-[#8c52ff]" />
                  </div>
                  <span className="text-white font-medium">Real-Time Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-500">Live</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Total Events', value: '1,247,892', color: 'text-[#8c52ff]' },
                  { label: 'Anomalies', value: '23', color: 'text-red-400' },
                  { label: 'Normal', value: '1,247,869', color: 'text-green-400' },
                  { label: 'Active Alerts', value: '5', color: 'text-yellow-400' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 bg-[#0a0e27] border border-[#8c52ff]/10">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-[#d9d9d9]/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="grid grid-cols-3 gap-4">
                {/* Main Chart */}
                <div className="col-span-2 p-4 bg-[#0a0e27] border border-[#8c52ff]/10 h-48">
                  <div className="text-sm text-[#d9d9d9]/70 mb-4">Network Traffic Over Time</div>
                  <div className="h-32 flex items-end justify-between gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#4d238b] to-[#8c52ff]"
                        style={{ height: `${20 + Math.random() * 80}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Pie Chart Mockup */}
                <div className="p-4 bg-[#0a0e27] border border-[#8c52ff]/10 h-48">
                  <div className="text-sm text-[#d9d9d9]/70 mb-4">Traffic Classification</div>
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#4d238b" strokeWidth="10" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#8c52ff" strokeWidth="10" strokeDasharray="180 283" strokeDashoffset="0" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#8e50ec" strokeWidth="10" strokeDasharray="60 283" strokeDashoffset="-180" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Open Dashboard Button */}
          <div className="mt-6 text-center">
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-[#4d238b] text-white font-medium transition-all duration-400 hover:bg-[#8c52ff] hover:shadow-[0_0_30px_rgba(140,82,255,0.4)]">
              <span>Open Live Dashboard</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dashboard Features Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {dashboardFeaturesData.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Activity;
            return (
              <div
                key={index}
                className="group p-4 bg-[#121212] border border-[#8c52ff]/10 hover:border-[#8c52ff]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-6 h-6 text-[#8c52ff]/70 mb-3 group-hover:text-[#8c52ff] transition-colors" />
                <span className="text-sm text-[#d9d9d9]/70 group-hover:text-white transition-colors">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
