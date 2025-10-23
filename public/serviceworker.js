self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activé');
});

self.addEventListener('fetch', (event) => {
  // On peut mettre du caching ici plus tard
  console.log('Fetching:', event.request.url);
});
