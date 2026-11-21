import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/storeData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-warmcream-50 border-b border-amber-100/70 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
            Tanya Jawab (FAQ)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Informasi praktis seputar lapak mangkal, pesanan catering, dan jam buka.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-amber-200/80 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-stone-900 font-bold text-xs sm:text-sm focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className={`w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-800 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-600 text-white border-amber-600' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 border-t border-amber-100/60 leading-relaxed animate-in fade-in duration-200">
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
