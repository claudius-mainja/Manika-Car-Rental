import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/faqs';

function FAQItemComponent({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-700 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 bg-gray-800/50 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
      >
        <span className="font-heading font-semibold text-white pr-4">{faq.question}</span>
        {isOpen ? <ChevronUp size={20} className="text-brand-orange flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-900/50 border-t border-gray-700">
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      )}
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 bg-gray-800/50 rounded-full border border-brand-orange/20 text-brand-orange text-sm font-medium mb-6"
        >
          FAQ
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading font-bold text-5xl md:text-6xl text-white mb-6"
        >
          Frequently Asked <span className="text-brand-orange">Questions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl max-w-2xl mx-auto"
        >
          Find answers to common questions about our car rental services.
        </motion.p>
      </div>
    </section>
  );
}

function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];
  
  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-24 bg-gray-900/50 -mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
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

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <FAQItemComponent key={faq.question} faq={faq} index={index} />
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-16">
            <HelpCircle size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No questions found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function FAQ() {
  return (
    <>
      <HeroSection />
      <FAQSection />
    </>
  );
}
