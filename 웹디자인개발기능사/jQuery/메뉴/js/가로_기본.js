// 문서 준비 이벤트
$(function() { 
    const mainMenu = $('.main-menu > .menu-item')

    // 방법 1
    // mainMenu.on('mouseover', function() { 
    //     $(this).find('.submenu').stop().slideDown()
    // })

    // mainMenu.on('mouseout', function() { 
    //     $(this).find('.submenu').stop().slideUp()
    // })

    // 방법 2
    mainMenu.hover( 
        function() { 
            $(this).find('.submenu').stop().slideDown()
        },
        function() { 
            $(this).find('.submenu').stop().slideUp()
        }
    )


})