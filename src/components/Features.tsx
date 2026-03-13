import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Shield, TrendingUp, Users, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Access cutting-edge tools and features designed to keep you ahead of the curve.",
    },
    {
      icon: Rocket,
      title: "Blazing Fast Performance",
      description: "Experience unparalleled speed and efficiency with our optimized platform.",
    },
    {
      icon: Shield,
      title: "Robust Security",
      description: "Your data is safe with us, protected by industry-leading security protocols.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Grow your business without limits, our platform scales with your needs.",
    },
    {
      icon: Users,
      title: "Seamless Collaboration",
      description: "Work together effortlessly with integrated tools for team communication.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Automate repetitive tasks and free up your time for what truly matters.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Features That Empower Your Success
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover how LaunchPad can transform your operations and drive unprecedented results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
