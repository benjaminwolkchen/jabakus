const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "translation.js",
  "index.html",
  "serviceWorker.js",
  "manifest.json",
  "main.min.css",
  "favicon.png",
  "js/app.js",
  "js/copy.js",
  // jQuery
  "https://code.jquery.com/jquery-3.4.1.slim.min.js",
  // Bootstrap
  "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
  // vue.js
  "https://cdn.jsdelivr.net/npm/vue",
  // vue.cookie.js
  "https://unpkg.com/vue-cookies@1.7.0/vue-cookies.js",
  // Game
  "game/index.html",
  "game/index.min.js",
  "game/main.min.css",
  "game/index.min.js",
  "game/main.min.css"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})


// Fetch Cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

