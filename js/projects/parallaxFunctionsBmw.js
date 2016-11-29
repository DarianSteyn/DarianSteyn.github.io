//Header Parallax

$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    $('.projectType').css({
        
        'transform' : 'translate(0px, '+ wScroll /4 + '%)'
        
    });
    
    $('.effect').css({
        
        'transform' : 'translate(0px, '+ wScroll /5 + '%)'
        
    });
    
    fadeIn($('.macMock'));
    
});

function fadeIn(object){
    
    //Mac Mockup Animation
    
    var wScroll = $(this).scrollTop();
    
    var objectPos = object.offset().top;

    if(wScroll > (objectPos * 0.5)) {
            object.addClass('is-showing');
    }

    else {
        $('.is-showing').removeClass('is-showing');
    }

}