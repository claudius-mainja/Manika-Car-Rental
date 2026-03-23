import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plane, Key, Users, Compass, Briefcase, X, Phone, Mail, Check, ChevronRight, Star } from 'lucide-react';
import { services } from '../data/services';

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
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Tailored <span className="text-brand-orange">Car Rental</span> Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            From Harare to Victoria Falls, airport transfers to safari adventures - 
            premium transportation across Zimbabwe and beyond.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: string;
  message: string;
  flightNumber?: string;
  destination?: string;
  duration?: string;
  eventType?: string;
  withDriver?: string;
  safariPark?: string;
  country?: string;
}

function QuoteForm({ service, onClose }: { service: typeof services[0]; onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderServiceSpecificFields = () => {
    switch (service.id) {
      case 'airport-transfers':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Flight Number</label>
              <input
                type="text"
                value={formData.flightNumber || ''}
                onChange={(e) => handleChange('flightNumber', e.target.value)}
                placeholder="e.g. SA 204"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Airline</label>
              <select
                value={formData.eventType || ''}
                onChange={(e) => handleChange('eventType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select Airline</option>
                <option value="air-zimbabwe">Air Zimbabwe</option>
                <option value="south-african">South African Airways</option>
                <option value="ethiopian">Ethiopian Airlines</option>
                <option value="kenyan">Kenya Airways</option>
                <option value="emirates">Emirates</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        );

      case 'safari-trips':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <Compass size={14} className="text-brand-orange" /> Safari Destination *
              </label>
              <select
                required
                value={formData.safariPark || ''}
                onChange={(e) => handleChange('safariPark', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select Safari Park</option>
                <option value="hwange">Hwange National Park</option>
                <option value="mana-pools">Mana Pools National Park</option>
                <option value="gonarezhou">Gonarezhou National Park</option>
                <option value="matobo">Matobo Hills</option>
                <option value="victoria-falls">Victoria Falls (for game viewing)</option>
                <option value="chizarira">Chizarira National Park</option>
                <option value="other">Other / Multiple Parks</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Number of Days</label>
                <select
                  value={formData.duration || ''}
                  onChange={(e) => handleChange('duration', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                >
                  <option value="">Select</option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5+">5+ Days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">With Guide?</label>
                <select
                  value={formData.withDriver || 'yes'}
                  onChange={(e) => handleChange('withDriver', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                >
                  <option value="yes">Yes, include guide</option>
                  <option value="no">No, driver only</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'self-drive':
        return (
          <div className="p-4 bg-brand-orange/10 rounded-xl border border-brand-orange/20 mb-4">
            <p className="text-brand-orange text-sm font-medium flex items-center gap-2">
              <Key size={16} /> Self-Drive Option - No driver included
            </p>
            <p className="text-gray-400 text-xs mt-1">You collect and return the vehicle. Full insurance included.</p>
          </div>
        );

      case 'international-trips':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <MapPin size={14} className="text-brand-orange" /> Destination Country *
              </label>
              <select
                required
                value={formData.country || ''}
                onChange={(e) => handleChange('country', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select Country</option>
                <option value="south-africa">South Africa</option>
                <option value="botswana">Botswana</option>
                <option value="zambia">Zambia</option>
                <option value="mozambique">Mozambique</option>
                <option value="malawi">Malawi</option>
                <option value="namibia">Namibia</option>
                <option value="tanzania">Tanzania</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Trip Duration</label>
              <select
                value={formData.duration || ''}
                onChange={(e) => handleChange('duration', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select</option>
                <option value="1-3">1-3 Days</option>
                <option value="4-7">4-7 Days</option>
                <option value="1-2w">1-2 Weeks</option>
                <option value="2w+">2+ Weeks</option>
              </select>
            </div>
          </div>
        );

      case 'international-drivers':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <MapPin size={14} className="text-brand-orange" /> Destination Country *
              </label>
              <select
                required
                value={formData.country || ''}
                onChange={(e) => handleChange('country', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select Country</option>
                <option value="south-africa">South Africa</option>
                <option value="botswana">Botswana</option>
                <option value="zambia">Zambia</option>
                <option value="mozambique">Mozambique</option>
                <option value="malawi">Malawi</option>
                <option value="namibia">Namibia</option>
                <option value="tanzania">Tanzania</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Will you provide the vehicle?</label>
              <select
                value={formData.withDriver || 'yes'}
                onChange={(e) => handleChange('withDriver', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="no">Yes, I have my own vehicle</option>
                <option value="yes">No, need to arrange vehicle too</option>
              </select>
            </div>
          </div>
        );

      case 'luxury-rentals':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <Briefcase size={14} className="text-brand-orange" /> Event Type *
              </label>
              <select
                required
                value={formData.eventType || ''}
                onChange={(e) => handleChange('eventType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select Event</option>
                <option value="wedding">Wedding</option>
                <option value="gala">Gala / Awards Night</option>
                <option value="anniversary">Anniversary</option>
                <option value="vip">VIP Transport</option>
                <option value="corporate">Corporate Event</option>
                <option value="other">Other Special Occasion</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Decoration Required?</label>
              <select
                value={formData.duration || ''}
                onChange={(e) => handleChange('duration', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="no">No decoration needed</option>
                <option value="basic">Basic decoration (ribbons)</option>
                <option value="full">Full event decoration</option>
              </select>
            </div>
          </div>
        );

      case 'chauffeur-service':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Service Type</label>
              <select
                value={formData.eventType || ''}
                onChange={(e) => handleChange('eventType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select Type</option>
                <option value="corporate">Corporate / Business</option>
                <option value="personal">Personal Errands</option>
                <option value="event">Event Transport</option>
                <option value="airport">Airport Shuttle</option>
                <option value="full-day">Full Day Hire</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Number of Stops</label>
              <select
                value={formData.duration || '1'}
                onChange={(e) => handleChange('duration', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="1">Single trip (point A to B)</option>
                <option value="2-5">2-5 stops</option>
                <option value="5+">5+ stops (full day)</option>
              </select>
            </div>
          </div>
        );

      case 'business-trips':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Business Need</label>
              <select
                value={formData.eventType || ''}
                onChange={(e) => handleChange('eventType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select Type</option>
                <option value="meeting">Client Meeting</option>
                <option value="conference">Conference / Seminar</option>
                <option value="roadshow">Roadshow</option>
                <option value="team-building">Team Building</option>
                <option value="airport">Airport Transfer</option>
                <option value="multi-day">Multi-day Trip</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Corporate Billing Required?</label>
              <select
                value={formData.withDriver || 'no'}
                onChange={(e) => handleChange('withDriver', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="no">No, personal payment</option>
                <option value="yes">Yes, corporate invoice</option>
              </select>
            </div>
          </div>
        );

      case 'outstation-trips':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                <MapPin size={14} className="text-brand-orange" /> Destination City *
              </label>
              <select
                required
                value={formData.destination || ''}
                onChange={(e) => handleChange('destination', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select Destination</option>
                <option value="bulawayo">Bulawayo</option>
                <option value="victoria-falls">Victoria Falls</option>
                <option value="masvingo">Masvingo (Great Zimbabwe)</option>
                <option value="mutare">Mutare</option>
                <option value="kwekwe">Kwekwe</option>
                <option value="gweru">Gweru</option>
                <option value="beitbridge">Beitbridge</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Trip Type</label>
              <select
                value={formData.duration || ''}
                onChange={(e) => handleChange('duration', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
              >
                <option value="">Select</option>
                <option value="day">Day Trip (same day return)</option>
                <option value="overnight">Overnight Trip</option>
                <option value="multi-day">Multi-day Trip</option>
              </select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getSubmitButtonText = () => {
    switch (service.id) {
      case 'airport-transfers': return 'Book Airport Transfer';
      case 'safari-trips': return 'Book Safari Trip';
      case 'self-drive': return 'Reserve Vehicle';
      case 'international-trips': return 'Plan International Trip';
      case 'international-drivers': return 'Request Driver';
      case 'luxury-rentals': return 'Book Luxury Vehicle';
      case 'chauffeur-service': return 'Book Chauffeur';
      case 'business-trips': return 'Request Corporate Transport';
      case 'outstation-trips': return 'Plan Outstation Trip';
      default: return 'Request Quote';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-700 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gray-900 px-6 py-4 border-b border-gray-800 flex items-center justify-between z-10">
          <div>
            <h3 className="font-heading font-bold text-xl text-white">{service.name}</h3>
            <p className="text-gray-400 text-sm">{service.shortDesc}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check size={40} className="text-green-500" />
            </div>
            <h4 className="text-white text-2xl font-bold mb-2">Booking Request Sent!</h4>
            <p className="text-gray-400 mb-6">We&apos;ll contact you shortly to confirm your {service.name.toLowerCase()} booking.</p>
            <button onClick={onClose} className="px-6 py-3 bg-brand-orange text-white rounded-xl font-medium">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {renderServiceSpecificFields() && (
              <div className="border-t border-gray-800 pt-5">
                <h4 className="text-brand-orange text-sm font-medium mb-3">Service Details</h4>
                {renderServiceSpecificFields()}
              </div>
            )}

            <div className="border-t border-gray-800 pt-5">
              <h4 className="text-brand-orange text-sm font-medium mb-3">Your Information</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                    placeholder="+263..."
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="border-t border-gray-800 pt-5">
              <h4 className="text-brand-orange text-sm font-medium mb-3">Trip Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                    <MapPin size={14} className="text-brand-orange" /> Pickup *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => handleChange('pickupLocation', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                    placeholder="Location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                    <MapPin size={14} className="text-brand-orange" /> Destination *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.dropoffLocation}
                    onChange={(e) => handleChange('dropoffLocation', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange"
                    placeholder="Destination"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Time *</label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Passengers</label>
                  <select
                    value={formData.passengers}
                    onChange={(e) => handleChange('passengers', e.target.value)}
                    className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Additional Notes</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange resize-none"
                placeholder="Special requirements, luggage details, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
            >
              {getSubmitButtonText()}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  onQuote: (service: typeof services[0]) => void;
}

function ServiceCard({ service, index, onQuote }: ServiceCardProps) {
  const iconMap: Record<string, typeof MapPin> = {
    'vehicle-rental': MapPin,
    'airport-transfers': Plane,
    'self-drive': Key,
    'safari-trips': Compass,
    'business-trips': Briefcase,
    'outstation-trips': MapPin,
    'chauffeur-service': Users,
    'international-trips': Compass,
    'international-drivers': Users,
    'luxury-rentals': Briefcase,
  };
  const Icon = iconMap[service.id] || MapPin;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 hover:border-brand-orange/50 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/30">
            <Icon size={24} className="text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading font-bold text-2xl text-white mb-1">{service.name}</h3>
          <p className="text-brand-orange text-sm font-medium">{service.shortDesc}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-brand-orange fill-brand-orange" />
            ))}
          </div>
          <span className="text-gray-500 text-xs">(4.9)</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-6">
          {service.features.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-300 text-xs">
              <Check size={14} className="text-brand-orange flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onQuote(service)}
            className="flex-1 py-3 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-brand-orange/30 transition-all flex items-center justify-center gap-2"
          >
            Book Now <ChevronRight size={16} />
          </button>
          <a
            href="tel:+263776254884"
            className="px-4 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            <Phone size={18} className="text-brand-orange" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="absolute inset-0">
        <img
          src="/images/hero/images (2).jfif"
          alt="Zimbabwe road"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Ready to <span className="text-brand-orange">Hit the Road</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            From Harare streets to Victoria Falls adventures - get your personalized quote today
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

export default function Services() {
  const [quoteService, setQuoteService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <HeroSection />
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onQuote={setQuoteService}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />

      <AnimatePresence>
        {quoteService && (
          <QuoteForm
            service={quoteService}
            onClose={() => setQuoteService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
