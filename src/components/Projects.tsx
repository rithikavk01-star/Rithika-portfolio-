import { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Play, 
  CheckCircle2, 
  Radio, 
  ShieldAlert, 
  Cpu, 
  FileCode 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectSimulatorModal from './ProjectSimulatorModal';

export default function Projects() {
  const [selectedProjectForSim, setSelectedProjectForSim] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#070b12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world systems engineered across sustainable AI computing, proactive threat cybersecurity, and intelligent academic assistance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const isEcoTrack = project.id === 'ecotrack';
            const isCyberShield = project.id === 'cybershield';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="flex flex-col rounded-3xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/40 overflow-hidden group"
              >
                {/* Project Header Banner / Preview Accent */}
                <div className={`p-6 border-b border-white/10 relative overflow-hidden ${
                  isEcoTrack 
                    ? 'bg-gradient-to-br from-emerald-950/40 via-cyan-950/30 to-slate-900' 
                    : isCyberShield
                    ? 'bg-gradient-to-br from-indigo-950/40 via-blue-950/30 to-slate-900'
                    : 'bg-gradient-to-br from-sky-950/40 via-slate-900 to-slate-900'
                }`}>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                    
                    {project.simulationType && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Interactive Demo
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mt-1 leading-snug">
                    {project.subtitle}
                  </p>

                  {/* Visual Accent Badge */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {isEcoTrack && <Radio className="w-16 h-16 text-emerald-400" />}
                    {isCyberShield && <ShieldAlert className="w-16 h-16 text-indigo-400" />}
                    {!isEcoTrack && !isCyberShield && <Sparkles className="w-16 h-16 text-cyan-400" />}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Highlights from User Requirements */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                        Key Features & Capabilities:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="pt-4 border-t border-white/10 mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: GitHub & Live Demo */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        id={`project-demo-btn-${project.id}`}
                        onClick={() => setSelectedProjectForSim(project)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Interactive Demo</span>
                      </button>

                      <a
                        id={`project-github-btn-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-white/10 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Simulator Modal */}
      {selectedProjectForSim && (
        <ProjectSimulatorModal
          project={selectedProjectForSim}
          onClose={() => setSelectedProjectForSim(null)}
        />
      )}
    </section>
  );
}
