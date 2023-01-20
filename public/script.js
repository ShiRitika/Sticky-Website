'use strict'
let flag = 0;

// code for setting flag as arrow pressed
function controller(x) {
    flag = flag + x;
    slideshow(flag);
};

slideshow(flag);
function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length) {
        flag = 0;
        num = 0;
    };

    if(num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    };

    // code for not displaying rest images
    for(let y of slides) {
        y.style.display = "none";
    }
    // code for display one image at a time
    slides[num].style.display = "block";
};


// using window location object redirecting to login page
function redirectLogin() {
    window.location = "/login.html"; 
};

// using window location object redirecting to creatures page
function redirectCreatures() {
    window.location = "/creatures.html"; 
};

//--------------code for making sticky navbar-------------------------------
window.addEventListener('scroll', function() {
    let navbar = this.document.getElementById("menu-bar");
    if(this.window.pageYOffset >= 180){
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


// function to close and open menu bar for mobile screen
function closeMenu() {
    document.getElementById("menu-bar").style.left = "-280px";
};
function openMenu() {
    document.getElementById("menu-bar").style.left = "0px";
};
