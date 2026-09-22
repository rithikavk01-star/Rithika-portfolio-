import { 
  Briefcase, 
  Cpu, 
  Globe, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  BadgeCheck 
} from 'lucide-react';
import { INTERNSHIPS_DATA } from '../data/portfolioData';

export default function Internships() {
  const getInternshipIcon = (type: string) => {
    switch (type) {
      case 'ai':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'web':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'marketing':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="internships" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY IMMERSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Internships
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical professional experience across machine learning research, front-end web engineering, and strategic outreach.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-cyan-500/30 ml-4 md:ml-32 space-y-12">
          {INTERNSHIPS_DATA.map((internship, index) => {
            return (
              <div key={internship.id} className="relative pl-6 md:pl-10 group">
                
                {/* Timeline node icon */}
                <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-[#090d16] border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                </div>

                {/* Desktop Left Period Indicator */}
                <div className="hidden md:block absolute -left-32 top-1 w-24 text-right">
                  <span className="text-xs font-mono font-medium text-cyan-400">
                    Internship
                  </span>
                  <p className="text-[10px] text-slate-500">Year 1 Track</p>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/90 border border-white/5">
                        {getInternshipIcon(internship.iconType)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {internship.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="font-semibold text-slate-300">{internship.company}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-cyan-300 border border-cyan-500/30">
                      {internship.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {internship.description}
                  </p>

                  {/* Key Contributions & Achievements */}
                  <div className="space-y-2 mb-5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Contributions & Learnings:
                    </h4>
                    <ul className="space-y-1.5">
                      {internship.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Applied */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] font-mono text-slate-400 mr-2">Skills:</span>
                    {internship.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
