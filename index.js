"use strict"

const menuBtn = document.getElementById("menuBtn");
const header = document.querySelector("header");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav--links")

// Menu Bar Slider
menuBtn.addEventListener("click", (event) => {
    menuBarToggle();
    event.stopPropagation();
})

document.addEventListener("click", (event) => {
    const inSideClick = header.contains(event.target);
    
    if(!inSideClick && body.classList.contains("mobile-nav-active")) {
        menuBarToggle();
    }
})

navLinks.forEach((links) => {
    links.addEventListener("click", () => {
        menuBarToggle();
    })
})

function menuBarToggle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    menuBtn.classList.toggle("fa-xmark")
}

// Typing Effect
const typing = new Typed(".auto-input", {
    strings: ["Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
})