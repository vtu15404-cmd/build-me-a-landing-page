import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-primary to-indigo-900">
      <img
        src="/images/hero-background.png"
        alt="Abstract geometric background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 container px-4 md:px-6 space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unlock Your Potential with LaunchPad
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The ultimate platform designed to streamline your workflow, boost productivity, and achieve your goals faster than ever before.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-accent text-primary-foreground hover:bg-accent/90 shadow-lg">
            <Link to="#cta">Get Started Free</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white shadow-lg">
            <Link to="#features">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
