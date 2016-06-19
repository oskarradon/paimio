function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  var z = 10; // variable for z-index

  // $(".popup").hide();
  $('a').click(function(e) {
    e.preventDefault();

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var classname = $(this).attr('class');

    $('.popup.' + classname).show().css({
      'opacity' : 1,
      'z-index' : z,
      'left' : randomNumber(1, (windowWidth - 300)) + 'px',
      'top' : randomNumber(1, (windowHeight - 500)) + 'px'
    });
    z += 1;
  });

  // hide div w class === x link class
  $('.x').click(function(e) {
    e.preventDefault();
    var classes = $(this).attr('class');
    var classname = classes.split(' ')[1];
    $('.popup.' + classname).hide();
  });

  // make divs draggable

  function endMove() {
    $(this).removeClass('movable');
}
  function startMove() {
    $('.movable').on('mousemove', function(event) {
        var thisX = event.pageX - $(this).width() / 2,
            thisY = event.pageY - $(this).height() / 2;

        $('.movable').offset({
            left: thisX,
            top: thisY
        });
    });
  }

  $(".popup").on('mousedown', function() {
      $(this).addClass('movable');
      startMove();
  }).on('mouseup', function() {
      $(this).removeClass('movable');
      endMove();
  });



});
