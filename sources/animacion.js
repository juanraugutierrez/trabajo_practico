var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

var interval = setInterval(function(){ 
    $('img-animated').addClass('animated bounce').one(animationEnd, function() {
      $(this).removeClass ('animated bounce');
    });
}, 1000);

$('start-button').click(function() {
  clearInterval(interval);
    $(this).addClass('animated bounceOutUp').one(animationEnd, function() {
        $('.title').show();
        $('.title').addClass('animated fadeIn').one(animationEnd, function() {
          $('.img-animated').addClass('animated flip').one(animationEnd, function() {
            $('.content').addClass('animated rubberBand');            
          });
      });
    });
});