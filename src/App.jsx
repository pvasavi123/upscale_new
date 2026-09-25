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
import SEO from './components/SEO';

// Existing Pages
import StudentsPage from './pages/StudentsPage';
import ClientsPage from './pages/ClientsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Dedicated SEO Service Pages
import FinalYearProjectPage from './pages/FinalYearProjectPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import MobileAppPage from './pages/MobileAppPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import ResumeAtsPage from './pages/ResumeAtsPage';

// Map page names to clean canonical URLs
const pageToPath = {
  Home: '/',
  FinalYearProject: '/final-year-project-guidance',
  WebDevelopment: '/web-development',
  MobileAppDevelopment: '/mobile-app-development',
  SoftwareDevelopment: '/software-development',
  ResumeAtsSupport: '/resume-ats-support',
  Students: '/students',
  Clients: '/clients',
  Services: '/services',
  About: '/about',
  Contact: '/contact'
};

// Map URL paths and legacy hashes to page names
const routeToPage = {
  '/': 'Home',
  '/home': 'Home',
  '/final-year-project-guidance': 'FinalYearProject',
  '/web-development': 'WebDevelopment',
  '/mobile-app-development': 'MobileAppDevelopment',
  '/software-development': 'SoftwareDevelopment',
  '/resume-ats-support': 'ResumeAtsSupport',
  '/students': 'Students',
  '/clients': 'Clients',
  '/services': 'Services',
  '/about': 'About',
  '/contact': 'Contact',
  // Hash fallbacks
  '#': 'Home',
  '#/': 'Home',
  '#home': 'Home',
  '#final-year-project-guidance': 'FinalYearProject',
  '#web-development': 'WebDevelopment',
  '#mobile-app-development': 'MobileAppDevelopment',
  '#software-development': 'SoftwareDevelopment',
  '#resume-ats-support': 'ResumeAtsSupport',
  '#students': 'Students',
  '#clients': 'Clients',
  '#services': 'Services',
  '#about': 'About',
  '#contact': 'Contact'
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function getActivePage() {
  if (typeof window === 'undefined') return 'Home';

  // 1. Check pathname first
  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (routeToPage[pathname]) {
    return routeToPage[pathname];
  }

  // 2. Check hash fallback
  const hash = window.location.hash.toLowerCase();
  if (hash && routeToPage[hash]) {
    return routeToPage[hash];
  }

  return 'Home';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getActivePage);

  useEffect(() => {
    const handleLocationChange = () => {
      const page = getActivePage();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (page) => {
    const targetPath = pageToPath[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
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
      case 'FinalYearProject':
        return <FinalYearProjectPage onNavigate={handleNavigate} />;
      case 'WebDevelopment':
        return <WebDevelopmentPage onNavigate={handleNavigate} />;
      case 'MobileAppDevelopment':
        return <MobileAppPage onNavigate={handleNavigate} />;
      case 'SoftwareDevelopment':
        return <SoftwareDevelopmentPage onNavigate={handleNavigate} />;
      case 'ResumeAtsSupport':
        return <ResumeAtsPage onNavigate={handleNavigate} />;
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
      <SEO currentPage={currentPage} />
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
