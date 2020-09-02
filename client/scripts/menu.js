//Hamdburger Menu and Sidebar On-Off
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-container');
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('section');
var active = false;

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


//Handle Menu Scroll on Page (Wikipedia Style)
menuItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        //Importand to Adapt on Screen
        let navigationBarHeight = document.getElementById('nav-bar').offsetHeight;
        window.scroll(0, sections[index].offsetTop - navigationBarHeight - 14);
        //Sidebar is Open so Front-End runs on Mobile
        if(active){
            menu.style.width = "0";
            active = false;
        } //Else Do Nothing Since You are in Desktop
    });
});