const x = document.querySelector('.burger-icon') ;
const navItems = document.querySelector('nav .navigation .nav-items');
const upBtn = document.querySelector("#up-btn");
const navBar = document.querySelector('.navigation-bar');



x.onclick =  function() {
    navItems.classList.toggle('drop-down-is-showing');
}


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

upBtn.onclick =_=>{
    window.scrollTo(0,0);
}