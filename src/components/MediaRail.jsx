import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

export default function MediaRail({ section, sliderIndex = 0 }) {
  const railRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const items = section.items || [];
  // 4 sets for true seamless infinite loop buffer
  const displayItems = items.length > 0 ? [...items, ...items, ...items, ...items] : [];

  // Initial center position so scrolling left immediately works infinitely
  useEffect(() => {
    if (railRef.current && items.length > 0) {
      const rail = railRef.current;
      const initialOffset = rail.scrollWidth / 4;
      rail.scrollLeft = initialOffset;
    }
  }, [items.length]);

  // Infinite Auto-Slide every 2.6s when not hovered or dragged
  const intervalTime = 2600 + (sliderIndex % 3) * 400;

  useEffect(() => {
    if (items.length === 0 || isPaused || isDragging) return;

    const interval = setInterval(() => {
      if (!railRef.current || isMouseDownRef.current) return;
      const rail = railRef.current;
      const singleSetWidth = rail.scrollWidth / 4;
      const step = 220; // 1 card width + gap

      // If approaching the end of duplicate buffer, jump back seamlessly
      if (rail.scrollLeft >= singleSetWidth * 2.8) {
        rail.scrollLeft -= singleSetWidth;
      }

      rail.scrollBy({ left: step, behavior: 'smooth' });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [items.length, isPaused, isDragging, intervalTime]);

  // Infinite Scroll boundary check on manual scroll / wheel
  const handleScroll = () => {
    if (!railRef.current) return;
    const rail = railRef.current;
    const singleSetWidth = rail.scrollWidth / 4;
    if (singleSetWidth <= 0) return;

    if (rail.scrollLeft >= singleSetWidth * 3) {
      rail.scrollLeft -= singleSetWidth;
    } else if (rail.scrollLeft <= 15) {
      rail.scrollLeft += singleSetWidth;
    }
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    if (!railRef.current) return;
    isMouseDownRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - railRef.current.offsetLeft;
    scrollLeftRef.current = railRef.current.scrollLeft;
    setIsDragging(true);
    setIsPaused(true);
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
    isMouseDownRef.current = false;
    setIsDragging(false);
    setIsPaused(false);
  };

  // Mouse Wheel horizontal scroll
  const handleWheel = (e) => {
    if (!railRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      railRef.current.scrollLeft += e.deltaY * 1.1;
    }
  };

  // Slider navigation buttons in top right
  const move = (direction) => {
    if (!railRef.current) return;
    const rail = railRef.current;
    const step = direction * 420;
    const singleSetWidth = rail.scrollWidth / 4;

    if (direction < 0 && rail.scrollLeft <= singleSetWidth * 0.5) {
      rail.scrollLeft += singleSetWidth;
    } else if (direction > 0 && rail.scrollLeft >= singleSetWidth * 2.6) {
      rail.scrollLeft -= singleSetWidth;
    }

    rail.scrollBy({ left: step, behavior: 'smooth' });
  };

  const sectionAnchorId = section.slug ? `category-${section.slug}` : section.id;

  if (items.length === 0) return null;

  return (
    <section
      className={`media-section accent-${section.accent || 'pink'} category-slider-rail`}
      id={sectionAnchorId}
      data-category-slug={section.slug}
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" /> {section.label}
            </span>
            <h2>{section.title}</h2>
          </div>

          {/* Top Right Slider Navigation Buttons */}
          <div className="slider-heading-controls">
            <button
              className="slider-nav-btn prev"
              onClick={() => move(-1)}
              aria-label={`Previous ${section.title}`}
              title="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="slider-nav-btn next"
              onClick={() => move(1)}
              aria-label={`Next ${section.title}`}
              title="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 1350px Max Width Slider Track */}
        <div
          className={`rail-wrap ${isDragging ? 'is-dragging' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseUpOrLeave}
        >
          <div
            className="media-rail"
            ref={railRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onWheel={handleWheel}
            onScroll={handleScroll}
          >
            {displayItems.map((item, index) => (
              <article
                className="media-card fast-hover-card"
                key={`${item.title}-${index}`}
              >
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
                    <Play size={16} fill="currentColor" />
                  </button>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
