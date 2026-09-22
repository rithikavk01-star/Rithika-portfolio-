import { Project, Internship, Certificate, SkillItem, EducationItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Rithika M',
  title: 'B.Tech IT Student | AI & Software Developer',
  tagline: 'Passionate about Generative AI, Machine Learning, and building innovative software solutions for real-world impact.',
  education: 'B.Tech Information Technology',
  college: 'SNS College of Technology',
  status: 'Completed 1st year of B.Tech IT',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'rithikavk01@gmail.com', // user email from metadata
  emailPlaceholder: 'rithikavk01@gmail.com',
  githubPlaceholder: 'https://github.com/your-username',
  linkedinPlaceholder: 'https://linkedin.com/in/your-profile',
  resumePlaceholder: '#resume',
  interests: [
    'Artificial Intelligence',
    'Generative AI',
    'Web Development',
    'Software Development'
  ],
  bio: 'I am a passionate 2nd-year B.Tech Information Technology student at SNS College of Technology. Having completed my foundational first year with strong academic grounding in computer science principles, I actively specialize in Artificial Intelligence, Generative AI, and full-stack software development. With hands-on internship experience across AI/ML and Web Development, I enjoy engineering intuitive tools—from carbon emission tracking with IoT simulation to intelligent cybersecurity scanners.'
};

export const SKILLS_DATA: SkillItem[] = [
  // AI & GenAI
  { name: 'Generative AI', category: 'AI & GenAI', proficiency: 90, highlight: true },
  { name: 'Prompt Engineering', category: 'AI & GenAI', proficiency: 92, highlight: true },
  { name: 'Agentic AI & Memory', category: 'AI & GenAI', proficiency: 85, highlight: true },
  { name: 'Vibe Coding', category: 'AI & GenAI', proficiency: 88 },
  
  // Programming Languages
  { name: 'Python', category: 'Languages', proficiency: 88, highlight: true },
  { name: 'Java', category: 'Languages', proficiency: 82, highlight: true },
  { name: 'JavaScript', category: 'Languages', proficiency: 85, highlight: true },
  { name: 'SQL', category: 'Languages', proficiency: 80 },

  // Web Development
  { name: 'HTML5', category: 'Web Development', proficiency: 95 },
  { name: 'CSS3', category: 'Web Development', proficiency: 90 },
  { name: 'Responsive Web Design', category: 'Web Development', proficiency: 92 },
  { name: 'Frontend Architecture', category: 'Web Development', proficiency: 84 },

  // Tools & Databases
  { name: 'Git & GitHub', category: 'Tools & Databases', proficiency: 88, highlight: true },
  { name: 'Relational SQL Databases', category: 'Tools & Databases', proficiency: 82 },
  { name: 'Design Thinking (IBM)', category: 'Tools & Databases', proficiency: 86 }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ecotrack',
    title: 'EcoTrack',
    subtitle: 'Carbon Emissions Monitoring and Reducing System',
    description: 'An AI-powered environmental intelligence platform engineered to measure, monitor, and reduce industrial and domestic carbon footprints with intelligent recommendations and real-time alerts.',
    category: 'AI & Sustainability',
    featured: true,
    highlights: [
      'AI-powered carbon emission predictive analysis',
      'Continuous CO₂ concentration monitoring dashboard',
      'Real-time automated anomaly alerts and executive emission reports',
      'Actionable AI recommendations tailored to energy reduction',
      'Integrated Simulation Mode for sensor data streams',
      'Architecture prepared for future ESP32 IoT hardware integration'
    ],
    techStack: ['Python', 'Generative AI', 'IoT Simulation (ESP32 Ready)', 'JavaScript', 'HTML/CSS', 'Data Analytics'],
    githubUrl: 'https://github.com/your-username/ecotrack-carbon-monitoring',
    demoUrl: '#demo-ecotrack',
    simulationType: 'ecotrack'
  },
  {
    id: 'cybershield',
    title: 'CyberShield',
    subtitle: 'AI-based URL and QR Phishing Detection System',
    description: 'A proactive threat detection engine that evaluates malicious links and suspicious QR codes in real-time, leveraging AI heuristics and lexical pattern analysis to thwart cyber attacks.',
    category: 'Cybersecurity & AI',
    featured: true,
    highlights: [
      'Dual-input security scanner for both web URLs and scanned QR codes',
      'AI-driven heuristic feature classification for zero-day threat discovery',
      'Confidence safety scoring with instant risk classification',
      'Decoded payload inspector with redirects and certificate checks'
    ],
    techStack: ['Python', 'Machine Learning', 'Cybersecurity', 'JavaScript', 'QR Decoder', 'SQL'],
    githubUrl: 'https://github.com/your-username/cybershield-phishing-detection',
    demoUrl: '#demo-cybershield',
    simulationType: 'cybershield'
  },
  {
    id: 'ai-doubt-solver',
    title: 'AI Doubt Solver',
    subtitle: 'Intelligent Academic Assistant for STEM Concepts',
    description: 'A multi-modal academic companion built to resolve complex student doubts with step-by-step contextual explanations, guided prompt engineering, and memory-backed reasoning.',
    category: 'Generative AI & EdTech',
    featured: true,
    highlights: [
      'Context-aware mathematical and code problem breakdown',
      'Prompt-engineered structured reasoning with visual step guides',
      'Knowledge retrieval concepts for tailored curriculum assistance',
      'Interactive query playground for rapid clarification'
    ],
    techStack: ['Generative AI', 'Prompt Engineering', 'Python', 'Web UI', 'Agentic Memory'],
    githubUrl: 'https://github.com/your-username/ai-doubt-solver',
    demoUrl: '#demo-aidoubt',
    simulationType: 'aidoubt'
  }
];

export const INTERNSHIPS_DATA: Internship[] = [
  {
    id: 'mechnido',
    company: 'Mechnido',
    role: 'AI / ML Intern',
    period: 'Internship Experience',
    badge: 'AI & Machine Learning',
    description: 'Engaged in machine learning workflows, predictive modeling, and applied AI techniques for real-world analytical tasks.',
    achievements: [
      'Researched and implemented machine learning models for classification and pattern recognition',
      'Handled dataset preprocessing, feature engineering, and model performance evaluation',
      'Explored integration of intelligent models with client-facing interfaces'
    ],
    skills: ['Python', 'Machine Learning', 'Data Preprocessing', 'Model Evaluation', 'AI Workflows'],
    iconType: 'ai'
  },
  {
    id: 'extol-tech',
    company: 'Extol Tech Solution',
    role: 'Web Development Intern',
    period: 'Internship Experience',
    badge: 'Web & Software Engineering',
    description: 'Developed and optimized responsive web interfaces, adhering to modern UI/UX principles and front-end coding standards.',
    achievements: [
      'Built reusable, responsive UI components using modern HTML, CSS, and JavaScript',
      'Collaborated on cross-browser compatibility and mobile responsiveness audits',
      'Integrated front-end forms with back-end database querying and validation'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git', 'UI/UX'],
    iconType: 'web'
  },
  {
    id: 'inamigos',
    company: 'InAmigos Foundation',
    role: 'Digital Marketing Intern',
    period: 'Internship Experience',
    badge: 'Outreach & Growth',
    description: 'Spearheaded digital outreach campaigns, digital branding strategies, and community engagement initiatives for social impact.',
    achievements: [
      'Crafted high-engagement digital content and analyzed social metrics to optimize audience reach',
      'Enhanced campaign visibility through structured SEO and targeted digital communication strategies',
      'Coordinated cross-functional teams to execute digital awareness initiatives'
    ],
    skills: ['Digital Strategy', 'Content Analytics', 'Brand Communication', 'Audience Growth', 'Team Leadership'],
    iconType: 'marketing'
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'ibm-design-thinking',
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    category: 'Design Thinking',
    date: 'Credential Verified',
    credentialId: 'IBM-EDTP-98214',
    skills: ['User Centered Design', 'Empathy Mapping', 'Agile Problem Framing', 'Ideation & Prototyping'],
    description: 'Demonstrated mastery in applying enterprise design thinking principles to solve complex multidisciplinary problems with human-centered empathy.'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Certifications',
    issuer: 'Professional Industry Standard',
    category: 'GenAI',
    date: 'Certified',
    credentialId: 'GENAI-SPEC-2025',
    skills: ['Large Language Models (LLMs)', 'Transformer Architectures', 'Diffusion Models', 'AI Ethics'],
    description: 'Comprehensive certification covering foundational GenAI architectures, neural representations, fine-tuning methodologies, and practical generation pipelines.'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering Certification',
    issuer: 'Industry Recognized Credential',
    category: 'AI Engineering',
    date: 'Certified',
    credentialId: 'PROMPT-ENG-4410',
    skills: ['Zero-Shot & Few-Shot Prompting', 'Chain-of-Thought (CoT)', 'System Directives', 'Output Guardrails'],
    description: 'Rigorous validation of prompt structuring, context management, meta-prompting, and deterministic response steering for production AI tasks.'
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding Certification',
    issuer: 'Next-Gen Developer Institute',
    category: 'Development',
    date: 'Certified',
    credentialId: 'VIBE-CODE-010',
    skills: ['AI-Augmented Development', 'Rapid Prototyping', 'Iterative Workflow Acceleration', 'Human-in-the-Loop'],
    description: 'Certification in modern, flow-state software development leveraging cutting-edge AI programming co-pilots and high-speed delivery practices.'
  },
  {
    id: 'agentic-memory',
    title: 'Knowledge Bases & Memory for Agentic AI',
    issuer: 'Autonomous AI Institute',
    category: 'GenAI',
    date: 'Certified',
    credentialId: 'AGENTIC-KB-773',
    skills: ['Vector Databases', 'RAG (Retrieval-Augmented Generation)', 'Short & Long-term Memory Systems', 'Autonomous Agents'],
    description: 'Advanced credential focusing on architecting persistent memory structures, semantic vector stores, and contextual knowledge graphs for autonomous AI agents.'
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'B.Tech Information Technology',
  institution: 'SNS College of Technology',
  status: 'Completed 1st year of B.Tech IT (Currently in 2nd Year)',
  period: '2023 – 2027',
  location: 'Coimbatore, Tamil Nadu',
  coursework: [
    'Programming in Python & Java',
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems & SQL',
    'Web Development Fundamentals',
    'Computer Architecture & Operating Systems Basics'
  ],
  highlights: [
    'Successfully completed foundational 1st year with strong technical fundamentals',
    'Active student technologist pursuing specialized self-directed tracks in AI and Full-Stack Engineering',
    'Selected for multiple industry internships within the first academic year'
  ]
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'early-internships',
    title: 'Triple Internship Selection in Year 1',
    category: 'Professional Experience',
    description: 'Secured and completed three distinct industry internships across AI/ML (Mechnido), Web Development (Extol Tech), and Digital Marketing (InAmigos) during the early undergraduate curriculum.',
    iconName: 'Briefcase',
    tag: 'Career Milestone'
  },
  {
    id: 'certifications-suite',
    title: 'Advanced AI & Design Thinking Portfolio',
    category: 'Certifications',
    description: 'Earned 5+ recognized technical credentials including IBM Enterprise Design Thinking, Generative AI, Prompt Engineering, and Agentic Memory systems.',
    iconName: 'Award',
    tag: 'Credentials'
  },
  {
    id: 'innovative-projects',
    title: 'Sustainable AI & Threat Defense Prototypes',
    category: 'Engineering & Innovation',
    description: 'Spearheaded the development of EcoTrack (carbon emission monitoring with IoT sensor simulation) and CyberShield (AI-based QR/URL phishing detector).',
    iconName: 'ShieldCheck',
    tag: 'Flagship Projects'
  },
  {
    id: 'academic-commitment',
    title: 'Continuous Technical Upskilling & Community',
    category: 'Academic Excellence',
    description: 'Maintained strong coursework standing in B.Tech IT at SNS College of Technology while actively developing open-source projects and AI experiments.',
    iconName: 'GraduationCap',
    tag: 'Academics'
  }
];
