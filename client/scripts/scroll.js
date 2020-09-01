//Get Height of Header (Navigation Bar)
//To Calculate Nav Bar Height I calculate the Height from top of the first section element, which is "Professional Summary" (id="#summary")
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('section');
const navigationBarHeight = document.getElementById('nav-bar').offsetHeight;

menuItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        window.scroll(0, sections[index].offsetTop - navigationBarHeight - 14);
        //From sidebar.js
        if(active){
            menu.style.width = "0";
            active = false;
        }
    });
});