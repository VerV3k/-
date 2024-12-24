let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides; // Циклическая навигация
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-currentSlide * 606}px)`; // Сдвиг слайдера
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

let autoSlideInterval;

function startAutoSlide() {
    if (autoSlideInterval) return; // Если уже запущен
    autoSlideInterval = setInterval(nextSlide, 3000); // Автоматическая перемотка каждые 3 секунды
}

// Остановка автоматической перемотки при ручной навигации
document.querySelector('.left-arrow').addEventListener('click', () => clearInterval(autoSlideInterval));
document.querySelector('.right-arrow').addEventListener('click', () => clearInterval(autoSlideInterval));
