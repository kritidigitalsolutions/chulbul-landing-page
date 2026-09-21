import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Flame, Play, Star } from 'lucide-react';

export default function TrendingRail({ items = [] }) {
  const railRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const autoSlideIntervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // Synchronous stop auto-slide (guaranteed no race condition with button clicks)
  const stopAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  // Start auto-slide
  const startAutoSlide = () => {
    stopAutoSlide();
    if (items.length === 0) return;

    autoSlideIntervalRef.current = setInterval(() => {
      if (!railRef.current || isMouseDownRef.current) return;
      const rail = railRef.current;
      const singleSetWidth = rail.scrollWidth / repeatCount;
      const step = 260; // 1 card width + gap

      if (rail.scrollLeft >= singleSetWidth * (repeatCount - 1.5)) {
        rail.scrollLeft -= singleSetWidth * Math.floor(repeatCount / 2);
      }

      rail.scrollBy({ left: step, behavior: 'smooth' });
    }, 4000);
  };

  // Pause immediately and schedule resume after delay
  const pauseThenResumeAutoSlide = (delay = 7000) => {
    stopAutoSlide();
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, delay);
  };

  // Create seamless duplicate sets so there are plenty of cards to scroll in both directions
  const repeatCount = items.length > 0 ? Math.max(4, Math.ceil(12 / items.length)) : 0;
  const displayItems = [];
  if (items.length > 0) {
    for (let r = 0; r < repeatCount; r++) {
      displayItems.push(...items);
    }
  }

  // Initial center position so scrolling left immediately works infinitely
  useEffect(() => {
    if (railRef.current && displayItems.length > 0) {
      const rail = railRef.current;
      const singleSetWidth = rail.scrollWidth / repeatCount;
      const initialOffset = singleSetWidth * Math.floor(repeatCount / 2);
      rail.scrollLeft = initialOffset;
    }
  }, [items.length, repeatCount]);

  // Start timer on mount, clean up on unmount
  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, [items.length, repeatCount]);

  // Infinite Scroll boundary check on manual scroll / wheel
  const handleScroll = () => {
    if (!railRef.current || repeatCount === 0) return;
    const rail = railRef.current;
    const singleSetWidth = rail.scrollWidth / repeatCount;
    if (singleSetWidth <= 0) return;

    if (rail.scrollLeft >= singleSetWidth * (repeatCount - 1.2)) {
      rail.scrollLeft -= singleSetWidth * Math.floor(repeatCount / 2);
    } else if (rail.scrollLeft <= singleSetWidth * 0.4) {
      rail.scrollLeft += singleSetWidth * Math.floor(repeatCount / 2);
    }
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    if (!railRef.current) return;
    stopAutoSlide();
    isMouseDownRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - railRef.current.offsetLeft;
    scrollLeftRef.current = railRef.current.scrollLeft;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current || !railRef.current) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
    }
    railRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      setIsDragging(false);
      pauseThenResumeAutoSlide(4000);
    }
  };

  // Mouse Wheel horizontal scroll
  const handleWheel = (e) => {
    if (!railRef.current) return;
    pauseThenResumeAutoSlide(5000);
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      railRef.current.scrollLeft += e.deltaY * 1.1;
    }
  };

  // Arrow button click navigation in top right (synchronously stops auto-slide and glides)
  const scroll = (direction) => {
    if (!railRef.current || repeatCount === 0) return;
    // 1. Instantly kill auto-slide
    pauseThenResumeAutoSlide(7000);

    // 2. Perform smooth scroll
    const rail = railRef.current;
    const step = direction * (rail.clientWidth > 600 ? 420 : 260);
    const singleSetWidth = rail.scrollWidth / repeatCount;

    if (direction < 0 && rail.scrollLeft <= singleSetWidth * 0.8) {
      rail.scrollLeft += singleSetWidth * Math.floor(repeatCount / 2);
    } else if (direction > 0 && rail.scrollLeft >= singleSetWidth * (repeatCount - 1.5)) {
      rail.scrollLeft -= singleSetWidth * Math.floor(repeatCount / 2);
    }

    rail.scrollBy({ left: step, behavior: 'smooth' });
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="media-section trending-section" id="trending">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <Flame size={15} className="eyebrow-flame" /> Top 10 Trending Now
            </span>
            <h2>Top 10 Titles Everyone Is Watching</h2>
          </div>

          {/* Top Right Controls with Badge & Nav Buttons */}
          <div className="slider-heading-controls">
            <span className="trending-badge">India&apos;s Top 10</span>
            <button
              className="slider-nav-btn prev"
              onClick={() => scroll(-1)}
              aria-label="Previous trending titles"
              title="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="slider-nav-btn next"
              onClick={() => scroll(1)}
              aria-label="Next trending titles"
              title="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 1350px Slider Track */}
        <div
          className={`rail-wrap netflix-rail-wrap ${isDragging ? 'is-dragging' : ''}`}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={() => pauseThenResumeAutoSlide(3000)}
        >
          <div
            className="media-rail netflix-rail"
            ref={railRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onWheel={handleWheel}
            onScroll={handleScroll}
          >
            {displayItems.map((item, index) => {
              const rankNum = item.rank || (index % items.length) + 1;

              return (
                <article className="netflix-card fast-hover-card" key={`${item.id || item.title}-${index}`}>
                  <div className="netflix-card-inner">
                    <div
                      className={`netflix-rank-simple rank-${rankNum}`}
                      aria-hidden="true"
                    >
                      {rankNum}
                    </div>

                    <div className="poster-wrap">
                      <img
                        src={item.image}
                        alt={`${item.title} poster`}
                        loading="lazy"
                        draggable="false"
                      />
                      <div className="poster-overlay" />
                      <button
                        className="play-button"
                        aria-label={`Play ${item.title}`}
                      >
                        <Play size={18} fill="currentColor" />
                      </button>
                    </div>
                  </div>

                  <div className="media-info">
                    <h3>{item.title}</h3>
                    <div className="media-meta">
                      <span className="rating">
                        <Star size={13} fill="currentColor" /> {item.rating}
                      </span>
                      {item.year && <span>{item.year}</span>}
                      {item.genre && <span>{item.genre}</span>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
