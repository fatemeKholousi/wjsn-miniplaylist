self.addEventListener('install',(event)=>{
    console.log('installing service worker')
    event.waitUntil(
        caches.open('front-cache').then((cache)=>{
            cache.add('')
        })
    )
})

self.addEventListener('activate',(event)=>{
    console.log('activate service worker')
})

self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.open('front-cache'.then(cache=>{
           return cache.match(event.request).then(res=>{
               return res  || fetch(event.request)
           })
        }))

    )
})