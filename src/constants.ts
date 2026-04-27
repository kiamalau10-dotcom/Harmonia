import { Badge, Materi, StoryNode, DailyTip } from './types';

export const INITIAL_PROGRESS = {
  level: 1,
  xp: 150,
  score: 0,
  badges: [
    { id: '1', name: 'Siswa Teladan', icon: 'Award', description: 'Menyelesaikan login pertama' }
  ],
  unlockedEndings: [],
  materiOpened: ['m1']
};

export const MATERI_LIST: Materi[] = [
  {
    id: 'm1',
    title: 'Apa itu Harmoni Sosial?',
    category: 'Dasar',
    content: 'Harmoni sosial adalah kondisi di mana anggota masyarakat hidup berdampingan secara damai...',
    type: 'infographic'
  },
  {
    id: 'm2',
    title: 'Syarat Harmoni',
    category: 'Dasar',
    content: 'Terdapat 3 syarat utama yaitu toleransi, kesadaran hukum, dan...',
    type: 'slide'
  },
  {
    id: 'm3',
    title: 'Solidaritas Sosial',
    category: 'Lanjut',
    content: 'Durkheim membagi solidaritas menjadi Mekanik dan Organik...',
    type: 'video'
  }
];

export const STORY_NODES: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: 'Kamu sedang berjalan di koridor sekolah dan melihat seorang teman baru sedang duduk sendirian sambil menangis karena diejek oleh siswa lain. Apa yang kamu lakukan?',
    choices: [
      { text: 'Menanyakan keadaannya dan menawarkan bantuan', nextNodeId: 'baik' },
      { text: 'Diam saja dan pura-pura tidak melihat', nextNodeId: 'ignored' },
      { text: 'Ikut menertawakan agar terlihat keren', nextNodeId: 'jahat' }
    ]
  },
  baik: {
    id: 'baik',
    text: 'Dia merasa sangat terbantu dengan kehadiranmu. Ternyata dia baru saja kehilangan barang berharganya. Kamu membantunya mencari barang tersebut.',
    choices: [
      { text: 'Mencarinya bersama-sama', nextNodeId: 'good_ending' },
      { text: 'Melapor ke guru piket', nextNodeId: 'hero_ending' }
    ]
  },
  ignored: {
    id: 'ignored',
    text: 'Kamu berlalu begitu saja. Besoknya kamu mendengar dia pindah sekolah karena merasa tidak punya teman.',
    choices: [
      { text: 'Lihat ending...', nextNodeId: 'sad_ending' }
    ]
  },
  jahat: {
    id: 'jahat',
    text: 'Tindakanmu direkam oleh CCTV sekolah dan kamu dipanggil ke ruang BK.',
    choices: [
      { text: 'Lihat ending...', nextNodeId: 'bad_ending' }
    ]
  },
  good_ending: {
    id: 'good_ending',
    text: 'KAMU BERHASIL! Dia sekarang menjadi sahabat terbaikmu dan kalian membangun klub anti-bullying di sekolah.',
    choices: [
      { text: 'Main Lagi', nextNodeId: 'start', endingType: 'Good' }
    ]
  },
  hero_ending: {
    id: 'hero_ending',
    text: 'PLOT TWIST! Ternyata guru piket adalah ayahnya yang sedang menyamar untuk menguji kepedulian siswa.',
    choices: [
      { text: 'Main Lagi', nextNodeId: 'start', endingType: 'Plot Twist' }
    ]
  },
  sad_ending: {
    id: 'sad_ending',
    text: 'PENYESALAN TERLAMBAT. Kamu menyadari bahwa harmoni sosial dimulai dari kepedulian kecil yang kamu abaikan.',
    choices: [
      { text: 'Main Lagi', nextNodeId: 'start', endingType: 'Sad' }
    ]
  },
  bad_ending: {
    id: 'bad_ending',
    text: 'BURUK! Kamu mendapatkan skorsing dan dijauhi teman-teman karena perilaku tidak harmonismu.',
    choices: [
      { text: 'Main Lagi', nextNodeId: 'start', endingType: 'Bad' }
    ]
  }
};

export const DAILY_TIPS: DailyTip[] = [
  { title: 'Toleransi', content: 'Coba dengarkan pendapat temanmu sampai selesai sebelum memotong pembicaraan.', icon: 'Ear' },
  { title: 'Empati', content: 'Bayangkan dirimu di posisi orang lain sebelum memberikan kritik.', icon: 'Heart' },
  { title: 'Komunikasi', content: 'Gunakan kata "Maaf", "Tolong", dan "Terima Kasih" lebih sering hari ini.', icon: 'MessageCircle' }
];
