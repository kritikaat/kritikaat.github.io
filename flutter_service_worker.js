'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "98244a23117f598c7c4d9c76d2b84771",
".git/config": "2a304749b0b81c5c0c992f24b24f15f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b4c67892bad93af26ea1743af5dc7922",
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
".git/index": "93a0d9572a78a8b503bc0a3153646e6c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "48abfcba5d95426105ecae7e67ac8bd1",
".git/logs/refs/heads/main": "48abfcba5d95426105ecae7e67ac8bd1",
".git/logs/refs/remotes/origin/main": "8db9cac96332609047d0437b54034d04",
".git/objects/00/128d26999a908d5a23faf30d2a9b61ab3a0e54": "a307804fda647b09be88ac2964a2ad2b",
".git/objects/02/9c008ffadcc8eafadbf8547f7d913245f0e53a": "6908c972ba395946ca8fc39bb615417d",
".git/objects/02/da223ea8374db9065975b67643139576380bf7": "770a859e414c7b3124345354ab24441b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/02b2b3f9712e5d2763390e42be486df4337ce1": "1b894e5224542ef05b1ed1f4895aacd0",
".git/objects/05/8d83d81995c3a34de3e3c258f4f23765400bde": "27c8dcc3cee76d18a9f1f6c0036fa015",
".git/objects/06/c8595a1a20611a0e207dea8007f4a5dacdf215": "7964273d19d1ea8c2208b653e8226d9e",
".git/objects/08/d9f640d2a7c9d1ef875b3bc50a50b5a9a761f8": "b822b3abbc866683b23c8e0e65f4e733",
".git/objects/09/88276c1f51f81fbbc3d4da64097fa626d83a5c": "3e644c4ed6ffd76da5728c7bc5883c60",
".git/objects/0d/b1ae5d9aaa4db66b04975dfdb7d36d69ff6cad": "981e05ada215c8ce7db5e26b90327966",
".git/objects/0f/b754dc93880d748d7a1e3523cff47b40ffd498": "fdc35b02715d8e07acf70b2c511bc9ca",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/12/03c28ff803ba534edc1ed503e14328a337eb4d": "e99628e5e356ccac34637216cc935fcc",
".git/objects/19/8e3427c029883320306923b60ff65f4a472487": "908320698660f64c14289b2d83b588bc",
".git/objects/1c/4084919b1a4bff38a6970936ce1bb2b1eab92c": "320d2b71df259dabb712df60b2c51e2c",
".git/objects/1e/53151a6c7b684a0bb24a89c295200fcb274b39": "4c5aa6a847e0f84e6b5a50c065222719",
".git/objects/1e/5e4418e756481c488f67c98a16c8210f9f7da0": "8a6cb9790277e448f7c797fb56965c6e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/043e9bba52cfa71d4ba278e72ec7f10ae82f6e": "1be514c4d8ce02a824984d8239564c11",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/0426d2072f30f31f297de33f24cf6c19116dad": "cba105adeba7b817e867b05706026f1d",
".git/objects/2a/7b09edf1c9761399f573a05f48e9eb9df26dfb": "4f48b1bfea91e6c1862829a4a8accba3",
".git/objects/2b/ae6283274323289f9594daa14bbf3052edb554": "79ecbded4a0fb9e034e35ccdb03918a6",
".git/objects/2d/83737208cfa0f4a9b0e87a97288c987c883522": "8ca6eb10d6810caafd5f41e60aace5b3",
".git/objects/2d/abe3d2bb2cf9d4d1b76c0c0446ce710065a27a": "af1ba9ad801f28ee06a173e052dd9a1a",
".git/objects/2e/3efe83a731195755a040231adcf3de399bc351": "a61317e6c4535b8b722ed9e58c5eeeb1",
".git/objects/2e/efee0a29a02bd07f093906c09ef1230a068e76": "4f98cb5357c2b6dae553951fa5cd2c09",
".git/objects/31/990c11f0c6d6997bd7de7d95db6c6c47aa7533": "ece03422f6c0e2a4f055e8128f83517e",
".git/objects/35/fe8ad43d46f8fd6d259d3ec6f2b7576de8b18d": "fc36ed390da564945b710229240f5cb3",
".git/objects/37/12a46d7458627dda4f0f26583f12bb2d732284": "abaab064275ca443d11a8fb7d6fa9811",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/43/0b579f76cfa32865451427316b87a1b1aeb8be": "c8334218293d607e3f984184edd76115",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/9e7bdb157e8911cf0314fb52b2dc2f01b89d85": "f25eb4ab5532e015c68d65c2fee2f825",
".git/objects/49/2167b7d45f25e45e316bb8309b51ecc6c41780": "f7b082fc32d27b1ba36b7355a71cec4b",
".git/objects/4b/e60dee617892c9984f814c50c98bf76a8f7815": "eb8a8388bb3f40ced00a4cf5becd5fb7",
".git/objects/50/94c0730dacf75845b4ffc3011736601bd4ae64": "0960550dfe6076373281ce7679647449",
".git/objects/55/27a3ea5ec2da6da0f04b3fa48da2984f75c01e": "6647ccc0ac447642923ef287f62a7fd0",
".git/objects/57/22da365af2f0738350e4fca0f49e9541d4b8e4": "54d00230f7491cc3f4e3ad939d8813db",
".git/objects/57/74d372d47128a845cd121d597f216750ab1df5": "6a8a3297fd71665adf0dcdc491e1ffd3",
".git/objects/57/7eb6972b53bf4e01f18e1e55a5120895525fa6": "a07e4561706f049eba771ed1c180efcc",
".git/objects/59/ba0958c4b1076d89dd770db74e32b626e6122f": "d7f783c6a83f04420b106204c7d711ee",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/65/8e07974c0b3c1d82273a8adc9bb5d521aebd24": "5804231957ea9d1d7f2854cb46f7043d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/74/01754364e752643ffb36eae9a3227f1b24e108": "c141b07acabed5e79681a7baeab6d648",
".git/objects/75/16f1f467a84d3f1fb978128e88d8acb70dd35a": "7d0add6b5b3042f858d69e2f90d669a2",
".git/objects/75/385cc6b92c229e4b3f765ae9e6b87c584e9975": "d4962ed176fc89b93c02be2db1069973",
".git/objects/76/c66ec0ed9256faed65882c9a012ceedf69fb61": "555e5f07ab06a3c8f709221d78361b4d",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/77/e2e6c2dcecfefbe360bdfa2a91f2262dce1958": "42f86e84e7bcee7ea9641639785da52b",
".git/objects/80/13968fe6e2eb0bea9d86faaec69699e284fb6f": "f5e2d086108d611b5d616334ad74b61d",
".git/objects/80/665c5a59a70c46f2107b3340344dbad5d09641": "7a6ad6437a31f356ee256eb64cb7a814",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/96109b61fd6933bcd55a68592e0eb7a208a18c": "494a6778cd7dd56cf9dd00ae75ace161",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8c84707a813964b72a54d00a9bf68ae5f84a9f": "dacff5e3daef21475f22a322ab07d0c1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/86a8084b99a7e94f798d43c0eaf31c257c0b80": "c3f981018773f8b9e69a1678b897b852",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/8e/c05accc63a53acee3dad4885113fadffad3754": "f15a76c971a1d7134c40ac8bf52817e2",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/7a50b77608954f37602ea7f552dc1d29fc48f1": "c3ca2ad860b2a02ada6b22157ddca48b",
".git/objects/98/044fb14369291f9b987725379b8e764999d4dd": "3fe1c703fc29087163f76e1e4d2c0f44",
".git/objects/98/693bf310a82e5a3c5054c97c037c61ce4925fa": "94e37a541f52f57c6f2246bdb579a691",
".git/objects/98/cc04cf1a264783b3262d57cd94ed7517a9b46e": "3d4c9fb4e61b271ebcaebbaf0e0f6170",
".git/objects/9f/49d19af28a67ea568ba7079a59ef1d87df11c7": "19535f52d34e73fdae94bdfdbfe20a3a",
".git/objects/a0/f7f57eb850e3cd23c74a40f75433c48da03bbf": "06b6831d36103ee42fd3546718eba790",
".git/objects/a1/b4c6b59544fb3da85102ac545cd05f49e25275": "cd0592ea443b1a8f2d2a026fd8eb33a4",
".git/objects/a1/df838d7766de533573f57fc2a6ab9d1bffbfc1": "4dda7edff502d99ef8de0c9078721cd6",
".git/objects/a2/3cd37b705f76b9bd30b37ecb674983369ce4a2": "52692446f612e2aaf2653e20d44b471f",
".git/objects/a6/377a737b04a262de38fef51957a5f28f2bde90": "7bcad6c275346a554cf21a1bb627f225",
".git/objects/ae/c5ced54cbc65a0789d33a40ca72aa2cbf3e630": "d4063d79c7d24c70ee8811a3868cdbbe",
".git/objects/b0/8d35a7c370519398e57353dc5cad3631e9f265": "c17365573b33f8191f2eb221a201349d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ff70659b482ed21b3ec22415dc18fcd81de50d": "7d04c709b65eb6ee23f4dc6fe1c4842f",
".git/objects/bc/54943ae07a66907bbd172d43dddfcb4b1aaeb2": "cc3df25a487c15ff293fb9b526883696",
".git/objects/c1/00d4153dd4237abd86d2025f80f30111c09550": "c9a7357a8074786047b9f267efc937f6",
".git/objects/c1/432e077c9d41365fa0c2791ee4e8b9e169b499": "7d5391e33392ea0ffff624936178cd65",
".git/objects/c2/12f726e3b99bbb1ea29df7c5f2c4190be1549f": "0639cd36eb5ae295afe75e1db3863a04",
".git/objects/c3/82cf01c2bb8360416ca29fea7038ddd94e2341": "0fe4b79e59adf82c9b15d0efe3d02f58",
".git/objects/c4/d8a19c44b4fbd3b72698dc629433aac8908e17": "67eafdf1859c0ef9dfe3d12a04ccbcf4",
".git/objects/c5/5f4bdc0d31d38593f69ea939a5eaca446ee322": "5c19fe12ef4cc8d5f418d349ceaf7265",
".git/objects/cd/156bd66e36e2dffbc33dfe740e9ccd4e351e4a": "ea920598dbd76d7917204ae1a70f43da",
".git/objects/cd/33a02f92c12bb1fb1fdc5bf98cefbea2f66e2b": "f55d374a86b090f6938340804f193f4d",
".git/objects/ce/b7fc07ff95790783b29ae18721719b34b46cb6": "15b83d472e1f0f67abe3a60e8844f4f5",
".git/objects/cf/d2159355556d773f02dcb9f2038ff020f6e1e3": "b4d830af3bae34bedd4bf9e47c2dea8d",
".git/objects/d4/1de9a5cb9e5e0bd31042027b34cc8d9f93c518": "bc23483daf1f14e522198e228acb9341",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/dffa3a7aff263776c93577c822896735d7263d": "ee508eb073042d24c24784bc157b66ea",
".git/objects/d6/5606639d339d1cbeb90a55ef8fa900eb5add79": "9040b1d07eac589e98036037b2d0ecf7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/2e8bd8eded81f0ebc57325727329c822e3004e": "c6b8b6202fcd7e73cb94305f95ee1394",
".git/objects/dd/43e11728b9106331afd82d4c42d288ce5cf479": "37b846203750d081ef5caf8d5bee96fd",
".git/objects/de/dce020f4a86e960c9fb1a210340187682f7c6d": "39e4235ac0b263abdb64cf331857ef18",
".git/objects/e0/5fb78764076c5d84ca306b755d1229210b6a6c": "90e7c1bc3899b0b0fdda85528e792b2b",
".git/objects/e4/72035a17b12e4c41f0689d748401f2f051d66b": "e3c4c2dfa3b9a3967ba055c71617e35f",
".git/objects/e5/550fa2df585315a144a3ae7bc1643262e41787": "2326898cc5f919ce5d6d6d1db8aa379a",
".git/objects/e5/56fa4ebfabfd66940ff4a8aae20c9c66770253": "b4cdd5069d8f4f69fc220ca42bfd470f",
".git/objects/e9/7e5df43c22918947a085795d136d4a054f64ce": "c96ec5e8b7dbb2da86b49b09e7611f60",
".git/objects/ea/d17c968ccb905585e8d1fbcf37b7c7fc992acb": "47fd5ab3fac8e8530a2cf2a172d6caba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a10db64d5d82193b16254424d57f653d5a7f7b": "ed924b64041bb93d3aba5e064898ebdd",
".git/objects/f0/e32dfd1055be0346846ebdf27cc4811318d8f6": "1aeb00725e096d11dff12314e1930544",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/b42ef539483811b9abd4e06afedca64b5cd9c0": "27b87175eb9327cf5e549ab195285bb9",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/cbd5ecc3ea0700a301bb94a0ab4fdbd67d049c": "7673f397368981c660f7b88f9cdb52f0",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/f9/927606c3afd2a07a3c06f8491467153d4e6123": "d40386a5f6a9ec0977fa29061dc8ac58",
".git/objects/fa/6990469ca390c7aa533135dcafce20d0bf9644": "85ea72f6b4f86896470e36f1a758bfab",
".git/objects/fb/a6332e31f8ab65b721175a1d3e837d915c823b": "81e20c68191fba1eda4ead97f9eb179c",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/objects/ff/6e2619611a6935cf14e32d15abf819bed97a70": "4692ab8774e94665eb75117756ad5d1a",
".git/objects/ff/b300529e42257e12a26b85e67cf8857cd30f1f": "f21912ce8ff5f249683d5d60154bd994",
".git/ORIG_HEAD": "59fffff9f0309b04d9c8b1a0f2d28d3d",
".git/refs/heads/main": "0e3706f3acd382769699bcf576026877",
".git/refs/remotes/origin/main": "0e3706f3acd382769699bcf576026877",
"assets/AssetManifest.bin": "cd2b8a43a9eb06a1e4c89812771ef284",
"assets/AssetManifest.bin.json": "c2824a48e8738559bb7e9c02f3e05770",
"assets/AssetManifest.json": "481f1b8372d422bfd448cd8bd5ecb8c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4880a7d378ae9075024da1a1f13267b2",
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
"flutter_bootstrap.js": "939cf09da92cb5b7c238aebb9576adc1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "095b4bdc95dc28e1412b86bed344a6d4",
"/": "095b4bdc95dc28e1412b86bed344a6d4",
"main.dart.js": "cf35639237712a026e264b191b73524a",
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
