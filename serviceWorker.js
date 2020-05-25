const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
"/",
"/index.html",
"/serviceWorker.js",
"/manifest.json",
"/main.css",
"/fonts/anonymous-pro-v13-latin-regular.eot",
"/fonts/anonymous-pro-v13-latin-regular.svg",
"/fonts/anonymous-pro-v13-latin-regular.ttf",
"/fonts/anonymous-pro-v13-latin-regular.woff",
"/fonts/anonymous-pro-v13-latin-regular.woff2",
"/fonts/open-sans-v17-latin-regular.eot",
"/fonts/open-sans-v17-latin-regular.svg",
"/fonts/open-sans-v17-latin-regular.ttf",
"/fonts/open-sans-v17-latin-regular.woff",
"/fonts/open-sans-v17-latin-regular.woff2",
"/fonts/roboto-v20-latin-regular.eot",
"/fonts/roboto-v20-latin-regular.svg",
"/fonts/roboto-v20-latin-regular.ttf",
"/fonts/roboto-v20-latin-regular.woff",
"/fonts/roboto-v20-latin-regular.woff2",

"/game/index.html",
"/game/favicon.png",
"/game/components.min.js",
"/game/dividing.min.js",
"/game/main.css",
"/game/minus.min.js",
"/game/plus.min.js",
"/game/times.min.js",
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

