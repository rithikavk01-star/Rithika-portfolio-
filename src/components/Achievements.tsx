import { 
  Trophy, 
  Briefcase, 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      default:
        return <Trophy className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative bg-[#070b12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Significant milestones earned through proactive technical exploration, competitive internships, and software development.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-white/5 group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-cyan-400">{item.category}</span>
                <span className="flex items-center gap-1 text-slate-300 font-medium">
                  Verified Milestone
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
