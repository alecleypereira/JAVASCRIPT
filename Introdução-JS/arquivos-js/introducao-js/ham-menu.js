function menu(){
    let menu = window.document.querySelector('div.off-screen-menu')
    

    if (menu.style.display === 'none'   ) {
         menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}