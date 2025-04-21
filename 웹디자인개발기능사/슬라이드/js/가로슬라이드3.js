// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {

    const contanier = document.querySelector('#container')
    let index = 0
    const size = 1200

    function animate() { 
        index = (index + 1) %3
        for (let i = 0; i < 3; i++) {
            contanier.style.transform = `translateX( calc(${size}px * -${index} ) )`
        }
    }
    setInterval(animate, 3000)

})
