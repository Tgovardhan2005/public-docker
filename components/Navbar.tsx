
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-lg">
            <span className="material-symbols-outlined block">school</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">
            KEC <span className="text-primary">x</span> GUVI
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Programs', 'Collaboration', 'Benefits', 'Mentors'].map((item) => (
            <a key={item} href="#" className="text-sm font-semibold hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-primary px-4 py-2 hover:bg-primary/5 rounded-lg transition-all">
            Sign In
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-md shadow-primary/20">
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
