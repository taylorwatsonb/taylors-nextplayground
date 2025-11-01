
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { APP_NAME, NAVIGATION_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
            aria-label={`${APP_NAME} Home`}
          >
            {APP_NAME}
          </Link>
          <span className="text-sm text-muted-foreground">by Taylor Watson</span>
        </div>
        <div className="flex items-center space-x-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium hover:text-primary/80 transition-colors",
                location.pathname === item.path && "text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
