function menu(){
    let menu = window.document.querySelector('div.off-screen-menu')
    

    if (menu.style.display === 'none'   ) {
         menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}


function topico_1(){
    let topico_1 = window.document.querySelector("#topico-1")
    let topico_2 = window.document.querySelector("#topico-2")

    if (getComputedStyle(topico_2).display == "block") {
        topico_1.style.display = "block"
        topico_2.style.display = "none"
    } else {
        topico_1.style.display = "block"
        topico_2.style.display = "block"
    }
}

function topico_2(){
    let topico_1 = window.document.querySelector("#topico-1")
    let topico_2 = window.document.querySelector("#topico-2")

    if (getComputedStyle(topico_1).display == "block") {
        topico_1.style.display = "none"
        topico_2.style.display = "block"
    } else {
        topico_1.style.display = "block"
        topico_2.style.display = "block"
    }
}

