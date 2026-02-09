
import React, { useState } from 'react';
import { Search, Play, ChevronRight, Zap, Flame, Award, X, CheckCircle2, Info, Activity, Move } from 'lucide-react';
import { FitnessLevel } from '../types';

interface ExerciseData {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  difficulty: FitnessLevel;
  calories: number;
  img: string;
  videoUrl: string;
  steps: string[];
  benefits: string[];
}

const CATEGORIES = {
  "Full Body": ["Compound", "Explosive", "Stamina"],
  "Legs & Back": ["Quads", "Hamstrings", "Lats", "Upper Back"],
  "Home Workout": ["No Equipment", "Resistance Band", "Bodyweight"],
  "Yoga & Flex": ["Balance", "Flexibility", "Mindfulness"],
  "Cardio": ["HIIT", "Endurance", "Speed"]
};

const EXERCISES: ExerciseData[] = [
  { 
    id: 'fb-1', name: 'Thrusters', category: 'Full Body', subcategory: 'Compound', difficulty: FitnessLevel.ADVANCED, calories: 160, 
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/L219ltL15zk',
    steps: ['Hold dumbbells at shoulder height', 'Perform a full deep squat', 'Explode upward and press weights overhead', 'Control descent and repeat'],
    benefits: ['Maximal metabolic demand', 'Total body coordination', 'Shoulder & leg power']
  },
  { 
    id: 'fb-2', name: 'Kettlebell Swings', category: 'Full Body', subcategory: 'Explosive', difficulty: FitnessLevel.INTERMEDIATE, calories: 140, 
    img: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/sSESeQAn2rk',
    steps: ['Hinge at hips with kettlebell between legs', 'Snap hips forward aggressively', 'Swing bell to eye level', 'Control the arc back down'],
    benefits: ['Posterior chain activation', 'Grip strength', 'High intensity conditioning']
  },
  { 
    id: 'lb-1', name: 'Barbell Deadlift', category: 'Legs & Back', subcategory: 'Upper Back', difficulty: FitnessLevel.PRO, calories: 180, 
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/op9kVnSso6Q',
    steps: ['Feet hip-width apart under bar', 'Hinge down and grip bar firmly', 'Drive through heels and stand tall', 'Lower with control while keeping back flat'],
    benefits: ['Raw pulling power', 'Total posterior development', 'Bone density improvement']
  },
  { 
    id: 'lb-2', name: 'Pull Ups', category: 'Legs & Back', subcategory: 'Lats', difficulty: FitnessLevel.ADVANCED, calories: 70, 
    img: 'https://images.unsplash.com/photo-1598971639058-fab3c32f850c?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g',
    steps: ['Grip bar wider than shoulders', 'Pull chest toward the bar', 'Squeeze lats at the top', 'Control negative descent'],
    benefits: ['V-taper aesthetics', 'Functional pulling strength', 'Shoulder health']
  },
  { 
    id: 'hw-1', name: 'Split Squats', category: 'Home Workout', subcategory: 'Bodyweight', difficulty: FitnessLevel.BEGINNER, calories: 80, 
    img: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/Vn86S_fE_6E',
    steps: ['One foot forward, one foot back', 'Drop back knee toward floor', 'Keep torso upright', 'Push back to start position'],
    benefits: ['Unilateral leg strength', 'Balance improvement', 'No equipment needed']
  },
  { 
    id: 'y-1', name: 'Sun Salutation', category: 'Yoga & Flex', subcategory: 'Flexibility', difficulty: FitnessLevel.BEGINNER, calories: 60, 
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/7M08872S7fA',
    steps: ['Flow from mountain to forward fold', 'Step back into plank and down to cobra', 'Push to downward dog', 'Return to standing'],
    benefits: ['Full body mobility', 'Stress reduction', 'Joint lubrication']
  },
  { 
    id: 'c-1', name: 'Mountain Climbers', category: 'Cardio', subcategory: 'HIIT', difficulty: FitnessLevel.INTERMEDIATE, calories: 120, 
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800', 
    videoUrl: 'https://www.youtube.com/embed/nmwgirgXLYM',
    steps: ['High plank position', 'Drive knees to chest alternately', 'Maintain fast pace', 'Keep hips low'],
    benefits: ['Agility', 'Metabolic conditioning', 'Shoulder stability']
  }
];

const ExercisesPage: React.FC = () => {
  const [selectedMainCat, setSelectedMainCat] = useState<string>('Full Body');
  const [selectedSubCat, setSelectedSubCat] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [selectedExercise, setSelectedExercise] = useState<ExerciseData | null>(null);

  const filteredExercises = EXERCISES.filter(ex => 
    (ex.category === selectedMainCat) &&
    (selectedSubCat === 'All' || ex.subcategory === selectedSubCat) &&
    (ex.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 reveal-up">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-cyan-400">
            <Zap className="w-5 h-5" />
            <span className="text-[11px] font-sync uppercase tracking-[0.5em]">System Archive</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-sync font-bold uppercase tracking-tighter leading-none">TECH <br /> <span className="text-gray-500">LIBRARY</span></h1>
          <p className="text-gray-500 max-w-xl font-light text-xl leading-relaxed">Precision biomechanical movement guides. Optimized for maximum neural recruitment.</p>
        </div>
        <div className="relative w-full md:w-[450px] group">
          <input 
            type="text" 
            placeholder="System Search..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full px-16 py-6 focus:outline-none focus:border-cyan-500 transition-all font-light text-lg"
          />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700 group-focus-within:text-cyan-400 transition-colors" />
        </div>
      </div>

      {/* Luxury Toggles */}
      <div className="flex flex-wrap gap-6 mb-16 overflow-x-auto pb-6 scrollbar-hide">
        {Object.keys(CATEGORIES).map(cat => (
          <button
            key={cat}
            onClick={() => { setSelectedMainCat(cat); setSelectedSubCat('All'); }}
            className={`px-12 py-5 rounded-full text-[10px] font-sync tracking-[0.3em] transition-all border whitespace-nowrap uppercase ${
              selectedMainCat === cat ? 'bg-white text-black border-white shadow-2xl' : 'bg-transparent border-white/10 text-gray-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredExercises.map((ex, i) => (
          <div 
            key={ex.id} 
            onClick={() => setSelectedExercise(ex)}
            className="group cursor-pointer space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="relative h-[450px] rounded-[50px] overflow-hidden shadow-2xl">
              <img src={ex.img} alt={ex.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute top-10 left-10">
                <span className="bg-white/10 backdrop-blur-xl text-cyan-400 text-[10px] font-sync px-5 py-2 rounded-full border border-white/10 uppercase tracking-widest">
                  {ex.difficulty}
                </span>
              </div>
              <div className="absolute bottom-10 left-10 flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-all active:scale-90 shadow-2xl shadow-black/50">
                  <Play className="w-6 h-6 text-black fill-current" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4 px-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-sync text-gray-500 uppercase tracking-widest">{ex.subcategory}</span>
                <span className="text-red-500 text-[11px] font-sync uppercase tracking-widest">{ex.calories} KCAL</span>
              </div>
              <h3 className="text-4xl font-sync font-bold uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">{ex.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl animate-in fade-in duration-500" onClick={() => setSelectedExercise(null)}></div>
          <div className="relative w-full max-w-7xl max-h-[90vh] bg-black rounded-[70px] border border-white/5 overflow-y-auto animate-in zoom-in-95 duration-700 shadow-2xl shadow-cyan-500/10">
            <button 
              onClick={() => setSelectedExercise(null)}
              className="fixed lg:absolute top-12 right-12 z-[260] w-16 h-16 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-500 transition-all border border-white/10 hover:rotate-90 active:scale-95"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-16 lg:p-24 space-y-16">
                <div className="space-y-6">
                   <div className="text-[11px] font-sync text-cyan-400 uppercase tracking-[0.5em]">Protocol Syncing // Ready</div>
                   <h2 className="text-6xl lg:text-8xl font-sync font-bold uppercase tracking-tighter leading-none">
                     {selectedExercise.name}
                   </h2>
                   <div className="flex flex-wrap gap-4 pt-10">
                      <span className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-sync uppercase tracking-widest font-bold">{selectedExercise.difficulty}</span>
                      <span className="border border-white/10 px-6 py-2 rounded-full text-[10px] font-sync text-gray-500 uppercase tracking-widest">{selectedExercise.category}</span>
                   </div>
                </div>

                <div className="space-y-12">
                  <div className="flex items-center space-x-6 pb-6 border-b border-white/5">
                     <Move className="text-cyan-400 w-8 h-8" />
                     <h4 className="text-xs font-sync font-bold tracking-[0.4em] text-gray-400 uppercase">Movement Protocol</h4>
                  </div>
                  <ul className="space-y-10">
                    {selectedExercise.steps.map((step, i) => (
                      <li key={i} className="flex items-start space-x-10 group">
                        <span className="font-sync text-4xl text-gray-800 group-hover:text-cyan-400 transition-colors leading-none">0{i + 1}</span>
                        <p className="text-gray-400 text-xl font-light leading-relaxed group-hover:text-white transition-colors">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#050505] p-16 lg:p-24 flex flex-col justify-center space-y-16">
                <div className="relative group/video rounded-[60px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5">
                  <iframe 
                    className="w-full aspect-video"
                    src={`${selectedExercise.videoUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                    title={selectedExercise.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-12 glass-panel rounded-[50px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent relative">
                  <div className="flex items-center space-x-4 mb-6 text-cyan-400">
                     <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                     <h5 className="text-[10px] font-sync font-bold uppercase tracking-widest">Neural Link insight</h5>
                  </div>
                  <p className="text-gray-400 text-lg font-light italic leading-relaxed">
                    "Execute with controlled isometric focus. Data suggests a 12% increase in fiber engagement when focusing on the slow eccentric phase."
                  </p>
                </div>
                
                <button className="bg-white text-black py-8 rounded-full font-bold hover:bg-cyan-400 transition-all uppercase tracking-[0.4em] text-[11px] font-sync shadow-2xl active:scale-95">
                  SYNC TO SYSTEM
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExercisesPage;
