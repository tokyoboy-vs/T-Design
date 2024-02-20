let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    index = (index + totalItems) % totalItems;
    const transformValue = -index * 100 + '%';
    carouselInner.style.transform = `translateX(${transformValue})`;
    currentIndex = index;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function autoSlide() {
    intervalId = setInterval(() => {
        nextSlide();
    }, 10000); // 10sec
}