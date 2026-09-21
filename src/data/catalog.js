/**
 * Default fallback structures for Chulbul Play
 * Real data is loaded dynamically from the Node.js backend API
 */

export const heroBanners = [];

export const trendingItems = [];

export const initialCategories = [];

export const categoryRails = [];

export const features = [
  ['monitor-play', '4K Ultra HD & HDR', 'Crystal-clear picture quality with cinematic sound on premium content.'],
  ['headphones', 'Best sound experiences', 'Immersive audio that puts you right in the middle of the action.'],
  ['download', 'Offline downloads', 'Take your favorites with you for a great watch, even without internet.'],
  ['layers-3', 'All in one hub', 'Your favorite movies, originals and series, organized in one playful home.'],
  ['ban', 'Zero distractions', 'Uninterrupted streaming so the story stays in the spotlight.'],
  ['languages', 'Your language, your way', 'Audio and subtitles across Hindi, English, Tamil, Telugu and more.']
].map(([icon, title, text]) => ({ icon, title, text }));
