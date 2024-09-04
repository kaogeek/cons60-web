self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-pwa-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/favicon.ico',
          '/cons60-logo.png',
          '/index.html',
          '/manifest.json',
          '/static/js/bundle.js',
          '/data/constitution.json?v=1.0.0',
          '/data/minutes.json?v=1.0.0',
          '/static/js/main.chunk.js',
          '/static/js/0.chunk.js',
          '/static/css/main.6dfa0ae8.css',
          '/static/js/main.39418a90.js',
          '/android-chrome-192x192.png',
          '/data/chapter-01.json?v=1.0.0',
          '/data/chapter-02.json?v=1.0.0',
          '/data/chapter-03.json?v=1.0.0',
          '/data/chapter-04.json?v=1.0.0',
          '/data/chapter-05.json?v=1.0.0',
          '/data/chapter-06.json?v=1.0.0',
          '/data/chapter-07.json?v=1.0.0',
          '/data/chapter-08.json?v=1.0.0',
          '/data/chapter-09.json?v=1.0.0',
          '/data/chapter-10.json?v=1.0.0',
          '/data/chapter-11.json?v=1.0.0',
          '/data/chapter-12.json?v=1.0.0',
          '/data/chapter-13.json?v=1.0.0',
          '/data/chapter-14.json?v=1.0.0',
          '/data/chapter-15.json?v=1.0.0',
          '/data/chapter-16.json?v=1.0.0',
          '/data/transitory-provisions.json?v=1.0.0',
          '/static/media/mainmenu.5ad6049cfb419be336a4.jpg',


          // Add other assets and routes to cache
        ]);
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response;
      })
    );
  });