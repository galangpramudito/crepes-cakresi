import { useState } from 'react';
import { FAQS } from '../data/storeData';
import { waLink } from '../lib/utils';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream-100 text-choco-950 border-b border-choco-200/60">
      <div className="container-page space-y-12">

        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-block text-xs font-black tracking-widest uppercase text-caramel-700 bg-caramel-100 px-3 py-1 rounded-md border border-caramel-200">
            Tanya Jawab (FAQ)
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-choco-950">
            Pertanyaan yang Sering Diajukan.
          </h2>
          <p className="text-base sm:text-lg text-choco-600 leading-relaxed font-normal">
            Seputar pemesanan, titik mangkal di taman, dan pemesanan catering acara.
          </p>
        </div>

        {/* Clean Accordion List (Zero SVG) */}
        <div className="max-w-3xl space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="rounded-2xl bg-white border border-choco-200/80 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display text-base sm:text-lg font-black uppercase tracking-tight text-choco-900 hover:text-caramel-700 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 font-mono text-xl font-black text-caramel-600">
                    {isOpen ? '&minus;' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-choco-600 leading-relaxed border-t border-choco-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Help Prompt */}
        <div className="max-w-3xl pt-2 text-sm text-choco-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p>Punya pertanyaan lain yang belum terjawab?</p>
          <a
            href={waLink('Halo Mas Resi Hutomo, saya mau tanya langsung...')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-display text-xs font-black uppercase tracking-wider text-caramel-700 hover:text-caramel-800 underline underline-offset-4"
          >
            <span>Tanya Mas Resi Langsung via WA</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
