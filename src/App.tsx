/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-[#e2e8f0] selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Layout */}
      <main>
        {/* Section 1: Home / Hero */}
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Projects (EcoTrack, CyberShield, AI Doubt Solver) */}
        <Projects />

        {/* Section 5: Internships (Mechnido, InAmigos, Extol Tech) */}
        <Internships />

        {/* Section 6: Certificates */}
        <Certificates />

        {/* Section 7: Education (SNS College of Technology - B.Tech IT) */}
        <Education />

        {/* Section 8: Achievements */}
        <Achievements />

        {/* Section 9: Contact */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

