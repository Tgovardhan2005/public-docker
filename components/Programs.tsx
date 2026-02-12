
import React from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Specialized Certification Tracks</h2>
            <p className="text-slate-600 font-medium">
              Choose from our curated selection of industry-aligned programs designed to make you professional from day one.
            </p>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-2 group">
            View All Tracks <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="group flex flex-col bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`size-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-${program.color}-500/10 text-${program.color}-500`}>
                <span className="material-symbols-outlined text-3xl">{program.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{program.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{program.duration}</span>
                <button className="text-primary font-bold text-sm hover:underline">Learn More</button>
              </div>
            </div>
          ))}

          {/* Request Custom Track Card */}
          <div className="group flex flex-col bg-primary p-8 rounded-3xl transition-all hover:shadow-xl shadow-primary/20 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="size-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Request Custom Track</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Looking for something specific? Contact our academic counselors to design a custom learning path.
              </p>
              <div className="mt-auto">
                <button className="bg-white text-primary font-bold py-3 px-6 rounded-xl text-sm w-full hover:bg-slate-50 transition-colors">
                  Contact Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
