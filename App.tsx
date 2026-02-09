
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Dumbbell, 
  Trophy, 
  Utensils, 
  MessageSquare, 
  LayoutDashboard, 
  BookOpen, 
  Phone, 
  Menu, 
  X,
  Zap,
  Send,
  Loader2,
  ChevronRight
} from 'lucide-react';
import { getAIFitnessAdvice } from './geminiService';

// Pages
import HomePage from './pages/HomePage';
import ExercisesPage from './pages/ExercisesPage';
import SportsHubPage from './pages/SportsHubPage';
import WorkoutPlanPage from './pages/WorkoutPlanPage';
import NutritionPage from './pages/NutritionPage';
import DashboardPage from './pages/DashboardPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const history = messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
      const response = await getAIFitnessAdvice(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', text: response || "Service unavailable." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Aura connection interrupted." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      {isOpen && (
        <div className="glass-panel w-[350px] md:w-[400px] h-[550px] mb-6 rounded-[32px] overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
          <div className="bg-white text-black p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-sync font-bold text-[10px] tracking-widest uppercase">Aura AI // Core</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform"><X className="w-5 h-5" /></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/80">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 text-xs py-20 font-light italic">
                "I am Aura. System ready for performance optimization queries."
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-[20px] text-xs leading-relaxed ${
                  m.role === 'user' ? 'bg-cyan-500 text-black font-semibold' : 'bg-white/5 border border-white/10 text-gray-200'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-[15px]">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                </div>
              </div>
            )}
          </div>
          <div className="p-6 border-t border-white/5 bg-black flex space-x-3">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="System Input..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-xs focus:outline-none focus:border-cyan-500 transition-all font-light"
            />
            <button onClick={handleSend} className="bg-white p-3 rounded-full text-black hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"><Send className="w-4 h-4" /></button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-white/20 transition-all active:scale-95 group"
      >
        {isOpen ? <X className="w-6 h-6 text-black" /> : <MessageSquare className="w-6 h-6 text-black group-hover:text-cyan-600" />}
      </button>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'HUB', path: '/sports' },
    { name: 'TECH', path: '/exercises' },
    { name: 'AI', path: '/plans' },
    { name: 'FUEL', path: '/nutrition' },
    { name: 'INTEL', path: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[150] h-24 flex items-center justify-center px-4">
      <div className="w-full max-w-7xl h-16 glass-panel rounded-full px-8 flex items-center justify-between border border-white/10 shadow-2xl">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" />
          </div>
          <span className="font-sync text-lg tracking-tighter font-bold uppercase">Aura<span className="text-cyan-400 font-normal">Fit</span></span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-sync tracking-[0.2em] transition-all hover:text-cyan-400 ${
                location.pathname === link.path ? 'text-cyan-400 font-bold' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-white/10"></div>
          <Link to="/dashboard" className={`p-2 transition-colors ${location.pathname === '/dashboard' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
            <LayoutDashboard className="w-4 h-4" />
          </Link>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-[10px] font-sync tracking-widest hover:bg-cyan-400 transition-all active:scale-95 shadow-lg shadow-white/5">
            LOG IN
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white"><Menu className="w-6 h-6" /></button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-8 md:hidden">
          <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10"><X className="w-8 h-8" /></button>
          <div className="flex flex-col items-center space-y-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-sync font-bold hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <AIChatbot />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/sports" element={<SportsHubPage />} />
            <Route path="/plans" element={<WorkoutPlanPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <footer className="bg-black border-t border-white/5 py-20 px-8 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <span className="font-sync text-2xl font-bold">AURAFIT<span className="text-cyan-400 font-light">AI</span></span>
              <p className="text-gray-600 text-xs font-light max-w-xs text-center md:text-left uppercase tracking-widest">Global Human Optimization protocols Powered by Neural Link Intelligence.</p>
            </div>
            <div className="flex space-x-12 text-[10px] font-sync text-gray-500 tracking-widest">
              <Link to="/contact" className="hover:text-white transition-colors">SUPPORT</Link>
              <Link to="/blog" className="hover:text-white transition-colors">LEGAL</Link>
              <Link to="/sports" className="hover:text-white transition-colors">CLINIC</Link>
            </div>
            <div className="text-[10px] font-sync text-gray-700 tracking-tighter">© 2025 AURAFIT.AI // ALL RIGHTS RESERVED.</div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
