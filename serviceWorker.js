const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/1o1",
  "/1o1/index.html",
  "/1o1/main.min.css",
  "/1o1/minus/index.min.js",
  "/1o1/dividing/index.min.js",
  "/1o1/plus/index.min.js",
  "/1o1/times/index.min.js",
  // Style Sheets
  "/1o1/minus/index.min.css",
  "/1o1/dividing/index.min.css",
  "/1o1/plus/index.min.css",
  "/1o1/times/index.min.css",
  // App.js itself
  "/1o1/js/app.js",
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

