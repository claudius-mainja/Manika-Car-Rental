import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-14 w-auto overflow-hidden"
      >
        <img
          src="/logo.jpeg"
          alt="Manika Car Rental Logo"
          className="h-full w-auto object-contain"
        />
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
