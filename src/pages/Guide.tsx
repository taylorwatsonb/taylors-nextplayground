
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Book, Code, Zap } from 'lucide-react';

const Guide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Next.js Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Essential concepts, best practices, and debugging strategies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 animate-fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Book className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Core Concepts</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Badge variant="outline">Routing</Badge>
                <span className="text-sm text-muted-foreground">File-based routing system and navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Data Fetching</Badge>
                <span className="text-sm text-muted-foreground">SSR, SSG, and ISR strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Rendering</Badge>
                <span className="text-sm text-muted-foreground">Client vs Server components</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Best Practices</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Badge variant="outline">Performance</Badge>
                <span className="text-sm text-muted-foreground">Optimization techniques and metrics</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Architecture</Badge>
                <span className="text-sm text-muted-foreground">Project structure and organization</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">TypeScript</Badge>
                <span className="text-sm text-muted-foreground">Type safety and best practices</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Common Issues</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Badge variant="outline">Hydration</Badge>
                <span className="text-sm text-muted-foreground">Fixing hydration mismatches</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Build</Badge>
                <span className="text-sm text-muted-foreground">Resolving build-time errors</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Runtime</Badge>
                <span className="text-sm text-muted-foreground">Debugging runtime issues</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 animate-fade-up" style={{ animationDelay: "450ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Advanced Topics</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Badge variant="outline">Middleware</Badge>
                <span className="text-sm text-muted-foreground">Custom middleware implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">API Routes</Badge>
                <span className="text-sm text-muted-foreground">Building serverless APIs</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Edge Runtime</Badge>
                <span className="text-sm text-muted-foreground">Edge functions and deployment</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Guide;
