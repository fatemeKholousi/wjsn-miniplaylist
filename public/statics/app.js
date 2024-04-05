if('serviceWorker' in  navigator){
    navigator.serviceWorker.register('/service-worker.js').then(registration=>console.log('service worker registration succeeded'))

}
let installPromptEvent;
window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
        console.log('before install prompt event')
    installPromptEvent=e
}
)

document.querySelector('').addEventListener('click',e=>{
    e.preventDefault();
    console.log(installPromptEvent)
    if(installPromptEvent){
        installPromptEvent.prompt()
        installPromptEvent.userChoice.then((choiceResult)=>{
            if(choiceResult==='accepted'){
                console.log('accepted')
            }
            else{
                console.log('dismissed')
            }
            installPromptEvent=null
        })
    }
})