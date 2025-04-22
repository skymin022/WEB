// 문서 준비 이벤트
$(function() {
    const speed = 500
    const time = 3000
    const slides = $('.slide img')
    let index = 0
    const size = 1200

    setInterval( function() {
        index = (index + 1) % 3
        slides.each(function(i, slide) {
            $(slide).css('transform', `translateX( calc(${size}px * -${index}) )`)
        });
    }, time)
})