
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
          NextPlayground
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/paths" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Learning Paths
          </Link>
          <Link to="/projects" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Projects
          </Link>
          <Link to="/guide" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Guide
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
