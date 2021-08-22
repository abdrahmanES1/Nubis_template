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


(function () { 
    emailjs.init("user_O7s1MPbunOASaEAKRJ0ac");
})();


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

// let main = document.querySelector('main');

// function loadHtmlPage(url) {
//      return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest();

//         request.onreadystatechange = function() {
//             if(this.readyState === 4 && this.status ===200){
//                resolve(this.responseText) ;
//             }
//             else{
//                 reject(this.statusText);
//             }
//         }

//         request.open(
//             "GET",
//             url,
//             true
//          );
//         request.send();

//     })
// };

// let ArticleDetailsBtn = document.querySelector('#Article-Details'),
//     TermsConditionsBtn = document.querySelector('#Terms-Conditions'),
//     PrivacyPolicyBtn = document.querySelector("#Privacy-Policy");

// console.log(ArticleDetailsBtn);


// ArticleDetailsBtn.onclick = loadHtmlPage('/resourses/html/article-details.html')
// .then(value=> main.innerHTML = value)
// .catch(err=>console.log(err))