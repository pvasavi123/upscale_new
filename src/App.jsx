import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import HowWeWork from './components/HowWeWork';
import WhyChoose from './components/WhyChoose';
import TechStack from './components/TechStack';
import TeamPreview from './components/TeamPreview';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

// Pages
import StudentsPage from './pages/StudentsPage';
import ClientsPage from './pages/ClientsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Map page names to URL hashes
const pageToHash = {
  'Home': '#home',
  'Students': '#students',
  'Clients': '#clients',
  'Services': '#services',
  'About': '#about',
  'Contact': '#contact'
};

const hashToPage = {
  '': 'Home',
  '#': 'Home',
  '#/': 'Home',
  '#home': 'Home',
  '#students': 'Students',
  '#clients': 'Clients',
  '#services': 'Services',
  '#about': 'About',
  '#contact': 'Contact'
};

// Visitors who set "reduce motion" in their OS get an instant jump instead
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.toLowerCase();
    const matchedKey = Object.keys(hashToPage).find(key => key.toLowerCase() === hash);
    return matchedKey ? hashToPage[matchedKey] : 'Home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);

    // Default to #home if no hash exists on entry
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavigate = (page) => {
    const targetHash = pageToHash[page] || '#home';
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return (
          <>
            {/* Hero Section */}
            <Hero onNavigate={handleNavigate} />

            {/* Main Content */}
            <main>
              {/* Tracks Section */}
              <Tracks onNavigate={handleNavigate} />

              {/* How We Work Section */}
              <HowWeWork />

              {/* Why Choose Us Section */}
              <WhyChoose />

              {/* Technology Stack Preview Section */}
              <TechStack />

              {/* Team Preview Section */}
              <TeamPreview onNavigate={handleNavigate} />

              {/* Call to Action Section */}
              <CtaBanner onNavigate={handleNavigate} />
            </main>
          </>
        );
      case 'Students':
        return <StudentsPage onNavigate={handleNavigate} />;
      case 'Clients':
        return <ClientsPage onNavigate={handleNavigate} />;
      case 'Services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'About':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden antialiased flex flex-col justify-between">
      <div>
        {/* Global Navigation Header */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Dynamic Page Viewer */}
        {renderPage()}
      </div>

      {/* Global Contact & Brand Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
