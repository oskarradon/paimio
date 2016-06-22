function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  var z = 10; // variable for z-index

  $('a').click(function(e) {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var classname = $(this).attr('class');

    $('.popup.' + classname).show().css({
      'opacity' : 1,
      'z-index' : z,
      'left' : randomNumber(1, (windowWidth - 300)) + 'px',
      'top' : randomNumber(1, (windowHeight - 700)) + 'px'
    });
    z += 1;
  });

  // hide div w class === x link class
  
  $('.x').click(function() {
    var classname = $(this).attr('class').split(' ')[1];
    $('.popup.' + classname).hide();
  });

  // make divs draggable
  // code by Taufik Nurrohman

  $.fn.drags = function(opt) {
    opt = $.extend({
      handle: "",
      cursor: "move",
      draggableClass: "draggable",
      activeHandleClass: "active-handle"
    }, opt);
    var $selected = null;
    var $elements = (opt.handle === "") ? this : this.find(opt.handle);
    $elements.css('cursor', opt.cursor).on("mousedown", function(e) {
      if(opt.handle === "") {
        $selected = $(this);
        $selected.addClass(opt.draggableClass);
        $selected.css({ 'z-index' : z})
        z += 1;
      } else {
        $selected = $(this).parent();
        $selected.addClass(opt.draggableClass).find(opt.handle).addClass(opt.activeHandleClass);
      }
      var drg_h = $selected.outerHeight(),
        drg_w = $selected.outerWidth(),
        pos_y = $selected.offset().top + drg_h - e.pageY,
        pos_x = $selected.offset().left + drg_w - e.pageX;
      $(document).on("mousemove", function(e) {
        $selected.offset({
          top: e.pageY + pos_y - drg_h,
          left: e.pageX + pos_x - drg_w
        });
      }).on("mouseup", function() {
        $(this).off("mousemove"); // Unbind events from document
        if ($selected !== null) {
          $selected.removeClass(opt.draggableClass);
          $selected = null;
        }
      });
      e.preventDefault(); // disable selection
    }).on("mouseup", function() {
      if(opt.handle === "") {
        $selected.removeClass(opt.draggableClass);
      } else {
        $selected.removeClass(opt.draggableClass)
          .find(opt.handle).removeClass(opt.activeHandleClass);
      }
      $selected = null;
    });
    return this;
  };

  $('.popup').drags();
});
