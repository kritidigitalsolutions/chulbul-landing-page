import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

export default function MediaRail({ section, sliderIndex = 0 }) {
  const railRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const items = section.items || [];

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    if (!railRef.current) return;
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
    }
  };

  // Mouse Wheel horizontal scroll
  const handleWheel = (e) => {
    if (!railRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      railRef.current.scrollLeft += e.deltaY * 1.1;
    }
  };

  // Slider navigation buttons in top right (smooth manual navigation only)
  const move = (direction) => {
    if (!railRef.current) return;
    const rail = railRef.current;
    const step = direction * (rail.clientWidth > 600 ? 420 : 260);
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
        >
          <div
            className="media-rail"
            ref={railRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onWheel={handleWheel}
          >
            {items.map((item, index) => (
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
