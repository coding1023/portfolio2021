const navLinks= document.querySelectorAll('nav-link');


//ADD ACTIVE CLASS TO NAV LINK ON CLICK
document.addEventListener('click', (e)=> {

if (!e.target.classList.contains('nav-link')) {
   e.target.classList.add('active');

} else if (e.target.classList.contains('github') ) {
   e.target.href= "https://github.com/claudiosapia";
}

for (let i=0; i<navLinks.length; i++){
    if (navLinks[i]=== e.target) continue;
  navLinks[i].classList.remove('active');
  
}
}, );


// CHANGE LINK OPEN NEW PAGE
function changeLink(navLinks) {

    window.open(
      navLinks.href,
      '_blank'
    );

    navLinks.innerHTML = "facebook";

    return false;
}
// CHANGE LINK OPEN NEW PAGE END


/////////////////////////////////////////////////////////
// const bg1= document.querySelector('.introbg');
// const h3= document.querySelectorAll('h3');

// function dayNight() {
//    var element = document.body;
//    bg1.style.backgroundColor ="white";
  
   
//   }

  

$( document ).ready(function() {
   $("#dayNight, #dayNight2").click(function(){
   

          $('h1, h2, h3, h4, .lead, .coverL, #proj,#projects-title, #skills-projects, .nav-link, .cont').toggleClass('light-mode-txt');

 $('.introbg,.introbg2').toggleClass('light-mode');
$('.progress').toggleClass('light-bar')
 $(' .footer').toggleClass('light-mode');

$('.i-hover, .about-footer, .emph, .night-toggle ').toggleClass('light-mode-txt');



   })




});