export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  featured: boolean;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  simulationType?: 'ecotrack' | 'cybershield' | 'aidoubt';
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  badge: string;
  description: string;
  achievements: string[];
  skills: string[];
  iconType: 'ai' | 'marketing' | 'web';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'GenAI' | 'Design Thinking' | 'Development' | 'AI Engineering';
  date: string;
  credentialId?: string;
  skills: string[];
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'AI & GenAI' | 'Languages' | 'Web Development' | 'Tools & Databases';
  proficiency: number;
  highlight?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  period: string;
  location: string;
  coursework: string[];
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  tag: string;
}
