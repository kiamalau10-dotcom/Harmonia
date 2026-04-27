import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Timer, Zap, ArrowRight, CheckCircle2, XCircle, Flame, Medal } from 'lucide-react';

export default function Quiz() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'result'>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      q: 'Manakah yang merupakan syarat terjadinya harmoni sosial?',
      options: ['Adanya dominasi satu kelompok', 'Toleransi antar anggota masyarakat', 'Persaingan yang tidak sehat', 'Penutupan diri terhadap perubahan'],
      a: 1
    },
    {
      q: 'Solidaritas yang didasarkan pada kesamaan pekerjaan disebut...',
      options: ['Solidaritas Mekanik', 'Solidaritas Organik', 'Solidaritas Tradisional', 'Solidaritas Kelompok'],
      a: 1
    },
    {
      q: 'Integrasi sosial dapat tercapai jika...',
      options: ['Masyarakat tidak memiliki nilai bersama', 'Anggota masyarakat merasa saling mengisi', 'Terdapat konflik yang dibiarkan', 'Pemerintah memaksa kehendak'],
      a: 1
    }
  ];

  const handleAnswer = (idx: number) => {
    if (idx === questions[currentQuestion].a) {
      setScore(score + 100);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('result');
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center space-y-8 py-20"
          >
            <div className="w-24 h-24 bg-yellow-tint border-4 border-sidebar-border rounded-4xl flex items-center justify-center mx-auto card-shadow rotate-12">
               <span className="text-5xl">🏆</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-display font-black text-text-primary">Quiz Battle! ⚔️</h1>
              <p className="text-slate-500 text-lg font-medium max-w-md mx-auto leading-relaxed">
                Uji pengetahuan sosiologimu dengan tantangan cepat. Dapatkan skor tertinggi di leaderboard!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-3xl card-shadow border-4 border-baby-blue">
                 <Timer size={20} className="text-[#2B6CB0]" />
                 <span className="text-sm font-black text-[#2B6CB0] uppercase tracking-widest">60 Detik</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-3xl card-shadow border-4 border-soft-pink">
                 <Zap size={20} className="text-[#9B2C2C]" />
                 <span className="text-sm font-black text-[#9B2C2C] uppercase tracking-widest">+500 XP Max</span>
              </div>
            </div>
            <button 
              onClick={() => setGameState('playing')}
              className="px-12 py-5 bg-[#553C9A] text-white font-black rounded-3xl text-sm uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform border-4 border-white"
            >
              Mulai Battle!
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div 
            key="playing"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-50 flex items-center justify-center text-baby-blue font-bold">
                    {currentQuestion + 1}/{questions.length}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</p>
                    <div className="h-1.5 w-32 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-baby-blue transition-all duration-300" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
                    </div>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Skor</p>
                  <p className="text-2xl font-bold text-soft-pink font-display">{score}</p>
               </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-50 shadow-sm space-y-10">
               <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                 {questions[currentQuestion].q}
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className="p-6 rounded-2xl border-2 border-slate-50 text-left hover:border-baby-blue hover:bg-baby-blue/5 transition-all group flex items-center justify-between"
                    >
                      <span className="text-slate-600 font-medium group-hover:text-baby-blue">{opt}</span>
                      <div className="w-6 h-6 rounded-full border-2 border-slate-100 group-hover:border-baby-blue" />
                    </button>
                  ))}
               </div>
            </div>
          </motion.div>
        )}

        {gameState === 'result' && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-10 py-12"
          >
            <div className="relative inline-block">
               <div className="w-48 h-48 bg-white/50 backdrop-blur-xl rounded-[3rem] flex flex-col items-center justify-center border border-white/50 shadow-2xl">
                  <Medal size={64} className="text-yellow-500 mb-2" />
                  <p className="text-4xl font-display font-bold text-slate-800">{score}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Poin Berhasil Diraih</p>
               </div>
               <div className="absolute -top-4 -right-4 w-12 h-12 bg-soft-pink text-white rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce">
                 +50 XP
               </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-800">Luar Biasa!</h2>
              <p className="text-slate-500 max-w-sm mx-auto">
                Kamu memiliki pemahaman harmoni sosial yang sangat baik. Bagikan skor ini ke Circle Discussion!
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm space-y-4">
               <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest px-2">
                  <span>Leaderboard Mingguan</span>
                  <span>Skor</span>
               </div>
               <div className="space-y-2">
                  {[
                    { name: 'Rizwan Hakim', score: 1250, top: true },
                    { name: 'Jane Doe (You)', score: score, active: true },
                    { name: 'Siti Aminah', score: 950 },
                  ].map((user, i) => (
                    <div key={i} className={`flex items-center justify-between p-4 rounded-xl ${user.active ? 'bg-baby-blue/10 border border-baby-blue/20' : 'bg-slate-50'}`}>
                      <div className="flex items-center gap-3">
                         <span className="text-xs font-bold text-slate-400">#{i+1}</span>
                         <div className={`w-8 h-8 rounded-full ${user.top ? 'bg-yellow-100 text-yellow-600' : 'bg-slate-200 text-slate-500'} flex items-center justify-center text-[10px] font-bold`}>
                            {user.name[0]}
                         </div>
                         <span className={`text-sm font-bold ${user.active ? 'text-baby-blue' : 'text-slate-700'}`}>{user.name}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-500">{user.score}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="flex items-center justify-center gap-4">
                <button 
                  onClick={() => {
                    setGameState('start');
                    setScore(0);
                    setCurrentQuestion(0);
                  }}
                  className="px-8 py-4 bg-white text-slate-400 font-bold rounded-2xl border border-slate-100 hover:text-slate-600 transition-colors"
                >
                  Main Lagi
                </button>
                <button className="px-8 py-4 bg-baby-blue text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                  Bagikan Skor <ArrowRight size={20} />
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
