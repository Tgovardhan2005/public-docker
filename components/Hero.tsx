
import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Academic Partnership 2024
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Empowering KEC Students with <span className="text-primary">Industry-Ready</span> Skills
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            A premier collaboration between Kongu Engineering College and GUVI. Bridge the gap between academia and the tech industry through specialized certification tracks.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/25 transition-all">
              Explore All Programs
            </button>
            <button className="bg-white border border-slate-200 hover:border-primary text-slate-700 font-bold py-4 px-8 rounded-xl transition-all">
              About Collaboration
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-200"
            style={{ 
              backgroundImage: `url('${IMAGES.hero}')`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          />
          
          {/* Stats Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <span className="material-symbols-outlined block">trending_up</span>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">95%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
