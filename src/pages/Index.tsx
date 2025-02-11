
import React from 'react';
import Navigation from '@/components/Navigation';
import CourseGrid from '@/components/CourseGrid';
import LearningPath from '@/components/LearningPath';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Code, Terminal, Github, Layout, Database, Globe, Cpu, Lock, Search, Activity } from 'lucide-react';

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

const documentationSections = [
  {
    icon: Book,
    title: "API Reference",
    description: "Comprehensive API documentation with interactive examples, type definitions, and best practices.",
    badge: "New"
  },
  {
    icon: Code,
    title: "Code Examples",
    description: "Well-documented code samples with TypeScript and error handling patterns.",
    badge: "Popular"
  },
  {
    icon: Terminal,
    title: "CLI Tools",
    description: "Command-line tools and utilities for improved developer workflow.",
    badge: "Beta"
  },
  {
    icon: Github,
    title: "Community",
    description: "Join our community of developers, share knowledge, and contribute.",
    badge: "Active"
  }
];

const Index = () => {
  const { toast } = useToast();

  const handleContribute = () => {
    toast({
      title: "Coming Soon",
      description: "The community contribution feature will be available soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Developer-First Learning Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            Master Next.js through comprehensive documentation, interactive examples, and community-driven resources.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documentationSections.map((section) => (
                <Card 
                  key={section.title}
                  className="p-6 hover:border-primary/50 transition-colors cursor-pointer group"
                  onClick={() => {
                    if (section.title === "Community") {
                      handleContribute();
                    }
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {section.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

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
