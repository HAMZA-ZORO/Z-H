let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showSlide(currentIndex);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

let currentIndexes = [0, 0]; // Array to track current image index for each carousel

function changeImage(direction, carouselIndex) {
    const carousel = document.getElementById(`carousel-${carouselIndex}`);
    const images = carousel.getElementsByTagName('img');
    currentIndexes[carouselIndex] = (currentIndexes[carouselIndex] + direction + images.length) % images.length;

    // Remove active class from all images
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }

    // Set the new active image
    images[currentIndexes[carouselIndex]].classList.add('active');
}
// Initialize the first slide
showSlide(currentIndex);
