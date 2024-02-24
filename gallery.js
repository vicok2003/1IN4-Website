document.addEventListener("DOMContentLoaded", function() {
    const bigImage = document.getElementById("bigImage");
    const miniBoxImages = document.querySelectorAll(".mini-box img");
  
    const firstImageSrc = miniBoxImages[0].getAttribute("src");

  bigImage.setAttribute("src", firstImageSrc);

  miniBoxImages.forEach(function(image) {
    image.addEventListener("click", function() {
      const src = this.getAttribute("src");
      bigImage.setAttribute("src", src);
    });
  });
});