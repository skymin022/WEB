// 문서 준비 이벤트
$(function() {
    const speed = 500   // 넘어가는 시간
    const time = 3000   // 전체 넘어가는데 소요되는 시간 
    const $slide = $('.slide')
    const $container = $('.slide-container')
    const size = $slide.width()     //1200
    const count = $slide.length     // 3
    $container.width(size * count)  //1200 * 3 = 3600

    setInterval(function() {
        $container.animate({
            left: -size // -1200
        }, speed, function() {
            $container.css('left', '0')
            $container.append( $('.slide').first())
        })
    }, time)

})