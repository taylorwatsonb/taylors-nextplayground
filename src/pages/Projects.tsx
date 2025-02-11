
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Code, GitFork } from 'lucide-react';

const projects = [
  {
    title: "Dynamic Blog with MDX",
    description: "Build a blog using Next.js and MDX for rich content authoring.",
    duration: "2 hours",
    difficulty: "Intermediate",
    topics: ["MDX", "Dynamic Routes", "Styling"]
  },
  {
    title: "Authentication System",
    description: "Implement user authentication with Next.js and Supabase.",
    duration: "3 hours",
    difficulty: "Advanced",
    topics: ["Auth", "Database", "API Routes"]
  },
  {
    title: "Image Gallery",
    description: "Create an optimized image gallery using Next.js Image component.",
    duration: "1.5 hours",
    difficulty: "Beginner",
    topics: ["Images", "Grid Layout", "Performance"]
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
            Learn by building real-world Next.js applications.
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
