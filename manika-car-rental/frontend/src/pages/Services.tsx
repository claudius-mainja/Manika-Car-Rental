import { motion } from 'framer-motion';
import { MapPin, Plane, Key, Users, Compass, Briefcase, ArrowRight, Phone } from 'lucide-react';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="text-center w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-gray-800/50 backdrop-blur-xl rounded-full border border-brand-orange/20 text-brand-orange text-sm font-medium mb-6"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Comprehensive <span className="text-brand-orange">Car Rental</span> Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto"
          >
            From airport transfers to safari adventures, we offer tailored transportation solutions 
            for every travel need across Zimbabwe and beyond.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const iconMap: Record<string, typeof MapPin> = {
    'airport-transfer': Plane,
    'self-drive': Key,
    'safari-trips': Compass,
    'business-trips': Briefcase,
    'outstation-trips': MapPin,
    'chauffeur-service': Users,
  };

  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || MapPin;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-brand-orange/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.shortDesc}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features?.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-brand-orange font-medium group-hover:gap-3 transition-all"
                >
                  Get Quote <ArrowRight size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl text-white mb-6">
          Ready to Book Your <span className="text-brand-orange">Journey</span>?
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Contact us today for a free quote or browse our fleet to find the perfect vehicle for your trip.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/fleet">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-heading font-bold rounded-2xl"
            >
              Browse Fleet
            </motion.button>
          </Link>
          <a href="tel:+263776254884" className="px-8 py-4 bg-gray-800 text-white font-heading font-semibold rounded-2xl border border-gray-700 hover:bg-gray-700 flex items-center gap-3">
            <Phone size={20} className="text-brand-orange" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
