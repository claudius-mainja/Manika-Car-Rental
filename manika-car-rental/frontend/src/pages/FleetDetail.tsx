import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, MapPin, Fuel, Cog, ArrowLeft, Phone } from 'lucide-react';
import { vehicles } from '../data/vehicles';

export default function FleetDetail() {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

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
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="relative py-12 bg-gray-900/50">
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
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-4">
                <img
                  src={vehicle.mainImage}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {vehicle.images.slice(0, 4).map((img, i) => (
                  <div key={i} className="h-20 rounded-lg overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">
                {vehicle.category}
              </span>
              <h1 className="font-heading font-bold text-4xl text-white mt-2 mb-4">
                {vehicle.name}
              </h1>
              <p className="text-gray-400 text-lg mb-6">{vehicle.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                  <Users size={20} className="text-brand-orange" />
                  <div>
                    <p className="text-gray-400 text-sm">Passengers</p>
                    <p className="text-white font-semibold">{vehicle.passengers}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                  <MapPin size={20} className="text-brand-orange" />
                  <div>
                    <p className="text-gray-400 text-sm">Luggage</p>
                    <p className="text-white font-semibold">{vehicle.luggage} Bags</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                  <Cog size={20} className="text-brand-orange" />
                  <div>
                    <p className="text-gray-400 text-sm">Transmission</p>
                    <p className="text-white font-semibold">{vehicle.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                  <Fuel size={20} className="text-brand-orange" />
                  <div>
                    <p className="text-gray-400 text-sm">Fuel Type</p>
                    <p className="text-white font-semibold">{vehicle.fuel}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-semibold text-xl text-white mb-4">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-semibold text-xl text-white mb-4">Suitable For</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.suitableServices.map((service, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-brand-orange/20 rounded-full text-sm text-brand-orange"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="flex-1 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-light text-white text-center rounded-xl font-bold hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
                >
                  Request Quote
                </Link>
                <a
                  href="tel:+263776254884"
                  className="px-6 py-4 bg-gray-800 text-white rounded-xl font-medium border border-gray-700 hover:bg-gray-700 flex items-center gap-2 justify-center"
                >
                  <Phone size={20} className="text-brand-orange" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
