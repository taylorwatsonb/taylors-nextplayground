
import React from 'react';
import Navigation from '@/components/Navigation';
import LearningPath from '@/components/LearningPath';

const paths = [
  {
    title: "Next.js Fundamentals",
    description: "Master the basics of Next.js development through hands-on learning and practical examples.",
    steps: [
      {
        title: "Understanding Pages & Routing",
        description: "Learn how Next.js handles file-based routing and navigation."
      },
      {
        title: "Data Fetching Methods",
        description: "Explore different ways to fetch and manage data in Next.js."
      },
      {
        title: "Static & Dynamic Rendering",
        description: "Master the concepts of SSG and SSR in Next.js."
      }
    ]
  },
  {
    title: "Advanced Next.js Features",
    description: "Take your Next.js skills to the next level with advanced concepts and optimizations.",
    steps: [
      {
        title: "Middleware & Authentication",
        description: "Implement authentication and protect routes using middleware."
      },
      {
        title: "API Routes & Backend Integration",
        description: "Build API routes and integrate with backend services."
      },
      {
        title: "Performance Optimization",
        description: "Learn techniques to optimize your Next.js applications."
      }
    ]
  }
];

const LearningPaths = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learning Paths
          </h1>
          <p className="text-xl text-muted-foreground">
            Structured paths to master Next.js development.
          </p>
        </div>
        
        <div className="space-y-16">
          {paths.map((path) => (
            <LearningPath key={path.title} {...path} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default LearningPaths;
