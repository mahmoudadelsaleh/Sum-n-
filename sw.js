const CACHE_NAME = 'mas-edu-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/three.module.js',
  '/gsap.min.js',
  '/style.css'
];

// تثبيت الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// جلب البيانات أوفلاين
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
