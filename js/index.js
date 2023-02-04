const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})



  var image = document.getElementById("portfolio__img");
  image.addEventListener("mouseover", function() {
    image.style.zIndex = 1;
  });
  image.addEventListener("mouseout", function() {
    image.style.zIndex = 0;
  });