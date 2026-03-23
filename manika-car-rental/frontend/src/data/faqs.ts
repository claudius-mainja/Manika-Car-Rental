export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I book a car rental with Manika Car Rental?",
    answer:
      "You can book a car rental by visiting our website and filling out the quote request form on our Fleet or Services pages. You can also call us directly at +263 77 625 4884 or email sales@manikacarrental.com. Our team will respond promptly with a customized quote.",
    category: "Booking",
  },
  {
    id: 2,
    question: "What documents do I need for self-drive car rental?",
    answer:
      "For self-drive rentals, you will need a valid driver's license (international driving permit if your license is not in English), a valid ID or passport, and a credit card for the security deposit. The minimum age for self-drive is 21 years.",
    category: "Requirements",
  },
  {
    id: 3,
    question: "Is insurance included in the rental price?",
    answer:
      "Basic insurance coverage is included in all our rental prices. We also offer comprehensive insurance options for additional peace of mind. Our team will explain all coverage options when you receive your quote.",
    category: "Insurance",
  },
  {
    id: 4,
    question: "Do you provide airport pickup and drop off services?",
    answer:
      "Yes! We offer reliable airport pickup and drop off services at Robert Gabriel Mugabe International Airport in Harare. Our drivers monitor flight schedules to ensure timely pickups, and we provide meet and greet services.",
    category: "Services",
  },
  {
    id: 5,
    question: "Can I rent a car for out-of-town trips?",
    answer:
      "Absolutely. We specialize in outstation trips to destinations across Zimbabwe including Bulawayo, Victoria Falls, Masvingo, Mutare, and more. Our vehicles are well-maintained for long-distance travel, and experienced drivers are available.",
    category: "Services",
  },
  {
    id: 6,
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 48 hours or more before the rental start date receive a full refund. Cancellations within 24-48 hours receive a 50% refund. Cancellations less than 24 hours before the rental date are non-refundable, but we offer rescheduling options.",
    category: "Policies",
  },
  {
    id: 7,
    question: "Do you offer chauffeur services?",
    answer:
      "Yes, we provide professional chauffeur services with experienced, uniformed drivers. Our chauffeurs are knowledgeable about Harare and all major routes in Zimbabwe. This service is available for business trips, airport transfers, events, and more.",
    category: "Services",
  },
  {
    id: 8,
    question: "What types of vehicles do you have available?",
    answer:
      "Our fleet includes Toyota Quantum mini buses, Honda Accord sedans, mini SUVs, standard SUVs, double cab pickups, executive sedans, standard sedans, and mini buses ranging from 5 to 25 passengers. We have options for every need and budget.",
    category: "Fleet",
  },
  {
    id: 9,
    question: "Can I book a vehicle for a safari trip?",
    answer:
      "Yes! We offer complete safari trip packages with 4x4 vehicles and knowledgeable driver-guides. We can arrange trips to Hwange National Park, Mana Pools, Matopos, Gonarezhou, and other renowned wildlife destinations in Zimbabwe.",
    category: "Services",
  },
  {
    id: 10,
    question: "What happens if the vehicle breaks down during my rental?",
    answer:
      "We provide 24/7 roadside assistance for all our rental vehicles. In the unlikely event of a breakdown, call our emergency hotline immediately. We will arrange a replacement vehicle or repair service as quickly as possible.",
    category: "Support",
  },
  {
    id: 11,
    question: "Do you offer corporate or long-term rental packages?",
    answer:
      "Yes, we offer special corporate rates and long-term rental packages for businesses. These include dedicated account management, monthly billing, fleet options, and customized service agreements. Contact our sales team for details.",
    category: "Corporate",
  },
  {
    id: 12,
    question: "What payment methods do you accept?",
    answer:
      "We accept cash (USD and Zimbabwean dollars), bank transfers, EcoCash, and major credit/debit cards. For corporate clients, we offer invoice-based billing with agreed payment terms.",
    category: "Payment",
  },
];
