
export enum FitnessGoal {
  WEIGHT_LOSS = 'Weight Loss',
  MUSCLE_GAIN = 'Muscle Gain',
  STAMINA = 'Stamina/Endurance',
  FLEXIBILITY = 'Flexibility',
  SPORTS_SPECIFIC = 'Sports Specific'
}

export enum FitnessLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  PRO = 'Professional'
}

export interface WorkoutPlan {
  title: string;
  description: string;
  exercises: {
    name: string;
    sets: string;
    reps: string;
    rest: string;
    tips: string;
  }[];
  durationWeeks: number;
}

export interface UserProfile {
  weight: number;
  height: number;
  age: number;
  goal: FitnessGoal;
  level: FitnessLevel;
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  difficulty: FitnessLevel;
  caloriesBurned: number;
  videoUrl: string;
  steps: string[];
}
