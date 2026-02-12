
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/40">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
          ></div>
          
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl">
              Ready to Accelerate Your Tech Career?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl">
              Join over 5,000+ KEC students who have successfully transitioned into high-paying tech roles through our specialized programs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <button className="bg-white text-primary hover:bg-slate-50 font-black py-4 px-10 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
                Enroll in a Program
              </button>
              <button className="bg-primary/20 hover:bg-primary/30 text-white border border-white/30 font-bold py-4 px-10 rounded-2xl backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
                Contact Training Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
