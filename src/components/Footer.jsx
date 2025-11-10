import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-48 w-[36rem] rounded-full blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, rgba(139,92,246,0.25) 50%, transparent 70%)'
        }} />
      </div>
      <div className="relative border-t border-black/5 dark:border-white/10 bg-gradient-to-b from-transparent to-sky-50/50 dark:to-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-300">
            <div className="text-center sm:text-left">
              © 2025 Just Say Thank You Abrar. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a className="hover:underline" href="#about">About</a>
              <a className="hover:underline" href="#">Privacy</a>
              <a className="hover:underline" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
