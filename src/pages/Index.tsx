
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import CourseGrid from '@/components/CourseGrid';
import LearningPath from '@/components/LearningPath';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Code, Terminal, Github } from 'lucide-react';

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
    id: "api",
    icon: Book,
    title: "API Reference",
    description: "Comprehensive API documentation with interactive examples, type definitions, and best practices.",
    badge: "New",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-4">API Documentation</h3>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">GET /api/courses</h4>
            <p className="text-sm text-muted-foreground">Retrieve a list of available courses.</p>
            <pre className="mt-2 bg-muted p-2 rounded"><code>GET /api/courses</code></pre>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">POST /api/enroll</h4>
            <p className="text-sm text-muted-foreground">Enroll in a specific course.</p>
            <pre className="mt-2 bg-muted p-2 rounded"><code>POST /api/enroll {'{ courseId: string }'}</code></pre>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "code",
    icon: Code,
    title: "Code Examples",
    description: "Well-documented code samples with TypeScript and error handling patterns.",
    badge: "Popular",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Error Handling Pattern</h4>
            <pre className="bg-muted p-2 rounded">
              <code>{`try {
  const data = await fetchData();
  return data;
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.message);
  }
  throw error;
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "cli",
    icon: Terminal,
    title: "CLI Tools",
    description: "Command-line tools and utilities for improved developer workflow.",
    badge: "Beta",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-4">CLI Commands</h3>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Create New Project</h4>
            <pre className="bg-muted p-2 rounded"><code>npx create-next-app@latest</code></pre>
            <p className="text-sm text-muted-foreground mt-2">Creates a new Next.js project with recommended defaults.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Development Server</h4>
            <pre className="bg-muted p-2 rounded"><code>npm run dev</code></pre>
            <p className="text-sm text-muted-foreground mt-2">Starts the development server with hot reloading.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "community",
    icon: Github,
    title: "Community",
    description: "Join our community of developers, share knowledge, and contribute.",
    badge: "Active",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
        <div className="space-y-4">
          <p className="text-muted-foreground">Connect with other developers, share your knowledge, and get help from the community.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Discord Server</h4>
              <p className="text-sm text-muted-foreground">Join our active Discord community for real-time discussions.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">GitHub Discussions</h4>
              <p className="text-sm text-muted-foreground">Participate in technical discussions and feature requests.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const Index = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("api");

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
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full flex-wrap justify-start">
                {documentationSections.map((section) => (
                  <TabsTrigger key={section.id} value={section.id}>
                    {section.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {documentationSections.map((section) => (
                  <Card 
                    key={section.title}
                    className={`p-6 hover:border-primary/50 transition-colors cursor-pointer group ${activeTab === section.id ? 'border-primary' : ''}`}
                    onClick={() => {
                      if (section.id === "community") {
                        handleContribute();
                      } else {
                        setActiveTab(section.id);
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

              <div className="mt-8">
                {documentationSections.map((section) => (
                  <TabsContent 
                    key={section.id} 
                    value={section.id}
                  >
                    {section.content}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
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
