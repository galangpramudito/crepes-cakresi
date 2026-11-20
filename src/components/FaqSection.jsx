import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/storeData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-stone-200/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Pertanyaan Umum
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Hal-hal yang sering ditanyakan seputar produk dan pemesanan.
          </p>
        </div>

        {/* Clean Accordion Items */}
        <div className="space-y-2.5">
          {FAQS.slice(0, 5).map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-stone-900 font-bold text-xs sm:text-sm focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-amber-700' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
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
