
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Search, Book, Code, FileText, Bug, Terminal, Database, Globe } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const [selectedVersion, setSelectedVersion] = useState('v1.0');

  const versions = ['v1.0', 'v0.9', 'v0.8'];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // In a real app, this would trigger a search through the documentation
    toast({
      title: "Search Feature",
      description: "Search functionality will be implemented in the next iteration.",
    });
  };

  const handleRunCode = () => {
    toast({
      title: "Code Playground",
      description: "Code execution feature will be available soon!",
    });
  };

  const documentationSections = [
    {
      id: "getting-started",
      icon: Book,
      title: "Getting Started",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Getting Started</h3>
          <p className="text-muted-foreground">
            Welcome to our comprehensive documentation. Follow these steps to get started with our platform.
          </p>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">Installation</h4>
            <pre className="bg-muted p-4 rounded-lg">
              <code>npm install @our-platform/core</code>
            </pre>
          </div>
        </div>
      )
    },
    {
      id: "api-reference",
      icon: Database,
      title: "API Reference",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">API Reference</h3>
          <div className="space-y-4">
            <Card className="p-4">
              <h4 className="text-lg font-semibold">GET /api/users</h4>
              <p className="text-sm text-muted-foreground">Retrieve a list of users</p>
              <pre className="mt-2 bg-muted p-2 rounded-lg">
                <code>{`fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data))`}</code>
              </pre>
            </Card>
            <Card className="p-4">
              <h4 className="text-lg font-semibold">POST /api/users</h4>
              <p className="text-sm text-muted-foreground">Create a new user</p>
              <pre className="mt-2 bg-muted p-2 rounded-lg">
                <code>{`fetch('/api/users', {
  method: 'POST',
  body: JSON.stringify(userData)
})`}</code>
              </pre>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "playground",
      icon: Code,
      title: "Code Playground",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Interactive Code Playground</h3>
          <Card className="p-4">
            <div className="space-y-4">
              <textarea 
                className="w-full h-32 p-2 font-mono text-sm bg-muted rounded-lg"
                defaultValue={`// Try our API
const response = await fetch('/api/hello');
const data = await response.json();
console.log(data);`}
              />
              <button
                onClick={handleRunCode}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                Run Code
              </button>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: "troubleshooting",
      icon: Bug,
      title: "Troubleshooting",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Troubleshooting Guide</h3>
          <div className="space-y-4">
            <Card className="p-4">
              <h4 className="text-lg font-semibold">Common Issues</h4>
              <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground">
                <li>Authentication errors</li>
                <li>Rate limiting</li>
                <li>Connection timeout</li>
              </ul>
            </Card>
            <Card className="p-4">
              <h4 className="text-lg font-semibold">Error Codes</h4>
              <div className="mt-2 space-y-2">
                <p><strong>ERR_001:</strong> Invalid API key</p>
                <p><strong>ERR_002:</strong> Resource not found</p>
                <p><strong>ERR_003:</strong> Rate limit exceeded</p>
              </div>
            </Card>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Documentation</h1>
            <select
              className="px-4 py-2 rounded-lg bg-muted"
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
            >
              {versions.map(version => (
                <option key={version} value={version}>{version}</option>
              ))}
            </select>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="getting-started" className="space-y-8">
            <ScrollArea className="w-full">
              <TabsList className="w-full justify-start">
                {documentationSections.map((section) => (
                  <TabsTrigger 
                    key={section.id} 
                    value={section.id}
                    className="flex items-center gap-2"
                  >
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>

            {documentationSections.map((section) => (
              <TabsContent 
                key={section.id} 
                value={section.id}
                className="border rounded-lg p-6"
              >
                {section.content}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
