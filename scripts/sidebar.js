//On Page Load
var active = false;
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-container');

hamburger.addEventListener('click', (event) => {
    //Not Visible
    if(!active){
        menu.style.width = "70vw";
        active = true;
    } else {
        menu.style.width = "0";
        active = false;
    }
});