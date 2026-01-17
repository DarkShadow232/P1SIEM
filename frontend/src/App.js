import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// SIEM Portfolio Components
import Header from "./components/siem/Header";
import Hero from "./components/siem/Hero";
import Overview from "./components/siem/Overview";
import Features from "./components/siem/Features";
import AIModels from "./components/siem/AIModels";
import PerformanceChart from "./components/siem/PerformanceChart";
import Dashboard from "./components/siem/Dashboard";
import Methodology from "./components/siem/Methodology";
import Results from "./components/siem/Results";
import Visualizations from "./components/siem/Visualizations";
import TechStack from "./components/siem/TechStack";
import Contact from "./components/siem/Contact";
import Footer from "./components/siem/Footer";

const SIEMPortfolio = () => {
  return (
    <div className="min-h-screen bg-[#0a0e27] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Features />
        <AIModels />
        <PerformanceChart />
        <Dashboard />
        <Methodology />
        <Results />
        <Visualizations />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SIEMPortfolio />} />
          <Route path="*" element={<SIEMPortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
