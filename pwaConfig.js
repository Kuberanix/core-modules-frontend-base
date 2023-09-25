import manifest from './manifest';
const pwaConfig = {
  // add this to cache all the imports
  workbox: {
    globPatterns: ['**/*'],
  },
  // add this to cache all the
  // static assets in the public folder
  includeAssets: ['**/*'],
  manifest: manifest,
};
export default pwaConfig;
