function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  var z = 10; // variable for z-index

  $(".popup").hide();
  $('a').click(function(e) {
    e.preventDefault();

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var classname = $(this).attr('class');

    $('.popup.' + classname).toggle().css({
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
});
