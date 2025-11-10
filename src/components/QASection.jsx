import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileDown, Bookmark } from 'lucide-react';

const sampleData = {
  AML: [
    { id: 1, q: 'Explain bias-variance tradeoff.', a: 'The bias-variance tradeoff balances underfitting and overfitting by managing model complexity and data fit.', marks: 7 },
    { id: 2, q: 'Define regularization and its types.', a: 'Regularization penalizes large weights to prevent overfitting. Common types: L1, L2, Elastic Net.', marks: 4 },
  ],
  PR: [
    { id: 3, q: 'What is feature extraction?', a: 'Transforming raw data into informative features that improve classifier performance.', marks: 4 },
  ],
};

const QAItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-zinc-800/70 border border-black/5 dark:border-white/10 p-4">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between text-left">
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.q}</div>
          <div className="mt-1 inline-flex items-center gap-2 text-xs text-zinc-500">
            <span className="rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-2 py-0.5">{item.marks} Marks</span>
          </div>
        </div>
        <ChevronDown size={18} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pt-3 text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QASection = ({ subject }) => {
  const data = sampleData[subject] || [];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Questions & Answers</h3>
          <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2">
            <FileDown size={16} /> Download as PDF
          </button>
        </div>
        <div className="space-y-4">
          {data.length === 0 ? (
            <div className="text-zinc-600 dark:text-zinc-300">Select a subject to view questions.</div>
          ) : (
            data.map((item) => (
              <div key={item.id} className="relative">
                <QAItem item={item} />
                <button className="absolute top-3 right-3 text-zinc-500 hover:text-indigo-500">
                  <Bookmark size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default QASection;
