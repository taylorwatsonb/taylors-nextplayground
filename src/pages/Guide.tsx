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
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Pages & Routing</h3>
                <div className="space-y-3">
                  <div>
                    <Badge variant="outline">File-system Based Routing</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Next.js uses a file-system based router where:
                      - Files in pages/ become routes automatically
                      - pages/index.js becomes the / route
                      - pages/about.js becomes /about
                      - pages/blog/[slug].js handles dynamic blog posts
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Dynamic Routes</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Create dynamic routes using square brackets:
                      - [id].js for single dynamic segments
                      - [...slug].js for catch-all routes
                      - [[...slug]].js for optional catch-all routes
                      Access route parameters via useRouter() hook
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Route Groups</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Organize routes without affecting URL structure:
                      - (marketing)/about.js creates /about
                      - (shop)/products/[id].js creates /products/[id]
                      Useful for keeping related pages together
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Data Fetching</h3>
                <div className="space-y-3">
                  <div>
                    <Badge variant="outline">Static Generation (getStaticProps)</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Pre-render pages at build time:
                      - Perfect for blogs, documentation
                      - Data available during build
                      - Fastest page loads
                      - Can be cached by CDN
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Server-side Rendering (getServerSideProps)</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Generate pages on each request:
                      - Real-time data requirements
                      - Access to request/response
                      - SEO requirements with dynamic data
                      - Protected pages needing authentication
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Client-side Data Fetching</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fetch data on the client using:
                      - SWR for automatic revalidation
                      - React Query for complex data management
                      - useState + useEffect for simple cases
                      Best for frequently updated, user-specific data
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Layouts & Components</h3>
                <div className="space-y-3">
                  <div>
                    <Badge variant="outline">App Directory Layouts</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Create consistent layouts:
                      - layout.js defines shared UI
                      - Nested layouts for sections
                      - Layout groups for variations
                      - Templates for per-page layouts
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Component Architecture</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Build reusable components:
                      - Smart vs Presentational
                      - Server vs Client Components
                      - Component composition patterns
                      - Props and type safety
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Metadata & SEO</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Optimize for search engines:
                      - Page-level metadata
                      - Open Graph tags
                      - JSON-LD structured data
                      - Dynamic meta tags
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">API Routes</h3>
                <div className="space-y-3">
                  <div>
                    <Badge variant="outline">API Route Handlers</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Create serverless API endpoints:
                      - Handle HTTP methods
                      - Access request/response
                      - Parse query parameters
                      - Validate request body
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Middleware & Authentication</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Protect API routes:
                      - Custom middleware
                      - JWT validation
                      - Rate limiting
                      - Error handling
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline">Database Integration</Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Connect to databases:
                      - ORM setup (Prisma, Drizzle)
                      - Connection pooling
                      - Query optimization
                      - Error handling
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
