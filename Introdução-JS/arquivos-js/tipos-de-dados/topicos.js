function menu(){
    let menu = window.document.querySelector('div.off-screen-menu')
    

    if (menu.style.display === 'none'   ) {
         menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}


function topico_1 () {
   let topico_1 = window.document.querySelector('article#topico-1')
   let topico_2 = window.document.querySelector('article#topico-2')
   let topico_3 = window.document.querySelector('article#topico-3')
   let topico_4 = window.document.querySelector('article#topico-4')

   if (  
        (getComputedStyle(topico_2).display === 'block') &&  
        (getComputedStyle(topico_3).display === 'block') && 
        (getComputedStyle(topico_4).display === 'block')
    ) {
        topico_2.style.display = 'none'
        topico_3.style.display = 'none'
        topico_4.style.display = 'none'
    } else {
        topico_1.style.display = 'block'
        topico_2.style.display = 'block'
        topico_3.style.display = 'block'
        topico_4.style.display = 'block'
   }
}

function topico_2 () {
    let topico_1 = window.document.querySelector('article#topico-1')
    let topico_2 = window.document.querySelector('article#topico-2')
    let topico_3 = window.document.querySelector('article#topico-3')
    let topico_4 = window.document.querySelector('article#topico-4')

    if (  
        (getComputedStyle(topico_1).display === 'block') &&  
        (getComputedStyle(topico_3).display === 'block') && 
        (getComputedStyle(topico_4).display === 'block')
    ) {
        topico_1.style.display = 'none'
        topico_3.style.display = 'none'
        topico_4.style.display = 'none'
    } else {
        topico_2.style.display = 'block'
        topico_1.style.display = 'block'
        topico_3.style.display = 'block'
        topico_4.style.display = 'block'
   }

}

function topico_3 () {
    let topico_1 = window.document.querySelector('article#topico-1')
    let topico_2 = window.document.querySelector('article#topico-2')
    let topico_3 = window.document.querySelector('article#topico-3')
    let topico_4 = window.document.querySelector('article#topico-4')

    if (  
        (getComputedStyle(topico_1).display === 'block') &&  
        (getComputedStyle(topico_2).display === 'block') && 
        (getComputedStyle(topico_4).display === 'block')
    ) {
        topico_1.style.display = 'none'
        topico_2.style.display = 'none'
        topico_4.style.display = 'none'
    } else {
        topico_3.style.display = 'block'
        topico_1.style.display = 'block'
        topico_2.style.display = 'block'
        topico_4.style.display = 'block'
   }

}

function topico_4 () {
    let topico_1 = window.document.querySelector('article#topico-1')
    let topico_2 = window.document.querySelector('article#topico-2')
    let topico_3 = window.document.querySelector('article#topico-3')
    let topico_4 = window.document.querySelector('article#topico-4')

    if (  
        (getComputedStyle(topico_1).display === 'block') &&  
        (getComputedStyle(topico_2).display === 'block') && 
        (getComputedStyle(topico_3).display === 'block')
    ) {
        topico_1.style.display = 'none'
        topico_2.style.display = 'none'
        topico_3.style.display = 'none'
    } else {
        topico_4.style.display = 'block'
        topico_1.style.display = 'block'
        topico_2.style.display = 'block'
        topico_3.style.display = 'block'
   }

}
