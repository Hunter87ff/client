
function menu_toggle(){
    var nav = document.querySelector(".nav")
    var sidebtn = document.querySelector("#menu-btn")
    var count = 0
    nav.classList.toggle('show');
    if(count==0){
        sidebtn.className= "fa-solid fa-xmark";
        count=1
    }else{
        count=0;
        sidebtn.className= "fa-solid fa-bars";
    }
}

function toggleMenu() {
    var menu = document.querySelector(".nav")
    var menuButton = document.querySelector('.menu-button');
    menuButton.classList.toggle('menu-open');
    menu.classList.toggle("show")
}