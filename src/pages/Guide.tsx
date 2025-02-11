
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
                <span className="text-sm text-muted-foreground">
                  Understanding file-system based routing, dynamic routes, and route groups. Learn how to create static and dynamic pages, handle URL parameters, and implement nested routing patterns.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Data Fetching</Badge>
                <span className="text-sm text-muted-foreground">
                  Master different data fetching methods: getStaticProps for static generation, getServerSideProps for server-side rendering, and SWR/React Query for client-side data fetching.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Layouts</Badge>
                <span className="text-sm text-muted-foreground">
                  Create reusable layouts with app directory, implement nested layouts, and manage shared UI elements. Learn about layout groups and templates for flexible page structures.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">API Routes</Badge>
                <span className="text-sm text-muted-foreground">
                  Build serverless API endpoints, handle HTTP methods, implement API middleware, and integrate with databases. Learn best practices for API route organization and error handling.
                </span>
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
                <span className="text-sm text-muted-foreground">
                  Implement automatic image optimization using next/image, lazy loading strategies, responsive images, and blur placeholder effects. Learn about image formats and sizing optimization.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Code Splitting</Badge>
                <span className="text-sm text-muted-foreground">
                  Optimize bundle sizes with automatic code splitting, dynamic imports, and route prefetching. Learn about module analysis and performance monitoring tools.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">ISR Strategies</Badge>
                <span className="text-sm text-muted-foreground">
                  Implement Incremental Static Regeneration for dynamic content, manage revalidation periods, and handle on-demand revalidation. Learn about stale-while-revalidate patterns.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Caching</Badge>
                <span className="text-sm text-muted-foreground">
                  Master HTTP caching headers, implement Redis caching, and utilize browser caching strategies. Learn about cache invalidation and cache control directives.
                </span>
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
                <span className="text-sm text-muted-foreground">
                  Debug and fix client/server HTML mismatch issues, handle state hydration, and resolve React hydration warnings. Learn about common hydration pitfalls and solutions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Build Errors</Badge>
                <span className="text-sm text-muted-foreground">
                  Resolve common build-time issues, debug module resolution errors, and fix TypeScript compilation problems. Learn about environment configuration and deployment troubleshooting.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">API Issues</Badge>
                <span className="text-sm text-muted-foreground">
                  Debug API routes, handle CORS errors, resolve authentication issues, and fix data fetching problems. Learn about error boundaries and API monitoring.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Performance</Badge>
                <span className="text-sm text-muted-foreground">
                  Identify and fix performance bottlenecks, optimize rendering, and resolve memory leaks. Learn about performance profiling and monitoring tools.
                </span>
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
                <span className="text-sm text-muted-foreground">
                  Implement secure authentication with NextAuth.js, handle JWT tokens, manage sessions, and integrate OAuth providers. Learn about role-based access control and security best practices.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Middleware</Badge>
                <span className="text-sm text-muted-foreground">
                  Create custom middleware for authentication, logging, and request transformation. Learn about edge functions, middleware composition, and response manipulation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Internationalization</Badge>
                <span className="text-sm text-muted-foreground">
                  Set up multi-language support, implement language switching, handle RTL layouts, and manage translations. Learn about SEO optimization for multilingual content.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline">Testing</Badge>
                <span className="text-sm text-muted-foreground">
                  Write unit tests with Jest, implement integration testing with Cypress, and set up end-to-end testing. Learn about test coverage and continuous integration.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Guide;
