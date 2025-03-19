let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightbox-image");
let currentIndex = 0;

// Preload Images
function preloadImages() {
    images.forEach((img) => {
        const imgElement = new Image();
        imgElement.src = img.src;
    });
}

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    preloadImages(); // Preload images when opening the lightbox
    lightbox.style.display = "flex";
    updateLightbox();
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Change Image (Next/Prev)
function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    updateLightbox();
}

// Update Lightbox Image
function updateLightbox() {
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.classList.add('fade-in'); // Add fade-in effect
    setTimeout(() => {
        lightboxImage.classList.remove('fade-in');
    }, 500); // Duration of the fade effect
}

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "Escape") closeLightbox();
    }
});

// Filter Gallery
function filterGallery(category) {
    let items = document.querySelectorAll(".gallery-item");
    let buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="filterGallery('${category}')"]`).classList.add("active");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Toggle Fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        lightbox.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Download Image
function downloadImage() {
    let link = document.createElement("a");
    link.href = lightboxImage.src;
    link.download = "gallery_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
