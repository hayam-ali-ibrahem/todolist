if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistration()
    .then((existingRegistration) => {
      if (existingRegistration) {

        return existingRegistration;
      }

      return navigator.serviceWorker
        .register("../sw.js")
        .then((registration) => {

          return registration;
        });
    })
    .then((registration) => {
      registration.update(); // Update the service worker to ensure the latest changes are applied

      if (registration.active) {

        return registration.active;
      }

      return new Promise((resolve) => {
        const listener = () => {
          if (registration.active) {

            navigator.serviceWorker.removeEventListener(
              "controllerchange",
              listener
            );
            resolve(registration.active);
          }
        };

        navigator.serviceWorker.addEventListener("controllerchange", listener);
      });
    })
    .then((worker) => {
      return worker.postMessage({
        type: "PWA_UPDATE",
        value: "on",
      });
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });

  // Listen for messages from the service worker
  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data && event.data.type === "PWA_RELOAD_PAGE") {
      console.log("Reloading page to activate new service worker...");
      location.reload();
    } else if (event.data && event.data.type === "PWA_UPDATE_CACHE") {
      // console.log("Updating cache strategies...");
      // Update the cache strategies to ensure the latest changes are applied
      workbox.routing.unregister();
      main(workbox);
    }
  });

  // Check for updates on reload
  window.addEventListener("beforeunload", () => {
    navigator.serviceWorker.getRegistration().then((registration) => {
      if (registration && registration.waiting) {
        console.log("Updating service worker...");
        registration.waiting.postMessage({
          type: "PWA_UPDATE",
          value: "on",
        });
        registration.waiting.postMessage({
          type: "PWA_UPDATE_CACHE",
          value: "on",
        });
      }
    });
  });
} else {
  console.log("Service workers are not supported.");
}
