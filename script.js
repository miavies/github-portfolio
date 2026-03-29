let slideIndex = [1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2","mySlides3", "mySlides4", "mySlides5", "mySlides6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] + n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);

  if (n > x.length) { n = 1; }
  if (n < 1) { n = x.length; }

  slideIndex[no] = n; // ✅ update ONLY here

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  x[n - 1].style.display = "block";  
}


  