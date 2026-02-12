
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-16 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-1.5 rounded-md">
            <span className="material-symbols-outlined text-sm block">school</span>
          </div>
          <span className="text-lg font-extrabold tracking-tight">
            KEC <span className="text-primary">x</span> GUVI
          </span>
        </div>
        
        <div className="flex gap-8 text-sm font-bold text-slate-500">
          {['Privacy Policy', 'Terms of Service', 'Help Center'].map(link => (
            <a key={link} href="#" className="hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
        
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} KEC x GUVI Collaboration. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
