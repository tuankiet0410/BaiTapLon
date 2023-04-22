var slides = document.querySelectorAll('.slider .slide');
var currentSlide = 0;

function showSlide(n) {
    if (n < 0) {
        n = slides.length - 1;
    } else if (n >= slides.length) {
        n = 0;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[n].classList.add('active');
    currentSlide = n;
}

document.getElementById('prev').addEventListener('click', function () {
    showSlide(currentSlide - 1);
});

document.getElementById('next').addEventListener('click', function () {
    showSlide(currentSlide + 1);
});

showSlide(0);
