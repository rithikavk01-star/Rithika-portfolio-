import { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Check, 
  Copy, 
  FileText, 
  Sparkles, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Code
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, INTERNSHIPS_DATA, CERTIFICATES_DATA, SKILLS_DATA, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
RITHIKA M
${PERSONAL_INFO.title}
College: ${PERSONAL_INFO.college} (${PERSONAL_INFO.education}) - ${PERSONAL_INFO.status}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubPlaceholder}
LinkedIn: ${PERSONAL_INFO.linkedinPlaceholder}

CAREER INTERESTS:
- Artificial Intelligence
- Generative AI
- Web Development
- Software Development

TECHNICAL SKILLS:
- Languages: Python, Java, JavaScript, SQL
- AI & GenAI: Generative AI, Prompt Engineering, Agentic AI, Vibe Coding
- Web & Tools: HTML5, CSS3, Responsive Design, Git & GitHub

PROJECTS:
1. EcoTrack – Carbon Emissions Monitoring and Reducing System
   - AI-powered carbon emission analysis & CO2 monitoring
   - Real-time alerts, reports, and AI recommendations
   - Simulation mode for sensor streams with ESP32 IoT readiness

2. CyberShield – AI-based URL and QR Phishing Detection System
   - Heuristic AI classification for malicious links and QR code payloads

3. AI Doubt Solver
   - Context-aware STEM tutor with structured problem breakdown

INTERNSHIPS:
- AI/ML Intern – Mechnido
- Web Development Intern – Extol Tech Solution
- Digital Marketing Intern – InAmigos Foundation

CERTIFICATES:
- IBM Enterprise Design Thinking Practitioner
- Generative AI Certifications
- Prompt Engineering Certification
- Vibe Coding Certification
- Knowledge Bases and Memory for Agentic AI
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c1220] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">Rithika M — Curriculum Vitae</h3>
              <p className="text-xs text-slate-400">B.Tech IT • SNS College of Technology (Template Resume)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-white/10 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-semibold text-white shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1 bg-[#090e18] text-slate-200 print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Rithika M</h1>
              <p className="text-sm font-semibold text-cyan-400 mt-0.5">B.Tech Information Technology Student</p>
              <p className="text-xs text-slate-400 mt-1">
                SNS College of Technology, Coimbatore, Tamil Nadu
              </p>
            </div>

            <div className="text-right text-xs text-slate-300 space-y-1 font-mono">
              <p>Email: {PERSONAL_INFO.email}</p>
              <p>LinkedIn: linkedin.com/in/your-profile</p>
              <p>GitHub: github.com/your-username</p>
              <p className="text-emerald-400 font-semibold">{PERSONAL_INFO.status}</p>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <p className="font-bold text-white">{EDUCATION_DATA.institution}</p>
                <p className="text-slate-300">{EDUCATION_DATA.degree}</p>
                <p className="text-xs text-slate-400">Coursework: {EDUCATION_DATA.coursework.join(', ')}</p>
              </div>
              <div className="text-right text-xs text-slate-400 font-mono">
                <p>{EDUCATION_DATA.period}</p>
                <p className="text-cyan-300">{EDUCATION_DATA.status}</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p><strong className="text-white">Programming Languages:</strong> Python, Java, JavaScript, SQL</p>
              <p><strong className="text-white">AI & GenAI:</strong> Generative AI, Prompt Engineering, Agentic AI, Vibe Coding</p>
              <p><strong className="text-white">Web Development:</strong> HTML5, CSS3, Responsive Design, Frontend Standards</p>
              <p><strong className="text-white">Tools & Practices:</strong> Git, GitHub, IBM Enterprise Design Thinking</p>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1">
              Featured Engineering Projects
            </h2>
            {PROJECTS_DATA.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-white">{proj.title} – {proj.subtitle}</span>
                  <span className="text-[11px] font-mono text-cyan-400">{proj.category}</span>
                </div>
                <p className="text-xs text-slate-300">{proj.description}</p>
                <ul className="list-disc pl-4 text-[11px] text-slate-400 space-y-0.5">
                  {proj.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Internships */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1">
              Industry Experience
            </h2>
            {INTERNSHIPS_DATA.map((intern) => (
              <div key={intern.id} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-white">{intern.role} – {intern.company}</span>
                  <span className="text-[11px] font-mono text-slate-400">{intern.period}</span>
                </div>
                <p className="text-xs text-slate-300">{intern.description}</p>
                <p className="text-[11px] text-slate-400"><strong className="text-slate-300">Competencies:</strong> {intern.skills.join(', ')}</p>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1">
              Certifications & Professional Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATES_DATA.map((c) => (
                <div key={c.id} className="p-2 rounded-lg bg-slate-900/60 border border-white/5">
                  <p className="font-semibold text-white">{c.title}</p>
                  <p className="text-[11px] text-cyan-400">{c.issuer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Modal Bottom Banner */}
        <div className="p-4 border-t border-white/10 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
          <span>Placeholder data for external links can be replaced anytime.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
