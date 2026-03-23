import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, Fuel, Cog, ArrowLeft, Phone, Mail, X, Check } from 'lucide-react';
import { vehicles } from '../data/vehicles';

function QuoteForm({ vehicleName, onClose }: { vehicleName: string; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    passengers: '1',
    withDriver: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
        <div className="sticky top-0 bg-gray-900 px-6 py-4 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-xl text-white">Request a Quote</h3>
            <p className="text-gray-400 text-sm">{vehicleName}</p>
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
            <h4 className="text-white text-2xl font-bold mb-2">Quote Request Sent!</h4>
            <p className="text-gray-400 mb-6">We&apos;ll get back to you shortly with a personalized quote for your {vehicleName}.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+263776254884" className="px-6 py-3 bg-brand-orange text-white rounded-xl font-medium flex items-center justify-center gap-2">
                <Phone size={18} /> Call Now
              </a>
              <button onClick={onClose} className="px-6 py-3 bg-gray-800 text-white rounded-xl font-medium">
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="+263 77 123 4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                  <MapPin size={14} className="text-brand-orange" /> Pickup Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="e.g., Airport, Hotel, Home"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                  <MapPin size={14} className="text-brand-orange" /> Dropoff Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.dropoffLocation}
                  onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="e.g., City Center, Hotel"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Pickup Date & Time *</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  />
                  <input
                    type="time"
                    required
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300">Return Date & Time *</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    required
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  />
                  <input
                    type="time"
                    required
                    value={formData.returnTime}
                    onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                    className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center gap-2">
                  <Users size={14} className="text-brand-orange" /> Number of Passengers
                </label>
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">With Driver?</label>
                <select
                  value={formData.withDriver}
                  onChange={(e) => setFormData({ ...formData, withDriver: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors"
                >
                  <option value="yes">Yes, with driver</option>
                  <option value="no">No, self-drive</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Additional Notes</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                placeholder="Special requirements, luggage details, child seats, etc."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
              >
                Submit Quote Request
              </button>
              <a
                href="tel:+263776254884"
                className="px-6 py-4 bg-gray-800 text-white rounded-xl font-medium border border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} className="text-brand-orange" /> Call
              </a>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function FleetDetail() {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);
  const [showQuote, setShowQuote] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
          <Link to="/fleet" className="text-brand-orange hover:underline">
            Back to Fleet
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white">
        <section className="relative py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors mb-8"
            >
              <ArrowLeft size={20} /> Back to Fleet
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden mb-4 group">
                  <img
                    src={vehicle.images[activeImage]?.url || vehicle.mainImage}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-brand-orange text-white text-sm font-bold rounded-full">
                    {vehicle.category}
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {vehicle.images.slice(0, 5).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === i ? 'border-brand-orange' : 'border-transparent hover:border-gray-600'
                      }`}
                    >
                      <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {vehicle.colors.map((color, i) => (
                    <span key={i} className="text-sm text-gray-500">{color.name}</span>
                  ))}
                </div>
                <h1 className="font-heading font-bold text-4xl text-white mt-2 mb-4">
                  {vehicle.name}
                </h1>

                <p className="text-gray-400 text-lg mb-6">{vehicle.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                    <Users size={22} className="text-brand-orange" />
                    <div>
                      <p className="text-gray-400 text-sm">Passengers</p>
                      <p className="text-white font-semibold">{vehicle.passengers}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                    <MapPin size={22} className="text-brand-orange" />
                    <div>
                      <p className="text-gray-400 text-sm">Luggage</p>
                      <p className="text-white font-semibold">{vehicle.luggage} Bags</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                    <Cog size={22} className="text-brand-orange" />
                    <div>
                      <p className="text-gray-400 text-sm">Transmission</p>
                      <p className="text-white font-semibold">{vehicle.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                    <Fuel size={22} className="text-brand-orange" />
                    <div>
                      <p className="text-gray-400 text-sm">Fuel Type</p>
                      <p className="text-white font-semibold">{vehicle.fuel}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-lg text-white mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-800/80 rounded-full text-sm text-gray-300 border border-gray-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-lg text-white mb-3">Perfect For</h3>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.suitableServices.map((service, i) => (
                      <span key={i} className="px-3 py-1.5 bg-brand-orange/15 rounded-full text-sm text-brand-orange border border-brand-orange/30">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowQuote(true)}
                    className="flex-1 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white text-center rounded-xl font-bold hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
                  >
                    Request Quote
                  </motion.button>
                  <a
                    href="tel:+263776254884"
                    className="px-6 py-4 bg-gray-800 text-white rounded-xl font-medium border border-gray-700 hover:bg-gray-700 flex items-center gap-2 justify-center transition-colors"
                  >
                    <Phone size={20} className="text-brand-orange" />
                    Call Now
                  </a>
                </div>

                <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <h4 className="text-white font-medium mb-2">Need Quick Info?</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+263776254884" className="text-brand-orange hover:underline text-sm flex items-center gap-1">
                      <Phone size={14} /> +263 77 625 4884
                    </a>
                    <a href="mailto:sales@manikacarrental.com" className="text-brand-orange hover:underline text-sm flex items-center gap-1">
                      <Mail size={14} /> sales@manikacarrental.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-white mb-8">Why Choose This Vehicle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicle.advantages.slice(0, 6).map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                >
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {vehicle.advantages && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-bold text-2xl text-white mb-8">Why Choose This Vehicle</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {vehicle.advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                  >
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{adv}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <AnimatePresence>
        {showQuote && (
          <QuoteForm vehicleName={vehicle.name} onClose={() => setShowQuote(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
