import { useState, useRef, ChangeEvent } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2,
  Copy,
  ExternalLink,
  Camera,
  Upload,
  RotateCcw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onOpenResume, onNavigate }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-cyan-300 mb-6 backdrop-blur-md shadow-sm shadow-cyan-950">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide">Available for Internships & Collaborations</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2 mb-4">
              <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium tracking-wide">
                Hello world, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Rithika M
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full mt-2" />
            </div>

            {/* Subtitle / Focus Areas */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>B.Tech IT Student</span>
              <span className="text-cyan-400">•</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
                AI & GenAI Enthusiast
              </span>
              <span className="text-cyan-400">•</span>
              <span>Software Developer</span>
            </h2>

            {/* Education Highlight Card */}
            <div className="w-full max-w-xl p-3.5 rounded-xl bg-slate-900/70 border border-white/10 mb-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">College & Current Status</p>
                  <p className="text-sm font-semibold text-white">
                    SNS College of Technology <span className="text-cyan-400 font-normal">| Completed 1st Year B.Tech IT</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Passionate about engineering real-world solutions with <strong className="text-cyan-300 font-medium">Artificial Intelligence</strong>, <strong className="text-sky-300 font-medium">Generative AI</strong>, and <strong className="text-white font-medium">Full-Stack Development</strong>. Creator of <span className="text-slate-100 font-semibold underline decoration-cyan-500 decoration-2">EcoTrack</span> (Carbon Emission Monitoring) and <span className="text-slate-100 font-semibold underline decoration-indigo-500 decoration-2">CyberShield</span> (AI Phishing Detection).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              <button
                id="hero-explore-projects-btn"
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-200 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/60 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800 border border-white/10 transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social & Connect Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 w-full max-w-xl">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Connect:</span>
              
              {/* GitHub Button */}
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs transition-colors"
              >
                <Github className="w-4 h-4 text-slate-200" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* LinkedIn Button */}
              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              {/* Email Copy Button */}
              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                title="Copy Email"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo Area */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-indigo-600/20 blur-xl transform -rotate-1 scale-105" />

              {/* Profile Card Container */}
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0d1424] border border-white/15 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Profile Image Frame */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 border border-cyan-500/30 flex flex-col items-center justify-center p-6 text-center group">
                  
                  {/* Digital Grid Graphic Inside Frame */}
                  <div 
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {customPhotoUrl ? (
                    <div className="relative z-10 w-32 h-32 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-xl shadow-cyan-500/30 mb-3 group/img">
                      <img
                        src={customPhotoUrl}
                        alt="Rithika M"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setCustomPhotoUrl(null)}
                        title="Reset to default avatar"
                        className="absolute bottom-1.5 right-1.5 p-1 rounded-md bg-black/70 hover:bg-black text-white text-[10px] flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    /* Professional Avatar Badge Representation */
                    <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-1 shadow-xl shadow-cyan-500/30 mb-4 transform group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-[14px] bg-[#0d1424] flex items-center justify-center">
                        <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                          RM
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-0.5">Rithika M</h3>
                    <p className="text-xs text-cyan-400 font-mono mb-2">B.Tech IT • SNS College</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[11px] text-slate-300">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Software & AI Developer</span>
                    </div>
                  </div>

                  {/* Corner Accent Pills */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                    Year 2
                  </div>

                  {/* Upload photo trigger */}
                  <div className="absolute top-3 left-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      title="Upload headshot / profile photo"
                      className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/10 text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Camera className="w-3 h-3" />
                      <span className="hidden group-hover:inline text-[10px]">Upload Photo</span>
                    </button>
                  </div>
                </div>

                {/* Floating Micro-Badges around Profile Card */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Specialization</p>
                      <p className="text-xs font-semibold text-slate-200">GenAI & ML</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Core Stacks</p>
                      <p className="text-xs font-semibold text-slate-200">Python & Java</p>
                    </div>
                  </div>
                </div>

                {/* Verified Credentials Banner */}
                <div className="mt-2 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs text-emerald-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium text-[11px]">IBM Enterprise Design Thinking</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400/80">Certified</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
