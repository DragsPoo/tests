//saat di click side bar bakal muncul
const navbarNav = document.querySelector ('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {

    navbarNav.classList.toggle('active');
};

//agar pas ditekan di halaman yang lain sidebar nya bakal menutup
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});