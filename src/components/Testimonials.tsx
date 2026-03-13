import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatar }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg border border-border/50"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Avatar className="h-20 w-20 mb-4 border-2 border-primary">
        <AvatarImage src={avatar} alt={`@${name}`} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <p className="text-lg italic text-foreground mb-4">"{quote}"</p>
      <h4 className="font-semibold text-primary">{name}</h4>
      <p className="text-sm text-muted-foreground">{title}</p>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: "LaunchPad has revolutionized our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations.",
      name: "Sarah Chen",
      title: "CEO, InnovateTech",
      avatar: "/images/avatar-1.png",
    },
    {
      quote: "We've seen a remarkable improvement in project delivery times since adopting LaunchPad. It's an indispensable tool for any growing business.",
      name: "David Lee",
      title: "CTO, Global Solutions",
      avatar: "/images/avatar-2.png",
    },
    {
      quote: "The support team is fantastic, and the platform itself is incredibly versatile. LaunchPad is truly a game-changer for modern businesses.",
      name: "Alex Rivera",
      title: "Lead Developer, Creative Minds",
      avatar: "/images/avatar-3.png",
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
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear directly from the businesses and individuals who have transformed their work with LaunchPad.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
