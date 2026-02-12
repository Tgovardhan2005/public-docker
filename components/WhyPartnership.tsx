
import React from 'react';
import { IMAGES, PARTNERSHIP_FEATURES } from '../constants';

const WhyPartnership: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="aspect-square rounded-3xl bg-slate-200 shadow-lg"
              style={{ backgroundImage: `url('${IMAGES.partnership1}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div 
              className="aspect-square rounded-3xl bg-slate-200 mt-12 shadow-lg"
              style={{ backgroundImage: `url('${IMAGES.partnership2}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Why Choose This Partnership?</h2>
            <p className="text-slate-600 font-medium">
              Our collaboration combines KEC's academic excellence with GUVI's industry-first approach to tech education.
            </p>
          </div>
          
          <div className="space-y-8">
            {PARTNERSHIP_FEATURES.map((feature, idx) => (
              <div key={idx} className="flex gap-5 group">
                <div className="flex-none size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnership;
