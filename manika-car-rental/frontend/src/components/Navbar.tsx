import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="hidden md:flex bg-gray-900 text-white text-sm py-2.5 px-4 justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-6">
          <a
            href="tel:+263776254884"
            className="flex items-center gap-2 hover:text-brand-orange transition-colors"
          >
            <Phone size={14} className="text-brand-orange" />
            +263 77 625 4884
          </a>
          <a
            href="mailto:sales@manikacarrental.com"
            className="flex items-center gap-2 hover:text-brand-orange transition-colors"
          >
            <Mail size={14} className="text-brand-orange" />
            sales@manikacarrental.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-gray-400">
            <MapPin size={14} className="text-brand-orange" />
            33 Argyle Road, Avondale, Harare
          </span>
        </div>
      </div>

      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50'
            : 'bg-gray-900/80 backdrop-blur-md border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-orange group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link to="/fleet">
                <motion.button
                  whileHover={{ scale: 1.05, rotateX: 5, boxShadow: '0 10px 40px rgba(255, 107, 0, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-heading font-semibold rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-xl transition-all duration-300"
                  style={{ perspective: '600px' }}
                >
                  Book Now
                </motion.button>
              </Link>
            </div>

            <motion.button
              className="lg:hidden p-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-brand-orange hover:bg-gray-800/50 rounded-xl transition-all font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <Link to="/fleet" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-heading font-semibold rounded-xl">
                      Book Now
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
