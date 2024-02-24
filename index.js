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

//js animation
// ScrollReveal({
    //  reset: true,
//      distance: "80px",
//      duration: 1000,
//      delay: 200
//     });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.empower p, .empower h2', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
// ScrollReveal().reveal('.social-media', { origin: 'right' });
// ScrollReveal().reveal('.btn', { origin: 'bottom' });

