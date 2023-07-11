// https://github.com/hunter87ff

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

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})
const hiddenelm = document.querySelectorAll(".type-con");
hiddenelm.forEach((el) => observer.observe(el));

function subscribe(){
    var inp = document.querySelector("#email");
    var sub = document.querySelector("#sub-btn");
    if(inp.value==""){
        alert("Please Enter A Valid Email")
    }else if(inp.value.includes("@") == false){
        alert("Please Enter A Valid Email")
    }else{
        console.log(this)
        sub.innerHTML = "Subscribed";
    }
};

function cont_touch(){
    var menu = document.querySelector(".nav");
    var menuButton = document.querySelector('.menu-button');
    var cont = document.querySelector(".cont");
    cont.addEventListener("click", function(){
        menuButton.classList.remove('menu-open');
        menu.classList.remove("show")
    });
}
cont_touch()