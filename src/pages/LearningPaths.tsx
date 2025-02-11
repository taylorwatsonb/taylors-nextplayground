
import React from 'react';
import Navigation from '@/components/Navigation';
import LearningPath from '@/components/LearningPath';

const paths = [
  {
    title: "Next.js Fundamentals",
    description: "Start your journey with Next.js by mastering the core concepts and basic features.",
    steps: [
      {
        title: "Project Setup & Structure",
        description: "Learn how to create a new Next.js project and understand its directory structure."
      },
      {
        title: "Routing & Navigation",
        description: "Master file-based routing, dynamic routes, and navigation between pages."
      },
      {
        title: "Components & Layouts",
        description: "Create reusable components and implement consistent layouts across pages."
      },
      {
        title: "Data Fetching Basics",
        description: "Learn getStaticProps and getServerSideProps for basic data fetching."
      },
      {
        title: "Styling in Next.js",
        description: "Explore CSS Modules, Tailwind CSS, and other styling approaches."
      }
    ]
  },
  {
    title: "Intermediate Concepts",
    description: "Dive deeper into Next.js features and learn advanced data handling techniques.",
    steps: [
      {
        title: "Dynamic Routes & Params",
        description: "Handle complex routing scenarios and URL parameters effectively."
      },
      {
        title: "API Routes & Backend",
        description: "Build API endpoints and handle server-side logic within Next.js."
      },
      {
        title: "Image Optimization",
        description: "Master the Image component and automatic image optimization."
      },
      {
        title: "State Management",
        description: "Implement client-side state management with React Context and SWR."
      },
      {
        title: "Forms & Validation",
        description: "Handle form submissions and implement client/server validation."
      }
    ]
  },
  {
    title: "Advanced Features",
    description: "Master advanced Next.js concepts and optimize your applications.",
    steps: [
      {
        title: "Middleware & Authentication",
        description: "Implement custom middleware and secure your application."
      },
      {
        title: "Incremental Static Regeneration",
        description: "Optimize static content updates with ISR strategies."
      },
      {
        title: "Performance Optimization",
        description: "Master code splitting, lazy loading, and performance monitoring."
      },
      {
        title: "Internationalization",
        description: "Implement multi-language support and localization."
      },
      {
        title: "Deployment & CI/CD",
        description: "Set up automated deployment pipelines and optimize for production."
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
            Follow structured paths to master Next.js development, from basics to advanced concepts.
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
