import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Clock, Users, MapPin, Phone, Mail, Award, Globe } from 'lucide-react';

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/5 via-transparent to-transparent" />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-[80vh] flex items-center"
      >
        <div className="text-center w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-gray-800/50 backdrop-blur-xl rounded-full border border-brand-orange/20 text-brand-orange text-sm font-medium mb-6"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Your Trusted  <br /> <span className="text-brand-orange">Car Rental</span> Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto"
          >
            We are committed to providing premium car rental services across Zimbabwe and beyond. 
            We deliver excellence on every journey.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: <Award size={24} />, value: '500+', label: 'Happy Clients' },
    { icon: <Globe size={24} />, value: '50+', label: 'Destinations' },
    { icon: <Shield size={24} />, value: '100%', label: 'Insured Fleet' },
    { icon: <Users size={24} />, value: '24/7', label: 'Customer Support' },
  ];

  return (
    <section className="relative py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div className="font-heading font-bold text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Fully Insured',
      description: 'All our vehicles are fully insured for your peace of mind during every journey.',
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for emergency assistance anytime.',
    },
    {
      icon: <Users size={24} />,
      title: 'Professional Drivers',
      description: 'Experienced, vetted drivers with extensive knowledge of local routes.',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Wide Coverage',
      description: 'Services across Zimbabwe and neighboring countries.',
    },
  ];

  return (
    <section className="relative py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl text-white">
            Why Choose <span className="text-brand-orange">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-brand-orange/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Have any questions? Our team is ready to help you with all your car rental needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+263776254884"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-xl font-medium"
          >
            <Phone size={20} /> +263 77 625 4884
          </a>
          <a
            href="mailto:sales@manikacarrental.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-medium border border-gray-700"
          >
            <Mail size={20} /> sales@manikacarrental.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
