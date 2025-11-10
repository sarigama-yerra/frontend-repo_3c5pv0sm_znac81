import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, Search, ClipboardList, Globe, Cpu, ArrowRight } from 'lucide-react';

const subjectMeta = [
  { key: 'AML', name: 'Applied Machine Learning', icon: Brain, tagline: 'Master AI concepts easily!' },
  { key: 'PR', name: 'Pattern Recognition', icon: Layers, tagline: 'Patterns, features, classifiers.' },
  { key: 'IR', name: 'Information Retrieval', icon: Search, tagline: 'Search like a pro.' },
  { key: 'SPM', name: 'Software Project Management', icon: ClipboardList, tagline: 'Plan, track, deliver.' },
  { key: 'WC', name: 'Web Computing', icon: Globe, tagline: 'Modern web foundations.' },
  { key: 'IoT', name: 'Internet of Things', icon: Cpu, tagline: 'Connect the world.' },
];

const Subjects = ({ onViewQuestions }) => {
  return (
    <section id="subjects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Subjects</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">Choose a subject to explore important questions by chapter and marks.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectMeta.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.key}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-3xl bg-white/70 dark:bg-zinc-800/70 border border-black/5 dark:border-white/10 p-6 shadow backdrop-blur-md hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white flex items-center justify-center shadow">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-zinc-100">{s.key}</div>
                      <div className="text-sm text-zinc-500">{s.name}</div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{s.tagline}</p>
                <button
                  onClick={() => onViewQuestions(s.key)}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                >
                  View Questions
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
