'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "14b8144f5d5181cf311af679426c3957",
".git/config": "2a304749b0b81c5c0c992f24b24f15f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6d8eb5bef57a66c0c7192e115d8af01b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6ab7be1c20d30a208ea99d950bc30a37",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da7e5f6a5423d8c9ac777d64589d3f56",
".git/logs/refs/heads/main": "462339b1f2d158946e7542d73f7de94d",
".git/logs/refs/remotes/origin/main": "d58f455d5ed3be58c62a7c17641125f5",
".git/objects/02/9c008ffadcc8eafadbf8547f7d913245f0e53a": "6908c972ba395946ca8fc39bb615417d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/02b2b3f9712e5d2763390e42be486df4337ce1": "1b894e5224542ef05b1ed1f4895aacd0",
".git/objects/04/34b66308788d4fe0ea36240fe00a1c9b97a375": "6e03466ca6041cd0781296adce3d580d",
".git/objects/0f/b754dc93880d748d7a1e3523cff47b40ffd498": "fdc35b02715d8e07acf70b2c511bc9ca",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/17/06bdbd969f82824c048372757dea24cd439c58": "9123458ef4d788329afccdb4f02e300f",
".git/objects/1c/4084919b1a4bff38a6970936ce1bb2b1eab92c": "320d2b71df259dabb712df60b2c51e2c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/d25087bf255240d5f9b6a5e7f4e96124b7ed66": "29643710707a2c24cc8dee02ec91afad",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/83737208cfa0f4a9b0e87a97288c987c883522": "8ca6eb10d6810caafd5f41e60aace5b3",
".git/objects/2e/3efe83a731195755a040231adcf3de399bc351": "a61317e6c4535b8b722ed9e58c5eeeb1",
".git/objects/31/23c5da6ec0c24f4fd44dc8cf8dde17b1686c67": "5f83ff3d7ecbc7ca291a7c63078420cb",
".git/objects/35/fe8ad43d46f8fd6d259d3ec6f2b7576de8b18d": "fc36ed390da564945b710229240f5cb3",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/e60dee617892c9984f814c50c98bf76a8f7815": "eb8a8388bb3f40ced00a4cf5becd5fb7",
".git/objects/50/94c0730dacf75845b4ffc3011736601bd4ae64": "0960550dfe6076373281ce7679647449",
".git/objects/55/27a3ea5ec2da6da0f04b3fa48da2984f75c01e": "6647ccc0ac447642923ef287f62a7fd0",
".git/objects/57/74d372d47128a845cd121d597f216750ab1df5": "6a8a3297fd71665adf0dcdc491e1ffd3",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/65/a172b3a433e719d5a4fcef7d902dea008767b3": "6e4986b4dc894d83364da8275d7bbb7e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/96109b61fd6933bcd55a68592e0eb7a208a18c": "494a6778cd7dd56cf9dd00ae75ace161",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8c84707a813964b72a54d00a9bf68ae5f84a9f": "dacff5e3daef21475f22a322ab07d0c1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/7a50b77608954f37602ea7f552dc1d29fc48f1": "c3ca2ad860b2a02ada6b22157ddca48b",
".git/objects/98/cc04cf1a264783b3262d57cd94ed7517a9b46e": "3d4c9fb4e61b271ebcaebbaf0e0f6170",
".git/objects/a1/b4c6b59544fb3da85102ac545cd05f49e25275": "cd0592ea443b1a8f2d2a026fd8eb33a4",
".git/objects/a1/df838d7766de533573f57fc2a6ab9d1bffbfc1": "4dda7edff502d99ef8de0c9078721cd6",
".git/objects/a2/3cd37b705f76b9bd30b37ecb674983369ce4a2": "52692446f612e2aaf2653e20d44b471f",
".git/objects/ad/6a6276ab2db50c3cffc79cb99db1de38301a56": "a8f376be2255e5a283a04614543b984b",
".git/objects/b0/8d35a7c370519398e57353dc5cad3631e9f265": "c17365573b33f8191f2eb221a201349d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ff70659b482ed21b3ec22415dc18fcd81de50d": "7d04c709b65eb6ee23f4dc6fe1c4842f",
".git/objects/c2/12f726e3b99bbb1ea29df7c5f2c4190be1549f": "0639cd36eb5ae295afe75e1db3863a04",
".git/objects/ce/b7fc07ff95790783b29ae18721719b34b46cb6": "15b83d472e1f0f67abe3a60e8844f4f5",
".git/objects/ce/dff26c42d41aafa28345bd162f46e75bea265e": "e1cfb770df6559f9acebbed1960ddb6e",
".git/objects/cf/d2159355556d773f02dcb9f2038ff020f6e1e3": "b4d830af3bae34bedd4bf9e47c2dea8d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/225aff9dbb7618a54d8e3f060f390bb34f1dc8": "35fcca9ea5f8d5b97e4487d6ce53d3a5",
".git/objects/dd/43e11728b9106331afd82d4c42d288ce5cf479": "37b846203750d081ef5caf8d5bee96fd",
".git/objects/de/dce020f4a86e960c9fb1a210340187682f7c6d": "39e4235ac0b263abdb64cf331857ef18",
".git/objects/e0/5fb78764076c5d84ca306b755d1229210b6a6c": "90e7c1bc3899b0b0fdda85528e792b2b",
".git/objects/ea/d17c968ccb905585e8d1fbcf37b7c7fc992acb": "47fd5ab3fac8e8530a2cf2a172d6caba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a10db64d5d82193b16254424d57f653d5a7f7b": "ed924b64041bb93d3aba5e064898ebdd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/cbd5ecc3ea0700a301bb94a0ab4fdbd67d049c": "7673f397368981c660f7b88f9cdb52f0",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/fa/6990469ca390c7aa533135dcafce20d0bf9644": "85ea72f6b4f86896470e36f1a758bfab",
".git/objects/fb/a6332e31f8ab65b721175a1d3e837d915c823b": "81e20c68191fba1eda4ead97f9eb179c",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/ORIG_HEAD": "1fc48b508cf85a19de1cb53b73320751",
".git/REBASE_HEAD": "1fc48b508cf85a19de1cb53b73320751",
".git/refs/heads/main": "7ea23b746197fc30397292f3f9d860d2",
".git/refs/remotes/origin/main": "7ea23b746197fc30397292f3f9d860d2",
"assets/AssetManifest.bin": "cd2b8a43a9eb06a1e4c89812771ef284",
"assets/AssetManifest.bin.json": "c2824a48e8738559bb7e9c02f3e05770",
"assets/AssetManifest.json": "481f1b8372d422bfd448cd8bd5ecb8c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95e7496fc626f0f73ffac9a0559f57ff",
"assets/NOTICES": "3590c4602dcf461dcc56f9324d22c506",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8d6248bad66b5769e1cf5b9871851d8e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "095b4bdc95dc28e1412b86bed344a6d4",
"/": "095b4bdc95dc28e1412b86bed344a6d4",
"main.dart.js": "09db0d511dae8636387d063935324eff",
"manifest.json": "8a5a562c57b3cd262ed4439dae6cd165",
"version.json": "d8b2f203c6b6c417887641020ba57cbe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
