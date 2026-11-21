import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/storeData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const seoFaqs = [
    {
      question: 'Di mana lokasi crepes terdekat di area Desa Bligo Candi Sidoarjo?',
      answer: 'Lapak Crepes Cak Resz (Mas Resi Hutomo) berlokasi tepat di area Taman Perumahan Mutiara Citra Graha, Desa Bligo, Kecamatan Candi, Kabupaten Sidoarjo. Sangat mudah dijangkau bagi Anda yang mencari crepes terdekat di wilayah Candi, Tanggulangin, dan sekitarnya. Buka setiap sore pukul 16.00 hingga 21.30 WIB.'
    },
    {
      question: 'Kenapa Crepes Cak Resz disebut salah satu crepes enak dan terbaik di Sidoarjo?',
      answer: 'Karena Mas Resi Hutomo sudah konsisten berjualan sejak tahun 2013 (lebih dari 10 tahun). Menggunakan bahan berkualitas halal, adonan dipanggang dadakan langsung di loyang putar sehingga menghasilkan kerenyahan keemasan yang tahan lama, topping melimpah, dan harga merakyat mulai Rp 7.000.'
    },
    {
      question: 'Bagaimana cara pesan crepes untuk catering acara di Sidoarjo?',
      answer: 'Anda bisa langsung menghubungi Mas Resi Hutomo via WhatsApp di nomor 0889-8905-5777 minimal H-1 atau H-2 sebelum acara. Kami melayani catering crepes untuk ulang tahun anak, arisan RT/RW, dan rapat warga di area Candi dan Sidoarjo dengan paket hemat mulai dari 20 porsi.'
    },
    {
      question: 'Bisa pesan via WhatsApp dulu sebelum mampir ke lapak taman?',
      answer: 'Bisa sekali! Anda bisa chat WA terlebih dahulu untuk titip pesanan, jadi saat Anda tiba di taman perumahan crepes sudah siap diambil tanpa perlu lama mengantre.'
    },
    {
      question: 'Metode pembayaran apa saja yang diterima di lapak gerobak?',
      answer: 'Kami menerima uang tunai (cash) serta pembayaran non-tunai lewat scan barcode QRIS yang sudah tersedia di gerobak.'
    }
  ];

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
            Informasi lengkap seputar <strong>crepes terdekat</strong> di Bligo, menu favorit, dan layanan <strong>crepes catering Sidoarjo</strong>.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {seoFaqs.map((faq, idx) => {
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
