/*
    Generate manifest from https://www.simicart.com/manifest-generator.html/
    Generate favicons from https://favicon.io/

    Kindly place favicons into public folder
*/

const manifest = {
  theme_color: '#f69435',
  background_color: '#f69435',
  display: 'standalone',
  scope: '/',
  start_url: '/',
  short_name: 'Kuberanix',
  description: 'Kuberanix Starter Pack',
  name: 'Kuberanix',
  icons: [
    {
      src: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};
export default manifest;
