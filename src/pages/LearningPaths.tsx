
import React from 'react';
import Navigation from '@/components/Navigation';
import LearningPath from '@/components/LearningPath';

const paths = [
  {
    title: "Next.js Core Concepts",
    description: "Master the fundamental concepts of Next.js that are essential for a DEX Engineer role at Vercel.",
    steps: [
      {
        title: "App Router & Server Components",
        description: "Deep dive into Next.js 13+ App Router architecture and Server Components paradigm."
      },
      {
        title: "Streaming & Suspense",
        description: "Implement streaming responses and leverage Suspense for improved UX."
      },
      {
        title: "Edge Runtime & Middleware",
        description: "Build and deploy Edge Functions, implement middleware for global patterns."
      },
      {
        title: "Data Fetching Patterns",
        description: "Master Server Components data fetching, caching strategies, and revalidation."
      },
      {
        title: "Advanced Caching Strategies",
        description: "Implement distributed caching patterns and optimize for global deployments."
      }
    ]
  },
  {
    title: "Vercel Platform Expertise",
    description: "Understand Vercel's platform capabilities and deployment strategies essential for DEX engineering.",
    steps: [
      {
        title: "Edge Config & KV Storage",
        description: "Work with Vercel's Edge Config and KV storage solutions for global data access."
      },
      {
        title: "Edge Functions & Compute",
        description: "Deploy and optimize serverless functions at the edge using Vercel's infrastructure."
      },
      {
        title: "Monitoring & Analytics",
        description: "Implement logging, monitoring, and analytics using Vercel's observability tools."
      },
      {
        title: "CI/CD & Git Integration",
        description: "Set up automated deployment pipelines and integrate with version control systems."
      },
      {
        title: "Performance Optimization",
        description: "Optimize applications using Vercel's Image, Analytics, and Speed Insights."
      }
    ]
  },
  {
    title: "Developer Experience",
    description: "Focus on the tools and practices that enhance developer experience and productivity.",
    steps: [
      {
        title: "Turborepo & Monorepos",
        description: "Set up and manage monorepos using Turborepo for efficient development workflows."
      },
      {
        title: "TypeScript Integration",
        description: "Implement strong typing and type safety across Next.js applications."
      },
      {
        title: "Testing Strategies",
        description: "Write comprehensive tests using Playwright and Jest for full coverage."
      },
      {
        title: "Documentation & APIs",
        description: "Create developer documentation and design developer-first APIs."
      },
      {
        title: "Performance Monitoring",
        description: "Implement real-time monitoring and performance optimization strategies."
      }
    ]
  },
  {
    title: "Advanced Platform Features",
    description: "Master advanced Vercel platform features crucial for enterprise applications.",
    steps: [
      {
        title: "Authentication & Security",
        description: "Implement secure authentication patterns and protect sensitive resources."
      },
      {
        title: "International Edge Network",
        description: "Optimize applications for Vercel's global edge network deployment."
      },
      {
        title: "Enterprise Integrations",
        description: "Connect with enterprise systems and implement SSO solutions."
      },
      {
        title: "Custom Domains & SSL",
        description: "Manage domains, certificates, and implement custom routing strategies."
      },
      {
        title: "Team Collaboration",
        description: "Set up team workflows and implement collaborative development practices."
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
            DEX Engineering Learning Paths
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive learning paths focused on Vercel's platform, Next.js, and developer experience engineering.
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
