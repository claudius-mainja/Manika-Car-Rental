import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noIndex?: boolean;
}

const locationKeywords: Record<string, string> = {
  '/': 'car rental harare, car hire zimbabwe, airport transfer harare, safari car rental, victoria falls car hire, bulawayo car rental',
  '/about': 'about manika car rental, zimbabwe car rental company, premium car hire harare',
  '/services': 'car rental services harare, airport transfer, self drive rental zimbabwe, chauffeur service, safari trips',
  '/fleet': 'car fleet harare, vehicle rental zimbabwe, hire car for safari, rent 4x4 zimbabwe',
  '/contact': 'contact manika car rental, car rental phone harare, book car hire zimbabwe',
  '/faq': 'car rental faq zimbabwe, frequently asked questions car hire, rental requirements harare',
};

const locationDescriptions: Record<string, string> = {
  '/': 'Leading car rental company in Harare, Zimbabwe. Airport transfers, safari trips, self-drive rentals, chauffeur services. Serving Bulawayo, Victoria Falls, and all SADC countries.',
  '/about': 'Learn about Manika Car Rental - Zimbabwe\'s trusted car rental company. Premium vehicles, professional drivers, 24/7 support serving Harare, Bulawayo, Victoria Falls and beyond.',
  '/services': 'Explore our car rental services in Harare, Zimbabwe: Airport transfers, self-drive rentals, safari trips, outstation journeys, international trips to SADC countries.',
  '/fleet': 'Browse our premium fleet of vehicles in Harare, Zimbabwe. From sedans to 4x4 safari vehicles, minibuses for groups. All vehicles insured and well-maintained.',
  '/contact': 'Contact Manika Car Rental in Harare, Zimbabwe. Call +263 77 625 4884 for airport transfers, safari trips, self-drive rentals. Available 24/7.',
  '/faq': 'Frequently asked questions about car rental in Harare, Zimbabwe. Learn about requirements, insurance, driver services, and booking process.',
};

export default function PageSEO({ 
  title, 
  description, 
  keywords, 
  image = '/logo.jpeg',
  noIndex = false 
}: PageSEOProps) {
  const location = useLocation();
  const pathKeywords = locationKeywords[location.pathname] || '';
  const pathDescription = locationDescriptions[location.pathname] || description;
  
  const fullTitle = `${title} | Manika Car Rental Harare, Zimbabwe`;
  const fullDescription = pathDescription || description;
  const fullKeywords = keywords ? `${keywords}, ${pathKeywords}` : pathKeywords;
  
  const baseUrl = 'https://manikacarrental.com';
  const pageUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, propertyName?: string) => {
      const meta = propertyName 
        ? document.querySelector(`meta[property="${propertyName}"]`) as HTMLMetaElement
        : document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      
      if (meta) {
        meta.content = content;
      }
    };
    
    updateMetaTag('title', fullTitle);
    updateMetaTag('description', fullDescription);
    updateMetaTag('keywords', fullKeywords);
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow', 'robots');
    
    // Update Open Graph
    updateMetaTag('og:title', fullTitle, 'og:title');
    updateMetaTag('og:description', fullDescription, 'og:description');
    updateMetaTag('og:url', pageUrl, 'og:url');
    updateMetaTag('og:image', `${baseUrl}${image}`, 'og:image');
    
    // Update Twitter
    updateMetaTag('twitter:title', fullTitle, 'twitter:title');
    updateMetaTag('twitter:description', fullDescription, 'twitter:description');
    updateMetaTag('twitter:image', `${baseUrl}${image}`, 'twitter:image');
    
    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = pageUrl;
    }
  }, [fullTitle, fullDescription, fullKeywords, pageUrl, image, noIndex]);

  // Generate page-specific schema
  const getPageSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: fullTitle,
      description: fullDescription,
      url: pageUrl,
      image: `${baseUrl}${image}`,
      telephone: '+263-77-625-4884',
      email: 'sales@manikacarrental.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '33 Argyle Road, Avondale',
        addressLocality: 'Harare',
        addressRegion: 'Harare',
        addressCountry: 'ZW',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-17.8252',
        longitude: '31.0335',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Zimbabwe',
        containsPlace: [
          { '@type': 'City', name: 'Harare' },
          { '@type': 'City', name: 'Bulawayo' },
          { '@type': 'City', name: 'Victoria Falls' },
          { '@type': 'City', name: 'Mutare' },
          { '@type': 'City', name: 'Masvingo' },
          { '@type': 'City', name: 'Gweru' },
          { '@type': 'City', name: 'Kwekwe' },
          { '@type': 'City', name: 'Kadoma' },
          { '@type': 'City', name: 'Chinhoyi' },
          { '@type': 'City', name: 'Marondera' },
          { '@type': 'City', name: 'Rusape' },
          { '@type': 'City', name: 'Hwange' },
          { '@type': 'City', name: 'Kariba' },
          { '@type': 'City', name: 'Nyanga' },
          { '@type': 'City', name: 'Beitbridge' },
        ],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Car Rental Services',
        description: 'Premium car rental services including airport transfers, self-drive, safari trips, outstation and international journeys',
      },
    };

    // Add BreadcrumbList schema for inner pages
    if (location.pathname !== '/') {
      return [
        baseSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: baseUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: title,
              item: pageUrl,
            },
          ],
        },
      ];
    }

    return [baseSchema];
  };

  return (
    <>
      {getPageSchema().map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
