$(function() {
    $('.prev_img').slick({
        slide: 'li',
        slidesToShow: 2,
        speed: 500,
        prevArrow : $('.pre'), 
        nextArrow : $('.next'),
        dots : true,
        dotsClass : "dotS",
        variableWidth: true,
        draggable: false
    })
    $('.poster').slick({
        slide: 'li',
        slidesToShow: 2,
        speed: 500,
        prevArrow : $('.pre1'), 
        nextArrow : $('.next1'),
        dots : false,
        variableWidth: true,
        draggable: false
    })
    $('.cha_box').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        prevArrow : $('.pre3'), 
        nextArrow : $('.next3'),
        dots : true,
        dotsClass : "dotS1",
        variableWidth: true,
        draggable: false
    })
    $('.pos_box').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        prevArrow : $('.pre4'), 
        nextArrow : $('.next4'),
        dots : true,
        dotsClass : "dotS1",
        variableWidth: true,
        draggable: false
    })

    $('.character_set > li').hover(function(){
        let i = $(this).index();
        $('.character_set > li').removeClass('on');
        $('.character_set > li').eq(i-1).addClass('on');
        $(this).stop().animate({width: '576px'}, 500);},
        function() {
            $(this).stop().animate({width: '176px'}, 500);
            $('.character_set > li').removeClass('on');
        });

    $('.character_set > li').hover(function(){
        $('.character_set').stop().animate({width: '1400px'}, 500);},
        function() {
            $('.character_set').stop().animate({width: '1000px'}, 500);
    });

    $('.plus').on('click', function() {
        if($('nav > ul').is(':visible') == false) {
            $('.plus').css('transform', 'rotate(45deg');
            // $('nav').css('background', '#000');
        } else {
            $('.plus').css('transform', 'rotate(0deg');
            // $('nav').css('background', 'none');
        }
        $('nav > ul').slideToggle(300);
    })
    
})








/*
1. $().is(':visible')

jquery element의 hide 여부 판단하기 .is(':visible');
특정 element의 display 속성이 none 인지 아닌지

판단할때 아래와 같이 사용하면 쉽다.
$().is(':visible');
display: none 일때는 false를 반환한다. 

2. slideUp() 메서드 - 선택한 요소를 위쪽으로 서서히 사라지게 합니다.
3. slideDown() 메서드 - 선택한 요소를 아래쪽으로 서서히 나타나게 합니다. 

evt.preventDefault(); a 태그 기능 정지 => location.href = 링크주소
*/