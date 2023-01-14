/****
 * A script to handle the modal of the slider.
 */

const modalText= ["<p>This package contain a website with four pages.</p><p> We'll design and program four unique pages with a modern design.</p>", "We'll conjoure a beautifull website with many features. included websliders and our own photographer, for product photography", ] 


$(document).ready(() =>{
    $('.buy-btn').click((e)=>{
        var box = $(e.target).parent().parent().parent(".box");
        var modal = $('.modal');    
        var blurWrapper = $('.blurWrapper');

        blurWrapper.addClass('blurActive');

        modal.addClass('modalActive');

        modal.children('.modalImg').children('img').attr('src', box.children('.slide-img').children().prop('src'));
        modal.children('.content').children('.modalTitle').text( box.children('.detail-box').children('.type').children('a').html());
        modal.children('.content').children('.modalMainContent').children('.modalText').html(modalText[0]);
        
       
        $('.exitModal').click(()=>{
           closeModal(modal, blurWrapper);
        });
    });
});


function closeModal(modal, blurWrapper){
    blurWrapper.removeClass('blurActive');
    modal.removeClass('modalActive');
}