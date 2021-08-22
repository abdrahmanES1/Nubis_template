// variables
const burgerIcon = document.querySelector('.burger-icon') ;
const navItems = document.querySelector('nav .navigation .nav-items');
const upBtn = document.querySelector("#up-btn");
const navBar = document.querySelector('.navigation-bar');

// aos animation init
AOS.init();


// show the menu in mobile
burgerIcon.onclick =  function() {
    navItems.classList.toggle('drop-down-is-showing');
}

// fixed navbar 
document.body.onscroll = function() {
    
    if(window.scrollY > 5){

        navBar.classList.add('fixed-top');
        upBtn.style.display = "block";

    }

    else{

     navBar.classList.remove('fixed-top');
     upBtn.style.display = "none";

    }

}

// top button
upBtn.onclick =_=>{
    window.scrollTo(0,0);
}



// slider of costumers
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
    slidesPerView: 2,
      spaceBetween:10,
    autoplay: {
        delay: 2000,
    }

});