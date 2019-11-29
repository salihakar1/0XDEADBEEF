$('.like').mouseenter( (e) => {
    $(e.target).removeClass('fa-heart-o');
    $(e.target).addClass('fa-heart');
    $(e.target).css('color', 'red');
});

$('.like').mouseleave( (e) => {
    $(e.target).removeClass('fa-heart');
    $(e.target).addClass('fa-heart-o');
    $(e.target).css('color', 'black');
});