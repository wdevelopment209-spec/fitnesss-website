
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area 
} from 'recharts';
import { 
  Zap, 
  TrendingUp, 
  Award, 
  Clock, 
  Flame, 
  Activity,
  ChevronRight,
  MoreVertical
} from 'lucide-react';

const DATA = [
  { name: 'Mon', power: 85, stamina: 40 },
  { name: 'Tue', power: 75, stamina: 55 },
  { name: 'Wed', power: 90, stamina: 70 },
  { name: 'Thu', power: 65, stamina: 60 },
  { name: 'Fri', power: 95, stamina: 85 },
  { name: 'Sat', power: 100, stamina: 90 },
  { name: 'Sun', power: 50, stamina: 40 },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-sync font-bold mb-2 uppercase">COMMAND CENTER</h1>
          <p className="text-gray-500 font-light">Status: <span className="text-cyan-400 font-bold">OPTIMIZED</span> | Tier: <span className="text-red-400 font-bold">PLATINUM</span></p>
        </div>
        <div className="flex items-center space-x-4">
           <div className="flex -space-x-3">
             {[1, 2, 3].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-gray-800">
                 <img src={`https://picsum.photos/seed/${i + 50}/100/100`} alt="Friend" />
               </div>
             ))}
             <div className="w-10 h-10 rounded-full border-2 border-black bg-white/10 flex items-center justify-center text-[10px] font-bold">+12</div>
           </div>
           <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">SYNC GEAR</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard icon={<Flame className="text-red-500" />} label="CAL BURN" value="4,820" change="+12%" />
        <StatCard icon={<Activity className="text-cyan-400" />} label="AV. HEART" value="142 BPM" change="-2%" />
        <StatCard icon={<Clock className="text-yellow-400" />} label="TRAINING" value="12.5 HRS" change="+5%" />
        <StatCard icon={<Zap className="text-cyan-400" />} label="ELITE SCORE" value="842" change="+24" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Charts */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-sync font-bold uppercase tracking-tight">Performance Output</h3>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs font-sync text-gray-400">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA}>
                  <defs>
                    <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                  <Area type="monotone" dataKey="power" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorPower)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-lg font-sync font-bold mb-6 uppercase">Upcoming Drills</h3>
              <div className="space-y-4">
                <DrillItem title="Sprint Intervals" time="06:00 AM" type="Cardio" />
                <DrillItem title="Heavy Back Squats" time="05:30 PM" type="Strength" />
                <DrillItem title="Active Recovery" time="Tomorrow" type="Yoga" />
              </div>
            </div>
            <div className="glass p-8 rounded-3xl">
               <h3 className="text-lg font-sync font-bold mb-6 uppercase">Nutritional Goal</h3>
               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-sync mb-2">
                      <span className="text-gray-500">PROTEIN</span>
                      <span className="text-white">160g / 200g</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 w-4/5"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-sync mb-2">
                      <span className="text-gray-500">CARBS</span>
                      <span className="text-white">240g / 300g</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 w-3/4"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-sync font-bold mb-8 uppercase">Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              <Badge icon={<TrendingUp className="text-cyan-400" />} label="Early Bird" />
              <Badge icon={<Flame className="text-red-500" />} label="Iron Lungs" />
              <Badge icon={<Zap className="text-yellow-400" />} label="Pure Power" />
              <Badge icon={<Award className="text-cyan-400" />} label="Centurion" />
            </div>
            <button className="w-full mt-8 text-xs font-sync text-cyan-400 hover:text-white transition-colors flex items-center justify-center space-x-2">
              <span>VIEW GALLERY</span> <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-black p-8 rounded-3xl border border-cyan-500/20">
            <h3 className="text-xl font-sync font-bold mb-4 uppercase">AI Coach Feedback</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              "Your heart rate recovery has improved by 4.2% since last week. Consider increasing your load on Friday's squats."
            </p>
            <button className="w-full bg-cyan-500 text-black py-3 rounded-xl font-bold text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
              ASK COACH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, change }: { icon: React.ReactNode, label: string, value: string, change: string }) => (
  <div className="glass p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-white/5 rounded-xl">{icon}</div>
      <div className={`text-xs font-bold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</div>
    </div>
    <div className="text-xs font-sync text-gray-500 mb-1 uppercase tracking-widest">{label}</div>
    <div className="text-2xl font-sync font-bold">{value}</div>
  </div>
);

const DrillItem = ({ title, time, type }: { title: string, time: string, type: string }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
    <div className="flex items-center space-x-4">
      <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:animate-ping"></div>
      <div>
        <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h4>
        <span className="text-[10px] text-gray-500 font-sync">{type}</span>
      </div>
    </div>
    <span className="text-xs font-sync text-gray-500">{time}</span>
  </div>
);

const Badge = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5">
    <div className="mb-2">{icon}</div>
    <span className="text-[10px] font-sync text-gray-500 text-center uppercase tracking-tighter">{label}</span>
  </div>
);

export default DashboardPage;
