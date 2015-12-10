// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
}
}());

// Place any jQuery/helper plugins in here.
jQuery(function($) {
  // back to top
  $("#sns-totop").hide();
  $(function() {
    var wh = $(window).height();
    var whtml = $(document).height();
    $(window).scroll(function() {
      if ($(this).scrollTop() > whtml / 10) {
        $('#sns-totop').fadeIn();
      } else {
        $('#sns-totop').fadeOut();
      }
    });
    $('#sns-totop').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  // end back to top
});


jQuery(document).ready(function($) {
  $('#menu_collapse').SnsAccordion({
    btn_open: '<i class="fa fa-caret-down"></i>',
    btn_close: '<i class="fa fa-caret-up"></i>',
    accordion: false,
    expand: false
  });
  if ($('#sns_right').length) {
    $('#sns_mommenu').addClass('has-right');
    $('#sns_mommenu .btn.rightsidebar').css('display', 'inline-block').on('click', function() {
      if ($('#sns_right').hasClass('active')) {
        $(this).find('.overlay').fadeOut(250);
        $('#sns_right').removeClass('active');
      } else {
        $('#sns_right').addClass('active');
        $(this).find('.overlay').fadeIn(250);
      }
    });
  }
  if ($('#sns_left').length) {
    $('#sns_mommenu').addClass('has-left');
    $('#sns_mommenu .btn.leftsidebar').css('display', 'inline-block').on('click', function() {
      if ($('#sns_left').hasClass('active')) {
        $(this).find('.overlay').fadeOut(250);
        $('#sns_left').removeClass('active');
      } else {
        $('#sns_left').addClass('active');
        $(this).find('.overlay').fadeIn();
      }
    });
  }
});
