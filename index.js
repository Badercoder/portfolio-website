"use strict"

const menuBtn = document.getElementById("menuBtn");
const header = document.querySelector("header");
const body = document.querySelector("body");

menuBtn.addEventListener("click", (event) => {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    menuBtn.classList.toggle("fa-xmark")
    event.stopPropagation();
})

document.addEventListener("click", (event) => {
    const inSideClick = header.contains(event.target);
    
    if(!inSideClick && body.classList.contains("mobile-nav-active")) {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        menuBtn.classList.toggle("fa-xmark")
    }
})