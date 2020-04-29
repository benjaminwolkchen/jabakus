const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/dividing/index.html",
  "/minus/index.html",
  "/plus/index.html",
  "/times/index.html",
  "/main.min.css",
  "/minus/index.min.js",
  "/dividing/index.min.js",
  "/plus/index.min.js",
  "/times/index.min.js",
  // Style Sheets
  "/minus/index.min.css",
  "/dividing/index.min.css",
  "/plus/index.min.css",
  "/times/index.min.css",
  // App.js itself
  "/js/app.js",
  // vue.js
  "https://cdn.jsdelivr.net/npm/vue",
  // vue.cookie.js
  "https://unpkg.com/vue-cookies@1.7.0/vue-cookies.js",
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

