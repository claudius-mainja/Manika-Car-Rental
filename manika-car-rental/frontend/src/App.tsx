import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageSEO from './components/PageSEO';
import Home from './pages/Home';
import About from './pages/About';
import Fleet from './pages/Fleet';
import FleetDetail from './pages/FleetDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import './index.css';

function SEOHandler() {
  const location = useLocation();
  
  const pageConfig: Record<string, { title: string; description: string; keywords?: string }> = {
    '/': {
      title: 'Premium Car Rental in Harare, Zimbabwe',
      description: 'Leading car rental company in Harare, Zimbabwe. Airport transfers, safari trips, self-drive rentals, chauffeur services. Serving Bulawayo, Victoria Falls, and all SADC countries.',
      keywords: 'car rental harare, car hire zimbabwe, airport transfer harare, safari car rental, victoria falls car hire, bulawayo car rental, self drive zimbabwe',
    },
    '/about': {
      title: 'About Us',
      description: 'Learn about Manika Car Rental - Zimbabwe\'s trusted car rental company. Premium vehicles, professional drivers, 24/7 support serving Harare, Bulawayo, Victoria Falls and beyond.',
      keywords: 'zimbabwe car rental company, about manika car rental, premium car hire harare',
    },
    '/services': {
      title: 'Our Services',
      description: 'Explore our car rental services in Harare, Zimbabwe: Airport transfers, self-drive rentals, safari trips, outstation journeys, international trips to SADC countries.',
      keywords: 'car rental services harare, airport transfer zimbabwe, self drive rental, chauffeur service harare, safari trips zimbabwe',
    },
    '/fleet': {
      title: 'Our Fleet',
      description: 'Browse our premium fleet of vehicles in Harare, Zimbabwe. From sedans to 4x4 safari vehicles, minibuses for groups. All vehicles insured and well-maintained.',
      keywords: 'car fleet harare, vehicle rental zimbabwe, hire car for safari, rent 4x4 zimbabwe, toyota quantum hire, suv rental harare',
    },
    '/contact': {
      title: 'Contact Us',
      description: 'Contact Manika Car Rental in Harare, Zimbabwe. Call +263 77 625 4884 for airport transfers, safari trips, self-drive rentals. Available 24/7.',
      keywords: 'contact manika car rental, car rental phone harare, book car hire zimbabwe',
    },
    '/faq': {
      title: 'FAQ',
      description: 'Frequently asked questions about car rental in Harare, Zimbabwe. Learn about requirements, insurance, driver services, and booking process.',
      keywords: 'car rental faq zimbabwe, rental requirements harare, frequently asked questions car hire',
    },
  };

  const config = pageConfig[location.pathname] || pageConfig['/'];
  
  return <PageSEO title={config.title} description={config.description} keywords={config.keywords} />;
}

function App() {
  return (
    <Router>
      <SEOHandler />
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/fleet/:id" element={<FleetDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
