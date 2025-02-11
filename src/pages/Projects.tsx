import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Code, GitFork, Bookmark, Layout, Image, Lock, ShoppingCart, Globe, FileText } from 'lucide-react';

const projects = [
  {
    title: "Technical Documentation Site",
    description: "Comprehensive documentation platform featuring interactive code playgrounds, troubleshooting guides, and API references. Includes search functionality, versioned docs, and integrated testing of code examples. Perfect writing sample for technical documentation roles!",
    duration: "6 hours",
    difficulty: "Advanced",
    topics: ["Documentation", "MDX", "Search", "Interactive Examples", "Troubleshooting", "API Reference"]
  },
  {
    title: "Developer Style Guide",
    description: "Create a comprehensive style guide for technical documentation, covering writing standards, code examples, and documentation structure. Includes templates, checklists, and best practices for maintaining consistent documentation across projects.",
    duration: "4 hours",
    difficulty: "Intermediate",
    topics: ["Style Guide", "Templates", "Best Practices", "Documentation"]
  },
  {
    title: "Authentication System",
    description: "Build a complete auth system with email/password and social login using Next.js and Supabase.",
    duration: "4 hours",
    difficulty: "Intermediate",
    topics: ["Auth", "Database", "API Routes"]
  },
  {
    title: "E-commerce Store",
    description: "Develop a full-featured store with product listings, cart, and Stripe checkout.",
    duration: "6 hours",
    difficulty: "Advanced",
    topics: ["Payments", "Cart Logic", "API Integration"]
  },
  {
    title: "Image Gallery",
    description: "Build an optimized image gallery with lazy loading and blur placeholders.",
    duration: "2 hours",
    difficulty: "Beginner",
    topics: ["Images", "Grid Layout", "Performance"]
  },
  {
    title: "Real-time Chat",
    description: "Create a real-time chat application using WebSockets and Supabase.",
    duration: "5 hours",
    difficulty: "Intermediate",
    topics: ["Real-time", "WebSocket", "UI/UX"]
  },
  {
    title: "Multi-language Site",
    description: "Build an internationalized website supporting multiple languages.",
    duration: "4 hours",
    difficulty: "Advanced",
    topics: ["i18n", "Routing", "SEO"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hands-on Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            Build real-world applications to reinforce your Next.js knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={project.title} className="group relative overflow-hidden border border-border hover:border-primary/20 transition-colors duration-300 animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {project.difficulty}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
