import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { DocumentHead } from '@/components/DocumentHead';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Search, Book, Code, FileText, Bug, Terminal, Database, Globe, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DOCUMENTATION_VERSIONS } from "@/lib/constants";

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('v1.0');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'helpful' | 'not-helpful'>('helpful');
  const [feedbackText, setFeedbackText] = useState('');
  const [playgroundCode, setPlaygroundCode] = useState(`// Try our API
const response = await fetch('/api/hello');
const data = await response.json();
console.log(data);`);
  const { toast } = useToast();

  const versions = DOCUMENTATION_VERSIONS;

  const handleRunCode = async () => {
    try {
      // For demonstration purposes, we'll just show the code in a toast
      toast({
        title: "Code Execution",
        description: "Code playground feature is in development. Check console for output.",
      });
      console.log("Executing code:", playgroundCode);
      // In a real implementation, you would:
      // 1. Sanitize the code
      // 2. Run it in a sandboxed environment
      // 3. Handle the output
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to execute code. Check console for details.",
        variant: "destructive",
      });
      console.error("Code execution error:", error);
    }
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
                value={playgroundCode}
                onChange={(e) => setPlaygroundCode(e.target.value)}
              />
              <Button
                onClick={handleRunCode}
                className="flex items-center gap-2"
              >
                <Terminal className="h-4 w-4" />
                Run Code
              </Button>
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const query = e.target.value.toLowerCase();
    if (query.length > 2) {
      toast({
        title: "Search Results",
        description: `Found matches in ${documentationSections.length} sections`,
      });
    }
  };

  const handleFeedbackSubmit = () => {
    toast({
      title: "Thank you for your feedback!",
      description: "Your input helps us improve our documentation.",
    });
    setFeedbackOpen(false);
    setFeedbackText('');
  };

  const handleVersionChange = (version: string) => {
    setSelectedVersion(version);
    toast({
      title: "Version Changed",
      description: `Documentation updated to ${version}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <DocumentHead 
        title="Documentation"
        description="Comprehensive Next.js documentation with interactive examples, API references, and troubleshooting guides."
      />
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Documentation</h1>
            <div className="flex items-center gap-4">
              <select
                className="px-4 py-2 rounded-lg bg-muted"
                value={selectedVersion}
                onChange={(e) => handleVersionChange(e.target.value)}
              >
                {versions.map(version => (
                  <option key={version} value={version}>{version}</option>
                ))}
              </select>
              <Button
                variant="outline"
                onClick={() => setFeedbackOpen(true)}
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Give Feedback
              </Button>
            </div>
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

      <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Documentation Feedback</DialogTitle>
            <DialogDescription>
              Help us improve our documentation by sharing your thoughts.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-center gap-4">
              <Button
                variant={feedbackType === 'helpful' ? 'default' : 'outline'}
                onClick={() => setFeedbackType('helpful')}
                className="flex items-center gap-2"
              >
                <ThumbsUp className="h-4 w-4" />
                Helpful
              </Button>
              <Button
                variant={feedbackType === 'not-helpful' ? 'default' : 'outline'}
                onClick={() => setFeedbackType('not-helpful')}
                className="flex items-center gap-2"
              >
                <ThumbsDown className="h-4 w-4" />
                Not Helpful
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="feedback">Additional comments</Label>
              <Textarea
                id="feedback"
                placeholder="What could we improve? (optional)"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={handleFeedbackSubmit}>Submit Feedback</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Documentation;
