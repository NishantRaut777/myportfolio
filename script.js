// Handling navbar displaying for small screens

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header-container");

const toggleNavbar = () => {
    nav_header.classList.toggle("active-header");
};

mobile_nav.addEventListener("click" , ()=> toggleNavbar());


// Adding typing effect in intro section
// This will be called when page loads

let currentWordIndex = 0;
let txt = "Hi, I'm Nishant Raut";
let speed = 200;

function addName(){
    if(currentWordIndex < txt.length){
        document.getElementById("Intro-section-myname").innerHTML += txt.charAt(currentWordIndex);
        currentWordIndex++;
        setTimeout(addName,speed);
    }
}

addName();




// Handling navigation of tabs in aboutme section

let tablinks = document.getElementsByClassName("tablink");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    // On click remove classes from all tabs
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    // For current tab only add following classes
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}