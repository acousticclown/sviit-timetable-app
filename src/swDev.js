export default function seDev(){
    let swURL = `/sw.js`
    navigator.serviceWorker.register(swURL).then((res)=>{
        console.warn("response", res)
    })
}








// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// workbox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workbox.strategies.NetworkFirst()
// )