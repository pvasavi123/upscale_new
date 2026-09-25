import { useEffect } from 'react';

const BASE_URL = 'https://upscale-new-beryl.vercel.app';

export const PAGE_SEO_DATA = {
  Home: {
    path: '/',
    title: 'Upscale - Real Support. Real Growth. | Software Development & Student Project Support',
    description: 'Upscale provides professional software development, web & mobile applications, SaaS solutions, and practical project mentoring & career profile support for students and graduates.',
    keywords: 'Upscale, software development Hyderabad, web development services Hyderabad, student project guidance Hyderabad, final year engineering projects, React development, mobile apps',
    canonical: `${BASE_URL}/`
  },
  FinalYearProject: {
    path: '/final-year-project-guidance',
    title: 'Final Year Engineering Project Guidance in Hyderabad | Upscale',
    description: 'Practical final year project mentorship in Hyderabad for B.Tech, BE, and MCA students. Hands-on guidance in React, Node.js, Python AI/ML, and Java Spring Boot with clean GitHub commits.',
    keywords: 'final year project guidance Hyderabad, final year engineering project guidance Hyderabad, student software project guidance, software project mentorship, final year project development support, project documentation guidance, GitHub portfolio guidance',
    canonical: `${BASE_URL}/final-year-project-guidance`,
    breadcrumbName: 'Final Year Project Guidance',
    serviceName: 'Final Year Engineering Project Mentorship',
    serviceDesc: 'Ethical, hands-on engineering project mentoring, system architecture guidance, GitHub repo workflows, and documentation assistance for college students.'
  },
  WebDevelopment: {
    path: '/web-development',
    title: 'Web Development Services in Hyderabad | Upscale',
    description: 'Professional web development services in Hyderabad. Custom websites, React.js frontends, responsive design, backend APIs, and cloud hosting for startups and businesses.',
    keywords: 'web development services Hyderabad, website development Hyderabad, React development services Hyderabad, startup website development, business website development',
    canonical: `${BASE_URL}/web-development`,
    breadcrumbName: 'Web Development Services',
    serviceName: 'Web Development Services',
    serviceDesc: 'Custom website and web application development with React, Node.js, Tailwind CSS, and cloud deployment.'
  },
  MobileAppDevelopment: {
    path: '/mobile-app-development',
    title: 'Mobile App Development Services in Hyderabad | Upscale',
    description: 'Cross-platform iOS and Android mobile application development with React Native. Fluid user interfaces, secure backends, and app store deployment.',
    keywords: 'mobile app development Hyderabad, React Native mobile apps, cross-platform app development, iOS and Android apps Hyderabad',
    canonical: `${BASE_URL}/mobile-app-development`,
    breadcrumbName: 'Mobile App Development',
    serviceName: 'Mobile App Development Services',
    serviceDesc: 'Cross-platform mobile application engineering using React Native for iOS and Android.'
  },
  SoftwareDevelopment: {
    path: '/software-development',
    title: 'Custom Software & MVP Development in Hyderabad | Upscale',
    description: 'Custom software development and rapid SaaS MVP engineering in Hyderabad. Build tailored admin dashboards, web portals, and scalable cloud architectures.',
    keywords: 'custom software development Hyderabad, full stack development services Hyderabad, MVP development Hyderabad, SaaS MVP development',
    canonical: `${BASE_URL}/software-development`,
    breadcrumbName: 'Custom Software & MVPs',
    serviceName: 'Custom Software & SaaS MVP Development',
    serviceDesc: 'Full-stack software architecture, admin portals, and MVP development for startups and enterprises.'
  },
  ResumeAtsSupport: {
    path: '/resume-ats-support',
    title: 'Fresher Resume Support & ATS Profile Optimization | Upscale',
    description: 'Free resume audit and ATS optimization for freshers and engineering graduates. Format tech resumes, polish GitHub repositories, and optimize LinkedIn search keywords.',
    keywords: 'fresher resume support, ATS resume optimization, GitHub portfolio guidance, developer resume audit, LinkedIn profile optimization for freshers',
    canonical: `${BASE_URL}/resume-ats-support`,
    breadcrumbName: 'Resume & ATS Support',
    serviceName: 'Fresher Resume & ATS Profile Optimization',
    serviceDesc: 'Professional formatting of developer resumes for Applicant Tracking Systems (ATS) and recruiter profile optimization.'
  },
  Students: {
    path: '/students',
    title: 'Student Project Guidance & Career Support Track | Upscale',
    description: 'Explore Upscale’s student track: major and minor engineering project mentorship, GitHub portfolio assistance, ATS resume audits, and fresher job opportunity updates.',
    keywords: 'student career tracks, final year projects, engineering projects, IEEE projects Hyderabad, fresher career support',
    canonical: `${BASE_URL}/students`,
    breadcrumbName: 'For Students'
  },
  Clients: {
    path: '/clients',
    title: 'Freelance Software Development Team for Businesses | Upscale',
    description: 'Hire our dedicated 6-member engineering team to design, build, and deploy custom websites, mobile apps, SaaS platforms, and software solutions.',
    keywords: 'hire freelance developers Hyderabad, software development agency, web development team, custom business applications',
    canonical: `${BASE_URL}/clients`,
    breadcrumbName: 'For Clients'
  },
  Services: {
    path: '/services',
    title: 'Software Engineering & Career Support Services | Upscale',
    description: 'Full overview of Upscale services: web development, mobile app development, SaaS MVPs, student project mentorship, and resume audits.',
    keywords: 'Upscale services, software engineering, student project tracks, web development, mobile app development',
    canonical: `${BASE_URL}/services`,
    breadcrumbName: 'Services'
  },
  About: {
    path: '/about',
    title: 'About Us - 6-Member Tech Team & Mission | Upscale',
    description: 'Meet Upscale, a collaborative 6-member tech team operating from Hyderabad providing professional software engineering and practical student career mentoring.',
    keywords: 'about Upscale, tech team Hyderabad, software consultancy, student project mentors',
    canonical: `${BASE_URL}/about`,
    breadcrumbName: 'About Us'
  },
  Contact: {
    path: '/contact',
    title: 'Contact Upscale | Software Scoping & Project Support Hyderabad',
    description: 'Contact the Upscale engineering team for project scoping or career support. Connect via email, WhatsApp (+91 90635 93070), or send an inquiry form.',
    keywords: 'contact Upscale, software development inquiry Hyderabad, student project consultation, Upscale phone number',
    canonical: `${BASE_URL}/contact`,
    breadcrumbName: 'Contact'
  }
};

export default function SEO({ currentPage }) {
  useEffect(() => {
    const seo = PAGE_SEO_DATA[currentPage] || PAGE_SEO_DATA.Home;

    // 1. Update Page Title
    document.title = seo.title;

    // 2. Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }

    // 3. Update Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seo.keywords);
    }

    // 4. Update Canonical Link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seo.canonical);
    }

    // 5. Update Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', seo.canonical);

    // 6. Update Twitter Card Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seo.description);

    // 7. Inject Page-Specific Dynamic JSON-LD (BreadcrumbList + Service Schema)
    const existingDynamicScript = document.getElementById('dynamic-page-schema');
    if (existingDynamicScript) {
      existingDynamicScript.remove();
    }

    if (currentPage !== 'Home') {
      const graph = [
        {
          '@type': 'BreadcrumbList',
          '@id': `${seo.canonical}#breadcrumbs`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': seo.breadcrumbName || seo.title,
              'item': seo.canonical
            }
          ]
        }
      ];

      if (seo.serviceName) {
        graph.push({
          '@type': 'Service',
          '@id': `${seo.canonical}#service`,
          'name': seo.serviceName,
          'description': seo.serviceDesc || seo.description,
          'provider': {
            '@type': 'Organization',
            '@id': `${BASE_URL}/#organization`,
            'name': 'Upscale',
            'url': `${BASE_URL}/`
          },
          'areaServed': {
            '@type': 'AdministrativeArea',
            'name': 'Hyderabad, Telangana, India'
          }
        });
      }

      const script = document.createElement('script');
      script.id = 'dynamic-page-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph
      });
      document.head.appendChild(script);
    }
  }, [currentPage]);

  return null;
}
