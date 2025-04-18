// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {
    // 이미지 3장
    const slides = document.querySelectorAll('.slide img')
    let index = 0
    const size = 1200

    // function slide() { 
    //     index = (index + 1) %3
    //     for (let i = 0; i < slides.length; i++) {
    //         const slide = slides[i];
    //         slide.style.transform = `translateX( calc(${size}px * -${index} ) )`

    //         // 요소 노드 생성
    //         const img = document.createElement('img')
    //         // 요소 속성 노드
    //         const src = document.createAttribute('src')

    //         // src 값
    //         src.value = `img/${i+1}.jpg`

    //         // 속성 추가 
    //         img.setAttributeNode(src)

    //     }
    // }


// 요소 노드 생성
const img = document.createElement('img')
// 요소 속성 노드
const src = document.createAttribute('src')

// src 값
src.value = `img/${i+1}.jpg`

// 속성 추가 
img.setAttributeNode(src)

// 자식 요소 추가
const div = document.getElementById('slide0')
div.appendChild(img)


    setInterval( slide, 3000)



})
