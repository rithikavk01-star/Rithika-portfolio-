import { useState, useEffect } from 'react';
import { 
  X, 
  Activity, 
  AlertTriangle, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  ShieldAlert, 
  Radio, 
  RefreshCw, 
  CheckCircle, 
  Zap, 
  FileText, 
  Terminal,
  Send,
  HelpCircle,
  QrCode
} from 'lucide-react';
import { Project } from '../types';

interface ProjectSimulatorModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectSimulatorModal({ project, onClose }: ProjectSimulatorModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c1220] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Interactive Demo
                </span>
              </div>
              <p className="text-xs text-slate-400">{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Switch based on project type */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {project.simulationType === 'ecotrack' && <EcoTrackSimulator />}
          {project.simulationType === 'cybershield' && <CyberShieldSimulator />}
          {project.simulationType === 'aidoubt' && <AIDoubtSolverSimulator />}
          {!project.simulationType && (
            <div className="text-center py-8 text-slate-400">
              <p>Project overview and detailed system documentation available on GitHub.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-900/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Simulated Prototype Mode — Developed by Rithika M</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-colors"
            >
              View Repository
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-sm"
            >
              Close Simulator
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// 1. EcoTrack Interactive Simulator
function EcoTrackSimulator() {
  const [co2Level, setCo2Level] = useState(485); // ppm
  const [isSimulating, setIsSimulating] = useState(true);
  const [activeZone, setActiveZone] = useState('Production Floor A');
  const [esp32Connected, setEsp32Connected] = useState(true);

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setCo2Level(prev => {
        const delta = Math.floor(Math.random() * 21) - 10;
        const next = Math.max(380, Math.min(850, prev + delta));
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const getStatus = (val: number) => {
    if (val < 450) return { label: 'Optimal Quality', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' };
    if (val < 650) return { label: 'Moderate Emissions', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' };
    return { label: 'High Emission Alert!', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' };
  };

  const status = getStatus(co2Level);

  return (
    <div className="space-y-6">
      
      {/* Simulation Controls Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isSimulating ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'}`} />
            <span className="text-xs font-semibold text-white">
              {isSimulating ? 'Sensor Stream Active (Simulation Mode)' : 'Simulation Paused'}
            </span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">•</span>
          <div className="text-xs font-mono text-cyan-300 hidden sm:inline-flex items-center gap-1">
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            ESP32 Virtual Node: #ESP32-NODE-01
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 cursor-pointer"
          >
            {isSimulating ? 'Pause Stream' : 'Resume Stream'}
          </button>
          <button
            onClick={() => setCo2Level(Math.floor(Math.random() * 300) + 400)}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/10 cursor-pointer"
            title="Randomize Sensor Spike"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Metric 1: CO2 */}
        <div className={`p-4 rounded-2xl border ${status.bg}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-slate-400">Live CO₂ Reading</span>
            <Activity className={`w-4 h-4 ${status.color}`} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-extrabold font-mono ${status.color}`}>{co2Level}</span>
            <span className="text-xs text-slate-400">ppm</span>
          </div>
          <span className={`text-[11px] font-semibold mt-1 inline-block ${status.color}`}>
            {status.label}
          </span>
        </div>

        {/* Metric 2: Carbon Footprint Rate */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-slate-400">Calculated Footprint</span>
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-mono text-white">
              {(co2Level * 0.0024).toFixed(2)}
            </span>
            <span className="text-xs text-slate-400">kg CO₂e/hr</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Calculated via AI algorithm</p>
        </div>

        {/* Metric 3: IoT Sensor Status */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-slate-400">Hardware Integration</span>
            <Cpu className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-white">ESP32 Ready</span>
          </div>
          <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Dual Wi-Fi / MQTT channel ready
          </p>
        </div>

      </div>

      {/* AI Recommendations & Alerts Engine */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/20 border border-cyan-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h4 className="text-sm font-bold text-white">EcoTrack AI Automated Recommendation Engine</h4>
        </div>
        
        {co2Level > 600 ? (
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Emission Surge Detected in {activeZone}</p>
                <p className="text-slate-300 mt-0.5">
                  CO₂ concentration exceeds standard thresholds by {((co2Level - 500) / 5).toFixed(0)}%. Auto-triggering exhaust dampers and dispatching report to facilities administrator.
                </p>
              </div>
            </div>
            <ul className="text-xs text-slate-300 space-y-1 list-disc pl-5">
              <li>Deploy HVAC ventilation cycle for 18 minutes to recirculate fresh airflow.</li>
              <li>Schedule maintenance inspection on HVAC compressor filter unit.</li>
            </ul>
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Optimal Emission Equilibrium Maintained</p>
              <p className="text-slate-300 mt-0.5">
                Current atmospheric metrics match low-carbon green guidelines. AI suggests maintaining current baseline operations.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Manual Tester Slider */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">Test Sensor Input (Manual Override)</span>
          <span className="font-mono text-cyan-400">{co2Level} ppm</span>
        </div>
        <input
          type="range"
          min="380"
          max="850"
          value={co2Level}
          onChange={(e) => {
            setIsSimulating(false);
            setCo2Level(Number(e.target.value));
          }}
          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
          <span>380 ppm (Clean Air)</span>
          <span>550 ppm (Standard)</span>
          <span>850 ppm (Heavy Alert)</span>
        </div>
      </div>

    </div>
  );
}

// 2. CyberShield Interactive Simulator
function CyberShieldSimulator() {
  const [testUrl, setTestUrl] = useState('http://secure-login-sns-verify.top/account-reset');
  const [analysisResult, setAnalysisResult] = useState<{
    verdict: 'phishing' | 'safe';
    score: number;
    reasons: string[];
    lexicalScore: number;
  } | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const sampleUrls = [
    { label: 'Phishing URL Sample', url: 'http://secure-login-sns-verify.top/account-reset' },
    { label: 'Deceptive QR Payload', url: 'https://pay-invoice-bank-update.xyz/verify-pin?id=992' },
    { label: 'Authentic Official Site', url: 'https://snsct.org/departments/information-technology' }
  ];

  const handleScan = (urlToScan: string) => {
    setIsScanning(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setIsScanning(false);
      const isPhish = urlToScan.includes('.top') || urlToScan.includes('.xyz') || urlToScan.includes('account-reset') || urlToScan.includes('verify-pin');
      
      if (isPhish) {
        setAnalysisResult({
          verdict: 'phishing',
          score: 94,
          lexicalScore: 92,
          reasons: [
            'High-risk Top-Level Domain detected (.top / .xyz)',
            'Deceptive brand token imitation mimicking credential login',
            'Suspicious query payload structure without valid TLS certification',
            'Heuristic neural model flagged urgency and credential theft signatures'
          ]
        });
      } else {
        setAnalysisResult({
          verdict: 'safe',
          score: 4,
          lexicalScore: 98,
          reasons: [
            'Legitimate institutional domain with standard naming conventions',
            'Valid domain registration and clean reputation history',
            'Zero obfuscated redirection paths detected'
          ]
        });
      }
    }, 900);
  };

  return (
    <div className="space-y-5">
      <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300">
        <p className="font-semibold text-white mb-1">CyberShield AI Threat Engine</p>
        <p>Inspect suspicious web URLs or simulated QR code payloads using multi-vector heuristic feature analysis and AI pattern recognition.</p>
      </div>

      {/* Input Form */}
      <div className="space-y-2">
        <label className="text-xs text-slate-400 font-medium flex items-center justify-between">
          <span>Target URL / Decoded QR Code String</span>
          <span className="text-[11px] text-cyan-400">Heuristic Engine v1.4</span>
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={testUrl}
            onChange={(e) => setTestUrl(e.target.value)}
            placeholder="Enter web URL or paste QR payload..."
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
          />
          <button
            onClick={() => handleScan(testUrl)}
            disabled={isScanning}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            {isScanning ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <ShieldCheck className="w-4 h-4" />
            )}
            <span>Analyze</span>
          </button>
        </div>
      </div>

      {/* Quick Samples */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-slate-500">Presets:</span>
        {sampleUrls.map((sample, idx) => (
          <button
            key={idx}
            onClick={() => {
              setTestUrl(sample.url);
              handleScan(sample.url);
            }}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-white/10 cursor-pointer transition-colors"
          >
            {sample.label}
          </button>
        ))}
      </div>

      {/* Scanning status */}
      {isScanning && (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-cyan-500/20 text-center space-y-3">
          <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin mx-auto" />
          <p className="text-xs text-slate-300 font-mono">Extracting lexical token vectors & AI classification...</p>
        </div>
      )}

      {/* Results View */}
      {analysisResult && !isScanning && (
        <div
          className={`p-5 rounded-2xl border ${
            analysisResult.verdict === 'phishing'
              ? 'bg-rose-950/20 border-rose-500/40'
              : 'bg-emerald-950/20 border-emerald-500/40'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {analysisResult.verdict === 'phishing' ? (
                <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              )}
              <div>
                <h4 className="text-base font-bold text-white">
                  {analysisResult.verdict === 'phishing' ? 'CRITICAL: Phishing Detected!' : 'SAFE: Verified Clean Link'}
                </h4>
                <p className="text-xs text-slate-400">
                  {analysisResult.verdict === 'phishing'
                    ? 'Target displays dangerous spoofing attributes'
                    : 'No anomalous heuristics discovered'}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400">Threat Probability</span>
              <p
                className={`text-2xl font-extrabold font-mono ${
                  analysisResult.verdict === 'phishing' ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {analysisResult.score}%
              </p>
            </div>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-white/10">
            <p className="text-xs font-semibold text-slate-300">Model Feature Signals:</p>
            <ul className="text-xs text-slate-300 space-y-1">
              {analysisResult.reasons.map((r, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}

// 3. AI Doubt Solver Simulator
function AIDoubtSolverSimulator() {
  const [query, setQuery] = useState('Explain how binary search trees achieve O(log n) lookup.');
  const [response, setResponse] = useState<string | null>(
    `### Binary Search Tree (BST) Lookup Principle\n\n1. **Core Property**: For every node $N$, values in the left subtree are smaller than $N$, and values in the right subtree are larger.\n2. **Divide-and-Conquer**: At each node comparison, BST eliminates half of the remaining elements from search space.\n3. **Height vs Nodes**: If balanced, a tree with $n$ nodes has a height of $h = \\log_2(n)$. Each step descends one level, resulting in $O(\\log n)$ time complexity.\n\n*Pro-tip from AI Doubt Solver*: Ensure tree rebalancing (like AVL or Red-Black trees) to prevent degeneration to $O(n)$ skewing!`
  );

  const sampleQueries = [
    'Explain how binary search trees achieve O(log n) lookup.',
    'What is the difference between supervised vs unsupervised learning?',
    'How does Prompt Engineering prevent hallucinations in LLMs?'
  ];

  return (
    <div className="space-y-4">
      <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300">
        <p className="font-semibold text-white mb-1">AI Doubt Solver Interactive Academic Mode</p>
        <p>Demonstrates structured STEM reasoning, prompt chain-of-thought, and clear pedagogical explanations for engineering students.</p>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-slate-400 font-medium">Student Academic Query</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-500 font-sans"
          />
          <button
            onClick={() => {
              setResponse(`Structured Explanation for "${query}":\n\n• Foundational Concept: Problem broken down into fundamental principles.\n• Algorithmic/Mathematical Logic: Step-by-step verified reasoning applied.\n• Real-World Example: Engineered application demonstrating practical utility.`);
            }}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Solve</span>
          </button>
        </div>
      </div>

      {/* Preset pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-slate-500">Suggested doubts:</span>
        {sampleQueries.map((q, idx) => (
          <button
            key={idx}
            onClick={() => {
              setQuery(q);
              if (idx === 0) {
                setResponse(`### Binary Search Tree (BST) Lookup Principle\n\n1. **Core Property**: For every node $N$, values in the left subtree are smaller than $N$, and values in the right subtree are larger.\n2. **Divide-and-Conquer**: At each node comparison, BST eliminates half of the remaining elements from search space.\n3. **Height vs Nodes**: If balanced, a tree with $n$ nodes has a height of $h = \\log_2(n)$. Each step descends one level, resulting in $O(\\log n)$ time complexity.`);
              } else if (idx === 1) {
                setResponse(`### Supervised vs. Unsupervised Learning Breakdown\n\n• **Supervised Learning**: Model trains on labeled datasets ($X \\rightarrow y$). Examples include linear regression, classification, spam detection.\n• **Unsupervised Learning**: Discovers hidden patterns in unlabeled data without explicit ground-truth targets ($X$ only). Examples include K-Means clustering, PCA dimensionality reduction.`);
              } else {
                setResponse(`### Mitigating Hallucinations with Prompt Engineering\n\n1. **Grounding Constraints**: Direct the model to cite only explicitly provided source context.\n2. **Chain-of-Thought (CoT)**: Request step-by-step intermediate verification before reaching a final conclusion.\n3. **Negative Directives**: Explicitly instruct: "If the solution cannot be verified with certainty, acknowledge uncertainty rather than assuming answers."`);
              }
            }}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-white/10 cursor-pointer"
          >
            {q.length > 32 ? q.substring(0, 32) + '...' : q}
          </button>
        ))}
      </div>

      {/* Response Box */}
      {response && (
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/20 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI Reasoning & Pedagogical Solution</span>
          </div>
          <div className="text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-line bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
            {response}
          </div>
        </div>
      )}
    </div>
  );
}
