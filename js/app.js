window.onload = ()=>{

    const elemento = function(elemento){
        return document.querySelector(elemento)
    }

    elemento('#btn_menu').addEventListener('click',()=>{
        
        //elemento('#btn_menu').classList.remove('toggle-btn');
            elemento('#btn_menu').classList.toggle('toggle-btn-close');
            elemento('ul.nav-list').classList.toggle('nav-list-active');
            setTimeout(()=>{
                elemento('.nav-social').classList.toggle('nav-social-active')
            },0)
    })

    let tl = new TimelineMax();

    tl.fromTo(".bg-loader", 1, {width: '100%'}, {width: '0%', delay: 3, ease: Expo.easeInOut});

    tl.fromTo(".bg-video", 2, {width: '0%', opacity: 0}, {width: '100%', opacity: 1, ease: Expo.easeInOut},'-=1');

    tl.fromTo(".logo", 0.7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut},'-=1');

    tl.fromTo(".nav-list", 0.7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut},'-=0.5');

    tl.fromTo(".nav-social", 0.7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut},'-=0.5');

    tl.fromTo(".item-1", 0.7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut},'-=0.5');

    tl.fromTo(".item-2", 0.7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut},'-=0.5');

    tl.fromTo(".item-3", 0.7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut},'-=0.5');

    tl.fromTo(".item-4", 0.7, {y: 50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut},'-=0.5');

    tl.fromTo(".item-img", 0.7, {y: 50, x: -30, opacity: 0}, {y: 0, x: 0, opacity: 1, ease: Expo.easeInOut},'-=0.2');

}