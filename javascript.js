
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
  