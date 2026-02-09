
import React, { useState } from 'react';
import { Trophy, Target, Users, Zap, Search, ArrowRight, Play, X, ChevronRight, Star, Award, ShieldCheck } from 'lucide-react';

interface SportModule {
  id: string;
  title: string;
  level: 'Beginner' | 'Pro' | 'Elite';
  duration: string;
  videoUrl: string;
  description: string;
}

interface SportData {
  name: string;
  icon: React.ReactNode;
  drillsCount: number;
  img: string;
  description: string;
  modules: SportModule[];
}

const SPORTS_DATA: SportData[] = [
  { 
    name: 'Football', 
    icon: <Target className="text-cyan-400" />, 
    drillsCount: 42, 
    img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1200',
    description: "The global game, refined by elite analytics and tactical masterclasses.",
    modules: [
      { id: 'f1', title: 'Ball Control & First Touch', level: 'Beginner', duration: '30m', videoUrl: 'https://www.youtube.com/embed/fD3qC8_r8I8', description: 'Mastering the essentials of trapping and moving with the ball.' },
      { id: 'f2', title: 'Precision Shooting Mechanics', level: 'Pro', duration: '45m', videoUrl: 'https://www.youtube.com/embed/pSjQf_T4K_E', description: 'Advanced biomechanics for maximum power and accuracy.' },
      { id: 'f3', title: 'Tactical Pressing Patterns', level: 'Elite', duration: '60m', videoUrl: 'https://www.youtube.com/embed/vKsh2mK2oJ4', description: 'High-level defensive coordination and team pressing.' }
    ]
  },
  { 
    name: 'Basketball', 
    icon: <Zap className="text-orange-400" />, 
    drillsCount: 35, 
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200',
    description: "High-octane drills focusing on explosive movement and lethal precision.",
    modules: [
      { id: 'b1', title: 'Ball Handling Fundamentals', level: 'Beginner', duration: '20m', videoUrl: 'https://www.youtube.com/embed/pS0hY7yGj3U', description: 'Building rhythm and hand-eye coordination.' },
      { id: 'b2', title: 'Modern Shooting Form', level: 'Pro', duration: '40m', videoUrl: 'https://www.youtube.com/embed/nL-r1K1qWwE', description: 'The science behind the modern jump shot.' },
      { id: 'b3', title: 'Explosive Vertical Power', level: 'Elite', duration: '50m', videoUrl: 'https://www.youtube.com/embed/8v_p40B6OIs', description: 'Plyometrics for maximizing your vertical jump.' }
    ]
  },
  { 
    name: 'Tennis', 
    icon: <Trophy className="text-lime-400" />, 
    drillsCount: 28, 
    img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?auto=format&fit=crop&q=80&w=1200',
    description: "Strategic masterclasses for court dominance and technical perfection.",
    modules: [
      { id: 't1', title: 'Serve Power Generation', level: 'Pro', duration: '35m', videoUrl: 'https://www.youtube.com/embed/ObeAbeIqX5g', description: 'Kinetic chain optimization for serving.' },
      { id: 't2', title: 'Baseline Footwork Mastery', level: 'Beginner', duration: '30m', videoUrl: 'https://www.youtube.com/embed/n9n8K_xT8yM', description: 'Mastering court positioning and split-step agility.' }
    ]
  },
  { 
    name: 'Cricket', 
    icon: <Award className="text-red-400" />, 
    drillsCount: 30, 
    img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1200',
    description: "Technical excellence across all formats. Master the willow and the leather.",
    modules: [
      { id: 'c1', title: 'Defensive Stroke Play', level: 'Beginner', duration: '40m', videoUrl: 'https://www.youtube.com/embed/Kj_0Esk_s_Y', description: 'Foundational batting technique for long-form survival.' },
      { id: 'c2', title: 'Fast Bowling Biomechanics', level: 'Elite', duration: '55m', videoUrl: 'https://www.youtube.com/embed/m7w_qC1_OaE', description: 'Maximizing pace while maintaining joint safety.' }
    ]
  }
];

const SportsHubPage: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<SportData | null>(null);
  const [activeModule, setActiveModule] = useState<SportModule | null>(null);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Header */}
      {!selectedSport && (
        <section className="relative py-40 px-4 overflow-hidden animate-in fade-in duration-1000">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-cyan-500/10 blur-[200px] -z-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-full bg-red-500/5 blur-[200px] -z-10 rounded-full"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full mb-10 font-sync text-[10px] tracking-widest text-cyan-400 uppercase backdrop-blur-md">
               <ShieldCheck className="w-4 h-4" />
               <span>WORLD CLASS ATHLETE CLINIC</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-sync font-bold mb-10 tracking-tighter uppercase leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
              SPORT <br /><span className="text-glow-blue">MASTERY</span>
            </h1>
            <p className="text-gray-400 max-w-2xl font-light text-xl leading-relaxed mb-16 px-4">
              Professional-grade drills, tactical breakdowns, and elite physical conditioning for global competitors. 
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-white text-black px-12 py-5 rounded-full font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:scale-105 active:scale-95 text-sm uppercase font-sync">
                START PRO JOURNEY
              </button>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Find your discipline..." 
                  className="bg-white/5 border border-white/10 rounded-full px-12 py-5 focus:outline-none focus:border-cyan-500 w-full sm:w-80 transition-all font-light"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 group-focus-within:text-cyan-400 transition-colors" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sport Grid */}
      {!selectedSport ? (
        <section className="max-w-7xl mx-auto px-4 py-12 mb-24 animate-in slide-in-from-bottom-12 duration-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {SPORTS_DATA.map((sport, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedSport(sport)}
                className="group relative h-[600px] rounded-[48px] overflow-hidden cursor-pointer transition-all hover:scale-[1.01] border border-white/5 hover:border-cyan-500/30 shadow-2xl"
              >
                <img src={sport.img} alt={sport.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-12 transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
                      {sport.icon}
                    </div>
                    <span className="text-[10px] font-sync text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">{sport.drillsCount} PRO MODULES</span>
                  </div>
                  <h3 className="text-5xl lg:text-6xl font-sync font-bold mb-6 uppercase tracking-tighter leading-none">{sport.name}</h3>
                  <p className="text-gray-400 text-lg font-light mb-10 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500">{sport.description}</p>
                  
                  <div className="flex items-center space-x-3 text-white font-bold text-sm tracking-widest font-sync">
                    <span className="bg-white text-black px-6 py-2 rounded-full hover:bg-cyan-400 transition-colors">ENTER CLINIC</span> 
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="max-w-7xl mx-auto px-4 py-24 animate-in fade-in zoom-in-95 duration-700">
          <button 
            onClick={() => setSelectedSport(null)}
            className="group flex items-center space-x-3 text-gray-500 hover:text-white mb-16 transition-all font-sync text-[10px] tracking-widest"
          >
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </div>
            <span>RETURN TO GLOBAL ARCHIVE</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1 space-y-12">
              <div className="relative h-96 rounded-[56px] overflow-hidden border border-white/10 shadow-2xl">
                <img src={selectedSport.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                   <h2 className="text-5xl font-sync font-bold uppercase tracking-tighter leading-none">{selectedSport.name}</h2>
                </div>
              </div>
              <div className="glass p-10 rounded-[40px] border border-white/10 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-xs font-sync font-bold text-cyan-400 uppercase tracking-widest">Aura Clinic Brief</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {selectedSport.description}
                  </p>
                </div>
                <div className="space-y-6 pt-10 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-sync text-[10px] uppercase">Curated Training</span>
                    <span className="text-white font-bold">{selectedSport.drillsCount} Units</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-sync text-[10px] uppercase">Enrolled Athletes</span>
                    <span className="text-white font-bold">12,482</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-sync text-[10px] uppercase">Neural Rating</span>
                    <span className="text-yellow-400 font-bold flex items-center">4.98 <Star className="w-4 h-4 ml-2 fill-yellow-400" /></span>
                  </div>
                </div>
                <button className="w-full bg-cyan-500 text-black py-5 rounded-[24px] font-bold font-sync text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all active:scale-95">
                  JOIN PRIVATE CLINIC
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center justify-between border-b border-white/5 pb-8">
                <h2 className="text-4xl font-sync font-bold uppercase tracking-tighter">PERFORMANCE <span className="text-gray-500">MODULES</span></h2>
                <div className="text-[10px] font-sync text-gray-500 uppercase tracking-widest">{selectedSport.modules.length} SESSIONS LOADED</div>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {selectedSport.modules.map((mod) => (
                  <div 
                    key={mod.id} 
                    onClick={() => setActiveModule(mod)}
                    className="group glass p-10 rounded-[48px] border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer flex flex-col md:flex-row items-center gap-10 hover:bg-white/5"
                  >
                    <div className="w-full md:w-56 h-40 rounded-[32px] overflow-hidden relative shrink-0 shadow-lg border border-white/10">
                       <img src={selectedSport.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-cyan-500 group-hover:scale-110 transition-all">
                            <Play className="text-white w-6 h-6 fill-white group-hover:fill-black group-hover:text-black" />
                          </div>
                       </div>
                    </div>
                    <div className="flex-1 space-y-4">
                       <div className="flex items-center space-x-4">
                          <span className={`text-[8px] font-sync px-3 py-1 rounded-full border uppercase tracking-widest ${
                            mod.level === 'Elite' ? 'bg-red-500/10 border-red-500/30 text-red-500' : 
                            mod.level === 'Pro' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 
                            'bg-lime-500/10 border-lime-500/30 text-lime-400'
                          }`}>
                            {mod.level} MODE
                          </span>
                          <span className="text-[10px] font-sync text-gray-500 uppercase tracking-tighter flex items-center">
                            <Zap className="w-3 h-3 mr-1.5" /> {mod.duration} DRILL
                          </span>
                       </div>
                       <h4 className="text-2xl font-sync font-bold uppercase group-hover:text-cyan-400 transition-colors tracking-tighter leading-none">{mod.title}</h4>
                       <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2">{mod.description}</p>
                    </div>
                    <div className="p-5 glass rounded-full opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                      <ChevronRight className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Modal Overlay */}
      {activeModule && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={() => setActiveModule(null)}></div>
          <div className="relative w-full max-w-5xl animate-in zoom-in-95 duration-500">
             <div className="flex items-center justify-between mb-10 px-6">
                <div className="space-y-1">
                  <div className="text-[10px] font-sync text-cyan-400 uppercase tracking-[0.3em]">{activeModule.level} PROTOCOL</div>
                  <h3 className="text-3xl font-sync font-bold uppercase tracking-tighter">{activeModule.title}</h3>
                </div>
                <button 
                  onClick={() => setActiveModule(null)}
                  className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-500 transition-all border border-white/10 hover:scale-110 active:scale-95 shadow-xl"
                >
                  <X className="w-6 h-6" />
                </button>
             </div>
             <div className="aspect-video rounded-[56px] overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(0,242,255,0.15)] bg-black">
                <iframe 
                  className="w-full h-full"
                  src={`${activeModule.videoUrl}?autoplay=1&mute=0&modestbranding=1&rel=0`}
                  title={activeModule.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
             </div>
             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass p-10 rounded-[32px] border border-white/5 text-center group hover:border-cyan-500/30 transition-all">
                   <div className="text-[10px] font-sync text-gray-500 uppercase mb-3 tracking-widest">Protocol Status</div>
                   <div className="text-lg font-bold text-white uppercase font-sync">READY FOR ENTRY</div>
                </div>
                <div className="glass p-10 rounded-[32px] border border-white/5 text-center group hover:border-cyan-500/30 transition-all">
                   <div className="text-[10px] font-sync text-gray-500 uppercase mb-3 tracking-widest">Neural XP Output</div>
                   <div className="text-lg font-bold text-cyan-400 uppercase font-sync">+850 POINTS</div>
                </div>
                <button className="bg-white text-black rounded-[32px] font-bold hover:bg-cyan-500 transition-all uppercase text-[10px] font-sync tracking-widest shadow-xl active:scale-95">
                   VALIDATE COMPLETION
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsHubPage;
