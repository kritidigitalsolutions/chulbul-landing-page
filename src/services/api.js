/**
 * Chulbul Play Backend API Service Layer
 * Ultra-fast concurrent fetch & live background sync
 *
 * Key optimisations:
 *  • All public endpoints fire concurrently via Promise.allSettled
 *  • The very first fetch starts at MODULE LOAD time (before React renders)
 *  • In-memory cache with a configurable TTL avoids redundant network calls
 */

/* ───────────────────────── Config ────────────────────────── */

const getApiBaseUrl = () => {
  let url = import.meta.env.VITE_API_URL || 'https://chulbulplay.vercel.app';
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
    // Public endpoints from Postman collection
    BANNERS: '/banners',            // GET /api/banners
    POSTERS: '/posters',            // GET /api/posters
    CATEGORIES: '/posters/categories' // GET /api/posters/categories
  },
  TIMEOUT_MS: 8000,
  CACHE_TTL_MS: 60_000 // 60 seconds
};

/* ───────────────────────── In-memory cache ────────────────── */

let _cache = null;
let _cacheTimestamp = 0;

function getCachedData() {
  if (_cache && Date.now() - _cacheTimestamp < API_CONFIG.CACHE_TTL_MS) {
    return _cache;
  }
  return null;
}

function setCacheData(data) {
  _cache = data;
  _cacheTimestamp = Date.now();
}

/* ───────────────────────── Fetch helper ───────────────────── */

/**
 * Fast safe fetch with timeout, abort support and JSON parsing.
 * Returns parsed JSON or null on any failure.
 */
async function fetchEndpoint(endpointPath) {
  try {
    const fullUrl = endpointPath.startsWith('http')
      ? endpointPath
      : `${API_CONFIG.BASE_URL}${endpointPath}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT_MS);

    const response = await fetch(fullUrl, {
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

/* ───────────────────────── Data extractors ────────────────── */

/**
 * Extract an array from standard backend response formats
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

/* ───────────────────────── Normalisers ────────────────────── */

/**
 * Normalize single banner
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
 * Normalize single poster
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

/* ───────────────────────── Styling constants ─────────────── */

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

/* ───────────────────────── Core API ──────────────────────── */

export const api = {
  /**
   * Concurrently fetch ALL landing page data in a single pass.
   * All 3 endpoints fire at exactly the same time via Promise.allSettled.
   * Results are cached to avoid redundant requests on tab refocus.
   */
  async fetchAllLandingData() {
    // Return cached data if still fresh
    const cached = getCachedData();
    if (cached) return cached;

    // Fire all 3 endpoints CONCURRENTLY — none waits for the other
    const [bannersRes, postersRes, categoriesRes] = await Promise.allSettled([
      fetchEndpoint(API_CONFIG.ENDPOINTS.BANNERS),
      fetchEndpoint(API_CONFIG.ENDPOINTS.POSTERS),
      fetchEndpoint(API_CONFIG.ENDPOINTS.CATEGORIES)
    ]);

    const rawBanners = bannersRes.status === 'fulfilled' ? bannersRes.value : null;
    const rawPosters = postersRes.status === 'fulfilled' ? postersRes.value : null;
    const rawCategories = categoriesRes.status === 'fulfilled' ? categoriesRes.value : null;

    // 1. Process Banners
    const bannerList = extractArray(rawBanners, 'banners');
    const banners = bannerList
      .map(normalizeBanner)
      .filter((b) => b.isActive && b.image)
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 10);

    // 2. Process Posters
    const posterList = extractArray(rawPosters, 'posters');
    const allPosters = posterList
      .map(normalizePoster)
      .filter((p) => p.isActive && p.image)
      .sort((a, b) => a.priority - b.priority);

    // 3. Process Trending (Top 10)
    let trendingList = allPosters.filter((p) => p.category?.toLowerCase() === 'trending');
    if (trendingList.length === 0 && allPosters.length > 0) {
      trendingList = allPosters.slice(0, 10);
    }
    const trending = trendingList.slice(0, 10).map((item, idx) => ({
      ...item,
      rank: idx + 1
    }));

    // 4. Process Category Rails ("jaise category add hogi, slider apne aap banta jayega")
    const grouped = {};
    allPosters.forEach((poster) => {
      const cat = poster.category?.trim() || 'Movies';
      if (cat.toLowerCase() === 'trending') return; // Dedicated trending rail

      if (!grouped[cat]) {
        grouped[cat] = [];
      }
      grouped[cat].push(poster);
    });

    const categoryKeys = Object.keys(grouped);
    const rails = categoryKeys.map((categoryName, index) => {
      const slug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

      return {
        id: `category-${slug}`,
        slug,
        label: `${categoryName.toUpperCase()} SPOTLIGHT`,
        title: categoryName,
        accent,
        items: grouped[categoryName].sort((a, b) => a.priority - b.priority)
      };
    });

    // 5. Process Browse Categories Grid
    const rawCatList = extractArray(rawCategories, 'categories');
    let distinctCatNames = [];
    if (rawCatList.length > 0) {
      distinctCatNames = rawCatList.map((c) => (typeof c === 'string' ? c : c.name || c.title || String(c)));
    } else {
      distinctCatNames = categoryKeys;
    }
    const filteredCatNames = distinctCatNames.filter((c) => c.toLowerCase() !== 'trending');

    const categories = filteredCatNames.map((name, index) => {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return {
        name,
        slug,
        count: `${grouped[name]?.length || 'Explore'} titles`,
        color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
        icon: CATEGORY_ICONS[index % CATEGORY_ICONS.length]
      };
    });

    const result = {
      banners: banners.length > 0 ? banners : null,
      trending: trending.length > 0 ? trending : null,
      categories: categories.length > 0 ? categories : null,
      rails: rails.length > 0 ? rails : null
    };

    // Cache the result
    setCacheData(result);

    return result;
  },

  async getHeroBanners() {
    const data = await this.fetchAllLandingData();
    return data.banners;
  },

  async getAllPosters() {
    const raw = await fetchEndpoint(API_CONFIG.ENDPOINTS.POSTERS);
    const list = extractArray(raw, 'posters');
    return list.map(normalizePoster).filter((p) => p.isActive && p.image);
  },

  async getTrending() {
    const data = await this.fetchAllLandingData();
    return data.trending;
  },

  async getCategories() {
    const data = await this.fetchAllLandingData();
    return data.categories;
  },

  async getCategoryRails() {
    const data = await this.fetchAllLandingData();
    return data.rails;
  },

  /** Invalidate cache so next fetchAllLandingData() hits the network */
  invalidateCache() {
    _cache = null;
    _cacheTimestamp = 0;
  }
};

/* ───────────────────────── PREFETCH ──────────────────────── */
/**
 * Start the very first fetch at MODULE LOAD time.
 * This fires BEFORE React even mounts, so by the time the Home
 * component calls fetchAllLandingData(), the promise is already
 * resolved (or almost resolved). Zero wasted time.
 */
export const prefetchPromise = api.fetchAllLandingData();

export default api;
