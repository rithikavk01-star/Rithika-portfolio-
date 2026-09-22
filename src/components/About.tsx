import { 
  Bot, 
  Sparkles, 
  Globe, 
  Code, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Terminal,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CAREER_INTERESTS = [
  {
    title: 'Artificial Intelligence',
    description: 'Developing data-driven models, machine learning algorithms, and intelligent systems that learn and adapt.',
    icon: Cpu,
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/30',
    iconColor: 'text-cyan-400'
  },
  {
    title: 'Generative AI',
    description: 'Architecting LLM applications, prompt engineering workflows, agentic memory networks, and retrieval systems.',
    icon: Sparkles,
    color: 'from-sky-500/20 to-indigo-500/10',
    border: 'border-sky-500/30',
    iconColor: 'text-sky-300'
  },
  {
    title: 'Web Development',
    description: 'Engineering responsive, modern web applications with clean typography, intuitive user experiences, and robust architectures.',
    icon: Globe,
    color: 'from-blue-500/20 to-teal-500/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Software Development',
    description: 'Applying object-oriented design, algorithmic efficiency, clean code practices, and system problem-solving in Python & Java.',
    icon: Code,
    color: 'from-indigo-500/20 to-purple-500/10',
    border: 'border-indigo-500/30',
    iconColor: 'text-indigo-400'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#070b12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>DISCOVER MY PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A dedicated B.Tech IT student blending academic foundations in computer science with practical hands-on experience in AI and software engineering.
          </p>
        </div>

        {/* 2-Column Grid: Story & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Academic Background & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Academic & Engineering Journey</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                I am <strong className="text-white font-semibold">Rithika M</strong>, currently pursuing my Bachelor of Technology in Information Technology at <span className="text-cyan-300 font-medium">SNS College of Technology</span>. Having successfully completed my foundational 1st year, I am actively broadening my technical depth across algorithm design, systems programming, and modern intelligent architectures.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                What drives me most is creating purposeful software. Whether it's analyzing carbon emissions to help combat climate change or designing heuristic cybersecurity defenses to detect phishing links and deceptive QR codes, I relish transforming ideas into working code.
              </p>
              
              {/* College & Department Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-white/5">
                  <p className="text-xs text-slate-400 font-mono">Current Status</p>
                  <p className="text-sm font-semibold text-cyan-300">{PERSONAL_INFO.status}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-white/5">
                  <p className="text-xs text-slate-400 font-mono">Institution</p>
                  <p className="text-sm font-semibold text-white">{PERSONAL_INFO.college}</p>
                </div>
              </div>
            </div>

            {/* Core Values / Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">Continuous Learner</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Earned multiple specialized certifications in GenAI, Prompt Engineering, and Design Thinking alongside curriculum courses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-sm font-bold text-white">Practical Mindset</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Already contributed to 3 distinct industry internships (AI/ML, Web Dev, Digital Outreach) during undergraduate studies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats & Career Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Metrics Bento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/20 text-center">
                <span className="font-mono text-3xl font-extrabold text-cyan-400">1st</span>
                <p className="text-xs font-semibold text-slate-200 mt-1">Year Completed</p>
                <p className="text-[11px] text-slate-400">B.Tech IT, SNS Tech</p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/20 text-center">
                <span className="font-mono text-3xl font-extrabold text-blue-400">3</span>
                <p className="text-xs font-semibold text-slate-200 mt-1">Internships</p>
                <p className="text-[11px] text-slate-400">AI/ML & Web Engineering</p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-indigo-500/20 text-center">
                <span className="font-mono text-3xl font-extrabold text-indigo-400">5+</span>
                <p className="text-xs font-semibold text-slate-200 mt-1">Certificates</p>
                <p className="text-[11px] text-slate-400">IBM, GenAI, Prompting</p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-500/20 text-center">
                <span className="font-mono text-3xl font-extrabold text-teal-400">3+</span>
                <p className="text-xs font-semibold text-slate-200 mt-1">Flagship Projects</p>
                <p className="text-[11px] text-slate-400">EcoTrack, CyberShield & more</p>
              </div>
            </div>

            {/* Quick Summary Pill Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-indigo-950/40 border border-cyan-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-2">
                Placement & Internship Goal
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Actively seeking summer internships and pre-placement opportunities where I can apply my Python, AI/ML, and Full-Stack skills to high-impact production engineering teams.
              </p>
            </div>

          </div>

        </div>

        {/* Career Interests Sub-section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Primary Career Interests</span>
              </h3>
              <p className="text-xs text-slate-400">Areas where I continuously experiment, build, and expand my expertise</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAREER_INTERESTS.map((interest, idx) => {
              const Icon = interest.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-gradient-to-b ${interest.color} to-slate-900/80 border ${interest.border} hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <div className={`p-2.5 rounded-xl bg-slate-900/80 border border-white/10 w-fit mb-3.5 ${interest.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
