
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface LearningPathProps {
  title: string;
  description: string;
  steps: Step[];
}

const LearningPath = ({ title, description, steps }: LearningPathProps) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const { toast } = useToast();

  const progress = (completedSteps.length / steps.length) * 100;

  const handleStepToggle = (index: number) => {
    setCompletedSteps((prev) => {
      const newCompleted = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];

      if (newCompleted.length === steps.length) {
        toast({
          title: "Path Completed! 🎉",
          description: `You've completed the ${title} learning path!`,
        });
      }

      return newCompleted;
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Badge variant="outline" className="mb-2">Learning Path</Badge>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            {completedSteps.length} of {steps.length} steps completed ({Math.round(progress)}%)
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-lg border bg-card animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div 
              className="flex items-start space-x-4 p-4 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex-none pt-1">
                <Checkbox
                  checked={completedSteps.includes(index)}
                  onCheckedChange={(checked) => {
                    if (checked) handleStepToggle(index);
                  }}
                  className="w-5 h-5"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{step.title}</h3>
                  {expandedStep === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
            {expandedStep === index && (
              <div className="px-4 pb-4 pt-2 border-t">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <h4 className="text-base font-medium mb-2">Tutorial Content</h4>
                  <p>
                    Here's a detailed guide for mastering {step.title}:
                  </p>
                  <pre className="bg-muted p-4 rounded-lg mt-2 overflow-x-auto">
                    <code>{`// Example code for ${step.title}
import { useState } from 'react'

export default function Example() {
  // Implementation details will go here
  return (
    <div>
      {/* Component structure */}
    </div>
  )
}`}</code>
                  </pre>
                  <h5 className="text-sm font-medium mt-4">Key Concepts:</h5>
                  <ul className="list-disc pl-4 mt-2 space-y-1">
                    <li>Understanding the fundamentals</li>
                    <li>Best practices and patterns</li>
                    <li>Common pitfalls to avoid</li>
                    <li>Performance considerations</li>
                  </ul>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium">Pro Tip:</p>
                    <p className="text-sm mt-1">
                      Always consider edge cases and error handling when implementing this feature.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
