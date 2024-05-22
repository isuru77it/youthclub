const images = document.querySelectorAll('#movingImages .image-container img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Function to move images
const moveImages = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
};

// Function to update images and dots
const updateImages = () => {
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.left = '0';
            dots[index].classList.add('active');
        } else {
            image.style.left = '-100%';
            dots[index].classList.remove('active');
        }
    });
};

// Interval to move images every 3 seconds
setInterval(moveImages, 300);

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateImages();
    });
});
