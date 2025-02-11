
import React from 'react';
import Navigation from '@/components/Navigation';
import CourseGrid from '@/components/CourseGrid';
import LearningPath from '@/components/LearningPath';

const beginnerPath = {
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
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Interactive Next.js Learning
          </h1>
          <p className="text-xl text-muted-foreground">
            Master Next.js through hands-on tutorials and interactive examples.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Featured Courses</h2>
            <CourseGrid />
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Learning Path</h2>
            <LearningPath {...beginnerPath} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
