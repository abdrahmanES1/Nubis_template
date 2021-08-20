const x = document.querySelector('.burger-icon') ;
const navItems = document.querySelector('nav .navigation .nav-items');

x.onclick =  function() {
    navItems.classList.toggle('drop-down-is-showing');
}

const navBar = document.querySelector('.navigation-bar');

document.body.onscroll = function() {
    console.log(window.scrollY);
    if(window.scrollY > 5)
        navBar.classList.add('fixed-top');
    else
     navBar.classList.remove('fixed-top');
}
