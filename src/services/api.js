/**
 * Chulbul Play Backend API Service Layer
 * Connects directly to Node.js / Express API based on Banners_and_Posters.postman_collection
 */

const getApiBaseUrl = () => {
  let url = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  url = url.trim().replace(/\/+$/, ''); // Remove trailing slash
  if (!url.endsWith('/api')) {
    url = `${url}/api`;
  }
  return url;
};

export const API_CONFIG = {
  get BASE_URL() {
    return getApiBaseUrl();
  },
  ENDPOINTS: {
    BANNERS: '/banners',
    POSTERS: '/posters',
    CATEGORIES: '/posters/categories'
  }
};

/**
 * Safe fetch helper with timeout and JSON parsing
 */
async function fetchEndpoint(endpointPath) {
  try {
    const fullUrl = endpointPath.startsWith('http')
      ? endpointPath
      : `${API_CONFIG.BASE_URL}${endpointPath}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(fullUrl, {
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`[API] Endpoint ${fullUrl} responded with status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(`[API] Fetch error on ${endpointPath}:`, error.message);
    return null;
  }
}

/**
 * Extract an array from standard backend response shapes
 * (e.g. [ ... ], { banners: [ ... ] }, { posters: [ ... ] }, { data: [ ... ] }, { data: { posters: [ ... ] } })
 */
function extractArray(data, preferredKey = '') {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  if (preferredKey && Array.isArray(data[preferredKey])) return data[preferredKey];
  if (Array.isArray(data.data)) return data.data;
  if (Array.isArray(data.posters)) return data.posters;
  if (Array.isArray(data.banners)) return data.banners;
  if (Array.isArray(data.categories)) return data.categories;
  if (data.data && typeof data.data === 'object') {
    if (preferredKey && Array.isArray(data.data[preferredKey])) return data.data[preferredKey];
    if (Array.isArray(data.data.posters)) return data.data.posters;
    if (Array.isArray(data.data.banners)) return data.data.banners;
  }
  return [];
}

/**
 * Normalize a single banner item
 */
function normalizeBanner(item, index) {
  return {
    id: item._id || item.id || `banner-${index}`,
    title: item.title || item.name || 'Featured Release',
    image: item.imageUrl || item.image || item.poster || '',
    tagline: item.description || item.tagline || 'Stream in 4K Ultra HD & Dolby Audio',
    badge: item.category || 'Featured',
    quality: item.quality || '4K Ultra HD',
    rating: item.rating ? String(item.rating) : '8.5',
    year: item.releaseYear ? String(item.releaseYear) : (item.year ? String(item.year) : '2026'),
    genre: item.category || item.genre || 'Trending',
    linkUrl: item.linkUrl || '#',
    priority: typeof item.priority === 'number' ? item.priority : index,
    isActive: item.isActive !== false
  };
}

/**
 * Normalize a single poster item
 */
function normalizePoster(item, index) {
  return {
    id: item._id || item.id || `poster-${index}`,
    title: item.title || item.name || 'Untitled',
    image: item.imageUrl || item.image || item.poster || '',
    category: item.category || 'Movies',
    rating: item.rating ? String(item.rating) : '8.5',
    year: item.releaseYear ? String(item.releaseYear) : (item.year ? String(item.year) : '2026'),
    genre: item.category || item.genre || 'HD',
    description: item.description || '',
    linkUrl: item.linkUrl || '#',
    priority: typeof item.priority === 'number' ? item.priority : index,
    isActive: item.isActive !== false
  };
}

const ACCENT_COLORS = ['pink', 'yellow', 'orange', 'purple'];
const CATEGORY_COLORS = [
  'linear-gradient(135deg, #f018a8, #793bf7)',
  'linear-gradient(135deg, #ffd21a, #ff8a00)',
  'linear-gradient(135deg, #5b18e8, #f018a8)',
  'linear-gradient(135deg, #00d2ff, #3a7bd5)',
  'linear-gradient(135deg, #ff416c, #ff4b2b)',
  'linear-gradient(135deg, #11998e, #38ef7d)'
];
const CATEGORY_ICONS = ['monitor-play', 'sparkles', 'laugh', 'masks', 'scan-eye', 'tv'];

export const api = {
  /**
   * Fetch Hero Banners from /api/banners (sorted by priority, max 10)
   */
  async getHeroBanners() {
    const raw = await fetchEndpoint(API_CONFIG.ENDPOINTS.BANNERS);
    const list = extractArray(raw, 'banners');
    if (list.length === 0) return null;

    return list
      .map(normalizeBanner)
      .filter((b) => b.isActive && b.image)
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 10);
  },

  /**
   * Fetch All Public Posters from /api/posters
   */
  async getAllPosters() {
    const raw = await fetchEndpoint(API_CONFIG.ENDPOINTS.POSTERS);
    const list = extractArray(raw, 'posters');
    if (list.length === 0) return [];

    return list
      .map(normalizePoster)
      .filter((p) => p.isActive && p.image)
      .sort((a, b) => a.priority - b.priority);
  },

  /**
   * Fetch Top 10 Trending Titles (/api/posters?category=Trending)
   */
  async getTrending() {
    const raw = await fetchEndpoint(`${API_CONFIG.ENDPOINTS.POSTERS}?category=Trending`);
    let list = extractArray(raw, 'posters');

    let normalized = list
      .map(normalizePoster)
      .filter((p) => p.isActive && p.image)
      .sort((a, b) => a.priority - b.priority);

    // If no specific 'Trending' category posters exist, fallback to all posters sorted by priority
    if (normalized.length === 0) {
      const all = await this.getAllPosters();
      normalized = all.filter((p) => p.category?.toLowerCase() === 'trending');
      if (normalized.length === 0 && all.length > 0) {
        normalized = all.slice(0, 10);
      }
    }

    return normalized.slice(0, 10).map((item, idx) => ({
      ...item,
      rank: idx + 1
    }));
  },

  /**
   * Fetch Distinct Categories from /api/posters/categories or derive dynamically
   */
  async getCategories() {
    const raw = await fetchEndpoint(API_CONFIG.ENDPOINTS.CATEGORIES);
    let cats = extractArray(raw, 'categories');

    // If backend returns array of string category names or category objects
    let categoryNames = [];
    if (cats.length > 0) {
      categoryNames = cats.map((c) => (typeof c === 'string' ? c : c.name || c.title || String(c)));
    } else {
      // Derive distinct categories from all posters
      const allPosters = await this.getAllPosters();
      categoryNames = Array.from(
        new Set(allPosters.map((p) => p.category).filter(Boolean))
      );
    }

    // Exclude 'Trending' from category grid if it's already in Top 10, or keep it
    const filteredCats = categoryNames.filter((c) => c.toLowerCase() !== 'trending');

    return filteredCats.map((name, index) => {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return {
        name,
        slug,
        count: 'Explore Collection',
        color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
        icon: CATEGORY_ICONS[index % CATEGORY_ICONS.length]
      };
    });
  },

  /**
   * Fetch Dynamically Generated Category Rails ("jese category add hongi slider apne ap bante jayege")
   * Groups all posters from /api/posters by category and builds dynamic sliders
   */
  async getCategoryRails() {
    const allPosters = await this.getAllPosters();
    if (allPosters.length === 0) return null;

    // Group posters by category
    const grouped = {};
    allPosters.forEach((poster) => {
      const cat = poster.category?.trim() || 'Movies';
      // Skip 'Trending' category since it has its own dedicated top slider
      if (cat.toLowerCase() === 'trending') return;

      if (!grouped[cat]) {
        grouped[cat] = [];
      }
      grouped[cat].push(poster);
    });

    const categories = Object.keys(grouped);
    if (categories.length === 0) return null;

    // Build dynamic rails
    const rails = categories.map((categoryName, index) => {
      const slug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

      return {
        id: `category-${slug}`,
        slug: slug,
        label: `${categoryName.toUpperCase()} SPOTLIGHT`,
        title: categoryName,
        accent: accent,
        items: grouped[categoryName].sort((a, b) => a.priority - b.priority)
      };
    });

    return rails;
  }
};

export default api;
