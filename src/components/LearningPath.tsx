
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

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
            className="flex items-start space-x-4 p-4 rounded-lg border bg-card animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex-none pt-1">
              <Checkbox
                checked={completedSteps.includes(index)}
                onCheckedChange={() => handleStepToggle(index)}
                className="w-5 h-5"
              />
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
