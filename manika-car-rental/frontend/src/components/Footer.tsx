import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from 'lucide-react';
import SocialLinks from './SocialLinks';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Vehicle Rental', href: '/services' },
    { name: 'Airport Transfers', href: '/services' },
    { name: 'Self Drive', href: '/services' },
    { name: 'Safari Trips', href: '/services' },
    { name: 'International Trips', href: '/services' },
  ],
  locations: [
    { name: 'Harare', href: '/contact' },
    { name: 'Bulawayo', href: '/contact' },
    { name: 'Victoria Falls', href: '/contact' },
    { name: 'Mutare', href: '/contact' },
    { name: 'Masvingo', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-orange/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-orange/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">Manika Car Rental</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium car rental services across Zimbabwe. 
              From Harare to Victoria Falls, airport transfers to safari adventures - 
              we deliver excellence on every journey.
            </p>
            
            <div className="flex items-start gap-3 mb-6 p-4 glass-light rounded-xl">
              <Clock size={18} className="text-brand-orange mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-gray-300 font-medium">Working Hours</p>
                <p className="text-gray-500">24/7 Emergency Support</p>
                <p className="text-gray-500">Office: Mon-Sat 8AM-6PM</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-400 text-sm mb-3">Follow Us</p>
              <SocialLinks />
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-brand-orange">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-brand-orange/50 group-hover:text-brand-orange transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-brand-orange">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-brand-orange/50 group-hover:text-brand-orange transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-brand-orange">
              We Serve
            </h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group"
                  >
                    <MapPin size={14} className="text-brand-orange/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Manika Car Rental. All rights reserved. | Harare, Zimbabwe
            </p>
            <div className="flex items-center gap-6">
              <a href="tel:+263776254884" className="flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors text-sm">
                <Phone size={14} />
                +263 77 625 4884
              </a>
              <a href="mailto:sales@manikacarrental.com" className="flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors text-sm">
                <Mail size={14} />
                sales@manikacarrental.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
