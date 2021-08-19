const x = document.querySelector('.burger-icon') ;

x.onclick =  function() {
    navItems.classList.toggle('isShow');
}

const navItems = document.querySelector('nav .navigation .nav-items');
