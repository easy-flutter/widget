'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e0c50bc05c3570c70802572f0a23ed96",
"assets/assets/animations/empty_animation.json": "17dcceb1ddb2b386f60af073e568e863",
"assets/assets/animations/loading_animation.json": "316d10d60a34cd414fb9ee8338036a4c",
"assets/assets/animations/success_animation.json": "d5eb39c30f7af288fb2bb5547d64ecf9",
"assets/assets/images/code/output_soal_1.png": "b0e34aafbd00a8f1cb28ae52a65fd6b2",
"assets/assets/images/code/output_soal_10.png": "0c666dfc831e83e5f70f2102105d4139",
"assets/assets/images/code/output_soal_11.png": "088da0c891c6bdd38a44d1a2999506ed",
"assets/assets/images/code/output_soal_12.png": "441826c09db2f911fc12895c9fe1f351",
"assets/assets/images/code/output_soal_13.png": "c76870e1831d9c81eb2b39e66570509a",
"assets/assets/images/code/output_soal_14.png": "4fa89c480259802812c0540d0be91c9b",
"assets/assets/images/code/output_soal_15.png": "8a2e955e6ce2c0311d7daa9df18917dd",
"assets/assets/images/code/output_soal_2.png": "7e141c6aa69832a91113441b2e3431d4",
"assets/assets/images/code/output_soal_3.png": "77695c23d14f662ea599c56f56cce075",
"assets/assets/images/code/output_soal_4.png": "1368800129b6a77cc08e6c509a86a6aa",
"assets/assets/images/code/output_soal_5.png": "5eb4de6df5847c20a494c9d64acc4845",
"assets/assets/images/code/output_soal_6.png": "8a25251b39b68f4b257be8974790429a",
"assets/assets/images/code/output_soal_7.png": "1bd7e83d4ca593c90c0b8c99e938cf7a",
"assets/assets/images/code/output_soal_8.png": "2b81fbd770bc1802d2f2146baae7828a",
"assets/assets/images/code/output_soal_9.png": "7ab1da404bc49637e898dfcf2db9f013",
"assets/assets/images/img_code_reconstruction.png": "43c7111834f67b3dd1bd0966c26c0481",
"assets/assets/images/img_logo_polinema.png": "096b6c3b89c2e07941c730009dacab3c",
"assets/assets/images/img_widget_tree_reconstruction.png": "d744e4830e2277f7a22db8fc79e1b972",
"assets/assets/images/widget/latihan0.png": "af25599932372e3a2068b8713ef40c19",
"assets/assets/images/widget/latihan1.png": "271404ed2f236983352abb513b3a4323",
"assets/assets/images/widget/latihan10.png": "1b600cd288abbc5710db775ccb208641",
"assets/assets/images/widget/latihan11.png": "e3ce0356cd98d69ed449a5f99ca951ce",
"assets/assets/images/widget/latihan12.png": "27af21bb2d4baad3a9c7c74b7ea90774",
"assets/assets/images/widget/latihan13.png": "71b5c8facb2a4eb22f3d28f748e120fe",
"assets/assets/images/widget/latihan14.png": "f3c683de9a1e244b4a9c54ad596f9efe",
"assets/assets/images/widget/latihan15.png": "c0c8318c0fd717e939f24504ffa83ecc",
"assets/assets/images/widget/latihan2.png": "b437de987c9c89dadf0cfbe13293c10b",
"assets/assets/images/widget/latihan3.png": "1558b9fb6ab28821dbc8a616f164de2d",
"assets/assets/images/widget/latihan4.png": "367d025c90fc3355b1aeeff81383973f",
"assets/assets/images/widget/latihan5.png": "a0d1a7868ea35147e659b4e1704a1ea8",
"assets/assets/images/widget/latihan6.png": "bf0ebd3b53db6cf0c76bb5e3067c0072",
"assets/assets/images/widget/latihan7.png": "51aaa8e11e6296943ec7ede7015cc789",
"assets/assets/images/widget/latihan8.png": "b295b5f18a2d12d949f975282f6a1a9b",
"assets/assets/images/widget/latihan9.png": "a121b7303ea5a8e4fdf6dc7ac3b2ee30",
"assets/assets/images/widget/widget_tree0.png": "593c11c99ba7614d6bf446f28ac0ae19",
"assets/assets/images/widget/widget_tree1.png": "bb1583fc2ddf79590dbef69729787f6b",
"assets/assets/images/widget/widget_tree10.png": "da4b9fe984296781db79e20a2013725d",
"assets/assets/images/widget/widget_tree11.png": "d639b172447edc7151c91730accae5f2",
"assets/assets/images/widget/widget_tree12.png": "a7005487dfd0ff33644ee948c225cb94",
"assets/assets/images/widget/widget_tree13.png": "96082d5cf5819d7af7202a2ffe1a8418",
"assets/assets/images/widget/widget_tree14.png": "d8ae8c58b3efa6eebc93236d6f7f3fed",
"assets/assets/images/widget/widget_tree15.png": "d660addff9df628c53d6a864bf903064",
"assets/assets/images/widget/widget_tree2.png": "b237d985acdaae900fb15ac6e548c4e7",
"assets/assets/images/widget/widget_tree3.png": "6b5b5c28ddceb3c51bd1f6db2aec3ad4",
"assets/assets/images/widget/widget_tree4.png": "69896fd8a4e2907d4a906fdd78c6b4c2",
"assets/assets/images/widget/widget_tree5.png": "1c2b7e36b83e141c185fae2aa39a8fe6",
"assets/assets/images/widget/widget_tree6.png": "b7ca448bd628ba96b5cf2a212f0e4b8d",
"assets/assets/images/widget/widget_tree7.png": "765acee45da7ca3948a70e9b2e0c0f7b",
"assets/assets/images/widget/widget_tree8.png": "a09b9a1d7784c46fae11ffce17970e98",
"assets/assets/images/widget/widget_tree9.png": "25ffec83d630c6842dfc45d94beb448e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "da7b7c749cf558a2c6ca5090885ea82f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "3c914bc6e11ee5becc6ca6744383a9ff",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7811e8865cc91525a15382611d1b26e7",
"/": "7811e8865cc91525a15382611d1b26e7",
"main.dart.js": "45d7bc0949de5b89a0b29ffb55abd10e",
"manifest.json": "28d44b02593b3f3ce6f6660a861a2a32",
"version.json": "55c6945d105d58ddd7f4bf0ba336be43"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
