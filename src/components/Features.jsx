import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Flame, 
  Award, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

export default function Features() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Tekstur Golden Crisp',
      desc: 'Adonan resep khas Cak Resz menghasilkan kerenyahan kulit crepes yang garing merata dan tidak mudah letoy saat dibawa pulang.'
    },
    {
      icon: Heart,
      title: 'Topping Asli & Melimpah',
      desc: 'Menggunakan bahan berkualitas seperti Nutella asli, keju cheddar parut tebal, ovomaltine crunchy, dan lelehan keju mozzarella gurih.'
    },
    {
      icon: Flame,
      title: 'Dipanggang Fresh Dadakan',
      desc: 'Setiap pesanan dibuat langsung di atas loyang putar panas saat Anda memesan, sehingga selalu dinikmati dalam kondisi hangat wangi.'
    },
    {
      icon: Award,
      title: '100% Halal & Higienis',
      desc: 'Seluruh bahan baku bersertifikat halal dengan standar kebersihan gerai yang terjaga dan kemasan ramah bawa pulang.'
    }
  ];

  return (
    <section id="tentang" className="py-16 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Kualitas & Keunggulan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
            Mengapa Memilih Crepes Cak Resz?
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Kami menjaga cita rasa dan tekstur autentik di setiap lembar crepes agar menghadirkan pengalaman ngemil yang memuaskan.
          </p>
        </div>

        {/* 4 Clean Highlight Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-[#FAF9F5] p-5 sm:p-6 rounded-2xl border border-stone-200/70 hover:border-amber-700/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-amber-800 mb-4 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brief Story Strip */}
        <div className="mt-10 bg-[#FAF9F5] rounded-2xl border border-stone-200/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
              1h+
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Kemasan Khusus Berpori</h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Mengeluarkan uap panas agar crepes tetap renyah hingga 45-60 menit saat dibawa pulang.
              </p>
            </div>
          </div>
          <a
            href="#menu"
            className="shrink-0 text-xs font-bold text-amber-800 hover:text-amber-900 underline underline-offset-4"
          >
            Lihat Pilihan Menu
          </a>
        </div>

      </div>
    </section>
  );
}
