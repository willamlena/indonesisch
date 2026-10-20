// Offline-Speicher. Bei jeder neuen Version VERSION erhöhen – dann holt sich die App
// die neuen Dateien und zeigt „Neue Version verfügbar".
const VERSION = 'bahasa-v6';
const FILES = [
  './', 'index.html', 'style.css', 'manifest.webmanifest',
  'vocab.js', 'vocab2.js', 'grammar.js', 'grammar2.js', 'dialogs.js', 'util.js', 'srs.js', 'store.js', 'examples.js',
  'session.js', 'trainer.js', 'talk.js', 'app.js',
  'icon.svg', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => (req.mode === 'navigate' ? caches.match('index.html') : Response.error())))
  );
});
