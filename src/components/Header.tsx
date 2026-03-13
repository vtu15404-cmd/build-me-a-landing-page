import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="text-accent">🚀</span> LaunchPad
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link to="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link to="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Button asChild>
            <Link to="#cta">Get Started</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 pt-6">
                <Link to="#features" className="text-lg font-medium hover:text-primary">
                  Features
                </Link>
                <Link to="#testimonials" className="text-lg font-medium hover:text-primary">
                  Testimonials
                </Link>
                <Link to="#pricing" className="text-lg font-medium hover:text-primary">
                  Pricing
                </Link>
                <Button asChild className="mt-4">
                  <Link to="#cta">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
