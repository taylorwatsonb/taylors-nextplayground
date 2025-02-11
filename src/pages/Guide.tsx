
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Book, Code, Zap, Layout, Database, Globe, Cpu, Lock, Search, Activity, Terminal } from 'lucide-react';

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
            Comprehensive documentation, best practices, and troubleshooting tips.
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
                <Badge variant="outline">Pages & Routing</Badge>
                <span className="text-sm text-muted-foreground">File-system based routing and dynamic routes</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Data Fetching</Badge>
                <span className="text-sm text-muted-foreground">Static, server-side, and client-side data fetching</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Layouts</Badge>
                <span className="text-sm text-muted-foreground">Shared layouts and nested routing patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">API Routes</Badge>
                <span className="text-sm text-muted-foreground">Building serverless API endpoints</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Performance</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Badge variant="outline">Image Optimization</Badge>
                <span className="text-sm text-muted-foreground">Automatic image optimization and lazy loading</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Code Splitting</Badge>
                <span className="text-sm text-muted-foreground">Automatic code splitting and bundle optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">ISR</Badge>
                <span className="text-sm text-muted-foreground">Incremental Static Regeneration strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Caching</Badge>
                <span className="text-sm text-muted-foreground">HTTP caching and static optimization</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Troubleshooting</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Badge variant="outline">Hydration Errors</Badge>
                <span className="text-sm text-muted-foreground">Fixing client/server HTML mismatch issues</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Build Errors</Badge>
                <span className="text-sm text-muted-foreground">Common build-time issues and solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">API Issues</Badge>
                <span className="text-sm text-muted-foreground">Debugging API routes and data fetching</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Performance</Badge>
                <span className="text-sm text-muted-foreground">Identifying and fixing performance bottlenecks</span>
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
                <Badge variant="outline">Authentication</Badge>
                <span className="text-sm text-muted-foreground">Implementing secure user authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Middleware</Badge>
                <span className="text-sm text-muted-foreground">Custom middleware and edge functions</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Internationalization</Badge>
                <span className="text-sm text-muted-foreground">Multi-language support and routing</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Testing</Badge>
                <span className="text-sm text-muted-foreground">Unit testing and integration testing</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Guide;
