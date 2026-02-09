
import React, { useState } from 'react';
import { UserProfile, FitnessGoal, FitnessLevel, WorkoutPlan } from '../types';
import { generateWorkoutPlan } from '../geminiService';
import { Loader2, Zap, ArrowRight, CheckCircle2, TrendingUp, Activity, Dumbbell, Clock, ShieldAlert, Cpu } from 'lucide-react';

const WorkoutPlanPage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    weight: 75,
    height: 180,
    age: 28,
    goal: FitnessGoal.MUSCLE_GAIN,
    level: FitnessLevel.INTERMEDIATE
  });
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setPlan(null);
    try {
      const generatedPlan = await generateWorkoutPlan(profile);
      setPlan(generatedPlan);
    } catch (error) {
      console.error("Plan generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 min-h-screen">
      <div className="text-center mb-32 reveal-up">
        <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full mb-10 shadow-2xl">
           <Cpu className="w-4 h-4 text-cyan-400" />
           <span className="text-[10px] font-sync tracking-[0.4em] uppercase text-gray-400">Neural Synthesis v3.2</span>
        </div>
        <h1 className="text-7xl lg:text-9xl font-sync font-bold mb-10 tracking-tighter uppercase leading-[0.8] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-600">AI <br /> ARCHITECT</h1>
        <p className="text-gray-500 max-w-2xl mx-auto font-light text-xl leading-relaxed uppercase tracking-widest italic">
          Compiling precision physical evolution protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass-panel p-12 rounded-[60px] sticky top-32 shadow-2xl space-y-12">
            <div className="flex items-center space-x-4 border-b border-white/5 pb-8">
              <Activity className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-sync font-bold uppercase tracking-tighter">Bio-Metrics</h2>
            </div>
            
            <div className="space-y-10">
              <InputGroup label="Weight (kg)" val={profile.weight} onChange={(v) => setProfile({...profile, weight: Number(v)})} />
              <InputGroup label="Height (cm)" val={profile.height} onChange={(v) => setProfile({...profile, height: Number(v)})} />
              
              <div className="space-y-4">
                <label className="block text-[10px] font-sync text-gray-500 uppercase tracking-widest">Primary Objective</label>
                <select 
                  value={profile.goal}
                  onChange={(e) => setProfile({...profile, goal: e.target.value as FitnessGoal})}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-cyan-500 transition-all font-light appearance-none text-white text-sm"
                >
                  {Object.values(FitnessGoal).map(goal => <option key={goal} value={goal} className="bg-black">{goal}</option>)}
                </select>
              </div>

              <div className="space-y-4">
                <label className="block text-[10px] font-sync text-gray-500 uppercase tracking-widest">Experience Level</label>
                <div className="grid grid-cols-2 gap-4">
                  {Object.values(FitnessLevel).map(level => (
                    <button
                      key={level}
                      onClick={() => setProfile({...profile, level})}
                      className={`px-5 py-4 rounded-[20px] text-[10px] font-sync border transition-all uppercase tracking-tighter ${
                        profile.level === level 
                        ? 'bg-white text-black font-bold shadow-2xl scale-105' 
                        : 'bg-transparent border-white/5 text-gray-500 hover:text-white'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-white text-black py-7 rounded-full font-bold font-sync text-[11px] uppercase tracking-[0.4em] flex items-center justify-center space-x-4 hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                  <>
                    <span>START SYNC</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-2">
          {!plan && !loading && (
            <div className="h-full flex flex-col items-center justify-center space-y-12 py-20 opacity-30 group">
              <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-700">
                <Zap className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-sync font-bold uppercase tracking-tighter">System Idle</h3>
            </div>
          )}

          {loading && (
            <div className="h-full flex flex-col items-center justify-center p-20 space-y-12">
              <div className="relative">
                 <Loader2 className="w-32 h-32 text-cyan-400 animate-spin font-thin" />
                 <Zap className="absolute inset-0 m-auto w-10 h-10 text-cyan-400 animate-pulse" />
              </div>
              <h3 className="text-4xl font-sync font-bold animate-pulse uppercase tracking-tighter">Synthesizing...</h3>
              <div className="w-full max-w-md bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full w-[45%] animate-pulse"></div>
              </div>
            </div>
          )}

          {plan && (
            <div className="space-y-20 reveal-up">
              <div className="space-y-10">
                <div className="text-[11px] font-sync text-cyan-400 uppercase tracking-[0.5em] flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-4" /> COMPILATION SUCCESSFUL
                </div>
                <h2 className="text-7xl lg:text-9xl font-sync font-bold uppercase tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  {plan.title}
                </h2>
                <p className="text-gray-400 text-2xl font-light leading-relaxed max-w-3xl italic">{plan.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {plan.exercises.map((exercise, idx) => (
                  <div key={idx} className="luxury-card p-12 rounded-[60px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[100px] flex items-center justify-center text-4xl font-sync text-gray-800 opacity-20 group-hover:opacity-100 transition-all">
                       0{idx + 1}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                      <div className="space-y-6">
                        <h4 className="text-4xl font-sync font-bold uppercase tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">{exercise.name}</h4>
                        <div className="flex flex-wrap gap-6">
                          <DataTag label="SETS" val={exercise.sets} color="white" />
                          <DataTag label="REPS" val={exercise.reps} color="cyan-400" />
                          <DataTag label="REST" val={exercise.rest} color="gray-500" />
                        </div>
                      </div>
                      <div className="md:text-right max-w-xs space-y-2">
                        <div className="text-[10px] font-sync text-gray-500 uppercase tracking-[0.3em]">AI Directives</div>
                        <p className="text-gray-400 text-lg font-light leading-relaxed italic">"{exercise.tips}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white text-black p-20 rounded-[80px] space-y-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12 scale-150">
                   <Zap className="w-80 h-80" />
                </div>
                <h3 className="text-5xl font-sync font-bold uppercase tracking-tighter leading-none">PROTOCOL <br /> VERIFIED.</h3>
                <p className="text-gray-700 text-xl font-light leading-relaxed max-w-xl">This architecture is now locked and synced to your performance profile.</p>
                <div className="flex flex-wrap gap-6 pt-6">
                  <button className="bg-black text-white px-16 py-6 rounded-full font-bold font-sync text-[11px] uppercase tracking-[0.3em] hover:bg-cyan-500 hover:text-black transition-all shadow-2xl">
                    SYNC TO LOG
                  </button>
                  <button className="border border-black px-16 py-6 rounded-full font-bold font-sync text-[11px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                    EXPORT DATA
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, val, onChange }: { label: string, val: number, onChange: (v: string) => void }) => (
  <div className="space-y-4">
    <label className="block text-[10px] font-sync text-gray-500 uppercase tracking-widest">{label}</label>
    <input 
      type="number" 
      value={val}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-cyan-500 transition-all font-light text-white text-xl"
    />
  </div>
);

const DataTag = ({ label, val, color }: { label: string, val: string, color: string }) => (
  <div className="space-y-1">
    <div className="text-[9px] font-sync text-gray-500 uppercase tracking-[0.4em] leading-none">{label}</div>
    <div className={`text-2xl font-sync font-bold tracking-tighter text-${color} uppercase`}>{val}</div>
  </div>
);

export default WorkoutPlanPage;
