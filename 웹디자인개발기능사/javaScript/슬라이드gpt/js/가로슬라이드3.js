document.addEventListener("DOMContentLoaded", () => {
    const slide = document.getElementById('slide');
    const imgs = document.querySelectorAll('.slide img');
    const imgWidth = 1200;
    const total = imgs.length;

    // 슬라이드를 복제해서 무한 루프처럼 보이게 하기
    imgs.forEach(img => {
        const clone = img.cloneNode(true);
        slide.appendChild(clone);
    });

    let index = 0;

    setInterval(() => {
        index++;
        slide.style.transition = 'left 1s ease';
        slide.style.left = `-${index * imgWidth}px`;

        // 마지막 이미지까지 이동한 후 초기화
        if (index === total) {
            // 애니메이션이 끝나는 1초 후에 리셋
            setTimeout(() => {
                slide.style.transition = 'none'; // 순간 이동
                slide.style.left = '0px';
                index = 0;
            }, 1000);
        }
    }, 3000); // 3초마다 이동
});
