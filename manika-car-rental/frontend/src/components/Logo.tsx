import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center shadow-lg shadow-brand-orange/30"
      >
        <span className="text-white font-heading font-bold text-xl">M</span>
      </motion.div>
      <div className="flex flex-col">
        <span className="font-heading font-bold text-xl text-white leading-none">
          Manika
        </span>
        <span className="font-heading text-xs text-brand-orange tracking-wider uppercase">
          Car Rental
        </span>
      </div>
    </Link>
  );
}
