import React from 'react';
import { LogIn, User, Moon, Sun } from 'lucide-react';

const Header = ({ onLoginClick, onLogout, isLoggedIn, userName, onToggleTheme, isDark, onNavClick }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-violet-500 shadow-lg" />
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-lg">
            📘 Just Say Thank You Abrar
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <button onClick={() => onNavClick('home')} className="hover:text-zinc-900 dark:hover:text-white transition">Home</button>
          <button onClick={() => onNavClick('subjects')} className="hover:text-zinc-900 dark:hover:text-white transition">Subjects</button>
          <button onClick={() => onNavClick('about')} className="hover:text-zinc-900 dark:hover:text-white transition">About</button>
          <button onClick={() => onNavClick('contact')} className="hover:text-zinc-900 dark:hover:text-white transition">Contact</button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-800/70 px-3 py-2 text-zinc-700 dark:text-zinc-200 shadow-sm hover:shadow transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/70 dark:bg-zinc-800/70 border border-black/5 dark:border-white/10 px-3 py-2 shadow-sm">
                <User size={16} className="text-indigo-500" />
                <span className="text-sm text-zinc-700 dark:text-zinc-200">{userName}</span>
              </div>
              <button
                onClick={onLogout}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm px-4 py-2 shadow hover:opacity-90 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-4 py-2 shadow hover:opacity-90 transition"
            >
              <LogIn size={18} />
              <span className="hidden sm:inline">Login with Google</span>
              <span className="sm:hidden">Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
