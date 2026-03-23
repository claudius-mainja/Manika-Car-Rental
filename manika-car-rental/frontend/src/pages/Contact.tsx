import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Visit Us',
    lines: ['33 Argyle Road, Avondale', 'Harare, Zimbabwe'],
  },
  {
    icon: <Phone size={24} />,
    title: 'Call Us',
    lines: ['+263 77 625 4884', '+263 77 378 7878'],
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Us',
    lines: ['sales@manikacarrental.com', 'info@manikacarrental.com'],
  },
  {
    icon: <Clock size={24} />,
    title: 'Working Hours',
    lines: ['24/7 Emergency Support', 'Office: Mon-Sat 8AM-6PM'],
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 bg-gray-800/50 rounded-full border border-brand-orange/20 text-brand-orange text-sm font-medium mb-6"
        >
          Contact Us
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading font-bold text-5xl md:text-6xl text-white mb-6"
        >
          Get In <span className="text-brand-orange">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl max-w-2xl mx-auto"
        >
          Have questions? Our team is ready to help you with all your car rental needs.
        </motion.p>
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
    <section className="relative py-24 bg-gray-900/50 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-heading font-bold text-3xl text-white mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-8">
              Reach out to us through any of these channels. We're available 24/7 for emergency support.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center text-white flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-gray-400 text-sm">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
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
                <p className="mt-4 text-green-400 text-center">
                  Thank you! We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <HeroSection />
      <ContactForm />
    </>
  );
}
