
// function main(workbox) {
//   const {
//     cacheableResponse: { CacheableResponsePlugin },
//     core: { clientsClaim },
//     expiration: { ExpirationPlugin },
//     precaching: { cleanupOutdatedCaches },
//     routing: { registerRoute, setCatchHandler },
//     strategies: { CacheOnly , StaleWhileRevalidate },
//   } = workbox;

//   clientsClaim();

//   self.skipWaiting();

//   cleanupOutdatedCaches();

//   // Cache static resources

//   registerRoute(
//     /.*\.(?:js|css|png|jpg|jpeg|svg|webp|woff2?|ttf|otf|eot|ico|gif)/,
//     new CacheOnly ({
//       cacheName: "unchanged",
//       plugins: [
//         new CacheableResponsePlugin({
//           statuses: [0, 200],
//         }),
//         new ExpirationPlugin({
//           maxEntries: 100,
//           maxAgeSeconds:  60,
//         }),
//       ],
//     })
//   );

//   registerRoute(
//     /.*\.(?:js|css|png|jpg|jpeg|svg|webp|woff2?|ttf|otf|eot|ico|gif)/,
//     new StaleWhileRevalidate ({
//       cacheName: "static-resources",
//       plugins: [
//         new CacheableResponsePlugin({
//           statuses: [0, 200],
//         }),
//         new ExpirationPlugin({
//           maxEntries: 100,
//           maxAgeSeconds:  60,
//         }),
//       ],
//     })
//   );





// }

// // Load Workbox from a CDN
// if (typeof importScripts === "function") {
//   importScripts(
//     "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"
//   );

//   // Run the main function if Workbox is available
//   if (workbox) {
//     main(workbox);
//   }
// }



function main(workbox) {
  const {
    cacheableResponse: { CacheableResponsePlugin },
    core: { clientsClaim },
    expiration: { ExpirationPlugin },
    precaching: { cleanupOutdatedCaches, precacheAndRoute },
    routing: { registerRoute, setCatchHandler },
    strategies: { CacheOnly, StaleWhileRevalidate },
  } = workbox;

  clientsClaim();

  self.skipWaiting();

  cleanupOutdatedCaches();

  // Precache static resources
  precacheAndRoute([
    { url: 'public/css/main.css', revision: 'abcdef' },
    { url: 'public/js/app.js', revision: 'ghijkl' },
    // Add more files to precache here
  ]);

  // Cache static resources
  registerRoute(
    /\.(?:js|css)$/,
    new CashFirst({
      cacheName: 'static-resources',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        }),
      ],
    })
  );

  // Serve static resources from cache if available, but also check the network for updates
  registerRoute(
    /\.(?:js|css|png|jpg|jpeg|svg|webp|woff2?|ttf|otf|eot|ico|gif)$/,
    new StaleWhileRevalidate({
      cacheName: 'static-resources',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        }),
      ],
    })
  );
}

// Load Workbox from a CDN
if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
  );

  // Run the main function if Workbox is available
  if (workbox) {
    main(workbox);
  }
}