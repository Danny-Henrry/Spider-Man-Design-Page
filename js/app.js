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

}