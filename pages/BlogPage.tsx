
import React, { useState } from 'react';
import { Clock, User, ArrowRight, Share2, Bookmark, X, BookOpen, ChevronRight, TrendingUp } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  author: string;
  readTime: string;
  category: string;
  img: string;
  content: string[];
}

const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: "Neuro-Plasticity in High Velocity Sports",
    author: "Dr. Elena Vance",
    readTime: "8 min",
    category: "Science",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    content: [
      "The intersection of neurological health and peak athletic performance is a rapidly evolving field. Understanding how the brain rewires itself during high-intensity training is the key to breaking performance plateaus.",
      "Our research shows that 'neural firing patterns' adapt significantly when athletes engage in complex, multi-modal drills. This isn't just muscle memory; it's a cognitive upgrade.",
      "To optimize your neural pathways, we recommend introducing 'variable resistance' and 'cognitive stressors' into your secondary training sessions."
    ]
  },
  {
    id: 'art-2',
    title: "The 4AM Club: Mastering Your Morning Bio-Rhythm",
    author: "Coach Marcus",
    readTime: "5 min",
    category: "Lifestyle",
    img: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800",
    content: [
      "Success is a habit, and for the elite athlete, that habit starts before the sun rises. Controlled exposure to early morning light and cold thermogenesis can reset your biological clock.",
      "The 'Aura Morning Protocol' focuses on three pillars: Hydration, Mobilization, and Intention. By winning the first 60 minutes of your day, you win the day.",
      "Consistency over intensity is the secret. A daily 4AM wake-up call, even on rest days, maintains the hormonal balance required for peak recovery."
    ]
  },
  {
    id: 'art-3',
    title: "Injury Prevention: The Art of Active Recovery",
    author: "Sarah Jenkins, DPT",
    readTime: "12 min",
    category: "Health",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    content: [
      "Modern physical therapy has moved beyond rest. Active recovery—movement performed at 40-50% of maximum heart rate—is the superior method for flushing lactic acid and repairing tissue.",
      "The 'Dynamic Reset' series, curated by our medical team, targets deep myofascial release while maintaining joint lubrication.",
      "Listen to your body's neural feedback. If a movement causes 'sharp' vs 'dull' feedback, your CNS is sending a warning. Adapt the load instantly."
    ]
  }
];

const BlogPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10 animate-in fade-in duration-700">
        <div className="space-y-4">
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-lg text-[9px] font-sync text-cyan-400 uppercase tracking-widest">
            KNOWLEDGE DATABASE
          </div>
          <h1 className="text-6xl font-sync font-bold tracking-tighter uppercase leading-none">INTEL <span className="text-gray-500">FEED</span></h1>
          <p className="text-gray-500 max-w-lg font-light text-lg">Elite insights from the world's leading sports scientists and performance coaches.</p>
        </div>
        <div className="flex flex-wrap gap-3">
           {['Research', 'Lifestyle', 'Updates', 'Pro-Insight'].map(tag => (
             <button key={tag} className="px-6 py-3 glass rounded-2xl text-[10px] font-sync text-gray-400 hover:text-white hover:border-white/20 transition-all uppercase border border-white/5">
               {tag}
             </button>
           ))}
        </div>
      </div>

      {/* Featured Post */}
      <div 
        onClick={() => setSelectedArticle(ARTICLES[0])}
        className="relative h-[650px] rounded-[56px] overflow-hidden mb-24 group cursor-pointer shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/10"
      >
         <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            alt="Featured" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
         <div className="absolute bottom-0 left-0 p-16 max-w-4xl space-y-8">
            <div className="flex items-center space-x-4">
               <div className="bg-red-500 text-white px-5 py-1.5 rounded-full text-[9px] font-sync font-bold uppercase tracking-widest flex items-center shadow-lg">
                  <TrendingUp className="w-3 h-3 mr-2" />
                  <span>TRENDING ANALYSIS</span>
               </div>
               <span className="text-gray-400 font-sync text-[9px] uppercase tracking-widest">SYSTEM UPDATED: 12H AGO</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-sync font-bold tracking-tighter leading-[0.9] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
               THE FUTURE OF <br /> WEARABLE PERFORMANCE
            </h2>
            <p className="text-gray-300 text-xl font-light leading-relaxed max-w-2xl">
               How real-time biological feedback loops are rewriting the record books in professional athletics.
            </p>
            <div className="flex items-center space-x-10 text-xs">
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-black text-sm shadow-lg">AF</div>
                  <div>
                    <div className="font-sync text-[10px] text-white">AURAFIT TEAM</div>
                    <div className="text-gray-500 text-[9px] font-sync uppercase">Core Analysts</div>
                  </div>
               </div>
               <div className="flex items-center space-x-3 text-gray-500 font-sync text-[10px] uppercase">
                  <Clock className="w-4 h-4" />
                  <span>15 MIN READ</span>
               </div>
               <button className="bg-white text-black px-8 py-3 rounded-full font-bold font-sync text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-colors">
                  READ PROTOCOL
               </button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {ARTICLES.map((art, i) => (
          <div key={art.id} onClick={() => setSelectedArticle(art)} className="group cursor-pointer space-y-8 animate-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${i * 150}ms` }}>
             <div className="relative h-80 rounded-[40px] overflow-hidden border border-white/5 group-hover:border-cyan-500/30 transition-all shadow-xl">
                <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all">
                   <button className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:text-black transition-all border border-white/10">
                      <Bookmark className="w-4 h-4" />
                   </button>
                   <button className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:text-black transition-all border border-white/10">
                      <Share2 className="w-4 h-4" />
                   </button>
                </div>
                <div className="absolute bottom-6 left-6">
                   <div className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] font-sync text-cyan-400 border border-cyan-500/20 uppercase tracking-[0.2em]">
                    {art.category}
                   </div>
                </div>
             </div>
             <div className="space-y-4 px-2">
                <h3 className="text-2xl font-sync font-bold group-hover:text-cyan-400 transition-colors tracking-tighter leading-none uppercase">
                  {art.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] text-gray-500 font-sync">
                   <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                         <User className="w-4 h-4" />
                      </div>
                      <span className="uppercase tracking-widest font-bold text-gray-400">{art.author}</span>
                   </div>
                   <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime}</span>
                   </div>
                </div>
                <div className="pt-6 flex items-center space-x-2 text-[10px] font-sync text-cyan-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                   <span>FULL ANALYSIS</span>
                   <ChevronRight className="w-4 h-4" />
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={() => setSelectedArticle(null)}></div>
          <div className="relative glass w-full max-w-5xl max-h-[90vh] rounded-[56px] border border-white/20 overflow-y-auto animate-in zoom-in-95 duration-500 shadow-2xl">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-10 right-10 z-[130] w-14 h-14 bg-black/60 rounded-full flex items-center justify-center hover:bg-red-500 transition-all border border-white/10 hover:scale-110 shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-1">
              <div className="h-96 w-full relative">
                 <img src={selectedArticle.img} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                 <div className="absolute bottom-16 left-16 right-16">
                    <div className="text-[10px] font-sync text-cyan-400 uppercase tracking-[0.3em] mb-4">{selectedArticle.category} // PERFORMANCE INTEL</div>
                    <h2 className="text-5xl lg:text-7xl font-sync font-bold uppercase tracking-tighter leading-none">{selectedArticle.title}</h2>
                 </div>
              </div>
              
              <div className="p-16 lg:p-24 space-y-12 max-w-4xl mx-auto">
                <div className="flex items-center space-x-12 pb-12 border-b border-white/5">
                   <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center font-bold text-cyan-400">
                         {selectedArticle.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-xs font-sync font-bold uppercase tracking-widest">{selectedArticle.author}</div>
                        <div className="text-[10px] font-sync text-gray-500 uppercase tracking-tighter">Aura Senior Consultant</div>
                      </div>
                   </div>
                   <div className="flex items-center space-x-4 text-gray-500 font-sync text-[10px]">
                      <Clock className="w-5 h-5" />
                      <span>ESTIMATED READING: {selectedArticle.readTime}</span>
                   </div>
                </div>

                <div className="space-y-10">
                   {selectedArticle.content.map((p, i) => (
                     <p key={i} className="text-xl font-light text-gray-300 leading-relaxed first-letter:text-5xl first-letter:font-sync first-letter:text-cyan-400 first-letter:mr-3 first-letter:float-left">
                       {p}
                     </p>
                   ))}
                </div>

                <div className="pt-20 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-3 text-[10px] font-sync text-gray-500 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>SHARE INTEL</span>
                      </button>
                      <button className="flex items-center space-x-3 text-[10px] font-sync text-gray-500 hover:text-white transition-colors">
                        <Bookmark className="w-4 h-4" />
                        <span>BOOKMARK ARTICLE</span>
                      </button>
                   </div>
                   <div className="flex items-center space-x-3 text-[10px] font-sync text-gray-400">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                      <span>PERFORMANCE LIBRARY // SECTOR 7</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-24 text-center">
         <button className="group px-16 py-6 glass border border-white/5 rounded-full font-sync text-[10px] tracking-[0.3em] hover:bg-white/5 transition-all uppercase hover:border-cyan-500/30">
            LOAD MORE INTEL <ChevronRight className="inline-block w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
         </button>
      </div>
    </div>
  );
};

export default BlogPage;
