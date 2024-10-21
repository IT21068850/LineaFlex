import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Litreature from "./components/Litreature";
import ResearchGap from "./components/ResearchGap";
import ResearchProblem from "./components/ResearchProblem";
import ReserachObjective from "./components/ReserachObjective";
import Methodology from "./components/Methodology";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";
import DocumentGrid from "./components/DocumentGrid";
import Team from "./components/Team";
import Contact from "./components/Contact";

const App = () => {
    return (
      <div className="overflow-x-hidden text-neutral-300 antialiased
        selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-
          [radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,
          255,255,0))]"></div>
        </div>
        
  
        <div className="container mx-auto px-8 min-h-screen">
          <Navbar />
          <Hero />
          <Litreature />
          <ResearchGap />
          <ResearchProblem />
          <ReserachObjective />
          <Methodology />
          <Technologies />
          <Timeline />
          <DocumentGrid />
          <Team />
          <Contact />
        </div>
      </div>
    );
  };

export default App