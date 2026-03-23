import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';

const categories = ['All', ...Array.from(new Set(vehicles.map((v) => v.category)))];

export default function FleetPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = vehicles.filter((v) => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-orange/10" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />

        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-sm text-brand-orange"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Car className="h-4 w-4" />
            <span>{vehicles.length} Vehicles Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-5xl font-bold md:text-6xl lg:text-7xl"
          >
            Our <span className="text-brand-orange">Fleet</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl"
          >
            Explore our diverse collection of well-maintained vehicles, from
            compact sedans to spacious mini buses — perfect for every journey.
          </motion.p>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-800"
          >
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-brand-orange text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-orange/50 transition-all duration-300"
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
                    <span>{vehicle.passengers} Seats</span>
                    <span>{vehicle.transmission}</span>
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

          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No vehicles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
