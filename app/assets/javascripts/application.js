// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/*
========= Animate scroll to div =========
*/
function scrollToDiv(){
  $('#nav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 40
    }, 500);
    return false;
  });
}

/*
========= Changing Theme Color Color =========
*/
function themeColor(){
  var colors = ['#EDB0B1', '#F8DCB6', '#D9EDB0', '#B0EDB0', '#B0EDD7', '#B0DAED', '#B0B1ED', '#D4B0ED', '#EDB0E1'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  $('.hero').css('background-color', random_color);
  $('.logo').css('text-shadow', '2px 2px' + random_color);
  $('.activeNav').css('border-bottom', '5px solid' + random_color);
  $('.overlay').css('background-color', random_color);
  if ($(window).width() <= 479){
    $('.header').css('border-bottom', '2px solid' + random_color);
  }
  $('.activeTab').css('border-bottom', '5px solid' + random_color);
};

$(window).scroll(function() {
  var currentScroll = $(window).scrollTop();

  if (currentScroll >= 500) {
    if (!$('.job-board').hasClass('hidden')) {
      $('.job-board').css('transform', 'translateY(0)');
    }
  } else {
    $('.job-board').css('transform', 'translateY(8rem)');
  }
});

var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}
