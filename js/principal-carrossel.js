document.addEventListener('DOMContentLoaded', function () {
    const carrosselImages = document.querySelector('.carrossel-images');
    let slideIndex = 0;
    let direcao = 1;

    function proximoSlide() {
        slideIndex = (slideIndex + direcao) % carrosselImages.children.length;
        if (slideIndex < 0) {
            slideIndex = carrosselImages.children.length - 1;
        }
        atualizarSlide();
    }

    function atualizarSlide() {
        const translateValue = -slideIndex * 100 + '%';
        carrosselImages.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(proximoSlide, 5000);
});
