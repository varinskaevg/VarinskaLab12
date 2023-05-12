$(document).ready(function (){
    $('.slider').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
    });
    $('.slider1').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
    });
})
$('.lArrow').on('click', function() {
    $('.slider').slick('slickPrev');
});
$('.rArrow').on('click', function() {
    $('.slider').slick('slickNext');
});
$('.lArrow1').on('click', function() {
    $('.slider1').slick('slickPrev');
});
$('.rArrow1').on('click', function() {
    $('.slider1').slick('slickNext');
});
