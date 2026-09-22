import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Award, 
  Building2 
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal undergraduate academic journey in Information Technology at SNS College of Technology.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-cyan-500/30 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              
              {/* Institution and Degree Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 inline-block mb-1.5">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {EDUCATION_DATA.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300 mt-1">
                      <span className="font-semibold text-cyan-300">{EDUCATION_DATA.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {EDUCATION_DATA.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{EDUCATION_DATA.status}</span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-1.5 flex items-center gap-1 sm:justify-end">
                    <Calendar className="w-3.5 h-3.5" />
                    {EDUCATION_DATA.period}
                  </p>
                </div>
              </div>

              {/* Coursework & Foundations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                
                {/* Core Courses */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Relevant IT Coursework</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {EDUCATION_DATA.coursework.map((course, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-800/50 border border-white/5 text-xs text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span>Academic Highlights</span>
                  </h4>
                  <ul className="space-y-3">
                    {EDUCATION_DATA.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
