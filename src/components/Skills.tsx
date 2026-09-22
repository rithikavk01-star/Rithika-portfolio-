import { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Terminal, 
  Database, 
  Layers, 
  Check, 
  Flame, 
  CheckCircle, 
  GitBranch, 
  Cpu, 
  FileCode, 
  Globe 
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

type CategoryFilter = 'All' | 'AI & GenAI' | 'Languages' | 'Web Development' | 'Tools & Databases';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = ['All', 'AI & GenAI', 'Languages', 'Web Development', 'Tools & Databases'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  // Helper icon selector based on skill name
  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'java':
        return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'javascript':
        return <FileCode className="w-5 h-5 text-yellow-400" />;
      case 'generative ai':
      case 'agentic ai & memory':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'prompt engineering':
      case 'vibe coding':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'html5':
      case 'css3':
      case 'responsive web design':
      case 'frontend architecture':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'sql':
      case 'relational sql databases':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'git & github':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Core technical proficiencies spanning Artificial Intelligence, core programming languages, web technologies, and software engineering tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-slate-900/60 border ${
                skill.highlight ? 'border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-slate-900/80' : 'border-white/10'
              } hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/5 group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.name)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">{skill.category}</p>
                  </div>
                </div>

                {skill.highlight && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <Flame className="w-2.5 h-2.5 text-cyan-400" />
                    Focus
                  </span>
                )}
              </div>

              {/* Progress representation */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-slate-400 text-[11px]">Proficiency Level</span>
                  <span className="font-mono text-cyan-400 font-semibold text-[11px]">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Summary Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/30 border border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">AI-First Developer</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Active practitioner of Generative AI, Prompt Engineering, and Agentic knowledge architectures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Multi-Language Foundation</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Strong coding base in Python, Java, and JavaScript with structured relational database knowledge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Collaborative Tooling</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Proficient in Git, GitHub workflows, semantic code commits, and team version control.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
