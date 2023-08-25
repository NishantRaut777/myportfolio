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