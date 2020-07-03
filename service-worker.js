const CACHE_NAME = 'submission1-pwa-v2';
let urlsToCache = [
	'/',
	'index.html',
	'/manifest.json',
	'/component/nav.html',
	'/pages/profile.html',
	'/pages/skills.html',
	'/pages/educations.html',
	'/pages/experiences.html',
	'/pages/contacts.html',
	'/css/materialize.min.css',
	'/css/style.css',
	'/js/materialize.min.js',
	'/js/nav.js',
	'/js/data.js',
	'/js/manipulations.js',
	'/img/profile_all.jpg',
	'/img/cv-icon-192.png',
	'/img/raport_app.png',
	'/img/pos_app.png',
	'/img/cv-icon-512.png',
	'/img/github.svg',
	'/img/gmail.svg',
	'/img/facebook.svg',
	'/img/whatsapp.svg'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches
			.match(event.request, {
				cacheName: CACHE_NAME
			})
			.then(function(response) {
				if (response) {
					console.log('ServiceWorker: Gunakan Aset dari Cache');
					return response;
				}
				console.log('Service worker: memuat aset dari server', event.request.url);
				return fetch(event.request);
			})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheName != CACHE_NAME) {
						console.log('ServiceWorker: cache ' + cacheName + ' dihapus');
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
