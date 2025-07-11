const CACHE_NAME = 'v1';   //Autores - Israel H. e Gabriel Cruz 
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png',

 
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache aberto');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request) .then ((response) => {
            return response || fetch(event.request)
        })
    )
});