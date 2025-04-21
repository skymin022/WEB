// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {
    // 이미지 3장
    const slides = document.querySelector('#slide')
    const img = document.querySelectorAll('.slide img')
    let count = img.length
    let index = 0
    const size = 1200

    // 이미지 슬라이드 복제
    const clone1 = img[index].cloneNode(true)
    const clone2 = img[index + 1].cloneNode(true)
    const clone3 = img[index + 2].cloneNode(true)
    const list = [clone1, clone2, clone3]

    // 다 비우고 1번, 2번 이미지넣기
    slides.innerHTML = ''
    slides.appendChild(list[index])
    slides.appendChild(list[index + 1])

    // 애니메이션slideImg
    function animate(size) {
        for (let i = 0; i < list.length; i++) {
            const slideImg = list[i];
            slideImg.style.transform = `translateX(${size}px)`
        }
    }

    // 슬라이드
    function slide() { 
        // 사이즈 만큼 슬라이드
        animate(-size)
        // index 계싼
        index = (index + 1 ) % count
        next = (index + 1 ) % count
        // 다음 슬라이드로 전환
        setTimeout(() => {
            slides.innerHTML = ''
            animate(0)
            slides.appendChild(list[index])
            slides.appendChild(list[next])
        }, 1000)
    }
    // 3초마다 슬라이드
    setInterval(slide, 3000)




})
