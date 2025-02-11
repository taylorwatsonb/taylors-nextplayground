
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Getting Started with Next.js",
    description: "Learn the fundamentals of Next.js, including routing, data fetching, and deployment.",
    level: "Beginner",
    duration: "2 hours"
  },
  {
    title: "Server-Side Rendering Deep Dive",
    description: "Master SSR concepts and implementation in Next.js applications.",
    level: "Intermediate",
    duration: "3 hours"
  },
  {
    title: "Advanced Data Fetching",
    description: "Explore ISR, SWR, and other advanced data fetching patterns.",
    level: "Advanced",
    duration: "4 hours"
  }
] as const;

const CourseGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <div key={course.title} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
          <CourseCard {...course} />
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
