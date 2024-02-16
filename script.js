document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    var totalItems = document.querySelectorAll('.carousel-item').length;
    var carousel = document.querySelector('.carousel');

    function changePosition() {
        var newPosition = -currentIndex * 100;
        carousel.style.transform = 'translateX(' + newPosition + 'vw)';
    }

    document.querySelector('.carousel-btn-prev').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        changePosition();
    });

    document.querySelector('.carousel-btn-next').addEventListener('click', function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        changePosition();
    });
});
