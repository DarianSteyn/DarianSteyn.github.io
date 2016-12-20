//Take to top of page on page reload
$(document).ready(function() {
   $(window).scrollTop(0);
});

//Loading Screen
setTimeout(function()
    {
        // Test Code
        $('body').css('overflow', 'visible');
        $(".se-pre-con").fadeOut("slow"); // Waits 5 seconds, then alerts 
    }, 2000);
    
//    $(window).load(function() {
//		// Animate loader off screen
//		$(".se-pre-con").fadeOut("slow");;
//	}); ***This is to activate on page load 

//Expand menu

$("#vertical-menu h3").click(function () {
  
    if (!$(this).next().is(":visible")) {
        
        $(this).next().slideDown();
        $('.plus').html('+');
        $('.plus',this).html('-');
        
    } else {
        
        $("#vertical-menu ul ul").slideUp();
        $('.plus',this).html('+');
    }
});

$(document).ready(function(){

        $("#vertical-menu ul ul").slideUp();
        $('.plus',this).html('+');    
    
});

//Scroll smoothly when clicking on links

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
