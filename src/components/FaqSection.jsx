import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/storeData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            ❓ Tanya Jawab (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Punya pertanyaan sebelum memesan? Temukan jawabannya di bawah ini.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="mt-10 space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-amber-50/40 rounded-2xl border border-amber-200/70 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span className="font-bold text-stone-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-amber-200 text-amber-700 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-500 text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-amber-100/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
