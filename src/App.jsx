import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Subjects from './components/Subjects';
import QASection from './components/QASection';
import Footer from './components/Footer';
import { Bot } from 'lucide-react';

function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
  );
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);
  return { isDark, toggle: () => setIsDark((v) => !v) };
}

const App = () => {
  const { isDark, toggle } = useTheme();
  const [subject, setSubject] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Guest');
  const subjectsRef = useRef(null);

  const onStart = () => {
    subjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = () => {
    // Mock Google login animation + state
    setIsLoggedIn(true);
    setUserName('GTU Student');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('Guest');
  };

  const onNavClick = (section) => {
    if (section === 'subjects') subjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    if (section === 'about') document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-indigo-200/60 selection:text-zinc-900">
      <Header
        onLoginClick={handleLogin}
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onToggleTheme={toggle}
        isDark={isDark}
        onNavClick={onNavClick}
      />

      <Hero onStart={onStart} />

      <div ref={subjectsRef}>
        <Subjects onViewQuestions={(s) => setSubject(s)} />
      </div>

      <QASection subject={subject} />

      <section id="about" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 dark:bg-zinc-800/70 border border-black/5 dark:border-white/10 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">About</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              “Just Say Thank You Abrar” is created by students, for students — to make GTU exam preparation smarter and more organized. Built with love by Abrar for those who want to say ‘thank you’ by succeeding. 🎓
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
              {[
                'All GTU subjects in one place',
                'Covers past 6+ years of papers',
                'Organized by chapter & marks',
                'Google Login for personalized access',
                'Fast, mobile-friendly, and easy UI',
              ].map((f) => (
                <div key={f} className="rounded-2xl bg-white/70 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10 px-4 py-3">{f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 dark:bg-zinc-800/70 border border-black/5 dark:border-white/10 p-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Contact</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Have suggestions or found an issue? Reach out at abrar@example.com</p>
          </div>
        </div>
      </section>

      <Footer />

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-4 py-3 shadow-lg hover:shadow-xl"
      >
        <Bot size={18} /> Chat with Study Bot
      </motion.button>
    </div>
  );
};

export default App;
