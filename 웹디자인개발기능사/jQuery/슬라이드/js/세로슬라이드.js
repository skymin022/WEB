// 문서 준비 이벤트
$(function() {
    const speed = 500   // 넘어가는 시간
    const time = 3000   // 전체 넘어가는데 소요되는 시간 
    const $slide = $('.slide')
    const $container = $('.slide-container')
    const size = $slide.height()    
    const count = $slide.length    
    $container.height(size * count)  

    setInterval(function() {
        $container.animate({
            top: -size 
        }, speed, function() {
            $container.css('top', '0')
            $container.append( $('.slide').first())
        })
    }, time)

})