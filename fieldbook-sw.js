const CACHE='af-fieldbook-v2';
const FILES=['./fieldbook.html','./fieldbook.css','./fieldbook.mjs','./fieldbook-core.mjs','./fieldbook.webmanifest','./fieldbook-icon-192.png','./fieldbook-icon-512.png'];
const URLS=new Set(FILES.map(path=>new URL(path,self.location.href).href));
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('af-fieldbook-')&&key!==CACHE).map(key=>caches.delete(key))))));
// Only public app assets enter the cache. Never cache user exports, photos, or portfolio pages.
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);url.search='';url.hash='';if(!URLS.has(url.href))return;event.respondWith(caches.open(CACHE).then(async cache=>{const saved=await cache.match(url.href);if(saved)return saved;return fetch(event.request);}));});
