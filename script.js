const navbar = document.getElementById('mynav');
console.log("little done")
window.onscroll = () => {
    if (window.scrollY > 450) {
        navbar.classList.add('nav-active');
        console.log("done")
    } else {
        navbar.classList.remove('nav-active');
        console.log(" not done")
    }
};
