export type Theme = "dark" | "light" | "system";

export interface LearningPathStep {
  title: string;
  description: string;
}

export interface LearningPath {
  title: string;
  description: string;
  steps: LearningPathStep[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  duration?: string;
  lessons?: number;
}

export interface DocumentationSection {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge?: string;
  content: React.ReactNode;
}

