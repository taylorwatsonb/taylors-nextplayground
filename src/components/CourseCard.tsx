
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}

const CourseCard = ({ title, description, level, duration }: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="group relative overflow-hidden border border-border hover:border-primary/20 transition-colors duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className={`${getLevelColor(level)}`}>
            {level}
          </Badge>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Card>
  );
};

export default CourseCard;
