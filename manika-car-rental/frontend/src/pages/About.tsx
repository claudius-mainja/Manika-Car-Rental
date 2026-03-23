import { motion } from 'framer-motion';
import { Shield, Clock, Users, MapPin, Phone, Mail, Award, Globe, Check, Car, Star, Heart } from 'lucide-react';

const values = [
  { icon: <Shield size={24} />, title: 'Safety First', desc: 'Your safety is our top priority. All vehicles undergo rigorous maintenance checks.' },
  { icon: <Clock size={24} />, title: 'Always On Time', desc: 'Punctuality is key. We ensure timely pickups and arrivals every time.' },
  { icon: <Heart size={24} />, title: 'Customer Care', desc: 'We treat every customer like family, providing personalized service.' },
  { icon: <Star size={24} />, title: 'Excellence', desc: 'We strive for excellence in every journey, exceeding expectations.' },
];

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <img
          src="/images/hero/images.jfif"
          alt="Zimbabwe landscape"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/60" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-[70vh] flex items-center">
        <div className="text-center w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-brand-orange/20 backdrop-blur-xl rounded-full border border-brand-orange/40 text-brand-orange text-sm font-medium mb-6"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Your Trusted <span className="text-brand-orange">Car Rental</span> Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            Providing premium car rental services across Zimbabwe and beyond. 
            We deliver excellence on every journey with a commitment to safety, 
            reliability, and customer satisfaction.
          </motion.p>
        </div>
      </div>
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

function StorySection() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">Our Story</span>
            <h2 className="font-heading font-bold text-4xl text-white mt-4 mb-6">
              From Humble Beginnings to <span className="text-brand-orange">Premium Service</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Manika Car Rental was founded with a simple mission: to provide reliable, 
              comfortable, and affordable transportation for everyone visiting or living in Zimbabwe.
            </p>
            <p className="text-gray-400 mb-8">
              What started as a small operation in Harare has grown into one of Zimbabwe's most 
              trusted car rental companies. We take pride in our well-maintained fleet, 
              professional drivers, and commitment to customer satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Safety Commitment', 'Professional Drivers', '24/7 Support', 'Best Rates'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={18} className="text-brand-orange" />
                  <span className="text-gray-300">{item}</span>
                </div>
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
              src="/images/hero/c2726e6984f1189b287f36bee05c8ab2.webp"
              alt="Premium vehicles"
              className="rounded-3xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 p-6 bg-gray-900 border border-gray-800 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center">
                  <Car size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">50+</p>
                  <p className="text-gray-400 text-sm">Premium Vehicles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">Our Values</span>
          <h2 className="font-heading font-bold text-4xl text-white mt-4">
            What Drives <span className="text-brand-orange">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 text-center hover:border-brand-orange/50 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-white">
                {value.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetShowcase() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">Our Fleet</span>
          <h2 className="font-heading font-bold text-4xl text-white mt-4">
            Well-Maintained <span className="text-brand-orange">Vehicles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src="/images/vehicles/toyota-quantum/96416679_3001533143264806_4838638313755639808_n.jpg"
              alt="Toyota Quantum"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold">Toyota Quantum</p>
              <p className="text-gray-300 text-sm">14 Seater Mini Bus</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src="/images/vehicles/standard-suv/Toyota-Fortuner-Facelift-Indonesia-Front.jpg"
              alt="Standard SUV"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold">Standard SUV</p>
              <p className="text-gray-300 text-sm">7 Seater 4x4</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src="/images/vehicles/executive-sedan/images.jfif"
              alt="Executive Sedan"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold">Executive Sedan</p>
              <p className="text-gray-300 text-sm">Premium Comfort</p>
            </div>
          </motion.div>
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
          Ready to <span className="text-brand-orange">Get Started</span>?
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Contact us today for a free quote or to book your vehicle. 
          Our team is ready to help you plan the perfect journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+263776254884"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-xl font-bold hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
          >
            <Phone size={20} /> +263 77 625 4884
          </a>
          <a
            href="mailto:sales@manikacarrental.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-medium border border-gray-700 hover:bg-gray-700 transition-colors"
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
      <StorySection />
      <ValuesSection />
      <FleetShowcase />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
