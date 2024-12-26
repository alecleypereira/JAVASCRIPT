function menu(){
    let menu = window.document.querySelector('div.off-screen-menu')
    

    if (menu.style.display === 'none'   ) {
         menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

 function topico_1() {
    let topico_0 = window.document.querySelector('article#topico-0')

    let topico_1 = window.document.querySelector('article#topico-1')

    let topico_2 = window.document.querySelector('article#topico-2')

    let topico_3 = window.document.querySelector('article#topico-3')

   
    if ( 
        getComputedStyle(topico_2).display === 'block' &&
        getComputedStyle(topico_3).display === 'block'
        ) {

        topico_2.style.display = 'none'
        topico_3.style.display = 'none'
    } else{
        topico_0.style.display = 'block'
        topico_1.style.display = 'block'
        topico_2.style.display = 'block'
        topico_3.style.display = 'block'
       
    }
 }

 function topico_2() {
    let topico_0 = window.document.querySelector('article#topico-0')

    let topico_1 = window.document.querySelector('article#topico-1')

    let topico_2 = window.document.querySelector('article#topico-2')

    let topico_3 = window.document.querySelector('article#topico-3')

   
    if ( 
        (getComputedStyle(topico_0).display === 'block') &&
        (getComputedStyle(topico_1).display === 'block') &&
        (getComputedStyle(topico_3).display === 'block') ) {
            //deixo invisivel os demais
        topico_0.style.display = 'none'
        topico_1.style.display = 'none'
        topico_3.style.display = 'none'
    } else{    
        topico_0.style.display = 'block'
        topico_1.style.display = 'block'
        topico_2.style.display = 'block'
        topico_3.style.display = 'block'
       
    }
 }

 function topico_3(){
    let topico_0 = window.document.querySelector('article#topico-0')

    let topico_1 = window.document.querySelector('article#topico-1')

    let topico_2 = window.document.querySelector('article#topico-2')

    let topico_3 = window.document.querySelector('article#topico-3')

   
    if ( 
        (getComputedStyle(topico_0).display === 'block') &&
        (getComputedStyle(topico_1).display === 'block') &&
        (getComputedStyle(topico_2).display === 'block') ) {
            //deixo invisivel os demais
        topico_0.style.display = 'none'
        topico_1.style.display = 'none'
        topico_2.style.display = 'none'
    } else{    
        topico_0.style.display = 'block'
        topico_1.style.display = 'block'
        topico_2.style.display = 'block'
        topico_3.style.display = 'block'
       
    }
 }

 