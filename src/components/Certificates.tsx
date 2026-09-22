import { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Cpu, 
  Brain, 
  FileCheck 
} from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { Certificate } from '../types';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 relative bg-[#070b12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional certifications in Enterprise Design Thinking, Generative AI engineering, and modern development paradigms.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert) => {
            const isIBM = cert.id === 'ibm-design-thinking';

            return (
              <div
                key={cert.id}
                className="flex flex-col justify-between p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium ${
                      isIBM 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold' 
                        : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {cert.issuer}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Verified
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 block">Core Competencies:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Details Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    ID: {cert.credentialId || 'VERIFIED'}
                  </span>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#0d1424] border border-cyan-500/30 rounded-3xl shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">{selectedCert.issuer}</span>
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-900 border border-white/10">
              <h4 className="text-xs font-mono uppercase text-slate-400">Verified Skills & Knowledge Areas:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCert.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-mono">Credential ID: {selectedCert.credentialId}</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
