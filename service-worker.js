"use strict";var precacheConfig=[["/VT_T6/index.html","609c8dddd4db831c605da48451a22f49"],["/VT_T6/static/css/main.5821a82f.css","f3c924ced7197af2ad100248aec1e68d"],["/VT_T6/static/js/main.ea91763e.js","b8b0f1f517d3c80e86bcae67452153d7"],["/VT_T6/static/media/HappyDayatSchool.1fb9da18.ttf","1fb9da188029a8dd02707dce4b2b2ddb"],["/VT_T6/static/media/banner.168df57b.jpg","168df57be4122bac7a2669cab9a84211"],["/VT_T6/static/media/blender_524.a1bcb25d.jpeg","a1bcb25de0ea11b3571c8dbb9b5f8c26"],["/VT_T6/static/media/db/db.json","104f0aa782a8020cbd8aed417e3d069e"],["/VT_T6/static/media/fonts/.DS_Store","7374a2487794440b2e3c9d00e6357fae"],["/VT_T6/static/media/fonts/HangedLetters.ttf","1da2ac0ce2475f77ead14788891e054a"],["/VT_T6/static/media/fonts/HappyDayatSchool.ttf","1fb9da188029a8dd02707dce4b2b2ddb"],["/VT_T6/static/media/images/banner.jpg","168df57be4122bac7a2669cab9a84211"],["/VT_T6/static/media/images/blender_524.jpeg","a1bcb25de0ea11b3571c8dbb9b5f8c26"],["/VT_T6/static/media/images/levis_501_musta.jpeg","fcdfbd174ac0f3273fe2dd5535178f99"],["/VT_T6/static/media/images/levis_751_vaalea.jpeg","ae7b7fd71ac2fdbbd36f713c3cf46911"],["/VT_T6/static/media/images/m_farkut_1.jpg","89b71b68a007a1c29fb3ddf02f8ddc76"],["/VT_T6/static/media/images/splash.jpg","7ed07dd0533c0e6e1ae94b82f9c0e233"],["/VT_T6/static/media/levis_501_musta.fcdfbd17.jpeg","fcdfbd174ac0f3273fe2dd5535178f99"],["/VT_T6/static/media/levis_751_vaalea.ae7b7fd7.jpeg","ae7b7fd71ac2fdbbd36f713c3cf46911"],["/VT_T6/static/media/m_farkut_1.89b71b68.jpg","89b71b68a007a1c29fb3ddf02f8ddc76"],["/VT_T6/static/media/splash.7ed07dd0.jpg","7ed07dd0533c0e6e1ae94b82f9c0e233"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/VT_T6/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});