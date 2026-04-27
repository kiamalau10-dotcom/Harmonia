import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, Filter, Play, ArrowRight, X, Layers, Lightbulb } from 'lucide-react';
import { MATERI_LIST } from '../constants';

export default function Materi() {
  const [selectedMateri, setSelectedMateri] = useState<any>(null);
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'Dasar', 'Lanjut', 'Tantangan'];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Materi Interaktif</h1>
          <p className="text-slate-500">Belajar sosiologi dengan visual yang menyenangkan.</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-100 divide-x divide-slate-50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat ? 'bg-baby-blue text-white shadow-md' : 'text-slate-400 hover:text-baby-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid Materi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MATERI_LIST.filter(m => filter === 'Semua' || m.category === filter).map((materi, i) => (
          <motion.div
            key={materi.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedMateri(materi)}
            className={`group cursor-pointer bg-white rounded-4xl border-4 card-shadow overflow-hidden flex flex-col h-full ${
              materi.category === 'Dasar' ? 'border-baby-blue' : 'border-lilac'
            }`}
          >
            <div className={`h-40 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center ${
              materi.category === 'Dasar' ? 'bg-baby-blue/20' : 'bg-lilac/20'
            }`}>
              {materi.type === 'video' ? <Play className="text-[#553C9A]" size={48} /> : <BookOpen className="text-[#2B6CB0]" size={48} />}
              <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border-2 border-slate-100 shadow-sm">
                {materi.type}
              </div>
            </div>
            <div className="p-8 space-y-4 flex-1 flex flex-col">
              <div className="space-y-2">
                <p className={`text-[10px] font-black uppercase tracking-widest ${
                  materi.category === 'Dasar' ? 'text-[#2B6CB0]' : 'text-[#553C9A]'
                }`}>{materi.category}</p>
                <h3 className="text-xl font-display font-black text-text-primary leading-tight line-clamp-2">{materi.title}</h3>
              </div>
              <p className="text-sm text-slate-500 font-medium line-clamp-3 leading-relaxed flex-grow">
                {materi.content}
              </p>
              <div className="pt-6 border-t-2 border-dashed border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">5 Menit Belajar</span>
                <div className="w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-baby-blue group-hover:text-[#2B6CB0] group-hover:border-[#2B6CB0] transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Materi Modal / Detail Viewer */}
      <AnimatePresence>
        {selectedMateri && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-cream w-full max-w-4xl h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col relative"
            >
              <button 
                onClick={() => setSelectedMateri(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md text-slate-500 hover:text-soft-pink"
              >
                <X size={20} />
              </button>

              <div className="flex-1 overflow-y-auto hide-scrollbar p-8 md:p-12 space-y-12">
                <header className="space-y-2 max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-baby-blue/10 text-baby-blue rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {selectedMateri.category} • {selectedMateri.type}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                    {selectedMateri.title}
                  </h2>
                </header>

                {/* Content Sections Simulation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                    <div className="w-10 h-10 bg-soft-pink/10 text-soft-pink rounded-xl flex items-center justify-center">
                        <Layers size={20} />
                    </div>
                    <h4 className="font-bold text-slate-700">Konsep Utama</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic">
                      "Bayangkan sebuah orkestra, di mana setiap alat musik berbeda tetapi menghasilkan melodi yang indah. Itulah harmoni sosial."
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                    <div className="w-10 h-10 bg-baby-blue/10 text-baby-blue rounded-xl flex items-center justify-center">
                        <Lightbulb size={20} />
                    </div>
                    <h4 className="font-bold text-slate-700">Tahukah Kamu?</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Harmoni sosial tidak berarti tidak ada konflik. Tetapi bagaimana konflik dikelola agar tidak merusak kesatuan.
                    </p>
                  </div>
                </div>

                <article className="prose prose-slate max-w-none">
                  <p className="text-lg text-slate-600 leading-loose">
                    {selectedMateri.content}
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                  </p>
                  <div className="my-8 aspect-video bg-slate-100 rounded-3xl flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-pastel-gradient opacity-20" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs z-10">Interactive Visual / Animation Holder</p>
                  </div>
                  <p className="text-lg text-slate-600 leading-loose">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                  </p>
                </article>
              </div>

              <footer className="p-8 bg-white border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-lilac rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-[10px] font-bold">Harmo</div>
                    <p className="text-xs text-slate-400">“Gimana? Seru kan konsep intinya? Yuk lanjut ke kuis!”</p>
                </div>
                <button className="px-8 py-3 bg-pastel-gradient text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  Selesaikan & Ambil XP
                </button>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
