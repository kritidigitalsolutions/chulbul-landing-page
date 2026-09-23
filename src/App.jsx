import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Flame,
  Headphones,
  Layers3,
  MonitorPlay,
  Play,
  ShieldCheck,
  Smartphone,
  Star,
  Tv,
  Zap,
  Sparkles,
  Laugh,
  Eye
} from 'lucide-react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import TrendingRail from './components/TrendingRail';
import MediaRail from './components/MediaRail';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import RefundPolicy from './components/RefundPolicy';
import DeleteAccount from './components/DeleteAccount';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { api, prefetchPromise } from './services/api';
import {
  heroBanners as defaultBanners,
  trendingItems as defaultTrending,
  initialCategories as defaultCategories,
  categoryRails as defaultRails,
  features
} from './data/catalog';

const icons = {
  'monitor-play': MonitorPlay,
  headphones: Headphones,
  download: Download,
  'layers-3': Layers3,
  ban: ShieldCheck,
  languages: Zap,
  zap: Zap,
  sparkles: Sparkles,
  laugh: Laugh,
  masks: Tv,
  'scan-eye': Eye,
  tv: Tv
};

function Home() {
  const [banners, setBanners] = useState(defaultBanners);
  const [trending, setTrending] = useState(defaultTrending);
  const [categories, setCategories] = useState(defaultCategories);
  const [rails, setRails] = useState(defaultRails);

  // Apply fetched data to state
  const applyData = (data) => {
    if (!data) return;
    if (data.banners && data.banners.length > 0) setBanners(data.banners);
    if (data.trending && data.trending.length > 0) setTrending(data.trending);
    if (data.categories && data.categories.length > 0) setCategories(data.categories);
    if (data.rails && data.rails.length > 0) setRails(data.rails);
  };

  useEffect(() => {
    let isMounted = true;

    // 1. Await the prefetch that started at MODULE LOAD TIME (before React rendered)
    //    This is already resolved or nearly resolved — instant data!
    prefetchPromise.then((data) => {
      if (isMounted) applyData(data);
    });

    // 2. On tab refocus: invalidate cache → fresh concurrent fetch
    const handleVisibilityOrFocus = () => {
      if (document.visibilityState === 'visible') {
        api.invalidateCache();
        api.fetchAllLandingData().then((data) => {
          if (isMounted) applyData(data);
        });
      }
    };

    window.addEventListener('focus', handleVisibilityOrFocus);
    document.addEventListener('visibilitychange', handleVisibilityOrFocus);

    return () => {
      isMounted = false;
      window.removeEventListener('focus', handleVisibilityOrFocus);
      document.removeEventListener('visibilitychange', handleVisibilityOrFocus);
    };
  }, []);

  // Smooth scroll helper for category card clicks
  const scrollToCategory = (slug) => {
    const el = document.getElementById(`category-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Dynamic Hero Section (10 banners, newest first, banner title + tagline, action buttons removed) */}
      <HeroBanner banners={banners} />

      {/* 2nd - Trending Now Section with Netflix-Style Simple Outlined Numbers & Infinite Auto-Slide */}
      <TrendingRail items={trending} />

      {/* Dynamic Category Sliders (Each category automatically gets its own slider) */}
      <div className="category-rails-container" id="browse-sliders">
        {rails.map((section, index) => (
          <MediaRail
            key={section.id || section.slug}
            section={section}
            sliderIndex={index}
          />
        ))}
      </div>

      {/* Browse: "Find your kind of fun" - Clicking redirects/scrolls to corresponding slider */}
      <section className="category-section" id="categories">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" /> Browse
              </span>
              <h2 id="find-your-fun-title">Find your kind of fun</h2>
            </div>
            <a href="#browse-sliders" className="text-button">
              All categories <ChevronDown size={16} />
            </a>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = icons[category.icon] || Zap;
              return (
                <a
                  href={`#category-${category.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToCategory(category.slug);
                  }}
                  className="category-card"
                  style={{ '--category-color': category.color }}
                  key={category.name}
                  id={`browse-cat-${category.slug}`}
                  title={`View ${category.name} titles`}
                >
                  <div className="category-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{category.name}</h3>
                  <span>{category.count}</span>
                  <ArrowRight size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Originals & Features */}
      <section className="features-section" id="originals">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" /> The Chulbul difference
              </span>
              <h2>Entertainment, with extra sparkle.</h2>
            </div>
          </div>

          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = icons[feature.icon] || Zap;
              return (
                <div className="feature-card" key={feature.title}>
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download / Take the fun with you Section (Contained Rounded Card Experience) */}
      <section className="download-section-wrap" id="download">
        <div className="container">
          <div className="download-boxed-card">
            <div className="download-bg-glows">
              <div className="glow-sphere glow-1" />
              <div className="glow-sphere glow-2" />
            </div>

            <div className="download-card-grid">
              <div className="download-text-content">
                <span className="eyebrow">
                  <span className="eyebrow-dot" /> Take the fun with you
                </span>
                <h2>Your next watch is always in your pocket.</h2>
                <p>
                  Save favorites, pick up where you left off and keep the good stuff close on every screen.
                </p>

                {/* Feature Perks List */}
                <div className="download-perks">
                  <div className="perk-item">
                    <Check size={16} className="perk-icon" />
                    <span>Stream in 4K Ultra HD &amp; Dolby Audio</span>
                  </div>
                  <div className="perk-item">
                    <Check size={16} className="perk-icon" />
                    <span>One-tap downloads for offline viewing</span>
                  </div>
                  <div className="perk-item">
                    <Check size={16} className="perk-icon" />
                    <span>Resume anytime on Phone, Tablet or Smart TV</span>
                  </div>
                </div>

                {/* Store Buttons & Rating */}
                <div className="download-actions-wrap">
                  <div className="store-buttons">
                    <a className="store-button" href="#download" aria-label="Available on iOS and Android">
                      <Smartphone size={20} />
                      <span>
                        <small>Available on</small> iOS &amp; Android
                      </span>
                    </a>
                    <a className="store-button store-button-primary" href="#download" aria-label="Download from Google Play">
                      <Play size={20} fill="currentColor" />
                      <span>
                        <small>Download from</small> Google Play
                      </span>
                    </a>
                  </div>

                  <div className="app-rating-badge">
                    <div className="stars">
                      <Star size={13} fill="#ffd21a" color="#ffd21a" />
                      <Star size={13} fill="#ffd21a" color="#ffd21a" />
                      <Star size={13} fill="#ffd21a" color="#ffd21a" />
                      <Star size={13} fill="#ffd21a" color="#ffd21a" />
                      <Star size={13} fill="#ffd21a" color="#ffd21a" />
                    </div>
                    <span>4.8 / 5 Rating • 500K+ Active Streamers</span>
                  </div>
                </div>
              </div>

              {/* Floating Phone Mockup Experience (Smaller, Floating Upward) */}
              <div className="download-mockup-wrapper">
                <div className="phone-floating-stage">
                  {/* Floating Badge 1 - Top Left */}
                  <div className="floating-chip chip-top-left">
                    <Sparkles size={14} className="chip-icon" />
                    <span>4K Ultra HD</span>
                  </div>

                  {/* Floating Badge 2 - Bottom Right */}
                  <div className="floating-chip chip-bottom-right">
                    <Zap size={14} className="chip-icon chip-icon-yellow" />
                    <span>Instant Download</span>
                  </div>

                  {/* Phone Container with Compact Size & Upward Floating */}
                  <div className="app-phone-container">
                    <img
                      src="/assets/app-mockup.png"
                      alt="Chulbul Play Mobile Application Interface"
                      className="app-phone-img"
                    />
                  </div>

                  {/* Interactive Dynamic Ground Shadow */}
                  <div className="phone-ground-shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const pageCopy = {
  '/about': [
    'About Chulbul Play',
    'Chulbul Play is a bright, easygoing home for stories worth staying up late for.',
    [
      'A library with personality',
      'From big-screen spectacles to clever little series, our collection is curated for discovery, not endless scrolling.',
      'Made for real watch lists',
      'Save your favorites, pick up where you left off and explore by mood, genre or the people you are watching with.'
    ]
  ],
  '/privacy-policy': [
    'Privacy policy',
    'Your trust matters. This experience is designed for secure, seamless entertainment.',
    [
      'What we collect',
      'Only essential preferences to make your streaming experience fast and personalized.',
      'Your choices',
      'You are in full control of your watch history and recommendations.'
    ]
  ],
  '/terms-and-conditions': [
    'Terms & conditions',
    'Clear, fair terms for streaming entertainment on Chulbul Play.',
    [
      'Using Chulbul Play',
      'Access thousands of films, original series, and regional cinema with zero interruption.',
      'Availability',
      'Streaming availability and 4K HDR playback depends on title rights and device compatibility.'
    ]
  ],
  '/refund-policy': [
    'Refund policy',
    'Hassle-free transparent subscription terms.',
    [
      'Billing & Cancellations',
      'Cancel anytime with one click in your account settings. No hidden cancellation fees.',
      'Questions',
      'For any billing support, reach out to hello@chulbulplay.com anytime.'
    ]
  ]
};

function InfoPage({ type }) {
  const [title, intro, sections] = pageCopy[type];
  return (
    <main className="simple-page">
      <div className="container simple-inner">
        <span className="eyebrow">
          <span className="eyebrow-dot" /> Chulbul Play
        </span>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
        {sections.map((text, index) =>
          index % 2 === 0 ? (
            <section key={text}>
              <h2>{text}</h2>
              <p>{sections[index + 1]}</p>
            </section>
          ) : null
        )}
      </div>
    </main>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="simple-page">
      <div className="container contact-layout">
        <div className="simple-inner">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> We are listening
          </span>
          <h1>Let’s talk about your next watch.</h1>
          <p className="lead">
            Questions, feedback or a title you want to see? Send a note and we’ll keep it in the loop.
          </p>
          <div className="contact-details">
            <p>
              <strong>Email support</strong>
              <br />
              hello@chulbulplay.com
            </p>
            <p>
              <strong>Hours</strong>
              <br />
              9 AM - 6 PM, Monday to Friday
            </p>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label>
            Full name
            <input required placeholder="Your name" />
          </label>
          <label>
            Email address
            <input required type="email" placeholder="you@example.com" />
          </label>
          <label>
            Subject
            <input required placeholder="How can we help?" />
          </label>
          <label>
            Message
            <textarea required rows="5" placeholder="Write your message here..." />
          </label>
          {sent && (
            <p className="form-success">
              <Check size={17} /> Message received! We’ll get back to you soon.
            </p>
          )}
          <button className="button button-primary" type="submit">
            Send message <ArrowRight size={17} />
          </button>
        </form>
      </div>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/account-deletion" element={<DeleteAccount />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
