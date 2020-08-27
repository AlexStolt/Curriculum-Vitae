const brand = document.getElementById('brand');
const logo = document.getElementById('logo');

logo.onclick = () => {
    setTimeout(() => {
        logo.style.animation = "none";
    }, 400)
    logo.style.animation =  "shake 0.4s";
}

brand.onclick = () => {
    //At Desktop Length
    if (window.innerWidth > 1024) {
        setTimeout(() => {
            logo.style.animation = "none";
        }, 400)
        logo.style.animation =  "shake 0.4s";
    }
}