let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"];

// Initialize all slideshows properly
window.onload = function () {
  let containers = document.getElementsByClassName("slideshow-container");

  for (let no = 0; no < containers.length; no++) {
    let slides = containers[no].getElementsByClassName(slideId[no]);

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Show first slide
    if (slides.length > 0) {
      slides[0].style.display = "block";
      slideIndex[no] = 1;
    }
  }
};

// Next / Previous buttons
function plusSlides(n, no, btn) {
  let container = btn.parentElement;
  let slides = container.getElementsByClassName(slideId[no]);

  slideIndex[no] += n;

  if (slideIndex[no] > slides.length) slideIndex[no] = 1;
  if (slideIndex[no] < 1) slideIndex[no] = slides.length;

  // Hide all slides in THIS container only
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show current slide
  slides[slideIndex[no] - 1].style.display = "block";
}