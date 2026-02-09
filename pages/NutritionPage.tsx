
import React, { useState } from 'react';
import { Utensils, Apple, Coffee, Calculator, Zap, ArrowRight, Salad, Soup, X, CheckCircle2, Flame, Droplets, Beef, TrendingUp } from 'lucide-react';

interface RecipeDetail {
  name: string;
  macros: string;
  p: string;
  c: string;
  f: string;
  calories: string;
  img: string;
  ingredients: string[];
  instructions: string[];
  protocolType: string;
}

const RECIPES: RecipeDetail[] = [
  { 
    name: 'Metabolic Protein Bowl', 
    macros: 'P: 45g | C: 50g | F: 12g', 
    p: '45g', c: '50g', f: '12g', calories: '580',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    protocolType: 'High Performance',
    ingredients: ['200g Grilled Chicken Breast', '100g Red Quinoa', '1/2 Ripe Avocado', 'Baby Spinach', 'Cold Pressed Olive Oil'],
    instructions: ['Rinse quinoa and simmer for 15 mins', 'Season chicken with sea salt and herbs', 'Grill until internal temp reaches 165F', 'Assemble with greens and drizzle oil']
  },
  { 
    name: 'Neural Recovery Oats', 
    macros: 'P: 35g | C: 70g | F: 8g', 
    p: '35g', c: '70g', f: '8g', calories: '480',
    img: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&q=80&w=800',
    protocolType: 'Cognitive Fuel',
    ingredients: ['1 cup Steel Cut Oats', '1 scoop Isolate Whey', '1 tbsp Almond Butter', 'Wild Blueberries', 'Raw Honey'],
    instructions: ['Cook oats on low heat', 'Whisk in protein isolate off-heat', 'Top with blueberries and nut butter', 'Finish with honey for glycogen restoration']
  },
  { 
    name: 'Arctic Salmon Platter', 
    macros: 'P: 40g | C: 10g | F: 22g', 
    p: '40g', c: '10g', f: '22g', calories: '520',
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    protocolType: 'Cellular Repair',
    ingredients: ['180g Wild Salmon Fillet', 'Steam Asparagus', 'Lemon Zest', 'Garlic Cloves', 'Himalayan Salt'],
    instructions: ['Preheat convection to 200C', 'Place salmon on parchment with lemon/garlic', 'Bake for 12 minutes exactly', 'Serve with lightly steamed asparagus']
  }
];

const NutritionPage: React.FC = () => {
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(180);
  const [bmi, setBmi] = useState<number | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDetail | null>(null);

  const calculateBMI = () => {
    const h = height / 100;
    setBmi(Math.round((weight / (h * h)) * 10) / 10);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 min-h-screen">
      <div className="text-center mb-40 reveal-up">
        <div className="inline-flex items-center space-x-4 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-12 shadow-2xl backdrop-blur-3xl">
           <Droplets className="w-5 h-5 text-cyan-400" />
           <span className="text-[11px] font-sync tracking-[0.5em] uppercase text-gray-400">Biological Fuel Synthesis</span>
        </div>
        <h1 className="text-7xl lg:text-[140px] font-sync font-bold mb-10 uppercase tracking-tighter leading-[0.8] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-800">FUEL <br /> SYSTEM</h1>
        <p className="text-gray-500 max-w-3xl mx-auto font-light text-2xl leading-relaxed uppercase tracking-[0.2em] italic">
          Molecular optimization for peak athletic output.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-40">
        <div className="lg:col-span-1">
          <div className="glass-panel p-16 rounded-[70px] sticky top-32 shadow-2xl space-y-16">
            <h3 className="text-2xl font-sync font-bold flex items-center space-x-5 text-white uppercase tracking-tighter">
              <Calculator className="text-cyan-400 w-8 h-8" />
              <span>Bio-Analysis</span>
            </h3>
            <div className="space-y-12">
               <MacroInput label="WEIGHT (KG)" val={weight} onChange={setWeight} />
               <MacroInput label="HEIGHT (CM)" val={height} onChange={setHeight} />
               
               <button 
                onClick={calculateBMI}
                className="w-full bg-white text-black py-7 rounded-full font-bold font-sync text-[11px] uppercase tracking-[0.4em] hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl"
               >
                 ANALYZE STATUS
               </button>
               
               {bmi && (
                 <div className="mt-16 text-center space-y-4 animate-in zoom-in-95 duration-700">
                    <div className="text-[11px] font-sync text-gray-500 uppercase tracking-[0.5em]">System Status</div>
                    <div className="text-9xl font-sync font-bold text-white tracking-tighter leading-none">{bmi}</div>
                    <div className="inline-block bg-cyan-500 text-black px-8 py-2 rounded-full text-[10px] font-sync font-bold uppercase tracking-widest">
                      {bmi < 18.5 ? 'DEFICIT' : bmi < 25 ? 'OPTIMIZED' : 'SURPLUS'}
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-40">
          <div className="space-y-20">
            <div className="flex items-center justify-between border-b border-white/5 pb-12">
              <h3 className="text-5xl font-sync font-bold tracking-tighter uppercase">PROTOCOLS</h3>
              <span className="text-[11px] font-sync text-gray-500 uppercase tracking-[0.5em]">3 UNITS LOADED</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {RECIPES.map((recipe, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedRecipe(recipe)}
                  className="group relative cursor-pointer space-y-10"
                >
                  <div className="relative h-[550px] rounded-[60px] overflow-hidden shadow-2xl">
                    <img src={recipe.img} alt={recipe.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute top-10 left-10">
                       <div className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-sync font-bold uppercase tracking-widest">
                        {recipe.protocolType}
                       </div>
                    </div>
                    <div className="absolute bottom-10 right-10">
                       <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-cyan-400 transition-all active:scale-90">
                         <ArrowRight className="w-8 h-8 text-black" />
                       </div>
                    </div>
                  </div>
                  <div className="px-6 space-y-2">
                    <h4 className="text-4xl font-sync font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-tighter leading-none">{recipe.name}</h4>
                    <p className="text-[11px] font-sync text-gray-500 tracking-[0.3em] uppercase">{recipe.macros}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white text-black p-24 rounded-[100px] relative overflow-hidden shadow-2xl space-y-12">
            <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12 scale-150">
               <Utensils className="w-96 h-96" />
            </div>
            <h3 className="text-6xl font-sync font-bold tracking-tighter leading-[0.8] uppercase">NEURAL <br /> PLANNER.</h3>
            <p className="text-gray-700 text-2xl font-light leading-relaxed max-w-2xl italic">
              Automated bio-fuel synchronization. Connect your training log to optimize metabolic intake intervals.
            </p>
            <button className="bg-black text-white px-20 py-8 rounded-full font-bold font-sync text-[12px] uppercase tracking-[0.5em] shadow-2xl hover:bg-cyan-500 hover:text-black transition-all active:scale-95">
              ACTIVATE CORE
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl animate-in fade-in duration-500" onClick={() => setSelectedRecipe(null)}></div>
          <div className="relative w-full max-w-7xl max-h-[90vh] bg-black rounded-[70px] border border-white/5 overflow-y-auto animate-in zoom-in-95 duration-700 shadow-2xl">
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-12 right-12 z-[260] w-16 h-16 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-500 transition-all border border-white/10"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-20 lg:p-32 space-y-20">
                <div className="space-y-6">
                  <div className="text-[11px] font-sync text-cyan-400 uppercase tracking-[0.5em]">Input Metrics // Cellular</div>
                  <h2 className="text-7xl lg:text-[100px] font-sync font-bold uppercase tracking-tighter leading-[0.8] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    {selectedRecipe.name}
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-16 border-t border-white/5">
                   <MiniStat icon={<Beef className="text-red-500" />} label="PROT" val={selectedRecipe.p} />
                   <MiniStat icon={<Droplets className="text-cyan-400" />} label="CARB" val={selectedRecipe.c} />
                   <MiniStat icon={<Zap className="text-yellow-400" />} label="FAT" val={selectedRecipe.f} />
                   <MiniStat icon={<Flame className="text-orange-500" />} label="KCAL" val={selectedRecipe.calories} />
                </div>

                <div className="space-y-10">
                  <h4 className="text-[11px] font-sync font-bold tracking-[0.5em] text-gray-500 uppercase">SYNTHETIC INGREDIENTS</h4>
                  <div className="space-y-4">
                    {selectedRecipe.ingredients.map((ing, i) => (
                      <div key={i} className="flex items-center space-x-6 border-b border-white/5 pb-4 group">
                        <CheckCircle2 className="w-6 h-6 text-cyan-400 group-hover:scale-125 transition-transform" />
                        <span className="text-2xl font-light text-gray-400 group-hover:text-white transition-colors uppercase font-sync tracking-tighter">{ing}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#050505] p-20 lg:p-32 space-y-20 flex flex-col justify-center">
                <div className="rounded-[70px] overflow-hidden shadow-2xl border border-white/5 h-[600px]">
                  <img src={selectedRecipe.img} className="w-full h-full object-cover" />
                </div>
                
                <div className="space-y-12">
                   <h4 className="text-[11px] font-sync font-bold tracking-[0.5em] text-gray-500 uppercase">EXECUTION PROTOCOL</h4>
                   <div className="space-y-10">
                     {selectedRecipe.instructions.map((inst, i) => (
                       <div key={i} className="flex space-x-10 items-start group">
                         <span className="font-sync text-4xl text-gray-800 group-hover:text-cyan-400 transition-colors leading-none">P-0{i+1}</span>
                         <p className="text-gray-400 text-xl font-light leading-relaxed group-hover:text-white transition-colors uppercase tracking-widest">{inst}</p>
                       </div>
                     ))}
                   </div>
                </div>

                <button className="bg-white text-black py-8 rounded-full font-bold font-sync text-[12px] uppercase tracking-[0.5em] hover:bg-cyan-400 transition-all active:scale-95 shadow-2xl">
                  VALIDATE LOG ENTRY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MacroInput = ({ label, val, onChange }: { label: string, val: number, onChange: (v: number) => void }) => (
  <div className="space-y-4">
    <label className="block text-[10px] font-sync text-gray-500 uppercase tracking-widest">{label}</label>
    <input 
      type="number" 
      value={val}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-cyan-500 transition-all font-light text-white text-2xl"
    />
  </div>
);

const MiniStat = ({ icon, label, val }: { icon: React.ReactNode, label: string, val: string }) => (
  <div className="text-center space-y-3 group">
    <div className="flex justify-center group-hover:scale-125 transition-transform">{icon}</div>
    <div className="text-[8px] font-sync text-gray-600 uppercase tracking-widest">{label}</div>
    <div className="text-2xl font-sync font-bold text-white tracking-tighter leading-none">{val}</div>
  </div>
);

export default NutritionPage;
