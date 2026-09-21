import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

export default function HeroBanner({ banners = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!banners || banners.length === 0) {
    return (
      <section className="hero hero-loading-fallback" id="hero">
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-pill-group">
              <span className="live-pill">
                <span /> Live Streaming
              </span>
              <span className="hero-quality-badge">4K Ultra HD</span>
            </div>

            <h1 className="hero-title">Unlimited Movies, Series &amp; Originals</h1>
            <p className="hero-tagline">
              Discover blockbusters, exclusive web originals, and non-stop entertainment on Chulbul Play.
            </p>

            <div className="hero-proof">
              <div className="avatar-stack">
                <span>CP</span>
                <span>MK</span>
                <span>RS</span>
                <span>+</span>
              </div>
              <span>
                <strong>50k+</strong> active viewers streaming now
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const activeBanner = banners[currentSlide] || banners[0];

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <section
      className="hero"
      id="hero"
    >
      {/* Background Banners */}
      <div className="hero-backdrops">
        {banners.map((item, index) => (
          <img
            key={item.id || index}
            className={index === currentSlide ? 'active' : ''}
            src={item.image}
            alt={item.title}
          />
        ))}
      </div>

      {/* Cinematic Gradient Shade */}
      <div className="hero-shade" />

      {/* Manual Prev / Next Navigation Arrows */}
      <button
        className="hero-nav-arrow prev"
        onClick={goToPrev}
        aria-label="Previous banner"
        title="Previous banner"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        className="hero-nav-arrow next"
        onClick={goToNext}
        aria-label="Next banner"
        title="Next banner"
      >
        <ChevronRight size={28} />
      </button>

      {/* Hero Content (Dynamic Banner Title & Meta - NO CTA buttons as requested) */}
      <div className="container hero-content">
        <div className="hero-copy" key={activeBanner.id || currentSlide}>
          <div className="hero-pill-group">
            <span className="live-pill">
              <span /> {activeBanner.badge || 'Streaming now'}
            </span>
            {activeBanner.quality && (
              <span className="hero-quality-badge">{activeBanner.quality}</span>
            )}
            {activeBanner.rating && (
              <span className="hero-rating-pill">
                <Star size={13} fill="currentColor" /> {activeBanner.rating}
              </span>
            )}
          </div>

          <h1 className="hero-title">{activeBanner.title}</h1>

          <div className="hero-meta-line">
            {activeBanner.year && <span>{activeBanner.year}</span>}
            {activeBanner.genre && (
              <>
                <span className="meta-sep">•</span>
                <span>{activeBanner.genre}</span>
              </>
            )}
          </div>

          <p className="hero-tagline">{activeBanner.tagline}</p>

          <div className="hero-proof">
            <div className="avatar-stack">
              <span>CP</span>
              <span>MK</span>
              <span>RS</span>
              <span>+</span>
            </div>
            <span>
              <strong>50k+</strong> happy viewers this week
            </span>
          </div>
        </div>
      </div>

      {/* Hero Footer with Slide Indicators */}
      <div className="hero-footer container">
        <div className="hero-dots" aria-label="Banner slides">
          {banners.map((item, index) => (
            <button
              key={item.id || index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}: ${item.title}`}
              title={`${index + 1}. ${item.title}`}
            >
              <span className="dot-index">{index + 1}</span>
            </button>
          ))}
        </div>
        <div className="hero-slide-counter">
          <span>
            <b>{String(currentSlide + 1).padStart(2, '0')}</b> / {String(banners.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
