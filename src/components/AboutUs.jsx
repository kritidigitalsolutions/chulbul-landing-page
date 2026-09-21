import React, { useEffect } from 'react';
import {
  Film,
  Tv,
  Sparkles,
  Download,
  Smartphone,
  Play,
  Globe,
  Sliders,
  CheckCircle2,
  Clapperboard,
  HeartHandshake,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Film,
      title: 'Extensive Library',
      tag: 'Curated Entertainment',
      description:
        'Dive into a vast library of movies, series, and exclusive content, meticulously curated to cater to diverse interests and preferences.'
    },
    {
      icon: Tv,
      title: 'High-Quality Streaming',
      tag: '4K Ultra HD & Dolby Sound',
      description:
        'Immerse yourself in seamless streaming with stunning high-definition quality and crystal-clear audio, enhancing your viewing experience to new heights.'
    },
    {
      icon: Sparkles,
      title: 'Personalized Recommendations',
      tag: 'Tailored Just For You',
      description:
        'Discover your next favorite movie or series with our personalized recommendation engine, which analyzes your viewing history and preferences to suggest content tailored just for you.'
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform Accessibility',
      tag: 'Any Screen, Anywhere',
      description:
        'Enjoy the freedom to stream your favorite content anytime, anywhere, and on any device. Whether you’re at home or on the go, Chulbul Play is available across multiple platforms for your convenience.'
    },
    {
      icon: Clapperboard,
      title: 'Flip Through Trailers',
      tag: 'Sneak Peeks & Previews',
      description:
        'Explore our library of trailers to help you choose what to watch first. With a quick flip through trailers, you can get a sneak peek at the latest releases and make informed decisions about your viewing choices.'
    },
    {
      icon: Sliders,
      title: 'Customized Membership Plans',
      tag: 'Flexible Subscriptions',
      description:
        'Personalize your membership plan to suit your individual needs and preferences. Whether you prefer a monthly, quarterly, or annual subscription, Chulbul Play offers flexible membership options designed to fit your lifestyle.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      tag: '24x7 Worldwide',
      description:
        'Access our content library from anywhere in the world and enjoy seamless streaming and downloading 24x7. With Chulbul Play, entertainment knows no boundaries.'
    },
    {
      icon: Download,
      title: 'Offline Viewing On-the-Go',
      tag: 'Watch Without Internet',
      description:
        'Download your favorite movies and series for offline viewing, perfect for those times when you’re traveling or away from a stable internet connection. With Chulbul Play, you can enjoy your favorite content anytime, anywhere, even without an internet connection.'
    }
  ];

  return (
    <main className="simple-page about-us-page">
      <div className="container about-container">
        {/* Breadcrumb Navigation */}
        <div className="privacy-breadcrumb">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="breadcrumb-divider">/</span>
          <span className="current-crumb">About Us</span>
        </div>

        {/* Page Hero Header */}
        <header className="about-header">
          <div className="about-badge">
            <Sparkles size={16} />
            <span>About Chulbul Play</span>
          </div>
          <h1>Your Premier Destination for Unlimited Entertainment</h1>
          <p className="about-lead">
            Chulbul Play App is fully loaded with entertaining content. Get popular movies, amazing web series and more, all in the language you prefer.
          </p>
        </header>

        {/* Welcome Section Card */}
        <section className="about-intro-card">
          <span className="about-label">WELCOME TO CHULBUL PLAY</span>
          <h2>A World of Stories, Crafted for You</h2>
          <p className="about-welcome-text">
            Welcome to <strong>Chulbul Play</strong>, your premier destination for unlimited streaming of the latest movies, series, and exclusive content. At Chulbul Play, we are dedicated to providing you with an unparalleled entertainment experience tailored to your preferences and needs.
          </p>

          <div className="about-perks-row">
            <div className="about-perk-badge">
              <CheckCircle2 size={16} className="text-magenta" />
              <span>Save Offline Videos</span>
            </div>
            <div className="about-perk-badge">
              <CheckCircle2 size={16} className="text-magenta" />
              <span>Seamless TV Casting</span>
            </div>
            <div className="about-perk-badge">
              <CheckCircle2 size={16} className="text-magenta" />
              <span>Smart Custom Watchlists</span>
            </div>
            <div className="about-perk-badge">
              <CheckCircle2 size={16} className="text-magenta" />
              <span>Multi-Language Audio &amp; Subtitles</span>
            </div>
          </div>
        </section>

        {/* Why Choose Chulbul Play Grid */}
        <div className="about-pillars-header">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> The Chulbul Difference
          </span>
          <h2>Why Choose Chulbul Play?</h2>
          <p>
            Packed with power-packed features and cutting-edge streaming technology to make your life easier and more entertaining.
          </p>
        </div>

        <div className="about-pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div className="about-pillar-card" key={idx}>
                <div className="about-pillar-top">
                  <div className="about-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <span className="about-pillar-tag">{pillar.tag}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Download App CTA Banner */}
        <section className="about-cta-banner">
          <div className="about-cta-content">
            <span className="live-pill">
              <span /> Ready to Stream?
            </span>
            <h2>Download Chulbul Play App Now &amp; Enter the World of Entertainment</h2>
            <p>
              Save favorites, pick up where you left off, and keep the good stuff close on your phone, tablet, and smart TV.
            </p>
            <div className="about-cta-actions">
              <Link to="/#download" className="button button-primary">
                <Play size={18} fill="currentColor" /> Get Chulbul Play App
              </Link>
              <Link to="/contact" className="button button-ghost">
                <HeartHandshake size={18} /> Contact Support
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
