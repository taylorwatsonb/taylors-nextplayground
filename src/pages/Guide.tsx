import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Book, Code, Zap, Layout, Database, Globe, Cpu, Lock, Search, Activity, Terminal, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Guide = () => {
  const { toast } = useToast();
  const [apiResponse, setApiResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Copied to clipboard",
        description: "Code has been copied successfully!",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to copy",
        description: "Please try again.",
      });
    }
  };

  const tryApiExample = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      setApiResponse(JSON.stringify(data, null, 2));
      toast({
        title: "API Call Successful",
        description: "Check the response below!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "API Call Failed",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const apiExampleCode = `export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  return Response.json({ data: { id } });
}`;

  const clientFetchCode = `const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: async () => {
    const res = await fetch('/api/todos')
    return res.json()
  }
});`;

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
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => {
                        toast({
                          title: "File-system Based Routing",
                          description: "Create a file in the pages directory to automatically create a route at that path.",
                        });
                      }}
                    >
                      File-system Based Routing
                    </Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Next.js uses a file-system based router where:
                      - Files in pages/ become routes automatically
                      - pages/index.js becomes the / route
                      - pages/about.js becomes /about
                      - pages/blog/[slug].js handles dynamic blog posts
                    </p>
                  </div>
                  <div>
                    <Badge 
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => {
                        toast({
                          title: "Dynamic Routes Example",
                          description: "pages/blog/[slug].js → /blog/hello-world",
                        });
                      }}
                    >
                      Dynamic Routes
                    </Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Create dynamic routes using square brackets:
                      - [id].js for single dynamic segments
                      - [...slug].js for catch-all routes
                      - [[...slug]].js for optional catch-all routes
                      Access route parameters via useRouter() hook
                    </p>
                  </div>
                  <div>
                    <Badge 
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => {
                        toast({
                          title: "Route Groups Example",
                          description: "(marketing)/about.js creates /about without including 'marketing' in the URL",
                        });
                      }}
                    >
                      Route Groups
                    </Badge>
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
                    <Badge 
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => copyToClipboard(`export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}`)}
                    >
                      Static Generation (getStaticProps)
                    </Badge>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Pre-render pages at build time:
                      - Perfect for blogs, documentation
                      - Data available during build
                      - Fastest page loads
                      - Can be cached by CDN
                    </p>
                  </div>
                  <div>
                    <Badge 
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => copyToClipboard(`export async function getServerSideProps(context) {
  const data = await fetchData(context.params);
  return { props: { data } };
}`)}
                    >
                      Server-side Rendering (getServerSideProps)
                    </Badge>
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
              <Code className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Interactive Examples</h2>
            </div>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-muted/50">
                <h3 className="text-lg font-medium mb-2">API Route Handler</h3>
                <pre className="bg-background p-4 rounded-md text-sm overflow-x-auto">
                  {apiExampleCode}
                </pre>
                <div className="mt-2 flex gap-2">
                  <Badge 
                    variant="outline" 
                    className="bg-primary/10 cursor-pointer hover:bg-primary/20 transition-colors"
                    onClick={tryApiExample}
                  >
                    {isLoading ? 'Loading...' : 'Try It'}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="bg-emerald-500/10 text-emerald-500 cursor-pointer hover:bg-emerald-500/20 transition-colors"
                    onClick={() => copyToClipboard(apiExampleCode)}
                  >
                    Copy
                  </Badge>
                </div>
                {apiResponse && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Response:</h4>
                    <pre className="bg-background p-4 rounded-md text-sm overflow-x-auto">
                      {apiResponse}
                    </pre>
                  </div>
                )}
              </div>

              <div className="border rounded-lg p-4 bg-muted/50">
                <h3 className="text-lg font-medium mb-2">Client Data Fetching</h3>
                <pre className="bg-background p-4 rounded-md text-sm overflow-x-auto">
                  {clientFetchCode}
                </pre>
                <div className="mt-2 flex gap-2">
                  <Badge 
                    variant="outline" 
                    className="bg-primary/10 cursor-pointer hover:bg-primary/20 transition-colors"
                    onClick={() => {
                      toast({
                        title: "Client Code Example",
                        description: "This code needs to be integrated into a React component to work.",
                      });
                    }}
                  >
                    Try It
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="bg-emerald-500/10 text-emerald-500 cursor-pointer hover:bg-emerald-500/20 transition-colors"
                    onClick={() => copyToClipboard(clientFetchCode)}
                  >
                    Copy
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Common Issues & Solutions</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  Hydration Errors
                </h3>
                <pre className="bg-red-500/10 text-red-600 p-4 rounded-md text-sm mb-2 cursor-pointer"
                  onClick={() => copyToClipboard(`Text content does not match server-rendered HTML`)}
                >
                  {`Text content does not match server-rendered HTML`}
                </pre>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-sm cursor-pointer hover:text-primary/80"
                      onClick={() => {
                        toast({
                          title: "Solution Tip",
                          description: "Move client-side specific code into useEffect to avoid hydration mismatches.",
                        });
                      }}
                    >
                      Use useEffect for client-side only code
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-sm cursor-pointer hover:text-primary/80"
                      onClick={() => {
                        toast({
                          title: "Solution Tip",
                          description: "Make sure your server and client components receive and render the same props.",
                        });
                      }}
                    >
                      Ensure consistent props between server and client
                    </p>
                  </div>
                  <pre className="bg-emerald-500/10 text-emerald-600 p-4 rounded-md text-sm mt-2 cursor-pointer"
                    onClick={() => copyToClipboard(`useEffect(() => {
  // Client-side code here
}, []);`)}
                  >
                    {`useEffect(() => {
  // Client-side code here
}, []);`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  API Route Issues
                </h3>
                <pre className="bg-red-500/10 text-red-600 p-4 rounded-md text-sm mb-2">
                  {`API resolved without sending a response`}
                </pre>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-sm">Always return a Response object</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-sm">Handle all possible execution paths</p>
                  </div>
                  <pre className="bg-emerald-500/10 text-emerald-600 p-4 rounded-md text-sm mt-2">
                    {`export async function GET() {
  try {
    // Your logic here
    return Response.json({ data });
  } catch (error) {
    return Response.json(
      { error: 'Internal error' },
      { status: 500 }
    );
  }
}`}
                  </pre>
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
              <Terminal className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Documentation Best Practices</h2>
            </div>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Style Guide</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use clear, concise language</li>
                  <li>• Include practical code examples</li>
                  <li>• Follow consistent formatting</li>
                  <li>• Provide troubleshooting steps</li>
                  <li>• Include version information</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Documentation Structure</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clear hierarchy of information</li>
                  <li>• Progressive disclosure of complexity</li>
                  <li>• Consistent navigation patterns</li>
                  <li>• Related content linking</li>
                  <li>• Search-optimized content</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Guide;
