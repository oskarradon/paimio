$(function() {
  $(".popup").hide();
  $('a').click(function(e) {
    e.preventDefault();
    var classname = $(this).attr('class');
    $('.popup.' + classname).show();
  });

  // hide div w class === x link class
  $('.x').click(function(e) {
    e.preventDefault();
    var classes = $(this).attr('class');
    var classname = classes.split(' ')[1];
    $('.popup.' + classname).hide();
  });

});
