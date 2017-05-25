
// NAVBAR  SCROLLSPY

$(window).scroll(function () {
    if ($ (document).scrollTop() > 300){
        $('nav').addClass('Scrolled-nav')
    }
    else{
        $('nav').removeClass('Scrolled-nav')
    }

});
 // admin info flip
$(document).ready(function(){
    //  the hover to be triggered when the element is tapped on a touch device
    $('.hover').hover(function(){
        $(this).addClass('flip');
    },function(){
        $(this).removeClass('flip');
    });
});
// nav-active
// $('#home .item').eq(randSlide).addClass('active');
#Bernabeu.com
#Bernabeu.com
