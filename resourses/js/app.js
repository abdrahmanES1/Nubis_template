const x = document.querySelector('.burger-icon') ;
const navItems = document.querySelector('nav .navigation .nav-items');

x.onclick =  function() {
    navItems.classList.toggle('drop-down-is-showing');
}

