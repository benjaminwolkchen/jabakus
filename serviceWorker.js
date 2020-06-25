const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/assets/css/bulma@0.9.0/bulma.min.css",
  "/assets/js/game/main.js",
  "/game/d/index.html",
  "/game/m/index.html",
  "/game/p/index.html",
  "/game/t/index.html",
  "/assets/pwa/scripts/app.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  