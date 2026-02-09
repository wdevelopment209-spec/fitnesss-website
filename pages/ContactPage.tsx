
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Globe, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
             <div>
                <h1 className="text-6xl font-sync font-bold mb-6 tracking-tighter uppercase">GET IN <span className="text-glow-blue">TOUCH</span></h1>
                <p className="text-gray-500 text-xl font-light leading-relaxed">
                  Connect with our elite support team or inquire about professional partnerships. We're here to optimize your journey.
                </p>
             </div>

             <div className="space-y-8">
                <ContactInfo icon={<Mail className="text-cyan-400" />} label="EMAIL" value="performance@aurafit.ai" />
                <ContactInfo icon={<Phone className="text-red-500" />} label="PHONE" value="+1 (800) AURA-FIT" />
                <ContactInfo icon={<MapPin className="text-yellow-400" />} label="HQ" value="Neo-Tokyo Tech District, Sector 7" />
             </div>

             <div className="pt-12 border-t border-white/5">
                <h4 className="text-xs font-sync text-gray-500 mb-6 tracking-widest uppercase">SOCIAL PROTOCOLS</h4>
                <div className="flex space-x-6">
                   <SocialIcon icon={<Instagram />} />
                   <SocialIcon icon={<Twitter />} />
                   <SocialIcon icon={<Facebook />} />
                   <SocialIcon icon={<Globe />} />
                </div>
             </div>
          </div>

          <div className="glass p-12 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
             
             <h3 className="text-2xl font-sync font-bold mb-10 uppercase tracking-tight">Transmission</h3>
             <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-sync text-gray-500 uppercase tracking-widest">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-cyan-500 transition-colors" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-sync text-gray-500 uppercase tracking-widest">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-cyan-500 transition-colors" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-sync text-gray-500 uppercase tracking-widest">Subject</label>
                   <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 focus:outline-none focus:border-cyan-500 transition-colors appearance-none text-gray-400">
                      <option className="bg-black">General Inquiry</option>
                      <option className="bg-black">Pro Partnerships</option>
                      <option className="bg-black">Technical Support</option>
                      <option className="bg-black">Career Opportunities</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-sync text-gray-500 uppercase tracking-widest">Message Payload</label>
                   <textarea rows={4} placeholder="Describe your inquiry..." className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
                </div>
                <button className="group w-full bg-white text-black py-5 rounded-2xl font-sync text-sm font-bold flex items-center justify-center space-x-3 hover:bg-cyan-500 transition-all shadow-xl hover:shadow-cyan-500/20">
                   <span>INITIATE SEND</span>
                   <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
             </form>
          </div>
       </div>
    </div>
  );
};

const ContactInfo = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center space-x-6 group">
     <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all">
        {icon}
     </div>
     <div>
        <div className="text-[10px] font-sync text-gray-500 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{value}</div>
     </div>
  </div>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
    {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
  </button>
);

export default ContactPage;
