import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="cta" className="py-20 md:py-32 bg-primary text-primary-foreground text-center">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Workflow?
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join thousands of satisfied users who are already boosting their productivity with LaunchPad. Start your free trial today!
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-accent text-primary-foreground hover:bg-accent/90 shadow-lg">
            <Link to="#">Start Your Free Trial</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
