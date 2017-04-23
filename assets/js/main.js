$(function(){

  // smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

  //flickity

  //alert box behaviour
  $('#signup-form').on('submit', function(event) {
    event.preventDefault();
    if ($('#signup-input').val() === '') {
        alert('Please enter a valid email address')
        } else {
        alert('Thanks for subscribing!')
        }
  });


})