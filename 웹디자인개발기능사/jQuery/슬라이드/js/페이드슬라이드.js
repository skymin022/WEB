// 문서 준비 이벤트
$(function() {
    let index = 0 
    const speed = 1000   // 넘어가는 시간
    const time = 3000   // 전체 넘어가는데 소요되는 시간 
    const $slide = $('.slide')
    const count = $slide.length    
    $slide.not(":first").hide()     // 2,3 숨김

    setInterval(function() {
        index = (index+1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    },time)



})