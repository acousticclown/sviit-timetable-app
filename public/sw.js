importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.routing.registerRoute(
    /\.(?:css|js)$/,
    new workbox.strategies.StaleWhileRevalidate({
        "cacheName": "assets"
    })
)

workbox.routing.registerRoute(
    /\.(?:png|jpg|gif)$/,
    new workbox.strategies.CacheFirst({
        "cacheName": "images"
    })
)