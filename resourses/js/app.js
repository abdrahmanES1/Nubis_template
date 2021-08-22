const x = document.querySelector('.burger-icon') ;
const navItems = document.querySelector('nav .navigation .nav-items');
const upBtn = document.querySelector("#up-btn");
const navBar = document.querySelector('.navigation-bar');
// aos animation init
AOS.init();
//  EMail.js init
(function () { 
    emailjs.init("user_O7s1MPbunOASaEAKRJ0ac");
})();

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





const btn = document.getElementById('submit-btn');

document.getElementById('contact-us').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = 'Sending...';

   const serviceID = 'service_oszazoi';
   const templateID = 'template_tkfvm8n';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Submit';
      alert('Sent!');
    }, (err) => {
      btn.innerText = 'Submit';
      alert(JSON.stringify(err));
    });
});


