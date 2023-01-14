/****
 * 
 * Script to handle the menu of the site. 
 */


$(document).ready(() =>{
    var windowSize = $(window).width();
    $('.menuBtnWrapper').click(()=>{
             $(".menu").slideToggle().css({'display':'flex'});
            $(".menuBtn").toggleClass('change');
            
    });
    $(window).resize(()=>{
        windowSize = $(window).width();
        if(windowSize > 1024){
            $('.menu').css('display', 'flex');
        }else{
            $('.menu').css('display', 'none');
            $(".menuBtn").removeClass('change');
        }
    });
});