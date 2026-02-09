
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Zap, ArrowRight, ShieldCheck, Cpu, Globe, Activity } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Athlete" 
            className="w-full h-full object-cover scale-110 grayscale"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center space-y-10">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-xl reveal-up shadow-2xl">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-[9px] font-sync tracking-[0.4em] uppercase text-gray-400">Biological Synthesis v4.0</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-7xl md:text-[160px] font-sync font-bold tracking-tighter uppercase leading-[0.8] reveal-up" style={{ animationDelay: '0.2s' }}>
              BEYOND <br />
              <span className="text-gradient">LIMITS.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed reveal-up uppercase tracking-widest" style={{ animationDelay: '0.4s' }}>
              Elite AI training architecture for the global high-performance community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 reveal-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/plans" className="glow-button-blue px-12 py-5 rounded-full font-bold text-xs font-sync tracking-[0.2em] uppercase shadow-2xl">
              INITIATE SYNC
            </Link>
            <Link to="/exercises" className="bg-black/50 text-white px-12 py-5 rounded-full font-bold text-xs font-sync tracking-[0.2em] uppercase border border-white/20 hover:bg-white/10 transition-all backdrop-blur-md">
              VIEW PROTOCOLS
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden md:flex flex-col space-y-2 opacity-30 reveal-up" style={{ animationDelay: '1s' }}>
           <span className="font-sync text-[8px] tracking-[0.5em] uppercase">Sector 7 HQ // Neo Tokyo</span>
           <span className="font-sync text-[8px] tracking-[0.5em] uppercase text-cyan-400 animate-pulse">Connection: Active</span>
        </div>
      </section>

      {/* Luxury Stats Bar */}
      <section className="py-20 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <StatBlock label="Active Nodes" val="4.2M" sub="+12% weekly" />
          <StatBlock label="Sync Rate" val="99.9%" sub="Zero latency" />
          <StatBlock label="Protocol Library" val="8.4K" sub="Verified units" />
          <StatBlock label="Global Hubs" val="124" sub="World-class" />
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-40 relative px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="space-y-4">
              <span className="text-cyan-400 font-sync text-[10px] tracking-[0.3em] uppercase">Architecture</span>
              <h2 className="text-5xl md:text-7xl font-sync font-bold uppercase tracking-tighter leading-none">NEURAL <br /> TRAINING</h2>
            </div>
            <p className="text-gray-500 max-w-md font-light text-lg italic border-l border-white/10 pl-10 leading-relaxed">
              "We don't just provide workouts. We architect physical evolution through real-time neurological data mapping."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <FeatureCard 
               icon={<Cpu className="w-10 h-10 text-cyan-400" />}
               title="Algorithmic Pacing"
               text="Real-time intensity adjustments based on metabolic feedback and sleep data syncing."
             />
             <FeatureCard 
               icon={<Globe className="w-10 h-10 text-white" />}
               title="Global Network"
               text="Connect with world-class athletes and high-performance labs across the Aura network."
             />
             <FeatureCard 
               icon={<ShieldCheck className="w-10 h-10 text-red-500" />}
               title="Neural Guard"
               text="Advanced safety protocols preventing overtraining and optimizing cellular recovery windows."
             />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto relative h-[500px] rounded-[60px] overflow-hidden group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1599058917233-35835ef3327f?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-center p-10 space-y-8">
             <h2 className="text-4xl md:text-6xl font-sync font-bold uppercase tracking-tighter leading-none">JOIN THE <span className="text-cyan-400">ELITE.</span></h2>
             <p className="text-gray-400 max-w-xl font-light text-lg uppercase tracking-widest">Limited enrollment for Q3 performance testing.</p>
             <Link to="/contact" className="bg-white text-black px-12 py-5 rounded-full font-bold font-sync text-[10px] tracking-[0.3em] uppercase hover:bg-cyan-400 transition-colors active:scale-95 shadow-xl">
               SECURE ACCESS
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatBlock = ({ label, val, sub }: { label: string, val: string, sub: string }) => (
  <div className="space-y-2 text-center md:text-left group">
    <div className="text-[10px] font-sync text-gray-500 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">{label}</div>
    <div className="text-5xl font-sync font-bold text-white tracking-tighter">{val}</div>
    <div className="text-[9px] font-sync text-gray-700 uppercase tracking-tighter">{sub}</div>
  </div>
);

const FeatureCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="glass-panel p-12 rounded-[48px] space-y-8 hover:bg-white/5 transition-all cursor-default shadow-2xl">
    <div className="w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center">
       {icon}
    </div>
    <h3 className="text-2xl font-sync font-bold uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-500 font-light leading-relaxed">{text}</p>
    <div className="flex items-center space-x-2 text-[10px] font-sync text-cyan-400/50 uppercase tracking-widest group-hover:text-cyan-400">
       <span>Learn More</span>
       <ArrowRight className="w-3 h-3" />
    </div>
  </div>
);

export default HomePage;
