self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('basic-pwa-cache-v1')
      .then(cache => cache.addAll([
        '/',
        '/app.js',
        '/app.css',
      ]))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
