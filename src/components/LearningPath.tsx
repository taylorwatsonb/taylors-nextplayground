
import React from 'react';
import { Badge } from '@/components/ui/badge';

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
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Badge variant="outline" className="mb-2">Learning Path</Badge>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex items-start space-x-4 p-4 rounded-lg border bg-card animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex-none">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium">{index + 1}</span>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
