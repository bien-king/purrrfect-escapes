/* var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

window.onload=function(){
    showSlides();
    } */



    $(window).scroll(function() {
      if ($(window).scrollTop() > 75) {
          $('.container-nav').css('background-color', 'rgba(249, 235, 226, .9)');
      }
      else {
          $('.container-nav').css('background-color', 'rgba(249, 235, 226, 0.01)');
      }
  });
  
  $(document).ready(function(){
      $('.container-nav').live("mouseover", function () {
              $(this).css("opacity", 1);
              });
  
      $('.container-nav').live("mouseleave", function () {
          if($(window).scrollTop() > 75) { // this here
              $(this).css("opacity", 1);
          }
      });
  
  })
  