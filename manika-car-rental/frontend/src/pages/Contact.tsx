import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2, MessageCircle, Users, Star, Shield, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Visit Our Office',
    lines: ['33 Argyle Road, Avondale', 'Harare, Zimbabwe'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: <Phone size={24} />,
    title: 'Call Us',
    lines: ['+263 77 625 4884', '+263 77 378 7878'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Us',
    lines: ['sales@manikacarrental.com', 'info@manikacarrental.com'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <Clock size={24} />,
    title: 'Working Hours',
    lines: ['24/7 Emergency Support', 'Office: Mon-Sat 8AM-6PM'],
    color: 'from-purple-500 to-purple-600',
  },
];

const whyChooseUs = [
  { icon: <Shield size={24} />, title: 'Fully Insured', desc: 'All vehicles comprehensive coverage' },
  { icon: <Clock size={24} />, title: '24/7 Support', desc: 'Round-the-clock assistance' },
  { icon: <Users size={24} />, title: 'Professional', desc: 'Experienced, vetted drivers' },
  { icon: <Globe size={24} />, title: 'Nationwide', desc: 'Services across Zimbabwe' },
];

const testimonials = [
  {
    name: 'Tawanda M.',
    text: 'Excellent service! The driver was punctual and the vehicle was immaculate. Highly recommended for airport transfers.',
    service: 'Airport Transfer',
  },
  {
    name: 'Charmaine R.',
    text: 'We used Manika for our safari trip to Hwange. Everything was perfectly organized. The 4WD was in great condition.',
    service: 'Safari Trip',
  },
  {
    name: 'Blessing T.',
    text: 'Best car rental experience in Harare. Professional staff, fair prices, and well-maintained vehicles.',
    service: 'Vehicle Rental',
  },
];

const faqs = [
  {
    q: 'What documents do I need to rent a vehicle?',
    a: 'You need a valid driver\'s license, national ID or passport, and proof of address. For international drivers, an international driving permit is required.',
  },
  {
    q: 'Is insurance included in the rental?',
    a: 'Yes, all our rentals include comprehensive insurance coverage. Additional coverage options are available for peace of mind.',
  },
  {
    q: 'Can I get a vehicle with a driver?',
    a: 'Absolutely! We offer chauffeur services for all vehicle types. Our professional drivers know Zimbabwe\'s roads well.',
  },
  {
    q: 'Do you offer airport pickup services?',
    a: 'Yes, we provide 24/7 airport transfer services. Just provide your flight details and we\'ll be there to meet you.',
  },
];

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[70vh] overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80"
          alt="Zimbabwe landscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
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
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-[70vh] flex items-center"
      >
        <div className="text-center w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-brand-orange/20 backdrop-blur-xl rounded-full border border-brand-orange/40 text-brand-orange text-sm font-medium mb-6"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Let&apos;s Plan Your <span className="text-brand-orange">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            From Harare to Victoria Falls, airport pickups to safari adventures - 
            we&apos;re here to make your travel dreams a reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <a href="tel:+263776254884" className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-brand-orange/30 transition-all">
              <Phone size={20} /> Call +263 77 625 4884
            </a>
            <a href="#contact-form" className="px-8 py-4 bg-gray-800 text-white rounded-2xl border border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-center gap-3">
              <MessageCircle size={20} className="text-brand-orange" /> Send Message
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '500+', label: 'Happy Clients', icon: <Users size={24} /> },
    { value: '50+', label: 'Destinations', icon: <Globe size={24} /> },
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

function ContactInfoSection() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Get In <span className="text-brand-orange">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We&apos;re always ready to help you plan the perfect journey. Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-brand-orange/50 transition-all text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                {info.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">{info.title}</h3>
              {info.lines.map((line, i) => (
                <p key={i} className="text-gray-400 text-sm">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Why <span className="text-brand-orange">Manika</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We go beyond just car rentals - we provide a complete premium experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 text-center hover:border-brand-orange/50 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-white">
                {item.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="absolute inset-0 dot-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            What Our <span className="text-brand-orange">Clients</span> Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-orange fill-brand-orange" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-brand-orange text-sm">{testimonial.service}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <Users size={20} className="text-brand-orange" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact-form" className="relative py-24 bg-gray-900/50">
      <div className="absolute inset-0 dot-pattern opacity-5" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Send Us a <span className="text-brand-orange">Message</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="+263 77 123 4567"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2 font-medium">Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
              >
                <option value="">Select a topic</option>
                <option value="quote">Request a Quote</option>
                <option value="booking">Make a Booking</option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm mb-2 font-medium">Your Message *</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
              placeholder="Tell us about your travel plans, preferred vehicle, dates, and any special requirements..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Sending...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle size={20} /> Message Sent!
              </>
            ) : (
              <>
                <Send size={20} /> Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center"
            >
              <p className="text-green-400">
                Thank you for your message! We&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-center"
            >
              <p className="text-red-400">
                Something went wrong. Please try again or call us directly.
              </p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="text-white font-medium">{faq.q}</span>
                <span className={`text-brand-orange transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-400">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=1600&q=80"
          alt="Zimbabwe road"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Ready to <span className="text-brand-orange">Hit the Road</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a airport transfer, safari vehicle, or outstation trip - we have the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+263776254884" className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-orange/30 transition-all flex items-center justify-center gap-2">
              <Phone size={20} /> Call +263 77 625 4884
            </a>
            <a href="mailto:sales@manikacarrental.com" className="px-8 py-4 bg-gray-800 text-white rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              <Mail size={20} className="text-brand-orange" /> Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ContactInfoSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactForm />
      <FAQSection />
      <CTASection />
    </>
  );
}
