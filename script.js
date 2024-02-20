document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    var totalItems = document.querySelectorAll('.carousel-item').length;
    var carousel = document.querySelector('.carousel');
    var itemsToShowDesktop = 3;

    function changePosition() {
        var itemsToShow = getWindowWidth() < 768 ? 1 : itemsToShowDesktop;
        currentIndex = Math.max(0, Math.min(currentIndex, totalItems - itemsToShow));
        var newPosition = -currentIndex * (100 / itemsToShow);
        carousel.style.transform = 'translateX(' + newPosition + 'vw)';
    }

    function moveRight() {
        var itemsToShow = getWindowWidth() < 768 ? 1 : itemsToShowDesktop;
        if (currentIndex < totalItems - itemsToShow) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        changePosition();
    }

    function moveLeft() {
        var itemsToShow = getWindowWidth() < 768 ? 1 : itemsToShowDesktop;
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - itemsToShow;
        }
        changePosition();
    }

    document.querySelector('.carousel-btn-prev').addEventListener('click', moveLeft);
    document.querySelector('.carousel-btn-next').addEventListener('click', moveRight);

    // Vuelve a calcular la posición cuando la ventana cambia de tamaño
    window.addEventListener('resize', function () {
        currentIndex = currentIndex % totalItems; // Ajuste al cambiar el tamaño de la ventana
        changePosition();
    });

    // Inicializa la posición al cargar la página
    changePosition();
});

function getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
