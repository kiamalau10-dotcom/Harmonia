export interface UserProgress {
  level: number;
  xp: number;
  score: number;
  badges: Badge[];
  unlockedEndings: string[];
  materiOpened: string[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  dateUnlocked?: string;
}

export interface Materi {
  id: string;
  title: string;
  category: string;
  content: string;
  image?: string;
  type: 'infographic' | 'video' | 'slide' | 'quiz';
}

export interface StoryNode {
  id: string;
  text: string;
  choices: Choice[];
}

export interface Choice {
  text: string;
  nextNodeId: string;
  endingType?: 'Good' | 'Bad' | 'Sad' | 'Plot Twist' | 'Secret';
}

export interface DiscussionPost {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  votes: number;
  category: string;
}

export interface DailyTip {
  title: string;
  content: string;
  icon: string;
}
