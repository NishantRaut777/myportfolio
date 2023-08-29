// Handling navbar displaying for small screens

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header-container");

const toggleNavbar = () => {
    nav_header.classList.toggle("active-header");
};

mobile_nav.addEventListener("click" , ()=> toggleNavbar());



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