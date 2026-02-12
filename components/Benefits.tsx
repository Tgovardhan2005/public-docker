
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Beyond the Classroom</h2>
          <p className="text-slate-600">Exclusive opportunities for KEC students enrolled in these programs.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="bg-primary/5 p-8 rounded-3xl border border-primary/10 text-center hover:bg-primary/10 transition-colors group cursor-default">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform inline-block">
                {benefit.icon}
              </span>
              <h4 className="font-bold mb-2 text-slate-900">{benefit.title}</h4>
              <p className="text-sm text-slate-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
