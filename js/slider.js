/***********
 * A script to handle the slider of the site. 
 */


var animationSpeed = 1000;
  var pause = 5000;
  var timeoutId;
  var slideIndex = 0;
  var first = true;
$(document).ready( function (){ 
    
    var slides = $('.slide');
    for(i = 0; i < slides.length; i++){ ///INIT DOTS FOR NAV OF SLIDER
      var newDot = document.createElement("div");
      $(newDot).addClass("aDot");
      $(newDot).attr("id", "dot"+i);
      $('.dots').append(newDot);
    }
   
  
    carousel();
    
    $('#indexBanner').hover(function(e){
      e.stopPropagation();
       clearTimeout(timeoutId);
    }, function(e){
      e.stopPropagation();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(carousel, pause); 
    });

    $('.aDot').click(function(e){
      e.stopPropagation();
      clearTimeout(timeoutId);
      slideIndex = $(this).prop('id').substring(3);
      carousel();
    });


});

function toggleCarousell(i){

      if (i == -1){
        if((slideIndex -2) < 0)
           slideIndex = $('.slide').length-1;
        else
          slideIndex  -= 2
      }
      clearTimeout(timeoutId);
      carousel();
   
    
}

function hoverFunctions(){
  if($('#indexBanner:hover').length != 0){
    clearTimeout(timeoutId);
  }else {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(carousel, pause); 
    console.log("out");
  };
}
 
 async function carousel() {
  var i =0;
  var x = $('.slide');
  var dots = $('.aDot');
  
  const myFirstPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() =>{
      resolve(()=>{
        if(slideIndex == 0)
          $('.slide [0]').addClass('outOfPrev');
      });
    }, 500)
  })
  myFirstPromise.then(()=>{
    addPrevNextCurrent(x, dots);
  });
  
  $('.prev').addClass('outOfPrev');

  
    mySetTimeout();
    hoverFunctions();
}
function addPrevNextCurrent(x, dots){
  for (i = 0; i < x.length; i++) { //removes classes and visibility
    $(x[i]).addClass('notVisible').removeClass('visible').removeClass('prev').removeClass('next').removeClass('currentIndex').removeClass('outOfPrev');
    $(dots[i]).removeClass('currentDot');
  }

  if(slideIndex == 0){ //if we're at first image last img is to be the previous image
    $(x[x.length-1]).addClass('prev').removeClass('notVisible');
  }
  
  slideIndex++; // increase slideindex
  
  if( (slideIndex-2) < 0){ //if slideindex == 1 prev becomes slideindex -1 if not slideindex += -2
    $(x[slideIndex]-1).addClass('prev').removeClass('notVisible'); 
  }else{
    $(x[slideIndex-2]).addClass('prev').removeClass('notVisible'); 
  }

  if(slideIndex == x.length)//makes first image be next image
    $(x[0]).addClass('next').addClass('visible').removeClass('notVisible');

  if( slideIndex < x.length){
    $(x[slideIndex]).addClass('next').removeClass('notVisible'); 
  }

  if (slideIndex > x.length) {
    slideIndex = 1
    $(x[slideIndex]).addClass('next').removeClass('notVisible');
  } 
  $(x[slideIndex-1]).addClass('visible currentIndex');
  
  $(dots[slideIndex-1]).addClass('currentDot');
  $(x[slideIndex-1]).removeClass('notVisible');

}
function mySetTimeout(){
    timeoutId = setTimeout(carousel, pause); 
}
 
