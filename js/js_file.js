$('.slider .slider__content').bxSlider({
    mode: 'fade',
    nextText: '&rsaquo;',
    prevText: '&lsaquo;',
    pager: false,
    touchEnabled: false,
    onSliderLoad: function() {
        $(this).parent('.bx-viewport').after('<div class="pager"><span class="curr-item">'+viewOfNumber(this.getCurrentSlide()+1)+'</span>'+viewOfNumber(this.getSlideCount())+'</div>');
        
        $(this).parents('.slider').css('visibility', 'visible');
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex) {
        $(this).parent('.bx-viewport').next('.pager').find('.curr-item').text(viewOfNumber(newIndex+1));
    }
});

function viewOfNumber(n) {
    return (n < 10 ? "0" : "") + n;
}