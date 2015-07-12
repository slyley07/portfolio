$(document).ready(function(){
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $('.scroller').fadeOut(100);
    }

    if (y > 600) {
      $('#langs').fadeIn(1000);
    } else {
      $('#langs').fadeOut(100);
    }

    if (y > 1200) {
      $('#frames').fadeIn(1000);
    } else {
      $('#frames').fadeOut(100);
    }
  });

  $()
})
