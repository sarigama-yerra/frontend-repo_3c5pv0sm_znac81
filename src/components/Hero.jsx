import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpenText, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const MotionGradient = () => (
  <div className="absolute inset-0 pointer-events-none">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute -top-40 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full blur-3xl"
      style={{
        background:
          'radial-gradient(40% 40% at 50% 50%, rgba(99,102,241,0.35), rgba(56,189,248,0.25), rgba(139,92,246,0.15), transparent)'
      }}
    />
  </div>
);

const Hero = ({ onStart }) => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/Y0xTG0QZpCXzPGkB/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <MotionGradient />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              Study Smarter, Not Harder <span className="inline-block">💡</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-prose"
            >
              Access all GTU important questions with detailed answers — organized by subject and marks.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={onStart}
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-violet-500 text-white px-5 py-3 shadow-lg hover:shadow-xl transition"
              >
                Start Learning
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-white/70 dark:bg-zinc-800/70 border border-black/5 dark:border-white/10 text-zinc-800 dark:text-zinc-100 px-5 py-3 shadow hover:shadow-md transition">
                <BookOpenText size={18} />
                Login with Google
              </button>
            </motion.div>
            <div className="mt-10 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Sparkles size={16} className="text-indigo-500" />
              Smooth scrolling, glass cards, and delightful motion.
            </div>
          </div>
          <div className="relative h-[420px] rounded-3xl bg-gradient-to-br from-white/60 via-sky-50/40 to-violet-50/40 dark:from-zinc-900/40 dark:via-zinc-900/30 dark:to-zinc-900/20 border border-black/5 dark:border-white/10 shadow-xl">
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -right-20 -top-16 h-72 w-72 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(139,92,246,0.35) 60%, transparent 70%)' }}
              />
            </div>
            <div className="relative h-full p-6 flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-3">
                {['AML','PR','IR','SPM','WC','IoT'].map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="rounded-2xl bg-white/80 dark:bg-zinc-800/70 border border-black/5 dark:border-white/10 p-4 shadow"
                  >
                    <div className="text-xs uppercase tracking-wide text-zinc-500">Subject</div>
                    <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{s}</div>
                    <div className="mt-1 text-xs text-zinc-500">Important Q&A</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
