$(function() {
  $(".popup").hide();
  $('a').click(function(e) {
    e.preventDefault();
    $('.popup').show();
  })

  // // show div with class === link class
  // $('a').click(function(e){
  //   e.preventDefault();
  // var classname = $(this).attr('class');
  //   $('.popup.' + classname).css({ transition: '1s ease-in-out', opacity: 1 });
  // });
  //
  // // hide div w class === x link class
  // $('.x').click(function(e) {
  //   e.preventDefault();
  //   var classes = $(this).attr('class');
  //   var classname = classes.split(' ')[1];
  //   $('.popup.' + classname).css({ transition: '1s ease-in-out', opacity: 0 });
  // });

});
