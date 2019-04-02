(function ($) {
"use strict";
	// preloader
	$(window).on('load', function(){
		$('.preloader').delay(300).fadeOut(500);
	});	
	
	// mobile-menu-active
    $('#mobile-menu').meanmenu({
			meanMenuContainer: 'header',
			meanScreenWidth: "767"
	});

$(".toggle-menu").click(function(){

$(".side-nav").toggleClass("active");

});

// scrollIt for nav to content scroll

$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});


// scrollup bottom arrow
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// bar
$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('#bar5').barfiller();
$('#bar6').barfiller();
$('#bar7').barfiller();
$('#bar8').barfiller();

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});



// scrollIt for nav to content scroll

$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});

// counter 
$('.counter').counterUp({
	delay: 10,
	time: 10000
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
/* magnificPopup img view */
$('.profile-pop').magnificPopup({
  type: 'image',
	gallery: {
	  enabled: true
	}
});
/* magnificPopup img view */
$('.work-image').magnificPopup({
  type: 'image',
	gallery: {
	  enabled: true
	}
});

// paralax
$('.paralax,.counter-area,.contact-area,.works-area').parallaxie({
  size : 'cover',
  speed: 0.5
});

// Typed js for typing
var typed3 = new Typed('.typed', {
	strings: ['frontend web developer','creative web designer'],
	typeSpeed: 60,
	backSpeed: 30,
	loop: true
});
})(jQuery);	