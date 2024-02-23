var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//navmobile
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

//sidebar on scroll
const sidenav = document.querySelector('.sidenav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    sidenav.classList.add('scrolled');
  } else {
    sidenav.classList.remove('scrolled');
  }
});

//swiper.js
// Initialize Swiper
var swiper = new swiper('.swiper-container', {
  direction: 'vertical',
            loop: true,
            autoplay: {
                delay: 5000,
            },
});
