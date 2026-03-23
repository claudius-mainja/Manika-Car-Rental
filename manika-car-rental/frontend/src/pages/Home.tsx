import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MapPin,
  Users,
  Shield,
  Clock,
  Star,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
  Plane,
  Palmtree,
  Building2,
  Mountain,
} from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { services } from '../data/services';

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
          alt="Zimbabwe landscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-orange/5 rounded-full"
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-xl rounded-full border border-brand-orange/20 mb-8"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm font-medium">
                Premium Car Rental in Harare, Zimbabwe
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              Your Journey <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">
                Starts Here
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Experience premium car rental services across Zimbabwe and beyond. 
              From airport transfers to Victoria Falls adventures, we deliver comfort, 
              reliability, and excellence on every trip.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/fleet">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 0, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-heading font-bold rounded-2xl shadow-lg shadow-brand-orange/30 flex items-center gap-3 text-lg"
                >
                  Explore Our Fleet
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <a href="tel:+263776254884">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-800/50 backdrop-blur-xl text-white font-heading font-semibold rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors flex items-center gap-3"
                >
                  <Phone size={20} className="text-brand-orange" />
                  Get a Free Quote
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-10"
            >
              {[
                { icon: <Shield size={18} />, text: 'Fully Insured' },
                { icon: <Clock size={18} />, text: '24/7 Support' },
                { icon: <Star size={18} />, text: 'Premium Fleet' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="text-brand-orange">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
                alt="Premium Car Rental"
                className="relative z-10 w-full h-full object-contain rounded-3xl floating"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '500+', label: 'Happy Clients', icon: <Users size={24} /> },
    { value: '50+', label: 'Destinations', icon: <MapPin size={24} /> },
    { value: '100%', label: 'Insured Fleet', icon: <Shield size={24} /> },
    { value: '24/7', label: 'Support', icon: <Clock size={24} /> },
  ];

  return (
    <section className="relative py-16 bg-gray-900/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div className="font-heading font-bold text-3xl text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Tawanda M.',
      location: 'Harare',
      text: 'Excellent service! The driver was punctual and the vehicle was immaculate. Highly recommended for airport transfers.',
      service: 'Airport Transfer',
      rating: 5,
    },
    {
      name: 'Charmaine R.',
      location: 'Bulawayo',
      text: 'We used Manika for our safari trip to Hwange. Everything was perfectly organized. The 4WD was in great condition.',
      service: 'Safari Trip',
      rating: 5,
    },
    {
      name: 'Blessing T.',
      location: 'Mutare',
      text: 'Best car rental experience in Harare. Professional staff, fair prices, and well-maintained vehicles.',
      service: 'Vehicle Rental',
      rating: 5,
    },
    {
      name: 'Memory K.',
      location: 'Victoria Falls',
      text: 'Used them for our wedding transport. The luxury sedan was stunning and the chauffeur was professional.',
      service: 'Luxury Rental',
      rating: 5,
    },
    {
      name: 'James N.',
      location: 'Masvingo',
      text: 'Did an international trip to South Africa. The driver was experienced and the vehicle was comfortable for the long drive.',
      service: 'International Trip',
      rating: 5,
    },
    {
      name: 'Nyasha D.',
      location: 'Gweru',
      text: 'Great outstation service! We traveled to Great Zimbabwe and back. Very reliable and safe journey.',
      service: 'Outstation Trip',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-4xl text-white mt-4">
            What Our <span className="text-brand-orange">Clients</span> Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] p-6 bg-gray-900/50 rounded-3xl border border-gray-800"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand-orange fill-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-brand-orange/20 rounded-full text-brand-orange text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  const destinations = [
    { name: 'Victoria Falls', desc: 'World-renowned waterfall', icon: <Mountain size={24} /> },
    { name: 'Hwange National Park', desc: 'Premier safari destination', icon: <Palmtree size={24} /> },
    { name: 'R.G. Mugabe Airport', desc: 'Harare International', icon: <Plane size={24} /> },
    { name: 'Great Zimbabwe', desc: 'Ancient stone ruins', icon: <Building2 size={24} /> },
  ];

  return (
    <section className="relative py-24 bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">
            Popular Destinations
          </span>
          <h2 className="font-heading font-bold text-4xl text-white mt-4">
            Explore <span className="text-brand-orange">Zimbabwe</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 bg-gray-800/50 rounded-3xl border border-gray-700 hover:border-brand-orange/50 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center mb-4 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                {dest.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-1">{dest.name}</h3>
              <p className="text-gray-400 text-sm">{dest.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mt-4">
            Comprehensive <span className="text-brand-orange">Car Rental</span> Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            From airport transfers to safari adventures, we offer tailored solutions for every travel need across Zimbabwe and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-gray-900/50 rounded-3xl border border-gray-800 hover:border-brand-orange/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-2">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {service.shortDesc}
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-brand-orange fill-brand-orange" />
                  ))}
                </div>
                <span className="text-gray-500 text-xs">(4.9)</span>
              </div>
              <Link
                to="/services"
                className="text-brand-orange text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-medium border border-gray-700 hover:bg-gray-700 hover:border-brand-orange/50 transition-all"
          >
            View All Services <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FleetPreview() {
  const featuredVehicles = vehicles.slice(0, 4);

  return (
    <section className="relative py-24 bg-gray-900/50 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">
            Our Fleet
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mt-4">
            Premium <span className="text-brand-orange">Vehicles</span> for Every Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Choose from our diverse fleet of well-maintained vehicles, from executive sedans to safari-ready SUVs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800 hover:border-brand-orange/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.mainImage}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  {vehicle.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {vehicle.name}
                </h3>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {vehicle.passengers} Seats
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {vehicle.transmission}
                  </span>
                </div>
                <Link
                  to={`/fleet/${vehicle.id}`}
                  className="block w-full py-2.5 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white text-center rounded-xl font-medium hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-medium border border-gray-700 hover:bg-gray-700 hover:border-brand-orange/50 transition-all"
          >
            View All Vehicles <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    'Premium, well-maintained vehicles',
    'Professional, licensed drivers',
    '24/7 customer support',
    'Competitive pricing',
    'Flexible rental periods',
    'Comprehensive insurance',
  ];

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-heading font-bold text-4xl text-white mt-4 mb-6">
              Experience the <span className="text-brand-orange">Manika</span> Difference
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We go beyond just renting cars. We provide a complete premium experience that ensures your journey is comfortable, safe, and memorable.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <Check size={18} className="text-brand-orange flex-shrink-0" />
                  <span className="text-sm">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80"
              alt="Premium service"
              className="rounded-3xl"
            />
            <div className="absolute -bottom-6 -left-6 p-6 bg-gray-900 border border-gray-800 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <Phone size={24} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us Now</p>
                  <p className="text-white font-bold text-lg">+263 77 625 4884</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 bg-gray-900/50 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=1600&q=80"
          alt="Zimbabwe road"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to Start Your <span className="text-brand-orange">Journey</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contact us today for a free quote or book your vehicle directly. Our team is available 24/7 to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/fleet">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-heading font-bold rounded-2xl shadow-lg shadow-brand-orange/30 flex items-center gap-3 text-lg mx-auto"
              >
                Book Now <ArrowRight size={20} />
              </motion.button>
            </Link>
            <a href="tel:+263776254884">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 text-white font-heading font-semibold rounded-2xl border border-gray-700 hover:bg-gray-700 transition-colors flex items-center gap-3 text-lg mx-auto"
              >
                <Phone size={20} className="text-brand-orange" />
                Call Us Now
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <DestinationsSection />
      <ServicesSection />
      <FleetPreview />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
