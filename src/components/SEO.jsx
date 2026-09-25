import { useEffect } from 'react';

const PAGE_SEO_DATA = {
  Home: {
    title: 'Upscale - Real Support. Real Growth. | Software Development & Student Project Support',
    description: 'Upscale provides professional software development, web & mobile applications, SaaS solutions, and practical project mentoring & career profile support for students and graduates.',
    keywords: 'Upscale, software development, web development, mobile app development, student projects, final year engineering projects, IEEE projects, resume review, GitHub portfolio, full stack development, React, Node.js, AI solutions, Hyderabad tech services',
    canonical: 'https://upscale-new-beryl.vercel.app/'
  },
  Students: {
    title: 'Student Project Mentorship & Career Support | Upscale',
    description: 'Build portfolio-ready minor and major engineering projects, real-world GitHub repositories, ATS-optimized resumes, and receive daily fresher job notifications with Upscale.',
    keywords: 'student projects, final year projects, engineering projects, IEEE project guidance, GitHub portfolio, fresher resume review, ATS resume optimization, tech mentoring',
    canonical: 'https://upscale-new-beryl.vercel.app/#students'
  },
  Clients: {
    title: 'Custom Software & Web Development Services | Upscale',
    description: 'Hire our dedicated 6-member engineering team to build custom websites, e-commerce storefronts, SaaS applications, and mobile apps from concept to deployment.',
    keywords: 'custom software development, web development agency, SaaS development, mobile app development, React developers, Node.js developers, Hyderabad software company, MVP development',
    canonical: 'https://upscale-new-beryl.vercel.app/#clients'
  },
  Services: {
    title: 'Our Services - Software Engineering & Career Tracks | Upscale',
    description: 'Explore Upscale’s full spectrum of services: web development, mobile applications, SaaS, AI solutions, student project mentorship, and recruiter profile optimization.',
    keywords: 'software development services, web design, e-commerce development, mobile apps, student career tracks, project mentoring, code review',
    canonical: 'https://upscale-new-beryl.vercel.app/#services'
  },
  About: {
    title: 'About Us - Team, Mission & Engineering Values | Upscale',
    description: 'Learn about Upscale, our collaborative 6-member technical team, our mission, vision, and core engineering standards for student mentorship and client development.',
    keywords: 'about Upscale, engineering team, freelance developers, tech career support, software consultancy Hyderabad',
    canonical: 'https://upscale-new-beryl.vercel.app/#about'
  },
  Contact: {
    title: 'Contact Upscale | Start a Project or Join a Career Track',
    description: 'Get in touch with the Upscale team for project scoping or student career support. Connect via email, WhatsApp (+91 90635 93070), or send an inquiry message.',
    keywords: 'contact Upscale, software development inquiry, student project consultation, hire developers Hyderabad, Upscale contact number',
    canonical: 'https://upscale-new-beryl.vercel.app/#contact'
  }
};

export default function SEO({ currentPage }) {
  useEffect(() => {
    const seo = PAGE_SEO_DATA[currentPage] || PAGE_SEO_DATA.Home;

    // Update Page Title
    document.title = seo.title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }

    // Update Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seo.keywords);
    }

    // Update Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', seo.canonical);
    }

    // Update Twitter Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', seo.title);
    }

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', seo.description);
    }

    // Update Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seo.canonical);
    }
  }, [currentPage]);

  return null;
}
