import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-muted-foreground py-12 md:py-16">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary-foreground">
            <span className="text-accent">🚀</span> LaunchPad
          </Link>
          <p className="text-sm">
            Empowering your success with innovative tools and seamless experiences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-foreground">Product</h3>
          <ul className="space-y-2">
            <li><Link to="#features" className="text-sm hover:text-primary-foreground transition-colors">Features</Link></li>
            <li><Link to="#pricing" className="text-sm hover:text-primary-foreground transition-colors">Pricing</Link></li>
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">Integrations</Link></li>
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">Updates</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-foreground">Company</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">About Us</Link></li>
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">Careers</Link></li>
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">Blog</Link></li>
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-foreground">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="text-sm hover:text-primary-foreground transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12 text-center text-sm">
        &copy; {new Date().getFullYear()} LaunchPad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
